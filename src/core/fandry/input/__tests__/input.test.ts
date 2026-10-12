import { createElement } from 'lwc';
import FdInput from '../input';

describe('fandry-input', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  /* The label has to be in the same shadow root as the input: a `for` can't
     reach an id across a shadow boundary, and the field then has no name
     and its label doesn't focus it. */
  it('labels the native input from its own template', () => {
    const element = createElement('fandry-input', { is: FdInput });
    element.label = 'Email';
    element.required = true;
    document.body.appendChild(element);

    const label = element.shadowRoot!.querySelector('label')!;
    const nativeInput = element.shadowRoot!.querySelector('input')!;
    expect(label.textContent).toContain('Email');
    expect(label.getAttribute('for')).toBe(nativeInput.id);
    expect(nativeInput.labels).toContain(label);
    expect(label.querySelector('.required')!.getAttribute('aria-hidden')).toBe('true');
  });

  it('describes the input with its help text only while there is some', async () => {
    const element = createElement('fandry-input', { is: FdInput });
    document.body.appendChild(element);

    const nativeInput = element.shadowRoot!.querySelector('input')!;
    expect(nativeInput.hasAttribute('aria-describedby')).toBe(false);

    element.helpText = 'Work address';
    await Promise.resolve();
    expect(nativeInput.getAttribute('aria-describedby')).toBe(element.shadowRoot!.querySelector('.help-text')!.id);
  });

  it('shows an empty field for a null or undefined value', async () => {
    const element = createElement('fandry-input', { is: FdInput });
    element.value = undefined;
    document.body.appendChild(element);

    const nativeInput = element.shadowRoot!.querySelector('input')!;
    expect(nativeInput.value).toBe('');

    element.value = null;
    await Promise.resolve();
    expect(nativeInput.value).toBe('');
  });

  // It stays in the DOM, hidden, so a slotted label can still fill it.
  it('hides the label when none is provided', () => {
    const element = createElement('fandry-input', { is: FdInput });
    document.body.appendChild(element);

    const label = element.shadowRoot!.querySelector('label')!;
    expect(label.hasAttribute('hidden')).toBe(true);
  });

  it('dispatches a semantic "input" event carrying the new value', () => {
    const element = createElement('fandry-input', { is: FdInput });
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
    const element = createElement('fandry-input', { is: FdInput });
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
    const element = createElement('fandry-input', { is: FdInput });
    element.disabled = true;
    element.required = true;
    document.body.appendChild(element);

    const nativeInput = element.shadowRoot!.querySelector('input')!;
    expect(nativeInput.disabled).toBe(true);
    expect(nativeInput.required).toBe(true);
  });

  it('renders with the default "md" size class', () => {
    const element = createElement('fandry-input', { is: FdInput });
    document.body.appendChild(element);

    const control = element.shadowRoot!.querySelector('.control')!;
    expect(control.className).toBe('control control--md');
  });

  it('applies the requested size class', () => {
    const element = createElement('fandry-input', { is: FdInput });
    element.size = 'lg';
    document.body.appendChild(element);

    const control = element.shadowRoot!.querySelector('.control')!;
    expect(control.className).toBe('control control--lg');
  });

  it('spreads arbitrary IDL properties (e.g. autocomplete) via elementProps', () => {
    const element = createElement('fandry-input', { is: FdInput });
    element.elementProps = { autocomplete: 'email' };
    document.body.appendChild(element);

    const nativeInput = element.shadowRoot!.querySelector('input')! as HTMLInputElement;
    expect(nativeInput.autocomplete).toBe('email');
  });

  it('does not let elementProps clobber a library-controlled prop, and warns once about it', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const element = createElement('fandry-input', { is: FdInput });
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
