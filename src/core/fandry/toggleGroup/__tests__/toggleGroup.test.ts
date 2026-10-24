import { createElement } from 'lwc';
import ToggleGroupHarness from './toggleGroupHarness';

const flush = async () => {
  await Promise.resolve();
  await Promise.resolve();
};

async function setup(props: Record<string, unknown> = {}) {
  const harness = createElement('toggle-group-harness', { is: ToggleGroupHarness });
  Object.assign(harness, props);
  document.body.appendChild(harness);
  await flush();
  const items = Array.from(harness.shadowRoot!.querySelectorAll('fandry-toggle-button')) as HTMLElement[];
  const button = (i: number) => items[i].shadowRoot!.querySelector('.toggle') as HTMLButtonElement;
  const click = async (i: number) => {
    button(i).click();
    await flush();
  };
  const keydown = (i: number, key: string) =>
    button(i).dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true, composed: true, cancelable: true }));
  return { harness, items, button, click, keydown };
}

describe('fandry-toggle-group', () => {
  afterEach(() => {
    while (document.body.firstChild) document.body.removeChild(document.body.firstChild);
  });

  it('renders a group named by aria-label', async () => {
    const { harness } = await setup();
    const group = harness.shadowRoot!.querySelector('fandry-toggle-group')!;
    const base = group.shadowRoot!.querySelector('[role="group"]')!;
    expect(base.getAttribute('aria-label')).toBe('Format');
  });

  it('presses the items listed in value', async () => {
    const { button } = await setup({ value: ['underline'] });
    expect([0, 1, 2].map((i) => button(i).getAttribute('aria-pressed'))).toEqual(['false', 'false', 'true']);
  });

  it('accepts a lone string as value', async () => {
    const { button } = await setup({ value: 'bold' });
    expect(button(0).getAttribute('aria-pressed')).toBe('true');
  });

  it('presses one item and releases the others without multiple', async () => {
    const { harness, button, click } = await setup({ value: ['bold'] });
    await click(2);
    expect(button(0).getAttribute('aria-pressed')).toBe('false');
    expect(button(2).getAttribute('aria-pressed')).toBe('true');
    expect((harness as any).changed).toEqual([['underline']]);
  });

  it('releases the pressed item when it is pressed again', async () => {
    const { harness, button, click } = await setup({ value: ['bold'] });
    await click(0);
    expect(button(0).getAttribute('aria-pressed')).toBe('false');
    expect((harness as any).changed).toEqual([[]]);
  });

  it('keeps several items pressed with multiple', async () => {
    const { harness, button, click } = await setup({ multiple: true, value: ['bold'] });
    await click(2);
    expect(button(0).getAttribute('aria-pressed')).toBe('true');
    expect(button(2).getAttribute('aria-pressed')).toBe('true');
    expect((harness as any).changed).toEqual([['bold', 'underline']]);
  });

  it('ignores a disabled item', async () => {
    const { harness, button, click } = await setup();
    await click(1);
    expect(button(1).getAttribute('aria-pressed')).toBe('false');
    expect((harness as any).changed).toEqual([]);
  });

  it('makes only the pressed item a Tab stop, else the first enabled one', async () => {
    const pressed = await setup({ value: ['underline'] });
    expect([0, 1, 2].map((i) => pressed.button(i).tabIndex)).toEqual([-1, -1, 0]);
    document.body.innerHTML = '';
    const none = await setup();
    expect([0, 1, 2].map((i) => none.button(i).tabIndex)).toEqual([0, -1, -1]);
  });

  it('moves focus with the arrows, skipping disabled items, without pressing', async () => {
    const { harness, button, keydown } = await setup();
    const focus = jest.spyOn(HTMLElement.prototype, 'focus');
    keydown(0, 'ArrowRight');
    await flush();
    expect(button(2).tabIndex).toBe(0);
    expect(button(0).tabIndex).toBe(-1);
    expect(button(2).getAttribute('aria-pressed')).toBe('false');
    expect((harness as any).changed).toEqual([]);
    keydown(2, 'ArrowRight');
    await flush();
    expect(button(0).tabIndex).toBe(0);
    keydown(0, 'End');
    await flush();
    expect(button(2).tabIndex).toBe(0);
    keydown(2, 'Home');
    await flush();
    expect(button(0).tabIndex).toBe(0);
    focus.mockRestore();
  });

  it('adds pressed and disabled to the item part', async () => {
    const { button } = await setup({ value: ['bold'] });
    expect(button(0).getAttribute('part')).toBe('base pressed');
    expect(button(1).getAttribute('part')).toBe('base disabled');
  });
});
