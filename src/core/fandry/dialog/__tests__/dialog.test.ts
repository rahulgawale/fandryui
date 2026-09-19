import { createElement } from 'lwc';
import FdDialog from '../dialog';

const flush = () => Promise.resolve();

describe('fandry-dialog', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
    document.body.style.overflow = '';
  });

  it('does not render the panel when closed', () => {
    const element = createElement('fandry-dialog', { is: FdDialog });
    document.body.appendChild(element);

    expect(element.shadowRoot!.querySelector('.panel')).toBeNull();
  });

  it('renders dialog semantics on the panel when open', () => {
    const element = createElement('fandry-dialog', { is: FdDialog });
    element.label = 'Delete item';
    element.open = true;
    document.body.appendChild(element);

    const panel = element.shadowRoot!.querySelector('.panel')!;
    expect(panel.getAttribute('role')).toBe('dialog');
    expect(panel.getAttribute('aria-modal')).toBe('true');
    expect(panel.getAttribute('aria-label')).toBe('Delete item');
  });

  it('closes and dispatches a "toggle" event on Escape', () => {
    const element = createElement('fandry-dialog', { is: FdDialog });
    element.open = true;
    document.body.appendChild(element);

    const handler = jest.fn();
    element.addEventListener('toggle', handler);

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));

    expect(element.open).toBe(false);
    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].detail).toBe(false);
  });

  it('closes when the backdrop is clicked', () => {
    const element = createElement('fandry-dialog', { is: FdDialog });
    element.open = true;
    document.body.appendChild(element);

    const backdrop = element.shadowRoot!.querySelector('.backdrop')!;
    backdrop.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(element.open).toBe(false);
  });

  it('does not close when the panel itself is clicked', () => {
    const element = createElement('fandry-dialog', { is: FdDialog });
    element.open = true;
    document.body.appendChild(element);

    const panel = element.shadowRoot!.querySelector('.panel')!;
    panel.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(element.open).toBe(true);
  });

  it('locks body scroll while open and restores it on close', () => {
    const element = createElement('fandry-dialog', { is: FdDialog });
    document.body.appendChild(element);

    expect(document.body.style.overflow).toBe('');

    element.open = true;
    expect(document.body.style.overflow).toBe('hidden');

    element.open = false;
    expect(document.body.style.overflow).toBe('');
  });

  it('moves focus to the panel when opened', async () => {
    const focusSpy = jest.spyOn(HTMLElement.prototype, 'focus');

    const element = createElement('fandry-dialog', { is: FdDialog });
    document.body.appendChild(element);

    element.open = true;
    await flush();

    const panel = element.shadowRoot!.querySelector('.panel')!;
    expect(focusSpy.mock.instances).toContain(panel);

    focusSpy.mockRestore();
  });

  it('returns focus to the previously focused element on close', () => {
    // Asserting on document.activeElement directly is unreliable here --
    // see fandry-popover's own Escape test for why. Spying on the shared
    // HTMLElement.prototype.focus proves the component called focus() on
    // the actual trigger button.
    const trigger = document.createElement('button');
    document.body.appendChild(trigger);

    const activeElementSpy = jest.spyOn(document, 'activeElement', 'get').mockReturnValue(trigger);
    const focusSpy = jest.spyOn(HTMLElement.prototype, 'focus');

    const element = createElement('fandry-dialog', { is: FdDialog });
    document.body.appendChild(element);

    element.open = true;
    element.open = false;

    expect(focusSpy.mock.instances).toContain(trigger);

    activeElementSpy.mockRestore();
    focusSpy.mockRestore();
  });

  it('does not intercept Tab (no generic cross-shadow focus trap -- see dialog.ts)', () => {
    const element = createElement('fandry-dialog', { is: FdDialog });
    element.open = true;
    document.body.appendChild(element);

    const event = new KeyboardEvent('keydown', { key: 'Tab', bubbles: true, cancelable: true });
    document.dispatchEvent(event);

    expect(event.defaultPrevented).toBe(false);
    expect(element.open).toBe(true);
  });
});
