import { createElement } from 'lwc';
import FdInput from '../../input/input';
import FdTextarea from '../../textarea/textarea';
import FdCheckbox from '../../checkbox/checkbox';
import FdSwitch from '../../switch/switch';
import { failedRule, validationText } from '../validation';

describe('validation module', () => {
  it('names the first failed rule', () => {
    expect(failedRule({ valid: true } as ValidityState)).toBeNull();
    expect(failedRule({ valid: false, tooLong: true, valueMissing: true } as ValidityState)).toBe('valueMissing');
  });

  it('puts a custom rule into the control, and clears it when the value is fine', () => {
    const input = document.createElement('input');
    input.value = 'bad';
    expect(validationText(input, (v) => (v === 'bad' ? 'Not that.' : ''), undefined)).toBe('Not that.');
    expect(input.validity.customError).toBe(true);

    input.value = 'good';
    expect(validationText(input, (v) => (v === 'bad' ? 'Not that.' : ''), undefined)).toBe('');
    expect(input.validity.valid).toBe(true);
  });

  it('does not run a custom rule on an empty value', () => {
    const input = document.createElement('input');
    const validate = jest.fn(() => 'never');
    expect(validationText(input, validate, undefined)).toBe('');
    expect(validate).not.toHaveBeenCalled();
  });

  it('words a failed rule with the site\'s message, else the browser\'s', () => {
    const input = document.createElement('input');
    input.required = true;
    expect(validationText(input, undefined, { valueMissing: 'Enter it.' })).toBe('Enter it.');
    expect(validationText(input, undefined, {})).toBe(input.validationMessage);
  });
});

describe('fandry-input validation', () => {
  afterEach(() => {
    while (document.body.firstChild) document.body.removeChild(document.body.firstChild);
  });

  const mount = (props: Record<string, unknown> = {}) => {
    const element = createElement('fandry-input', { is: FdInput }) as HTMLElement & Record<string, any>;
    Object.assign(element, props);
    document.body.appendChild(element);
    const root = element.shadowRoot!;
    return {
      element,
      input: root.querySelector('input')!,
      error: root.querySelector('.error-text')!
    };
  };

  it('puts the constraints on the native input, and none that are not set', () => {
    const { input } = mount();
    for (const name of ['pattern', 'minlength', 'maxlength', 'min', 'max', 'step']) {
      expect(input.hasAttribute(name)).toBe(false);
    }

    const set = mount({ type: 'number', min: 1, max: 5, step: 2, pattern: '[0-9]+', minLength: 2, maxLength: 4 });
    expect(set.input.getAttribute('min')).toBe('1');
    expect(set.input.getAttribute('max')).toBe('5');
    expect(set.input.getAttribute('step')).toBe('2');
    expect(set.input.getAttribute('pattern')).toBe('[0-9]+');
    expect(set.input.getAttribute('minlength')).toBe('2');
    expect(set.input.getAttribute('maxlength')).toBe('4');
  });

  it('shows no error until the field is left', async () => {
    const { element, input, error } = mount({ required: true, messages: { valueMissing: 'Enter it.' } });
    await Promise.resolve();
    expect(element.validity.valueMissing).toBe(true);
    expect(error.textContent).toBe('');
    expect(input.hasAttribute('aria-invalid')).toBe(false);

    input.dispatchEvent(new CustomEvent('blur'));
    await Promise.resolve();
    expect(error.textContent).toBe('Enter it.');
    expect(input.getAttribute('aria-invalid')).toBe('true');
  });

  it('follows the value once shown', async () => {
    const { element, input, error } = mount({ required: true, messages: { valueMissing: 'Enter it.' } });
    input.dispatchEvent(new CustomEvent('blur'));
    await Promise.resolve();
    expect(error.textContent).toBe('Enter it.');

    input.value = 'x';
    input.dispatchEvent(new CustomEvent('input'));
    await Promise.resolve();
    await Promise.resolve();
    expect(error.textContent).toBe('');
    expect(element.checkValidity()).toBe(true);
  });

  it('checks a pattern the browser way', async () => {
    const { element, input, error } = mount({ pattern: '[0-9]+', messages: { patternMismatch: 'Digits only.' } });
    input.value = 'abc';
    input.dispatchEvent(new CustomEvent('input'));
    await Promise.resolve();
    await Promise.resolve();
    expect(element.reportValidity()).toBe(false);
    await Promise.resolve();
    expect(error.textContent).toBe('Digits only.');
  });

  it('runs a custom rule, as a customError', async () => {
    const validate = (value: string) => (value.includes('@') ? '' : 'Needs an @.');
    const { element, input, error } = mount({ validate });
    input.value = 'nope';
    input.dispatchEvent(new CustomEvent('input'));
    await Promise.resolve();
    await Promise.resolve();
    expect(element.validity.customError).toBe(true);
    expect(element.validationMessage).toBe('Needs an @.');

    element.reportValidity();
    await Promise.resolve();
    expect(error.textContent).toBe('Needs an @.');
  });

  it('reportValidity shows the error at once', async () => {
    const { element, error } = mount({ required: true, messages: { valueMissing: 'Enter it.' } });
    await Promise.resolve();
    expect(element.reportValidity()).toBe(false);
    await Promise.resolve();
    expect(error.textContent).toBe('Enter it.');
  });

  it('lets error-text win over the browser, and shows it before the field is left', async () => {
    const { input, error } = mount({ required: true, errorText: 'Taken.' });
    await Promise.resolve();
    expect(error.textContent).toBe('Taken.');
    input.dispatchEvent(new CustomEvent('blur'));
    await Promise.resolve();
    expect(error.textContent).toBe('Taken.');
  });
});

