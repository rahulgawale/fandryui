import { createElement } from 'lwc';
import FdMenuItem from '../menuItem';

describe('fd-menu-item', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders with role="menuitem" and a focusable tabIndex by default', () => {
    const element = createElement('fd-menu-item', { is: FdMenuItem });
    element.label = 'Edit';
    document.body.appendChild(element);

    const item = element.shadowRoot!.querySelector('.item')!;
    expect(item.getAttribute('role')).toBe('menuitem');
    expect((item as HTMLElement).tabIndex).toBe(0);
    expect(item.textContent).toBe('Edit');
  });

  it('reflects disabled via aria-disabled and a disabled class', () => {
    const element = createElement('fd-menu-item', { is: FdMenuItem });
    element.disabled = true;
    document.body.appendChild(element);

    const item = element.shadowRoot!.querySelector('.item')!;
    expect(item.getAttribute('aria-disabled')).toBe('true');
    expect(item.classList.contains('item--disabled')).toBe(true);
  });

  it('dispatches a bubbling "select" event with its value on click', () => {
    const element = createElement('fd-menu-item', { is: FdMenuItem });
    element.value = 'edit';
    document.body.appendChild(element);

    const handler = jest.fn();
    element.addEventListener('select', handler);

    const item = element.shadowRoot!.querySelector('.item') as HTMLElement;
    item.click();

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].detail).toEqual({ value: 'edit' });
    expect(handler.mock.calls[0][0].bubbles).toBe(true);
    expect(handler.mock.calls[0][0].composed).toBe(false);
  });

  it('does not dispatch "select" on click when disabled', () => {
    const element = createElement('fd-menu-item', { is: FdMenuItem });
    element.value = 'edit';
    element.disabled = true;
    document.body.appendChild(element);

    const handler = jest.fn();
    element.addEventListener('select', handler);

    const item = element.shadowRoot!.querySelector('.item') as HTMLElement;
    item.click();

    expect(handler).not.toHaveBeenCalled();
  });

  it('dispatches "select" on Enter and Space keydown', () => {
    const element = createElement('fd-menu-item', { is: FdMenuItem });
    element.value = 'duplicate';
    document.body.appendChild(element);

    const handler = jest.fn();
    element.addEventListener('select', handler);

    const item = element.shadowRoot!.querySelector('.item') as HTMLElement;
    item.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    item.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', bubbles: true }));

    expect(handler).toHaveBeenCalledTimes(2);
  });

  it('lets a consumer override elementProps (e.g. tabIndex) via lwc:spread', () => {
    const element = createElement('fd-menu-item', { is: FdMenuItem });
    element.elementProps = { tabIndex: -1 };
    document.body.appendChild(element);

    const item = element.shadowRoot!.querySelector('.item')!;
    expect((item as HTMLElement).tabIndex).toBe(-1);
  });

  it('exposes an @api focus() that focuses the internal element', () => {
    const element = createElement('fd-menu-item', { is: FdMenuItem });
    document.body.appendChild(element);

    const focusSpy = jest.spyOn(HTMLElement.prototype, 'focus');
    (element as unknown as { focus(): void }).focus();

    const item = element.shadowRoot!.querySelector('.item') as HTMLElement;
    expect(focusSpy.mock.instances).toContain(item);
    focusSpy.mockRestore();
  });

  it('does not let elementProps clobber role, and warns once about it', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const element = createElement('fd-menu-item', { is: FdMenuItem });
    element.elementProps = { role: 'button', tabIndex: -1 };
    document.body.appendChild(element);

    const item = element.shadowRoot!.querySelector('.item')!;
    expect(item.getAttribute('role')).toBe('menuitem');
    expect((item as HTMLElement).tabIndex).toBe(-1);
    expect(warnSpy).toHaveBeenCalledTimes(1);
    warnSpy.mockRestore();
  });
});
