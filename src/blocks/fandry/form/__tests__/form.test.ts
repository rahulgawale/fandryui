import { createElement } from 'lwc';
import FdForm from '../form';

const PLAN_OPTIONS = [
  { label: 'Free', value: 'free' },
  { label: 'Team', value: 'team' }
];

const FIELDS = [
  { name: 'name', label: 'Name', required: true },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    validate: (value: unknown) => (String(value).includes('@') ? undefined : 'Enter an email address.')
  },
  { name: 'seats', label: 'Seats', type: 'number' },
  { name: 'plan', label: 'Plan', type: 'select', options: PLAN_OPTIONS },
  { name: 'newsletter', label: 'Newsletter', type: 'switch' }
];

const VALUES = { id: 7, name: 'Acme', email: 'team@acme.test', seats: 10, plan: 'team', newsletter: false };

// Lets awaited hooks, the async save and LWC's re-render all settle.
const settle = async () => {
  for (let i = 0; i < 6; i++) await Promise.resolve();
};

function mount(props: Record<string, unknown> = {}) {
  const element = createElement('fandry-form', { is: FdForm });
  Object.assign(element, { fields: FIELDS, values: VALUES, ...props });
  document.body.appendChild(element);
  return element as HTMLElement & Record<string, any>;
}

const fieldHost = (el: HTMLElement, name: string) =>
  el.shadowRoot!.querySelector(`fandry-form-field[data-name="${name}"]`) as HTMLElement;
const inner = (el: HTMLElement, name: string) => fieldHost(el, name).shadowRoot!;
const control = (el: HTMLElement, name: string) => inner(el, name).querySelector('.control') as HTMLElement | null;
const errorText = (el: HTMLElement, name: string) => inner(el, name).querySelector('.error')?.textContent?.trim() ?? '';
const status = (el: HTMLElement) => el.shadowRoot!.querySelector('fandry-alert');
const button = (el: HTMLElement, label: string) =>
  Array.from(el.shadowRoot!.querySelectorAll('.actions fandry-button')).find((b) =>
    b.textContent!.includes(label)
  ) as HTMLElement | undefined;

// A field's control reports what the user did the way the primitives do.
function edit(el: HTMLElement, name: string, value: unknown) {
  const target = control(el, name)!;
  const event = target.tagName === 'FANDRY-INPUT' || target.tagName === 'FANDRY-TEXTAREA' ? 'input' : 'change';
  target.dispatchEvent(new CustomEvent(event, { detail: value, bubbles: true }));
}

const leave = (el: HTMLElement, name: string) =>
  control(el, name)!.dispatchEvent(new FocusEvent('focusout', { bubbles: true }));

afterEach(() => {
  while (document.body.firstChild) document.body.removeChild(document.body.firstChild);
});

