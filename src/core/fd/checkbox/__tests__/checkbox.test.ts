import { createElement } from 'lwc';
import FdCheckbox from '../checkbox';

const flush = () => Promise.resolve();

describe('fd-checkbox', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('reflects ariaLabel onto the native input', () => {
    const element = createElement('fd-checkbox', { is: FdCheckbox });
    element.ariaLabel = 'Select row';
    document.body.appendChild(element);

    const input = element.shadowRoot!.querySelector('input')!;
    expect(input.getAttribute('aria-label')).toBe('Select row');
  });

  it('syncs indeterminate onto the native input on first paint', () => {
    const element = createElement('fd-checkbox', { is: FdCheckbox });
    element.indeterminate = true;
    document.body.appendChild(element);

    const input = element.shadowRoot!.querySelector('input')!;
    expect(input.indeterminate).toBe(true);
    expect(input.getAttribute('aria-checked')).toBe('mixed');
  });

  it('re-syncs indeterminate onto the native input after a later update', async () => {
    // Regression check: `indeterminate` has no template binding of its own,
    // so LWC's dependency tracking won't re-invoke renderedCallback for it
    // unless something template-bound (aria-checked, here) reads it too --
    // without that, this only worked on first paint, never on updates.
    const element = createElement('fd-checkbox', { is: FdCheckbox });
    document.body.appendChild(element);

    let input = element.shadowRoot!.querySelector('input')!;
    expect(input.indeterminate).toBe(false);

    element.indeterminate = true;
    await flush();

    input = element.shadowRoot!.querySelector('input')!;
    expect(input.indeterminate).toBe(true);
  });

  it('dispatches a semantic "change" event carrying the new checked state', () => {
    const element = createElement('fd-checkbox', { is: FdCheckbox });
    document.body.appendChild(element);

    const handler = jest.fn();
    element.addEventListener('change', handler);

    const input = element.shadowRoot!.querySelector('input')! as HTMLInputElement;
    input.checked = true;
    input.dispatchEvent(new Event('change'));

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].detail).toBe(true);
  });

  it('defaults tabIndex to 0 on the native input (Safari tab-order fix)', () => {
    const element = createElement('fd-checkbox', { is: FdCheckbox });
    document.body.appendChild(element);

    const input = element.shadowRoot!.querySelector('input')! as HTMLInputElement;
    expect(input.tabIndex).toBe(0);
  });

  it('lets a consumer override elementProps (e.g. tabIndex) via lwc:spread', () => {
    const element = createElement('fd-checkbox', { is: FdCheckbox });
    element.elementProps = { tabIndex: -1 };
    document.body.appendChild(element);

    const input = element.shadowRoot!.querySelector('input')! as HTMLInputElement;
    expect(input.tabIndex).toBe(-1);
  });

  it('does not let elementProps clobber a library-controlled prop, and warns once about it', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const element = createElement('fd-checkbox', { is: FdCheckbox });
    element.checked = true;
    element.elementProps = { checked: false, disabled: true, tabIndex: -1 };
    document.body.appendChild(element);

    const input = element.shadowRoot!.querySelector('input')! as HTMLInputElement;
    expect(input.checked).toBe(true);
    expect(input.disabled).toBe(false);
    expect(input.tabIndex).toBe(-1);
    expect(warnSpy).toHaveBeenCalledTimes(1);
    expect(warnSpy.mock.calls[0][0]).toContain('checked');
    warnSpy.mockRestore();
  });

  it('spreads arbitrary IDL properties (e.g. title) onto the native input', () => {
    const element = createElement('fd-checkbox', { is: FdCheckbox });
    element.elementProps = { title: 'Accept the terms' };
    document.body.appendChild(element);

    const input = element.shadowRoot!.querySelector('input')! as HTMLInputElement;
    expect(input.title).toBe('Accept the terms');
  });
});
