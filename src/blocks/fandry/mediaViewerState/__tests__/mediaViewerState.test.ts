import { createElement } from 'lwc';
import CustomViewerHarness from './customViewerHarness';

const ITEMS = [
  { id: 'a', src: '/a.jpg', alt: 'A lake' },
  { id: 'b', src: '/b.jpg', alt: 'A road' },
  { id: 'c', src: '/c.jpg', alt: 'A peak' }
];

const settle = async () => {
  for (let i = 0; i < 4; i++) await Promise.resolve();
};

type Host = HTMLElement & Record<string, any>;

function mount(props: Record<string, unknown> = {}): Host {
  const element = createElement('custom-viewer-harness', { is: CustomViewerHarness });
  Object.assign(element, { items: ITEMS, open: true, ...props });
  document.body.appendChild(element);
  return element as Host;
}

const root = (el: Element) => el.shadowRoot!;
const stageOf = (viewer: Host) => root(viewer).querySelector('.stage') as HTMLElement;
const key = (viewer: Host, name: string) =>
  root(viewer).querySelector('.viewer')!.dispatchEvent(new KeyboardEvent('keydown', { key: name, bubbles: true, cancelable: true }));

// jsdom has no PointerEvent: a MouseEvent with the pointer fields added.
function pointer(target: Element, type: string, props: { clientX: number; time?: number }) {
  const event = new MouseEvent(type, { bubbles: true, clientX: props.clientX, clientY: 0 });
  Object.defineProperty(event, 'pointerId', { value: 1 });
  Object.defineProperty(event, 'pointerType', { value: 'touch' });
  Object.defineProperty(event, 'timeStamp', { value: Number(props.time ?? 0) });
  target.dispatchEvent(event);
}

afterEach(() => {
  while (document.body.firstChild) document.body.removeChild(document.body.firstChild);
});

describe('FdMediaViewerState', () => {
  it('drives markup of its own: the current item and its neighbours, by position', async () => {
    const viewer = mount({ index: 1 });
    await settle();
    expect(root(viewer).querySelector('.position')!.textContent).toBe('2 of 3');
    expect((root(viewer).querySelector('img.current') as HTMLImageElement).getAttribute('src')).toBe('/b.jpg');
    expect(root(viewer).querySelector('img.previous')).not.toBeNull();
    expect(root(viewer).querySelector('img.next')).not.toBeNull();
  });

  it('moves with its handlers and the keyboard, and reports change', async () => {
    const viewer = mount();
    const changes: number[] = [];
    viewer.addEventListener('change', (event) => changes.push((event as CustomEvent).detail.index));
    await settle();
    (root(viewer).querySelector('button.next') as HTMLButtonElement).click();
    key(viewer, 'End');
    await settle();
    expect(changes).toEqual([1, 2]);
    expect(viewer.index).toBe(2);
  });

  it('swipes on the stage marked lwc:ref="stage"', async () => {
    const viewer = mount();
    await settle();
    const stage = stageOf(viewer);
    stage.getBoundingClientRect = () => ({ width: 400, height: 300, left: 0, top: 0 }) as DOMRect;
    pointer(stage, 'pointerdown', { clientX: 300, time: 0 });
    pointer(stage, 'pointermove', { clientX: 100 });
    pointer(stage, 'pointerup', { clientX: 100, time: 100 });
    await settle();
    expect(viewer.index).toBe(1);
  });

  it('zooms the current picture with +, through its slide\'s mediaStyle', async () => {
    const viewer = mount();
    await settle();
    stageOf(viewer).getBoundingClientRect = () => ({ width: 400, height: 300, left: 0, top: 0 }) as DOMRect;
    key(viewer, '+');
    await settle();
    expect((root(viewer).querySelector('img.current') as HTMLElement).getAttribute('style')).toContain('scale: 1.5');
    key(viewer, '0');
    await settle();
    expect((root(viewer).querySelector('img.current') as HTMLElement).getAttribute('style')).toBeNull();
  });

  it('close() reports toggle once', async () => {
    const viewer = mount();
    const toggles: boolean[] = [];
    viewer.addEventListener('toggle', (event) => toggles.push((event as unknown as CustomEvent).detail));
    await settle();
    viewer.close();
    viewer.close();
    expect(toggles).toEqual([false]);
    expect(viewer.open).toBe(false);
  });
});
