import { api } from 'lwc';
import Base from 'fd/base';

// See fd-checkbox's checkbox.ts for why this list exists: it keeps a
// consumer's `elementProps` from clobbering a property the component
// itself controls -- `id` is reserved because fd-label's
// `html-for="textarea"` association depends on it staying put.
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
  'ariaDescribedby',
  'ariaDescribedByElements',
  'oninput',
  'onchange'
];

export default class Textarea extends Base {
  @api label = '';
  @api helpText = '';
  @api value = '';
  @api name = '';
  @api placeholder = '';
  @api rows = 3;
  @api disabled = false;
  @api readonly = false;
  @api required = false;

  // Spread onto the native <textarea> via `lwc:spread` -- see checkbox.ts
  // for why this can't reach `data-*` attributes, and why that's not
  // solved with a dedicated prop either. No tabIndex default here: Safari
  // already includes plain text fields in the Tab order by default.
  @api elementProps: Record<string, unknown> = {};

  private lastWarnedElementProps: Record<string, unknown> | null = null;

  get hasLabel(): boolean {
    return !!this.label;
  }

  get hasHelpText(): boolean {
    return !!this.helpText;
  }

  renderedCallback() {
    // <textarea value={value}> is not a valid template binding (LWC1057,
    // same class of issue as fd-select's old native <select> and
    // fd-checkbox's `indeterminate`) -- a <textarea> has no `value`
    // HTML attribute, only a DOM property, so it has to be synced
    // imperatively after render instead. Discovered as a pre-existing bug:
    // `value` had silently never populated the native textarea's content.
    //
    // `value` is read here only via the template's `data-value={value}`
    // binding (harmless, otherwise unused) -- same reason fd-checkbox binds
    // `aria-checked` to reach `indeterminate`: without SOME template read,
    // LWC has no reactive edge for `value` and this would only ever run on
    // first paint, not on a later update to `value` alone.
    const textarea = this.template.querySelector('.textarea') as HTMLTextAreaElement | null;
    if (textarea && textarea.value !== this.value) {
      textarea.value = this.value;
    }
  }

  get resolvedElementProps(): Record<string, unknown> {
    const result: Record<string, unknown> = {};
    const rejectedKeys: string[] = [];

    for (const [key, value] of Object.entries(this.elementProps)) {
      if (RESERVED_ELEMENT_PROPS.includes(key)) {
        rejectedKeys.push(key);
      } else {
        result[key] = value;
      }
    }

    if (rejectedKeys.length && this.elementProps !== this.lastWarnedElementProps) {
      this.lastWarnedElementProps = this.elementProps;
      // eslint-disable-next-line no-console
      console.warn(
        `fd-textarea: elementProps included ${rejectedKeys.map((key) => `"${key}"`).join(', ')}, which fd-textarea already controls via its own @api props -- ignored to avoid desyncing the textarea's state. Use the dedicated @api prop instead (e.g. \`value\`, \`rows\`, \`disabled\`).`
      );
    }

    return result;
  }

  handleInput(event: Event) {
    // See fd/input's handleInput -- the native `input` event is
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
    // fd/input's handleChange for why nothing needs to be stopped here.

    const target = event.target as HTMLTextAreaElement;
    this.value = target.value;

    this.dispatchEvent(
      new CustomEvent('change', {
        detail: this.value,
        bubbles: true
      })
    );
  }
}
