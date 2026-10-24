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
// itself controls -- `id` is reserved because the label's
// `for="textarea"` association depends on it staying put.
// `aria-describedby` has no plain string IDL property (see select.ts's
// fuller note) -- only the newer `ariaDescribedByElements`
// (element-reference), reserved here since this component sets
// `aria-describedby="help-text"` itself.
const RESERVED_ELEMENT_PROPS = [
  'id',
  'name',
  'value',
  'rows',
  'disabled',
  'readonly',
  'required',
  'class',
  'ariaDescribedBy',
  'ariaDescribedByElements',
  'oninput',
  'onchange'
];

export default class Textarea extends Base {
  @api label = '';
  @api helpText = '';
  // Shown under the control, and makes the field invalid -- see fandry/fieldError.
  @api errorText = '';
  @api value = '';
  @api name = '';
  @api placeholder = '';
  @api rows = 3;
  @api disabled = false;
  @api readonly = false;
  @api required = false;

  // The browser's constraints, set on the native textarea: it decides what
  // is valid, and words the message.
  @api minLength: number | null = null;
  @api maxLength: number | null = null;

  /** A rule the browser has no attribute for -- see FdValidate. */
  @api validate?: FdValidate;

  /** Your wording for a failed rule, by ValidityState name -- see FdValidationMessages. */
  @api messages: FdValidationMessages = {};

  // Spread onto the native <textarea> via `lwc:spread` -- see checkbox.ts
  // for why this can't reach `data-*` attributes, and why that's not
  // solved with a dedicated prop either. No tabIndex default here: Safari
  // already includes plain text fields in the Tab order by default.
  @api elementProps: Record<string, unknown> = {};

  // The native textarea's verdict, and whether the user has earned seeing
  // it: the field was left, or reportValidity() was called.
  @track private validationError = '';
  @track private validationShown = false;

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

  // Only what there is: an empty description is still announced as one by
  // some screen readers.
  get describedBy(): string | null {
    return fieldDescribedBy(this.hasErrorText, this.hasHelpText);
  }

  renderedCallback() {
    // <textarea value={value}> is not a valid template binding (LWC1057,
    // same class of issue as fandry-select's old native <select> and
    // fandry-checkbox's `indeterminate`) -- a <textarea> has no `value`
    // HTML attribute, only a DOM property, so it has to be synced
    // imperatively after render instead. Discovered as a pre-existing bug:
    // `value` had silently never populated the native textarea's content.
    //
    // `value` is read here only via the template's `data-value={value}`
    // binding (harmless, otherwise unused) -- same reason fandry-checkbox binds
    // `aria-checked` to reach `indeterminate`: without SOME template read,
    // LWC has no reactive edge for `value` and this would only ever run on
    // first paint, not on a later update to `value` alone.
    //
    // null and undefined would otherwise show as the words "null"/"undefined".
    const value = this.value ?? '';
    const textarea = this.template.querySelector('.textarea') as HTMLTextAreaElement | null;
    if (textarea && textarea.value !== value) {
      textarea.value = value;
    }
    // After every render, so a change to the value or to any constraint is
    // checked against what the browser now holds.
    if (textarea) this.validationError = validationText(textarea, this.validate, this.messages);
  }

  private get nativeTextarea(): HTMLTextAreaElement | null {
    return this.template.querySelector('textarea');
  }

  /** The native textarea's ValidityState (`valid`, `valueMissing`, ...). */
  @api
  get validity(): ValidityState | undefined {
    return this.nativeTextarea?.validity;
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
    return this.nativeTextarea?.validity.valid ?? true;
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

  get resolvedElementProps(): Record<string, unknown> {
    return withoutAriaInvalid(resolveElementProps(this, this.elementProps, RESERVED_ELEMENT_PROPS, 'fandry-textarea'));
  }

  // The host isn't itself focusable, only the native control in its shadow
  // tree is -- same fix as fandry-input's focus().
  @api
  focus() {
    (this.template.querySelector('textarea') as HTMLElement | null)?.focus();
  }

  handleInput(event: Event) {
    // See fandry/input's handleInput -- the native `input` event is
    // `composed: true` and would otherwise also reach a consumer's
    // `oninput` listener a second time, with `event.detail` as `0`
    // (UIEvent's legacy numeric default) instead of the typed value.
    event.stopPropagation();

    const target = event.target as HTMLTextAreaElement;
    this.value = target.value;

    this.dispatchEvent(
      new CustomEvent('input', {
        detail: this.value,
        bubbles: true
      })
    );
  }

  handleChange(event: Event) {
    // Unlike `input`, the native `change` event is NOT composed -- see
    // fandry/input's handleChange for why nothing needs to be stopped here.

    const target = event.target as HTMLTextAreaElement;
    this.value = target.value;

    this.dispatchEvent(
      new CustomEvent('change', {
        detail: this.value,
        bubbles: true
      })
    );
  }

  get controlPart(): string {
    return partList('control textarea', { disabled: this.disabled, invalid: this.invalid });
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
