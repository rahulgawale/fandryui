import { api, track } from 'lwc';
import Base from 'fandry/base';
import { partList } from 'fandry/parts';
import { resolveElementProps } from 'fandry/elementProps';
import { slotHasContent } from 'fandry/textSlots';
import { fieldInvalid, withoutAriaInvalid } from 'fandry/fieldError';
import { validationText } from 'fandry/validation';
import type { FdValidationMessages } from 'fandry/validation';

// Properties the component itself already binds onto the native <input> --
// stripped from a consumer's `elementProps` before spreading so a
// (possibly accidental) matching key there can't desync the checkbox's own
// controlled state (e.g. `elementProps={ checked: false }` silently
// unchecking a checkbox whose `checked` API prop is still `true`).
const RESERVED_ELEMENT_PROPS = ['type', 'name', 'value', 'checked', 'disabled', 'required', 'class', 'onchange', 'ariaChecked', 'ariaLabel', 'ariaDescribedBy', 'ariaDescribedByElements'];

export default class Checkbox extends Base {
  @api label = '';
  @api checked = false;
  @api disabled = false;
  @api name = '';
  @api value = '';
  @api ariaLabel = '';

  /** Must be checked: the browser's `required`, checked by the browser. */
  @api required = false;
  // Shown under the checkbox, and makes it invalid -- see fandry/fieldError.
  @api errorText = '';

  /** Your wording for a failed rule (`valueMissing`), else the browser's -- see FdValidationMessages. */
  @api messages: FdValidationMessages = {};

  // The native input's verdict, and whether the user has earned seeing it:
  // the box was left, or reportValidity() was called.
  @track private validationError = '';
  @track private validationShown = false;

  // Spread onto the native <input> via `lwc:spread` -- lets a consumer pass
  // through anything the library doesn't already control (tabIndex,
  // additional aria-* attributes, etc). Defaults tabIndex to 0 because
  // Safari excludes checkboxes from the Tab order by default otherwise; a
  // consumer can override it (e.g. `{ tabIndex: -1 }`).
  //
  // Deliberately can't reach `data-*` attributes -- `lwc:spread` sets JS
  // IDL properties (camelCase), and a plain <input> has no `data-testid`
  // property, only `.dataset`. Not solved with a dedicated prop either: a
  // consumer can already tag the `fandry-checkbox` host itself with a plain
  // `data-testid` attribute (no library support needed, same as `class`),
  // and every one of these components has exactly one interactive element
  // inside, so a shadow-piercing selector (or `.shadowRoot.querySelector`)
  // already reaches it unambiguously without needing a second prop.
  @api elementProps: Record<string, unknown> = { tabIndex: 0 };

  get resolvedElementProps(): Record<string, unknown> {
    return withoutAriaInvalid(resolveElementProps(this, this.elementProps, RESERVED_ELEMENT_PROPS, 'fandry-checkbox'));
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

  /** The native input's ValidityState (`valid`, `valueMissing`). */
  @api
  get validity(): ValidityState | undefined {
    return this.nativeInput?.validity;
  }

  /** The message the checkbox would show: yours from `messages`, else the browser's. '' while valid. */
  @api
  get validationMessage(): string {
    return this.validationError;
  }

  /** Whether the checkbox passes every rule. Shows nothing. */
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

  /**
   * `indeterminate` is a DOM-only property with no HTML attribute
   * equivalent, so it can't be reflected declaratively -- it's synced onto
   * the native input imperatively below, same reason select.ts syncs its
   * native <select>'s value in renderedCallback.
   */
  @api indeterminate = false;

  get ariaChecked(): 'true' | 'false' | 'mixed' {
    if (this.indeterminate) return 'mixed';
    return this.checked ? 'true' : 'false';
  }

  renderedCallback() {
    // `indeterminate` is read here via `ariaChecked`, which template.html
    // binds as `aria-checked` -- that's what makes LWC's dependency
    // tracking re-invoke this callback when `indeterminate` changes alone.
    // Without a template read, LWC has no reactive edge for it and this
    // would only ever run on first paint (verified: it silently didn't fire
    // on updates before `ariaChecked` depended on `indeterminate`).
    const input = this.template.querySelector('.input') as HTMLInputElement | null;
    if (input) {
      input.indeterminate = this.indeterminate;
      this.validationError = validationText(input, undefined, this.messages);
    }
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
    return partList('control', {
      checked: this.checked,
      indeterminate: this.indeterminate,
      disabled: this.disabled,
      invalid: this.invalid
    });
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
