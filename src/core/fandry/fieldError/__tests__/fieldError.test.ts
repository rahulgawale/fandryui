import { createElement } from 'lwc';
import FdInput from '../../input/input';
import FdTextarea from '../../textarea/textarea';
import FdSelect from '../../select/select';
import FdCombobox from '../../combobox/combobox';
import FdLookup from '../../../../salesforce/fandry/lookup/lookup';
import TextSlotsHarness from '../../base/__tests__/textSlotsHarness';
import { fieldDescribedBy, fieldInvalid, withoutAriaInvalid } from '../fieldError';

/* [tag, class, the element that carries the ARIA, the element that carries the `control` part] */
const FIELDS: Array<[string, CustomElementConstructor, string, string]> = [
  ['fandry-input', FdInput, 'input', '.control'],
  ['fandry-textarea', FdTextarea, 'textarea', 'textarea'],
  ['fandry-select', FdSelect, '.trigger', '.trigger'],
  ['fandry-combobox', FdCombobox, '.input', '.input'],
  ['fandry-lookup', FdLookup, '.input', '.field']
];

describe('error text', () => {
  afterEach(() => {
    while (document.body.firstChild) document.body.removeChild(document.body.firstChild);
  });

  describe.each(FIELDS)('%s', (tag, is, ariaSelector, controlSelector) => {
    const mount = (props: Record<string, unknown> = {}) => {
      const element = createElement(tag, { is }) as HTMLElement & Record<string, unknown>;
      Object.assign(element, props);
      document.body.appendChild(element);
      const root = element.shadowRoot!;
      return {
        element,
        aria: root.querySelector(ariaSelector)!,
        control: root.querySelector(controlSelector)!,
        error: root.querySelector('.error-text')!,
        help: root.querySelector('.help-text')!
      };
    };

    it('is valid, and keeps an empty live region in the page, without an error', () => {
      const { aria, control, error } = mount();

      expect(aria.hasAttribute('aria-invalid')).toBe(false);
      expect(aria.hasAttribute('aria-describedby')).toBe(false);
      expect(control.getAttribute('part')).not.toContain('invalid');
      // Not `hidden`: a region has to be known before its text is announced.
      expect(error.hasAttribute('hidden')).toBe(false);
      expect(error.getAttribute('aria-live')).toBe('polite');
      expect(error.className).toBe('error-text error-text--empty');
      expect(error.textContent).toBe('');
    });

    it('shows the error, marks the control invalid and describes it with the error first', async () => {
      const { element, aria, control, error, help } = mount({ helpText: 'Help.' });
      expect(aria.getAttribute('aria-describedby')).toBe(help.id);

      element.errorText = 'Required.';
      await Promise.resolve();

      expect(error.textContent).toBe('Required.');
      expect(error.className).toBe('error-text');
      expect(error.getAttribute('part')).toBe('error-text');
      expect(aria.getAttribute('aria-invalid')).toBe('true');
      expect(aria.getAttribute('aria-describedby')).toBe(`${error.id} ${help.id}`);
      expect(control.getAttribute('part')!.split(' ')).toContain('invalid');

      element.errorText = '';
      await Promise.resolve();
      expect(aria.hasAttribute('aria-invalid')).toBe(false);
      expect(control.getAttribute('part')).not.toContain('invalid');
    });

    it('is invalid without a message when the page says so through elementProps', () => {
      const { aria, control, error } = mount({ elementProps: { ariaInvalid: 'true' } });

      expect(aria.getAttribute('aria-invalid')).toBe('true');
      expect(control.getAttribute('part')!.split(' ')).toContain('invalid');
      expect(error.className).toBe('error-text error-text--empty');
    });

    it('stays invalid with an error whatever elementProps says', () => {
      const { aria } = mount({ errorText: 'Bad.', elementProps: { ariaInvalid: 'false' } });

      expect(aria.getAttribute('aria-invalid')).toBe('true');
      expect((aria as HTMLElement).ariaInvalid ?? 'true').toBe('true');
    });
  });

  it('takes the error from a slot, without the prop', async () => {
    const harness = createElement('text-slots-harness', { is: TextSlotsHarness });
    document.body.appendChild(harness);
    for (let i = 0; i < 4; i++) await Promise.resolve();

    const root = harness.shadowRoot!.querySelector('.input')!.shadowRoot!;
    expect(root.querySelector('.error-text')!.className).toBe('error-text');
    expect(root.querySelector('input')!.getAttribute('aria-invalid')).toBe('true');
  });

  it('builds aria-describedby from what there is', () => {
    expect(fieldDescribedBy(false, false)).toBeNull();
    expect(fieldDescribedBy(false, true)).toBe('help-text');
    expect(fieldDescribedBy(true, false)).toBe('error-text');
    expect(fieldDescribedBy(true, true)).toBe('error-text help-text');
  });

  it('reads aria-invalid from elementProps, and keeps it out of the spread', () => {
    expect(fieldInvalid(false, undefined)).toBe(false);
    expect(fieldInvalid(false, { ariaInvalid: 'false' })).toBe(false);
    expect(fieldInvalid(false, { ariaInvalid: true })).toBe(true);
    expect(withoutAriaInvalid({ tabIndex: 0, ariaInvalid: 'true' })).toEqual({ tabIndex: 0 });
  });
});