describe('fandry-form', () => {
  describe('fields', () => {
    it('renders a control for each field, the right kind, holding the value', async () => {
      const el = mount();
      await settle();

      expect(control(el, 'name')!.tagName).toBe('FANDRY-INPUT');
      expect((control(el, 'name') as any).value).toBe('Acme');
      expect((control(el, 'email') as any).type).toBe('email');
      expect((control(el, 'seats') as any).type).toBe('number');
      expect((control(el, 'seats') as any).value).toBe('10');
      expect(control(el, 'plan')!.tagName).toBe('FANDRY-SELECT');
      expect((control(el, 'plan') as any).options).toEqual(PLAN_OPTIONS);
      expect(control(el, 'newsletter')!.tagName).toBe('FANDRY-SWITCH');
      expect((control(el, 'newsletter') as any).checked).toBe(false);
    });

    it('marks a required field as required and gives the label to the control', async () => {
      const el = mount();
      await settle();

      expect((control(el, 'name') as any).required).toBe(true);
      expect((control(el, 'name') as any).label).toBe('Name');
    });

    it('shows a readonly field as text even while editing', async () => {
      const el = mount({ fields: [{ name: 'id', label: 'ID', readonly: true }, ...FIELDS] });
      await settle();

      expect(control(el, 'id')).toBeNull();
      expect(inner(el, 'id').querySelector('.read-value')!.textContent).toBe('7');
    });

    it('reports a change with the field, its value and every value', async () => {
      const el = mount();
      const handler = jest.fn();
      el.addEventListener('change', handler);
      await settle();

      edit(el, 'seats', '12');
      await settle();

      expect(handler).toHaveBeenCalledTimes(1);
      expect(handler.mock.calls[0][0].detail).toEqual({
        name: 'seats',
        value: 12,
        values: { ...VALUES, seats: 12 }
      });
    });

    it('does not report the same edit twice (input then change)', async () => {
      const el = mount();
      const handler = jest.fn();
      el.addEventListener('change', handler);
      await settle();

      edit(el, 'name', 'Acme 2');
      control(el, 'name')!.dispatchEvent(new CustomEvent('change', { detail: 'Acme 2', bubbles: true }));
      await settle();

      expect(handler).toHaveBeenCalledTimes(1);
    });

    it('keeps an edited field when values change underneath it, and moves the others', async () => {
      const el = mount();
      await settle();

      edit(el, 'name', 'Mine');
      el.values = { ...VALUES, name: 'Theirs', email: 'new@acme.test' };
      await settle();

      expect((control(el, 'name') as any).value).toBe('Mine');
      expect((control(el, 'email') as any).value).toBe('new@acme.test');
    });

    it('never edits the values it was given', async () => {
      const el = mount();
      await settle();

      edit(el, 'name', 'Changed');
      button(el, 'Save')!.click();
      await settle();

      // LWC hands a proxy back, so compare by value.
      expect(el.values).toEqual({ ...VALUES });
      expect(VALUES.name).toBe('Acme');
    });
  });

  describe('validation', () => {
    it('says nothing about a field before it has been left or a save attempted', async () => {
      const el = mount({ values: {} });
      await settle();

      expect(errorText(el, 'name')).toBe('');

      edit(el, 'name', '');
      await settle();
      expect(errorText(el, 'name')).toBe('');
    });

    it('shows a required error once the field is left, and clears it when fixed', async () => {
      const el = mount({ values: {} });
      await settle();

      leave(el, 'name');
      await settle();
      expect(errorText(el, 'name')).toBe('Name is required.');
      expect((control(el, 'name') as any).elementProps.ariaInvalid).toBe('true');

      edit(el, 'name', 'Acme');
      await settle();
      expect(errorText(el, 'name')).toBe('');
      expect((control(el, 'name') as any).elementProps.ariaInvalid).toBe('false');
    });

    it('treats whitespace as empty', async () => {
      const el = mount({ values: {} });
      await settle();

      edit(el, 'name', '   ');
      leave(el, 'name');
      await settle();

      expect(errorText(el, 'name')).toBe('Name is required.');
    });

    it("shows a field's own rule, after required, and follows the value", async () => {
      const el = mount();
      await settle();

      edit(el, 'email', 'nope');
      leave(el, 'email');
      await settle();
      expect(errorText(el, 'email')).toBe('Enter an email address.');

      edit(el, 'email', 'ok@acme.test');
      await settle();
      expect(errorText(el, 'email')).toBe('');
    });

    it('does not run a rule on an empty optional field', async () => {
      const el = mount();
      await settle();

      edit(el, 'email', '');
      leave(el, 'email');
      await settle();

      expect(errorText(el, 'email')).toBe('');
    });

    it('lets a required switch mean "must be on"', async () => {
      const el = mount({
        fields: [{ name: 'terms', label: 'Accept the terms', type: 'switch', required: true }],
        values: { terms: false }
      });
      await settle();

      await button(el, 'Save')!.click();
      await settle();

      expect(errorText(el, 'terms')).toBe('Accept the terms is required.');
    });

    it('a failed save shows every error, says so, does not call the hook, and moves focus to the first', async () => {
      const saveValues = jest.fn();
      const el = mount({ values: { name: '', email: 'nope' }, saveValues });
      const save = jest.fn();
      el.addEventListener('save', save);
      await settle();

      button(el, 'Save')!.click();
      await settle();

      expect(errorText(el, 'name')).toBe('Name is required.');
      expect(errorText(el, 'email')).toBe('Enter an email address.');
      expect(status(el)!.textContent).toContain('Fix the highlighted fields');
      expect((status(el) as any).variant).toBe('danger');
      expect(saveValues).not.toHaveBeenCalled();
      expect(save).not.toHaveBeenCalled();

      const nameInput = control(el, 'name')!.shadowRoot!;
      expect(nameInput.activeElement).toBe(nameInput.querySelector('input'));
    });

    it('runs the form-level hook only once the fields pass, and shows its errors on their fields', async () => {
      const validate = jest.fn(async (values: Record<string, unknown>) =>
        values.name === 'Taken' ? { name: 'That name is taken.', nowhere: 'ignored' } : undefined
      );
      const saveValues = jest.fn();
      const el = mount({ validate, saveValues, values: { ...VALUES, name: '' } });
      await settle();

      button(el, 'Save')!.click();
      await settle();
      expect(validate).not.toHaveBeenCalled();

      edit(el, 'name', 'Taken');
      button(el, 'Save')!.click();
      await settle();

      expect(validate).toHaveBeenCalledTimes(1);
      expect(errorText(el, 'name')).toBe('That name is taken.');
      expect(saveValues).not.toHaveBeenCalled();

      // The server's verdict was about the old value.
      edit(el, 'name', 'Free');
      await settle();
      expect(errorText(el, 'name')).toBe('');
    });

    it('asks the form-level hook again on every save', async () => {
      let taken = true;
      const validate = jest.fn(async () => (taken ? { name: 'That name is taken.' } : undefined));
      const el = mount({ validate });
      await settle();

      button(el, 'Save')!.click();
      await settle();
      expect(errorText(el, 'name')).toBe('That name is taken.');

      taken = false;
      button(el, 'Save')!.click();
      await settle();
      expect(errorText(el, 'name')).toBe('');
      expect(validate).toHaveBeenCalledTimes(2);
    });
  });

  describe('saving', () => {
    it('without a hook, accepts the edit and reports it', async () => {
      const el = mount();
      const handler = jest.fn();
      el.addEventListener('save', handler);
      await settle();

      edit(el, 'name', 'Acme Inc');
      edit(el, 'seats', '12');
      button(el, 'Save')!.click();
      await settle();

      expect(handler).toHaveBeenCalledTimes(1);
      expect(handler.mock.calls[0][0].detail).toEqual({
        values: { ...VALUES, name: 'Acme Inc', seats: 12 },
        changes: { name: 'Acme Inc', seats: 12 }
      });
      expect((status(el) as any).variant).toBe('success');
      expect(status(el)!.textContent).toContain('Saved.');
    });

    it('hands the hook every value and only what changed, numbers as numbers', async () => {
      const saveValues = jest.fn(async () => undefined);
      const el = mount({ saveValues });
      await settle();

      edit(el, 'seats', '12');
      edit(el, 'plan', 'free');
      button(el, 'Save')!.click();
      await settle();

      expect(saveValues).toHaveBeenCalledWith(
        { ...VALUES, seats: 12, plan: 'free' },
        { seats: 12, plan: 'free' }
      );
    });

    it("reports what the hook resolved with, e.g. the server's version", async () => {
      const saved = { ...VALUES, name: 'Acme (verified)' };
      const el = mount({ saveValues: async () => saved });
      const handler = jest.fn();
      el.addEventListener('save', handler);
      await settle();

      edit(el, 'name', 'Acme');
      button(el, 'Save')!.click();
      await settle();

      expect(handler.mock.calls[0][0].detail.values).toBe(saved);
    });

    it('stays in edit mode and says why when the hook rejects', async () => {
      const el = mount({
        saveValues: async () => {
          throw new Error('Server is down.');
        }
      });
      const handler = jest.fn();
      el.addEventListener('save', handler);
      await settle();

      edit(el, 'name', 'Acme Inc');
      button(el, 'Save')!.click();
      await settle();

      expect(handler).not.toHaveBeenCalled();
      expect((status(el) as any).variant).toBe('danger');
      expect(status(el)!.textContent).toContain("Couldn't save: Server is down.");
      // What the user typed is still there to retry.
      expect((control(el, 'name') as any).value).toBe('Acme Inc');
    });

    it('disables the fields and the actions while the hook runs, and ignores a second save', async () => {
      let finish: () => void = () => {};
      const saveValues = jest.fn(() => new Promise<void>((resolve) => (finish = resolve)));
      const el = mount({ saveValues });
      await settle();

      edit(el, 'name', 'Acme Inc');
      button(el, 'Save')!.click();
      await settle();

      expect((control(el, 'name') as any).disabled).toBe(true);
      expect((button(el, 'Cancel') as any).disabled).toBe(true);
      button(el, 'Save')!.click();
      await settle();
      expect(saveValues).toHaveBeenCalledTimes(1);

      finish();
      await settle();
      expect((control(el, 'name') as any).disabled).toBe(false);
    });

    it('saves on Enter in a text field', async () => {
      const saveValues = jest.fn(async () => undefined);
      const el = mount({ saveValues });
      await settle();

      edit(el, 'name', 'Acme Inc');
      const keydown = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true });
      control(el, 'name')!.dispatchEvent(keydown);
      await settle();

      expect(saveValues).toHaveBeenCalledTimes(1);
      expect(keydown.defaultPrevented).toBe(true);
    });

    it('does not save on Enter in a select', async () => {
      const saveValues = jest.fn(async () => undefined);
      const el = mount({ saveValues });
      await settle();

      control(el, 'plan')!.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true }));
      await settle();

      expect(saveValues).not.toHaveBeenCalled();
    });

    it('a form that starts in edit mode submits even when nothing changed, and stays in edit mode', async () => {
      const saveValues = jest.fn(async () => undefined);
      const modeChange = jest.fn();
      const el = mount({ saveValues });
      el.addEventListener('modechange', modeChange);
      await settle();

      button(el, 'Save')!.click();
      await settle();

      expect(saveValues).toHaveBeenCalledTimes(1);
      expect(modeChange).not.toHaveBeenCalled();
      expect(el.mode).toBe('edit');
    });
  });

  describe('read and edit mode', () => {
    it('reads by default when asked to: values as text, no controls, one Edit action', async () => {
      const el = mount({ mode: 'read' });
      await settle();

      expect(control(el, 'name')).toBeNull();
      const text = (name: string) => inner(el, name).querySelector('.read-value')!.textContent;
      expect(text('name')).toBe('Acme');
      expect(text('plan')).toBe('Team'); // an option's label, not its value
      expect(text('newsletter')).toBe('No');
      expect(text('seats')).toBe('10');
      expect(button(el, 'Edit')).toBeDefined();
      expect(button(el, 'Save')).toBeUndefined();
    });

    it('shows an empty value as a dash', async () => {
      const el = mount({ mode: 'read', values: {} });
      await settle();

      expect(inner(el, 'name').querySelector('.read-value')!.textContent).toBe('—');
    });

    it('never prints a password', async () => {
      const el = mount({
        mode: 'read',
        fields: [{ name: 'secret', label: 'Secret', type: 'password' }],
        values: { secret: 'hunter2' }
      });
      await settle();

      expect(inner(el, 'secret').querySelector('.read-value')!.textContent).not.toContain('hunter2');
    });

    it('switches to edit on Edit, and says so', async () => {
      const el = mount({ mode: 'read' });
      const handler = jest.fn();
      el.addEventListener('modechange', handler);
      await settle();

      button(el, 'Edit')!.click();
      await settle();

      expect(el.mode).toBe('edit');
      expect(handler.mock.calls[0][0].detail).toEqual({ mode: 'edit' });
      expect(control(el, 'name')).not.toBeNull();
      expect(button(el, 'Save')).toBeDefined();
      expect(button(el, 'Edit')).toBeUndefined();
    });

    it('goes back to reading on Cancel, throwing the edits away', async () => {
      const el = mount({ mode: 'read' });
      const cancel = jest.fn();
      const modeChange = jest.fn();
      el.addEventListener('cancel', cancel);
      el.addEventListener('modechange', modeChange);
      await settle();

      button(el, 'Edit')!.click();
      await settle();
      edit(el, 'name', 'Something else');
      button(el, 'Cancel')!.click();
      await settle();

      expect(cancel).toHaveBeenCalledTimes(1);
      expect(modeChange.mock.calls.map((call) => call[0].detail.mode)).toEqual(['edit', 'read']);
      expect(inner(el, 'name').querySelector('.read-value')!.textContent).toBe('Acme');

      button(el, 'Edit')!.click();
      await settle();
      expect((control(el, 'name') as any).value).toBe('Acme');
    });

    it('goes back to reading after a save, and shows the values the consumer passes back', async () => {
      const el = mount({ mode: 'read' });
      el.addEventListener('save', (event: CustomEvent) => {
        el.values = event.detail.values;
      });
      await settle();

      button(el, 'Edit')!.click();
      await settle();
      edit(el, 'name', 'Acme Inc');
      button(el, 'Save')!.click();
      await settle();

      expect(el.mode).toBe('read');
      expect(inner(el, 'name').querySelector('.read-value')!.textContent).toBe('Acme Inc');
      expect(status(el)!.textContent).toContain('Saved.');
    });

    it('stays in edit mode after a failed save', async () => {
      const el = mount({
        mode: 'read',
        saveValues: async () => {
          throw new Error('No.');
        }
      });
      await settle();

      button(el, 'Edit')!.click();
      await settle();
      edit(el, 'name', 'Acme Inc');
      button(el, 'Save')!.click();
      await settle();

      expect(el.mode).toBe('edit');
    });

    it('does not call the hook when a form opened for reading is saved without changes', async () => {
      const saveValues = jest.fn();
      const el = mount({ mode: 'read', saveValues });
      await settle();

      button(el, 'Edit')!.click();
      await settle();
      button(el, 'Save')!.click();
      await settle();

      expect(saveValues).not.toHaveBeenCalled();
      expect((status(el) as any).variant).toBe('info');
      expect(status(el)!.textContent).toContain('No changes to save.');
      expect(el.mode).toBe('edit');
    });

    it('does not count typing and undoing as a change', async () => {
      const saveValues = jest.fn();
      const el = mount({ mode: 'read', saveValues });
      await settle();

      button(el, 'Edit')!.click();
      await settle();
      edit(el, 'name', 'Acme x');
      edit(el, 'name', 'Acme');
      button(el, 'Save')!.click();
      await settle();

      expect(saveValues).not.toHaveBeenCalled();
    });

    it('can be driven from outside through edit(), cancel() and save()', async () => {
      const saveValues = jest.fn(async () => undefined);
      const el = mount({ mode: 'read', saveValues });
      await settle();

      el.edit();
      await settle();
      expect(el.mode).toBe('edit');

      edit(el, 'name', 'Acme Inc');
      el.save();
      await settle();
      expect(saveValues).toHaveBeenCalledTimes(1);
      expect(el.mode).toBe('read');

      el.edit();
      await settle();
      el.cancel();
      await settle();
      expect(el.mode).toBe('read');
    });

    it('shows no validation errors while reading', async () => {
      const el = mount({ mode: 'read', values: {} });
      await settle();

      expect(inner(el, 'name').querySelector('.error')).toBeNull();
    });
  });

  describe('actions slot', () => {
    it('offers a slot whose default content is the buttons', async () => {
      const el = mount({ mode: 'read' });
      await settle();

      const slot = el.shadowRoot!.querySelector('slot[name="actions"]')!;
      expect(slot.querySelector('fandry-button')).not.toBeNull();
    });
  });
});
