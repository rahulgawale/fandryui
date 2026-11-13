import { createElement } from 'lwc';
import SwipeHarness from './swipeHarness';

const flush = async () => {
  await Promise.resolve();
  await Promise.resolve();
  await Promise.resolve();
};

const WIDTH = 100;

async function setup(props: Record<string, unknown> = {}) {
  // jsdom has no layout: give each action side a width.
  const spy = jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({ width: WIDTH } as DOMRect);
  const harness = createElement('swipe-harness', { is: SwipeHarness });
  Object.assign(harness, props);
  document.body.appendChild(harness);
  await flush();
  const swipe = harness.shadowRoot!.querySelector('fandry-swipe') as HTMLElement & { open: string };
  const root = swipe.shadowRoot!;
  const content = root.querySelector('.content') as HTMLElement;
  const drag = async (from: number, to: number) => {
    const init = { pointerId: 1, pointerType: 'touch', bubbles: true, composed: true } as PointerEventInit;
    // jsdom has no PointerEvent: a MouseEvent carries the same fields.
    const make = (type: string, x: number) => Object.assign(new MouseEvent(type, { ...init, clientX: x, button: 0 }), { pointerId: 1, pointerType: 'touch' });
    content.dispatchEvent(make('pointerdown', from));
    content.dispatchEvent(make('pointermove', to));
    content.dispatchEvent(make('pointerup', to));
    await flush();
  };
  return { harness, swipe, root, content, drag, spy };
}

describe('fandry-swipe', () => {
  afterEach(() => {
    jest.restoreAllMocks();
    while (document.body.firstChild) document.body.removeChild(document.body.firstChild);
  });

  it('starts closed with both action sides hidden', async () => {
    const { root, content } = await setup();
    expect(content.getAttribute('style')).toContain('0px');
    expect(root.querySelector('.actions--start')!.classList.contains('actions--closed')).toBe(true);
    expect(root.querySelector('.actions--end')!.classList.contains('actions--closed')).toBe(true);
  });

  it('opens the start side when dragged past the threshold, and reports it', async () => {
    const { harness, swipe, root, content, drag } = await setup();
    await drag(0, 60);
    expect(swipe.open).toBe('start');
    expect(content.getAttribute('style')).toContain('100px');
    expect(root.querySelector('.actions--start')!.classList.contains('actions--closed')).toBe(false);
    expect((harness as unknown as { changed: string[] }).changed).toEqual(['start']);
  });

  it('opens the end side when dragged the other way', async () => {
    const { swipe, content, drag } = await setup();
    await drag(200, 120);
    expect(swipe.open).toBe('end');
    expect(content.getAttribute('style')).toContain('-100px');
  });

  it('stays closed when the drag is short', async () => {
    const { harness, swipe, drag } = await setup();
    await drag(0, 20);
    expect(swipe.open).toBe('');
    expect((harness as unknown as { changed: string[] }).changed).toEqual([]);
  });

  it('does not drag past the width of the actions', async () => {
    const { content, root, drag } = await setup();
    const make = (type: string, x: number) =>
      Object.assign(new MouseEvent(type, { clientX: x, button: 0, bubbles: true }), { pointerId: 1, pointerType: 'touch' });
    content.dispatchEvent(make('pointerdown', 0));
    content.dispatchEvent(make('pointermove', 500));
    await flush();
    expect(content.getAttribute('style')).toContain('100px');
    expect(root.querySelector('.content')!.getAttribute('part')).toContain('dragging');
    void drag;
  });

  it('opens from the open prop and from reveal(), and closes with close()', async () => {
    const { swipe, content } = await setup({ open: 'end' });
    expect(content.getAttribute('style')).toContain('-100px');
    (swipe as unknown as { close(): void }).close();
    await flush();
    expect(swipe.open).toBe('');
    (swipe as unknown as { reveal(s: string): void }).reveal('start');
    await flush();
    expect(swipe.open).toBe('start');
  });

  it('closes on Escape', async () => {
    const { swipe, root } = await setup({ open: 'start' });
    root.querySelector('.swipe')!.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    await flush();
    expect(swipe.open).toBe('');
  });

  it('closes when the open content is tapped, without a click reaching the page', async () => {
    const { swipe, content } = await setup({ open: 'start' });
    const onClick = jest.fn();
    swipe.addEventListener('click', onClick);
    content.dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }));
    await flush();
    expect(swipe.open).toBe('');
    expect(onClick).not.toHaveBeenCalled();
  });

  it('exposes the open side as a state on base', async () => {
    const { root, drag } = await setup();
    await drag(0, 60);
    expect(root.querySelector('.swipe')!.getAttribute('part')).toBe('base start');
  });

  it('opens the end side from a click on the end-trigger, and a second click closes it', async () => {
    const { swipe, harness } = await setup();
    const more = harness.shadowRoot!.querySelector('.more') as HTMLElement;
    more.click();
    await flush();
    expect(swipe.open).toBe('end');
    more.click();
    await flush();
    expect(swipe.open).toBe('');
  });
});