describe('fandry-textarea validation', () => {
  afterEach(() => {
    while (document.body.firstChild) document.body.removeChild(document.body.firstChild);
  });

  it('checks required and maxLength like the input does', async () => {
    const element = createElement('fandry-textarea', { is: FdTextarea }) as HTMLElement & Record<string, any>;
    Object.assign(element, { required: true, maxLength: 3, messages: { valueMissing: 'Say something.' } });
    document.body.appendChild(element);
    const textarea = element.shadowRoot!.querySelector('textarea')!;
    const error = element.shadowRoot!.querySelector('.error-text')!;
    expect(textarea.getAttribute('maxlength')).toBe('3');

    textarea.dispatchEvent(new CustomEvent('blur'));
    await Promise.resolve();
    expect(error.textContent).toBe('Say something.');

    element.value = 'hi';
    await Promise.resolve();
    await Promise.resolve();
    expect(error.textContent).toBe('');
    expect(element.checkValidity()).toBe(true);
  });

  it('runs a custom rule', async () => {
    const element = createElement('fandry-textarea', { is: FdTextarea }) as HTMLElement & Record<string, any>;
    Object.assign(element, { value: 'spam', validate: (v: string) => (v === 'spam' ? 'No spam.' : '') });
    document.body.appendChild(element);
    expect(element.reportValidity()).toBe(false);
    await Promise.resolve();
    expect(element.shadowRoot!.querySelector('.error-text')!.textContent).toBe('No spam.');
  });
});

describe('fandry-checkbox validation', () => {
  afterEach(() => {
    while (document.body.firstChild) document.body.removeChild(document.body.firstChild);
  });

  it('requires the box to be checked, and shows it once the box is left', async () => {
    const element = createElement('fandry-checkbox', { is: FdCheckbox }) as HTMLElement & Record<string, any>;
    Object.assign(element, { label: 'Agree', required: true, messages: { valueMissing: 'Please agree.' } });
    document.body.appendChild(element);
    const input = element.shadowRoot!.querySelector('input')!;
    const error = element.shadowRoot!.querySelector('.error-text')!;
    expect(element.validity.valueMissing).toBe(true);
    expect(error.textContent).toBe('');

    input.dispatchEvent(new CustomEvent('blur'));
    await Promise.resolve();
    expect(error.textContent).toBe('Please agree.');
    expect(input.getAttribute('aria-invalid')).toBe('true');
    expect(input.getAttribute('aria-describedby')).toBe('error-text');

    element.checked = true;
    await Promise.resolve();
    await Promise.resolve();
    expect(error.textContent).toBe('');
    expect(element.checkValidity()).toBe(true);
  });

  it('lets error-text win', async () => {
    const element = createElement('fandry-checkbox', { is: FdCheckbox }) as HTMLElement & Record<string, any>;
    Object.assign(element, { errorText: 'Taken.' });
    document.body.appendChild(element);
    expect(element.shadowRoot!.querySelector('.error-text')!.textContent).toBe('Taken.');
  });
});

describe('fandry-switch validation', () => {
  afterEach(() => {
    while (document.body.firstChild) document.body.removeChild(document.body.firstChild);
  });

  it('requires the switch to be on, and shows it once the switch is left', async () => {
    const element = createElement('fandry-switch', { is: FdSwitch }) as HTMLElement & Record<string, any>;
    Object.assign(element, { label: 'Terms', required: true, messages: { valueMissing: 'Turn this on.' } });
    document.body.appendChild(element);
    const input = element.shadowRoot!.querySelector('input')!;
    const error = element.shadowRoot!.querySelector('.error-text')!;
    expect(element.validity.valueMissing).toBe(true);
    expect(error.textContent).toBe('');

    input.dispatchEvent(new CustomEvent('blur'));
    await Promise.resolve();
    expect(error.textContent).toBe('Turn this on.');
    expect(input.getAttribute('aria-invalid')).toBe('true');

    element.checked = true;
    await Promise.resolve();
    await Promise.resolve();
    expect(error.textContent).toBe('');
    expect(element.reportValidity()).toBe(true);
  });
});
