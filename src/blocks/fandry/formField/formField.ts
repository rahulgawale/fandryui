import { api } from 'lwc';
import Base from 'fandry/base';

export interface FdFormOption {
  label: string;
  value: string;
}

export type FdFormFieldType =
  | 'text'
  | 'email'
  | 'number'
  | 'tel'
  | 'url'
  | 'password'
  | 'date'
  | 'textarea'
  | 'select'
  | 'radio'
  | 'checkbox'
  | 'switch';

/**
 * One field of a form. Plain data, so a form's shape can come from wherever
 * the consumer already keeps it.
 *
 *   { name: 'email', label: 'Email', type: 'email', required: true,
 *     validate: (value) => (String(value).includes('@') ? undefined : 'Enter an email address.') }
 */
export interface FdFormField {
  /** The key in the form's `values`. */
  name: string;
  label: string;
  /** Defaults to `text`. */
  type?: FdFormFieldType;
  /** For `select` and `radio`. */
  options?: FdFormOption[];
  /** Must have a value (a checkbox or switch: must be on). */
  required?: boolean;
  /** Shown as read-only text even while the form is being edited. */
  readonly?: boolean;
  helpText?: string;
  placeholder?: string;
  /** Spread onto the native control, e.g. `{ autocomplete: 'email', maxLength: 80 }`. */
  elementProps?: Record<string, unknown>;
  /** Returns a message when the value is not acceptable. Runs after the `required` check. */
  validate?: (value: unknown, values: Record<string, unknown>) => string | undefined | void;
}

const INPUT_TYPES: FdFormFieldType[] = ['text', 'email', 'number', 'tel', 'url', 'password', 'date'];

const EMPTY_TEXT = '—';

/**
 * One field: its label, its control, its help text and its error -- or, in
 * `read` mode, the label and the value as text. It owns no state: the value
 * and the error come in, and a single `change` (every edit, keystrokes
 * included), `blur`, and `submit` (Enter in a text input) go out. fandry-form is a list of these; use one on its
 * own, or extend fandry/formState, when a screen needs a field the form
 * doesn't render the way you want.
 */
export default class FormField extends Base {
  @api field: FdFormField | null = null;
  @api value: unknown = '';
  /** The message to show. An empty string means the field is fine. */
  @api error = '';
  /** `edit` shows the control; `read` shows the value as text. */
  @api mode: 'read' | 'edit' = 'edit';
  @api disabled = false;

  @api
  focus() {
    (this.template.querySelector('.control') as HTMLElement | null)?.focus();
  }

  get hasField(): boolean {
    return !!this.field;
  }

  private get type(): FdFormFieldType {
    return this.field?.type ?? 'text';
  }

  get isReadOnly(): boolean {
    return this.mode === 'read' || !!this.field?.readonly;
  }

  get isInput(): boolean {
    return INPUT_TYPES.includes(this.type);
  }

  get isTextarea(): boolean {
    return this.type === 'textarea';
  }

  get isSelect(): boolean {
    return this.type === 'select';
  }

  get isRadio(): boolean {
    return this.type === 'radio';
  }

  get isCheckbox(): boolean {
    return this.type === 'checkbox';
  }

  get isSwitch(): boolean {
    return this.type === 'switch';
  }

  get inputType(): string {
    return this.type;
  }

  get stringValue(): string {
    return this.value == null ? '' : String(this.value);
  }

  get checked(): boolean {
    return !!this.value;
  }

  // fandry-radio-group takes `value` only for its Tab stop: which radio is
  // selected is each radio's own `checked`.
  get radioOptions(): Array<FdFormOption & { checked: boolean }> {
    return this.options.map((option) => ({ ...option, checked: option.value === this.stringValue }));
  }

  get options(): FdFormOption[] {
    return this.field?.options ?? [];
  }

  // The primitives that have a place for help text take it as a prop, so it
  // stays wired to the control; the rest have no such place.
  get showOwnHelpText(): boolean {
    return !!this.field?.helpText && (this.isRadio || this.isCheckbox || this.isSwitch);
  }

  get hasError(): boolean {
    return !!this.error;
  }

  // `tabIndex` is what every native control needs to be in Safari's Tab
  // order (see the primitives), and it is lost as soon as elementProps is
  // replaced, so it is restated here. The consumer's props go in between,
  // so they can override either.
  get controlProps(): Record<string, unknown> {
    const props: Record<string, unknown> = {
      tabIndex: 0,
      ...this.field?.elementProps,
      ariaInvalid: this.hasError ? 'true' : 'false'
    };
    if (this.field?.required && (this.isCheckbox || this.isSwitch)) props.ariaRequired = 'true';
    return props;
  }

  get readText(): string {
    const text = this.readableValue();
    return text === '' ? EMPTY_TEXT : text;
  }

  private readableValue(): string {
    if (this.isCheckbox || this.isSwitch) return this.checked ? 'Yes' : 'No';
    if (this.isSelect || this.isRadio) {
      return this.options.find((option) => option.value === this.stringValue)?.label ?? this.stringValue;
    }
    // A password is not something to read back out on screen.
    if (this.type === 'password') return this.stringValue ? '•'.repeat(8) : '';
    return this.stringValue;
  }

  handleControlChange(event: CustomEvent<unknown>) {
    // fandry-input's `input` and `change`, the radio group's `{ value }` and
    // the rest all become this one event.
    event.stopPropagation();
    const detail = event.detail;
    const value = detail !== null && typeof detail === 'object' ? (detail as { value: unknown }).value : detail;
    this.dispatchEvent(new CustomEvent('change', { detail: { value }, bubbles: true }));
  }

  handleKeydown(event: KeyboardEvent) {
    // Enter in a text input asks to submit, as it does in a native form. Not
    // in a textarea (a new line) or a select (its trigger uses Enter to open).
    // Checked here, inside the field's own tree, where the event's target is
    // still the input -- from the form's side it is just this field.
    if (event.key === 'Enter' && (event.target as HTMLElement).tagName === 'FANDRY-INPUT') {
      event.preventDefault();
      this.dispatchEvent(new CustomEvent('submit', { bubbles: true }));
    }
  }

  handleFocusOut() {
    this.dispatchEvent(new CustomEvent('blur', { bubbles: true }));
  }
}
