import { api, track } from 'lwc';
import Base from 'fandry/base';
import { partList } from 'fandry/parts';
import { resolveElementProps } from 'fandry/elementProps';
import { slotHasContent } from 'fandry/textSlots';
import { fieldInvalid, fieldDescribedBy, withoutAriaInvalid } from 'fandry/fieldError';
import { validationText } from 'fandry/validation';
import type { FdValidate, FdValidationMessages } from 'fandry/validation';

// See fandry-checkbox's checkbox.ts for why this list exists: it keeps a
// consumer's `elementProps` from clobbering a property the component
// itself controls -- `id` is reserved because the label's `for="input"`
// association depends on it staying put (same reasoning as fandry-select's
// reserved `id`). `aria-describedby` has no plain string IDL property (see
// select.ts's fuller note) -- only the newer `ariaDescribedByElements`
// (element-reference), reserved here since this component sets
// `aria-describedby="help-text"` itself.
const RESERVED_ELEMENT_PROPS = [
  'id',
  'type',
  'name',
  'value',
  'disabled',
  'readonly',
  'required',
  'class',
  'ariaDescribedBy',
  'ariaDescribedByElements',
  'oninput',
  'onchange',
  'onfocus',
  'onblur'
];

export default class Input extends Base {
  @api label = '';
  @api helpText = '';
  // Shown under the control, and makes the field invalid -- see fandry/fieldError.
  @api errorText = '';
  @api value = '';
  @api type: string = 'text';
  @api name = '';
  @api placeholder = '';
  @api disabled = false;
  @api readonly = false;
  @api required = false;
  @api size: 'sm' | 'md' | 'lg' = 'md';

  /*
    The browser's constraints, set on the native input: it decides what is
    valid, and words the message. Which apply depends on `type` (`pattern`
    on text-like types, `min`/`max`/`step` on numbers and dates).
  */
  @api pattern = '';
  @api minLength: number | null = null;
  @api maxLength: number | null = null;
  @api min: string | number | null = null;
  @api max: string | number | null = null;
  @api step: string | number | null = null;

  /** A rule the browser has no attribute for -- see FdValidate. */
  @api validate?: FdValidate;

  /** Your wording for a failed rule, by ValidityState name -- see FdValidationMessages. */
  @api messages: FdValidationMessages = {};

  // Spread onto the native <input> via `lwc:spread` -- see checkbox.ts for
  // why this can't reach `data-*` attributes, and why that's not solved
  // with a dedicated prop either. No tabIndex default here: unlike
  // buttons/checkboxes/radios/selects, Safari already includes plain text
  // fields in the Tab order by default.
  @api elementProps: Record<string, unknown> = {};

  @track hasFocus = false;

  // The native input's verdict, and whether the user has earned seeing it:
  // the field was left, or reportValidity() was called.
  @track private validationError = '';
  @track private validationShown = false;

  get resolvedElementProps(): Record<string, unknown> {
    return withoutAriaInvalid(resolveElementProps(this, this.elementProps, RESERVED_ELEMENT_PROPS, 'fandry-input'));
  }

  get hasLabel(): boolean {
    return !!this.label || !!this.textSlots['label'];
  }

  get hasHelpText(): boolean {
    return !!this.helpText || !!this.textSlots['help-text'];
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

  // null and undefined would otherwise show as the words "null"/"undefined".
  get inputValue(): string {
    return this.value ?? '';
  }

  // Only what there is: an empty description is still announced as one by
  // some screen readers.
  get describedBy(): string | null {
    return fieldDescribedBy(this.hasErrorText, this.hasHelpText);
  }

  get controlClasses() {
    return ['control', `control--${this.size}`].join(' ');
  }

  // Without this, `someFdInput.focus()` is a no-op -- the host isn't itself
  // focusable, only the native <input> in its shadow tree is. Same fix as
  // fandry-button's/fandry-radio's own focus().
  @api
  focus() {
    const input = this.template.querySelector('input') as HTMLElement | null;
    input?.focus();
  }

  // An empty pattern attribute is a pattern that only an empty value matches.
  get patternAttribute(): string | null {
    return this.pattern || null;
  }

  private get nativeInput(): HTMLInputElement | null {
    return this.template.querySelector('input');
  }

  // After every render, so a change to the value or to any constraint is
  // checked against what the browser now holds.
  renderedCallback() {
    const input = this.nativeInput;
    if (input) this.validationError = validationText(input, this.validate, this.messages);
  }

  /** The native input's ValidityState (`valid`, `valueMissing`, ...). */
  @api
  get validity(): ValidityState | undefined {
    return this.nativeInput?.validity;
  }

  /** The message the field would show: yours from `messages` or `validate`, else the browser's. '' while valid. */
  @api
  get validationMessage(): string {
    return this.validationError;
  }

  /** Whether the value passes every rule. Shows nothing. */
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

  handleInput(event: Event) {
    // The native `input` event is `composed: true`, so without this it
    // would ALSO reach any `oninput` listener a consumer attaches to this
    // component -- as a second, distinct call, after the semantic one
    // dispatched below, but with `event.detail` being `0` (UIEvent's
    // legacy numeric default), not the typed value. Confirmed live: an
    // `oninput` listener saw both a CustomEvent(detail: "k") and an
    // InputEvent(detail: 0) for a single keystroke. Our own replacement
    // event doesn't need to be composed itself -- it only has to reach the
    // direct parent's `oninput` listener on this host, which `bubbles`
    // alone already does (dispatching happens on the host, already inside
    // that parent's own light DOM).
    event.stopPropagation();

    const target = event.target as HTMLInputElement;
    this.value = target.value;

    this.dispatchEvent(
      new CustomEvent('input', {
        detail: this.value,
        bubbles: true
      })
    );
  }

  handleChange(event: Event) {
    // Unlike `input`, the native `change` event is NOT composed -- it
    // never crosses the shadow boundary on its own, so there's nothing to
    // stop here (confirmed live: an external `onchange` listener saw only
    // the semantic CustomEvent below, never a second native delivery).

    const target = event.target as HTMLInputElement;
    this.value = target.value;

    this.dispatchEvent(
      new CustomEvent('change', {
        detail: this.value,
        bubbles: true
      })
    );
  }

  handleFocus() {
    this.hasFocus = true;
  }

  handleBlur() {
    this.hasFocus = false;
    this.validationShown = true;
  }

  get controlPart(): string {
    return partList('control', { disabled: this.disabled, invalid: this.invalid });
  }

  // Which text slots have content -- see fandry/textSlots.
  textSlots: Record<string, boolean> = {};

  handleTextSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    this.textSlots = { ...this.textSlots, [slot.name || 'default']: slotHasContent(slot) };
  }

  get labelHidden(): boolean {
    return !this.hasLabel;
  }

  get helpTextHidden(): boolean {
    return !this.hasHelpText;
  }
}
