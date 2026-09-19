import { createElement } from 'lwc';
import FormField from '../formField';

const OPTIONS = [
  { label: 'Free', value: 'free' },
  { label: 'Team', value: 'team' }
];

const settle = async () => {
  for (let i = 0; i < 4; i++) await Promise.resolve();
};

function mount(props: Record<string, unknown>) {
  const element = createElement('fandry-form-field', { is: FormField });
  Object.assign(element, props);
  document.body.appendChild(element);
  return element as HTMLElement & Record<string, any>;
}

const control = (el: HTMLElement) => el.shadowRoot!.querySelector('.control') as HTMLElement | null;

afterEach(() => {
  while (document.body.firstChild) document.body.removeChild(document.body.firstChild);
});

describe('fandry-form-field', () => {
  it('renders nothing without a field', async () => {
    const el = mount({});
    await settle();

    expect(el.shadowRoot!.querySelector('.field')).toBeNull();
  });

  it.each([
    ['text', 'FANDRY-INPUT'],
    [undefined, 'FANDRY-INPUT'],
    ['email', 'FANDRY-INPUT'],
    ['number', 'FANDRY-INPUT'],
    ['textarea', 'FANDRY-TEXTAREA'],
    ['select', 'FANDRY-SELECT'],
    ['radio', 'FANDRY-RADIO-GROUP'],
    ['checkbox', 'FANDRY-CHECKBOX'],
    ['switch', 'FANDRY-SWITCH']
  ])('renders a field of type %s as %s', async (type, tag) => {
    const el = mount({ field: { name: 'x', label: 'X', type, options: OPTIONS } });
    await settle();

    expect(control(el)!.tagName).toBe(tag);
  });

  it('gives an input its type, label, help text, placeholder and required flag', async () => {
    const el = mount({
      field: { name: 'email', label: 'Email', type: 'email', helpText: 'Work address', placeholder: 'you@work', required: true }
    });
    await settle();

    const input = control(el) as any;
    expect(input.type).toBe('email');
    expect(input.label).toBe('Email');
    expect(input.helpText).toBe('Work address');
    expect(input.placeholder).toBe('you@work');
    expect(input.required).toBe(true);
  });

  it('renders a radio field as a group with one radio per option', async () => {
    const el = mount({ field: { name: 'plan', label: 'Plan', type: 'radio', options: OPTIONS }, value: 'team' });
    await settle();

    const radios = control(el)!.querySelectorAll('fandry-radio');
    expect(Array.from(radios).map((radio: any) => radio.value)).toEqual(['free', 'team']);
    expect((control(el) as any).value).toBe('team');
    // Which one is selected is each radio's own `checked`.
    expect(Array.from(radios).map((radio: any) => radio.checked)).toEqual([false, true]);
  });

  it("shows help text itself for the controls that can't", async () => {
    const el = mount({ field: { name: 'n', label: 'N', type: 'switch', helpText: 'Monthly, at most.' } });
    await settle();

    expect(el.shadowRoot!.querySelector('.help')!.textContent).toBe('Monthly, at most.');
  });

  it('leaves help text to the primitive where the primitive has a place for it', async () => {
    const el = mount({ field: { name: 'n', label: 'N', helpText: 'Hint' } });
    await settle();

    expect(el.shadowRoot!.querySelector('.help')).toBeNull();
  });

  it('shows an error as an alert and marks the control invalid', async () => {
    const el = mount({ field: { name: 'n', label: 'N' }, error: 'Required.' });
    await settle();

    const error = el.shadowRoot!.querySelector('.error')!;
    expect(error.textContent).toBe('Required.');
    expect(error.getAttribute('role')).toBe('alert');
    expect((control(el) as any).elementProps.ariaInvalid).toBe('true');
  });

  it('keeps the Safari tab stop, and lets the consumer add to the control', async () => {
    const el = mount({ field: { name: 'n', label: 'N', elementProps: { autocomplete: 'off' } } });
    await settle();

    expect((control(el) as any).elementProps).toMatchObject({ tabIndex: 0, autocomplete: 'off' });
  });

  it("can't be talked out of aria-invalid by the consumer's props", async () => {
    const el = mount({
      field: { name: 'n', label: 'N', elementProps: { ariaInvalid: 'false' } },
      error: 'Bad.'
    });
    await settle();

    expect((control(el) as any).elementProps.ariaInvalid).toBe('true');
  });

  it('marks a required switch as required for assistive tech', async () => {
    const el = mount({ field: { name: 't', label: 'T', type: 'switch', required: true } });
    await settle();

    expect((control(el) as any).elementProps.ariaRequired).toBe('true');
  });

  describe('events', () => {
    it.each([
      ['FANDRY-INPUT', 'input', 'abc', 'abc'],
      ['FANDRY-INPUT', 'change', 'abc', 'abc'],
      ['FANDRY-SELECT', 'change', 'team', 'team'],
      ['FANDRY-SWITCH', 'change', true, true],
      ['FANDRY-CHECKBOX', 'change', true, true],
      ['FANDRY-RADIO-GROUP', 'change', { value: 'team' }, 'team']
    ])('turns %s\'s %s into one change with the value', async (tag, name, detail, expected) => {
      const type = { 'FANDRY-INPUT': 'text', 'FANDRY-SELECT': 'select', 'FANDRY-SWITCH': 'switch', 'FANDRY-CHECKBOX': 'checkbox', 'FANDRY-RADIO-GROUP': 'radio' }[tag];
      const el = mount({ field: { name: 'x', label: 'X', type, options: OPTIONS } });
      const handler = jest.fn();
      el.addEventListener('change', handler);
      await settle();

      control(el)!.dispatchEvent(new CustomEvent(name, { detail, bubbles: true }));

      expect(handler).toHaveBeenCalledTimes(1);
      expect(handler.mock.calls[0][0].detail).toEqual({ value: expected });
    });

    it("keeps the control's own input event from reaching the parent", async () => {
      const el = mount({ field: { name: 'x', label: 'X' } });
      const handler = jest.fn();
      el.addEventListener('input', handler);
      await settle();

      control(el)!.dispatchEvent(new CustomEvent('input', { detail: 'a', bubbles: true }));

      expect(handler).not.toHaveBeenCalled();
    });

    it('asks to submit on Enter in a text input, and says nothing on other keys', async () => {
      const el = mount({ field: { name: 'x', label: 'X' } });
      const handler = jest.fn();
      el.addEventListener('submit', handler);
      await settle();

      control(el)!.dispatchEvent(new KeyboardEvent('keydown', { key: 'a', bubbles: true, cancelable: true }));
      expect(handler).not.toHaveBeenCalled();

      const enter = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true });
      control(el)!.dispatchEvent(enter);
      expect(handler).toHaveBeenCalledTimes(1);
      expect(enter.defaultPrevented).toBe(true);
    });

    it.each(['textarea', 'select', 'switch'])('does not treat Enter in a %s as a submit', async (type) => {
      const el = mount({ field: { name: 'x', label: 'X', type, options: OPTIONS } });
      const handler = jest.fn();
      el.addEventListener('submit', handler);
      await settle();

      control(el)!.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true }));

      expect(handler).not.toHaveBeenCalled();
    });

    it('reports a blur when focus leaves anything inside', async () => {
      const el = mount({ field: { name: 'x', label: 'X' } });
      const handler = jest.fn();
      el.addEventListener('blur', handler);
      await settle();

      control(el)!.dispatchEvent(new FocusEvent('focusout', { bubbles: true }));

      expect(handler).toHaveBeenCalledTimes(1);
    });
  });

  describe('read mode', () => {
    it('shows the label and the value as text, with no control', async () => {
      const el = mount({ field: { name: 'n', label: 'Name' }, value: 'Acme', mode: 'read' });
      await settle();

      expect(control(el)).toBeNull();
      expect(el.shadowRoot!.querySelector('.read-label')!.textContent).toBe('Name');
      expect(el.shadowRoot!.querySelector('.read-value')!.textContent).toBe('Acme');
    });

    it.each([
      ['select', 'team', 'Team'],
      ['select', 'gone', 'gone'],
      ['radio', 'free', 'Free'],
      ['checkbox', true, 'Yes'],
      ['switch', false, 'No'],
      ['text', '', '—'],
      ['text', null, '—'],
      ['number', 0, '0']
    ])('reads a %s holding %p as %p', async (type, value, expected) => {
      const el = mount({ field: { name: 'x', label: 'X', type, options: OPTIONS }, value, mode: 'read' });
      await settle();

      expect(el.shadowRoot!.querySelector('.read-value')!.textContent).toBe(expected);
    });

    it('shows no error, even if one is given', async () => {
      const el = mount({ field: { name: 'n', label: 'N' }, error: 'Bad.', mode: 'read' });
      await settle();

      expect(el.shadowRoot!.querySelector('.error')).toBeNull();
    });
  });

  it('focuses its control', async () => {
    const el = mount({ field: { name: 'n', label: 'N' } });
    await settle();

    el.focus();

    const input = control(el)!.shadowRoot!;
    expect(input.activeElement).toBe(input.querySelector('input'));
  });
});
