import Base from 'fandry/base';
import { partList } from 'fandry/parts';
import { api, track } from 'lwc';
import { resolveElementProps } from 'fandry/elementProps';
import { slotHasContent } from 'fandry/textSlots';
import { fieldInvalid, withoutAriaInvalid } from 'fandry/fieldError';
import { validationText } from 'fandry/validation';
import type { FdValidationMessages } from 'fandry/validation';

// See checkbox.ts for why this list exists: it keeps a consumer's
// `elementProps` from clobbering a property the component itself controls.
const RESERVED_ELEMENT_PROPS = ['type', 'name', 'value', 'checked', 'disabled', 'required', 'class', 'role', 'onchange', 'ariaChecked', 'ariaDescribedBy', 'ariaDescribedByElements'];

export default class Switch extends Base {
  @api label = '';
  @api checked = false;
  @api disabled = false;
  @api name = '';
  @api value = '';

  /** Must be on: the browser's `required`, checked by the browser. */
  @api required = false;
  // Shown under the switch, and makes it invalid -- see fandry/fieldError.
  @api errorText = '';

  /** Your wording for a failed rule (`valueMissing`), else the browser's -- see FdValidationMessages. */
  @api messages: FdValidationMessages = {};

  // The native input's verdict, and whether the user has earned seeing it:
  // the switch was left, or reportValidity() was called.
  @track private validationError = '';
  @track private validationShown = false;

  // Spread onto the native <input> via `lwc:spread` -- see checkbox.ts for
  // why this can't reach `data-*` attributes, and why that's not solved
  // with a dedicated prop either.
  @api elementProps: Record<string, unknown> = { tabIndex: 0 };

  get resolvedElementProps(): Record<string, unknown> {
    return withoutAriaInvalid(resolveElementProps(this, this.elementProps, RESERVED_ELEMENT_PROPS, 'fandry-switch'));
  }

  // `error-text` (the page's, e.g. a server's) wins over the browser's.
  get shownErrorText(): string {
    return this.errorText || (this.validationShown ? this.validationError : '');
  }

  get hasErrorText(): boolean {
    return !!this.shownErrorText || !!this.textSlots['error-text'];
  }

  get errorTextClasses(): string {
    return this.hasErrorText ? 'error-text' : 'error-text error-text--empty';
  }

  get invalid(): boolean {
    return fieldInvalid(this.hasErrorText, this.elementProps);
  }

  get ariaInvalid(): 'true' | null {
    return this.invalid ? 'true' : null;
  }

  get describedBy(): string | null {
    return this.hasErrorText ? 'error-text' : null;
  }

  private get nativeInput(): HTMLInputElement | null {
    return this.template.querySelector('.input');
  }

  // After every render, so a change to `checked` or `required` is checked
  // against what the browser now holds.
  renderedCallback() {
    const input = this.nativeInput;
    if (input) this.validationError = validationText(input, undefined, this.messages);
  }

  /** The native input's ValidityState (`valid`, `valueMissing`). */
  @api
  get validity(): ValidityState | undefined {
    return this.nativeInput?.validity;
  }

  /** The message the switch would show: yours from `messages`, else the browser's. '' while valid. */
  @api
  get validationMessage(): string {
    return this.validationError;
  }

  /** Whether the switch passes every rule. Shows nothing. */
  @api
  checkValidity(): boolean {
    this.renderedCallback();
    return this.nativeInput?.validity.valid ?? true;
  }

  /** checkValidity(), and shows the error now, as a submit does. Focusing the first field that fails is the page's to do. */
  @api
  reportValidity(): boolean {
    const valid = this.checkValidity();
    this.validationShown = true;
    return valid;
  }

  handleBlur() {
    this.validationShown = true;
  }

  get ariaChecked() {
    return this.checked ? 'true' : 'false';
  }

  // The host isn't itself focusable, only the native control in its shadow
  // tree is -- same fix as fandry-input's focus().
  @api
  focus() {
    (this.template.querySelector('.input') as HTMLElement | null)?.focus();
  }

  handleChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.checked = input.checked;

    this.dispatchEvent(
      new CustomEvent('change', {
        detail: this.checked,
        bubbles: true
      })
    );
  }

  get controlPart(): string {
    return partList('control', { checked: this.checked, disabled: this.disabled, invalid: this.invalid });
  }

  // Which text slots have content -- see fandry/textSlots.
  textSlots: Record<string, boolean> = {};

  handleTextSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    this.textSlots = { ...this.textSlots, [slot.name || 'default']: slotHasContent(slot) };
  }

  get hasLabel(): boolean {
    return !!this.label || !!this.textSlots['default'];
  }

  get labelHidden(): boolean {
    return !this.hasLabel;
  }
}
