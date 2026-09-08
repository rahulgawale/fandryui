import { createElement } from 'lwc';
import FdInput from '../input';

describe('fd-input', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders a child fd-label when a label is provided', () => {
    const element = createElement('fd-input', { is: FdInput });
    element.label = 'Email';
    document.body.appendChild(element);

    const label = element.shadowRoot!.querySelector('fd-label');
    expect(label).not.toBeNull();
  });

  it('omits the label when none is provided', () => {
    const element = createElement('fd-input', { is: FdInput });
    document.body.appendChild(element);

    const label = element.shadowRoot!.querySelector('fd-label');
    expect(label).toBeNull();
  });

  it('dispatches a semantic "input" event carrying the new value', () => {
    const element = createElement('fd-input', { is: FdInput });
    document.body.appendChild(element);

    const handler = jest.fn();
    element.addEventListener('input', handler);

    const nativeInput = element.shadowRoot!.querySelector('input')!;
    nativeInput.value = 'hello@fandry.dev';
    nativeInput.dispatchEvent(new Event('input'));

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].detail).toBe('hello@fandry.dev');
  });

  it('dispatches a semantic "change" event carrying the new value', () => {
    const element = createElement('fd-input', { is: FdInput });
    document.body.appendChild(element);

    const handler = jest.fn();
    element.addEventListener('change', handler);

    const nativeInput = element.shadowRoot!.querySelector('input')!;
    nativeInput.value = 'hello@fandry.dev';
    nativeInput.dispatchEvent(new Event('change'));

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].detail).toBe('hello@fandry.dev');
  });

  it('reflects disabled and required onto the native input', () => {
    const element = createElement('fd-input', { is: FdInput });
    element.disabled = true;
    element.required = true;
    document.body.appendChild(element);

    const nativeInput = element.shadowRoot!.querySelector('input')!;
    expect(nativeInput.disabled).toBe(true);
    expect(nativeInput.required).toBe(true);
  });

  it('renders with the default "md" size class', () => {
    const element = createElement('fd-input', { is: FdInput });
    document.body.appendChild(element);

    const control = element.shadowRoot!.querySelector('.control')!;
    expect(control.className).toBe('control control--md');
  });

  it('applies the requested size class', () => {
    const element = createElement('fd-input', { is: FdInput });
    element.size = 'lg';
    document.body.appendChild(element);

    const control = element.shadowRoot!.querySelector('.control')!;
    expect(control.className).toBe('control control--lg');
  });

  it('spreads arbitrary IDL properties (e.g. autocomplete) via elementProps', () => {
    const element = createElement('fd-input', { is: FdInput });
    element.elementProps = { autocomplete: 'email' };
    document.body.appendChild(element);

    const nativeInput = element.shadowRoot!.querySelector('input')! as HTMLInputElement;
    expect(nativeInput.autocomplete).toBe('email');
  });

  it('does not let elementProps clobber a library-controlled prop, and warns once about it', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const element = createElement('fd-input', { is: FdInput });
    element.value = 'hello@fandry.dev';
    element.elementProps = { value: 'hijacked', disabled: true };
    document.body.appendChild(element);

    const nativeInput = element.shadowRoot!.querySelector('input')! as HTMLInputElement;
    expect(nativeInput.value).toBe('hello@fandry.dev');
    expect(nativeInput.disabled).toBe(false);
    expect(warnSpy).toHaveBeenCalledTimes(1);
    warnSpy.mockRestore();
  });
});
