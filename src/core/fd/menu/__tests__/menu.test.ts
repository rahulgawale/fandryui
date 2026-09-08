import { createElement } from 'lwc';
import MenuHarness from './menuHarness';
import MenuStandaloneHarness from './menuStandaloneHarness';

const flush = () => Promise.resolve();

describe('fd-menu', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders role="menu" with a vertical orientation', async () => {
    const harness = createElement('menu-standalone-harness', { is: MenuStandaloneHarness });
    document.body.appendChild(harness);
    await flush();

    const menu = harness.shadowRoot!.querySelector('fd-menu')!;
    const menuEl = menu.shadowRoot!.querySelector('.menu')!;
    expect(menuEl.getAttribute('role')).toBe('menu');
    expect(menuEl.getAttribute('aria-orientation')).toBe('vertical');
  });

  it('gives the first enabled item tabIndex 0 and every other item -1 by default', async () => {
    const harness = createElement('menu-standalone-harness', { is: MenuStandaloneHarness });
    document.body.appendChild(harness);
    await flush();

    const items = Array.from(harness.shadowRoot!.querySelectorAll('fd-menu-item')) as HTMLElement[];
    const tabIndexes = items
      .map((item) => item.shadowRoot!.querySelector('.item') as HTMLElement)
      .map((el) => el.tabIndex);

    expect(tabIndexes).toEqual([0, -1, -1]);
  });

  it('moves focus and roving tabindex to the next enabled item on ArrowDown, skipping disabled', async () => {
    const harness = createElement('menu-standalone-harness', { is: MenuStandaloneHarness });
    document.body.appendChild(harness);
    await flush();

    const focusSpy = jest.spyOn(HTMLElement.prototype, 'focus');
    const items = Array.from(harness.shadowRoot!.querySelectorAll('fd-menu-item')) as HTMLElement[];
    const first = items[0].shadowRoot!.querySelector('.item') as HTMLElement;
    const second = items[1].shadowRoot!.querySelector('.item') as HTMLElement;

    first.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true, composed: true }));
    await flush();

    expect(focusSpy.mock.instances).toContain(second);
    expect(first.tabIndex).toBe(-1);
    expect(second.tabIndex).toBe(0);

    focusSpy.mockRestore();
  });

  it('wraps to the last enabled item on ArrowUp from the first item (skipping the disabled third)', async () => {
    const harness = createElement('menu-standalone-harness', { is: MenuStandaloneHarness });
    document.body.appendChild(harness);
    await flush();

    const focusSpy = jest.spyOn(HTMLElement.prototype, 'focus');
    const items = Array.from(harness.shadowRoot!.querySelectorAll('fd-menu-item')) as HTMLElement[];
    const first = items[0].shadowRoot!.querySelector('.item') as HTMLElement;
    const second = items[1].shadowRoot!.querySelector('.item') as HTMLElement;

    first.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true, composed: true }));
    await flush();

    expect(focusSpy.mock.instances).toContain(second);

    focusSpy.mockRestore();
  });

  it('jumps to the first/last enabled item on Home/End', async () => {
    const harness = createElement('menu-standalone-harness', { is: MenuStandaloneHarness });
    document.body.appendChild(harness);
    await flush();

    const focusSpy = jest.spyOn(HTMLElement.prototype, 'focus');
    const items = Array.from(harness.shadowRoot!.querySelectorAll('fd-menu-item')) as HTMLElement[];
    const first = items[0].shadowRoot!.querySelector('.item') as HTMLElement;
    const second = items[1].shadowRoot!.querySelector('.item') as HTMLElement;

    // Third item is disabled, so the last *enabled* item is still "second".
    second.dispatchEvent(new KeyboardEvent('keydown', { key: 'End', bubbles: true, composed: true }));
    await flush();
    expect(focusSpy.mock.instances).toContain(second);

    first.dispatchEvent(new KeyboardEvent('keydown', { key: 'Home', bubbles: true, composed: true }));
    await flush();
    expect(focusSpy.mock.instances).toContain(first);

    focusSpy.mockRestore();
  });

  it('lets a consumer catch a bubbled "select" from an fd-menu-item via onselect on <fd-menu>', async () => {
    const harness = createElement('menu-standalone-harness', { is: MenuStandaloneHarness });
    document.body.appendChild(harness);
    await flush();

    const menu = harness.shadowRoot!.querySelector('fd-menu')!;
    const handler = jest.fn();
    menu.addEventListener('select', handler);

    const firstItem = harness.shadowRoot!.querySelector('fd-menu-item')!;
    const firstItemEl = firstItem.shadowRoot!.querySelector('.item') as HTMLElement;
    firstItemEl.click();

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].detail).toEqual({ value: 'one' });
  });

  it('does not dispatch "select" when a disabled item is clicked', async () => {
    const harness = createElement('menu-standalone-harness', { is: MenuStandaloneHarness });
    document.body.appendChild(harness);
    await flush();

    const menu = harness.shadowRoot!.querySelector('fd-menu')!;
    const handler = jest.fn();
    menu.addEventListener('select', handler);

    const items = harness.shadowRoot!.querySelectorAll('fd-menu-item');
    const disabledItemEl = items[2].shadowRoot!.querySelector('.item') as HTMLElement;
    disabledItemEl.click();

    expect(handler).not.toHaveBeenCalled();
  });

  it('composes with fd-popover: an item selection still bubbles all the way out to the popover host', async () => {
    const harness = createElement('menu-harness', { is: MenuHarness });
    harness.open = true;
    document.body.appendChild(harness);
    await flush();

    const popover = harness.shadowRoot!.querySelector('fd-popover')!;
    const handler = jest.fn();
    popover.addEventListener('select', handler);

    const editItem = harness.shadowRoot!.querySelectorAll('fd-menu-item')[0];
    const editItemEl = editItem.shadowRoot!.querySelector('.item') as HTMLElement;
    editItemEl.click();

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].detail).toEqual({ value: 'edit' });
  });
});
