import { api, track } from 'lwc';
import Base from 'fd/base';

// See fd-checkbox's checkbox.ts for why this list exists: it keeps a
// consumer's `elementProps` from clobbering a property the component
// itself controls -- `id` is reserved because fd-label's `html-for="input"`
// association depends on it staying put (same reasoning as fd-select's
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
  'ariaDescribedby',
  'ariaDescribedByElements',
  'oninput',
  'onchange',
  'onfocus',
  'onblur'
];

export default class Input extends Base {
  @api label = '';
  @api helpText = '';
  @api value = '';
  @api type: string = 'text';
  @api name = '';
  @api placeholder = '';
  @api disabled = false;
  @api readonly = false;
  @api required = false;
  @api size: 'sm' | 'md' | 'lg' = 'md';

  // Spread onto the native <input> via `lwc:spread` -- see checkbox.ts for
  // why this can't reach `data-*` attributes, and why that's not solved
  // with a dedicated prop either. No tabIndex default here: unlike
  // buttons/checkboxes/radios/selects, Safari already includes plain text
  // fields in the Tab order by default.
  @api elementProps: Record<string, unknown> = {};

  private lastWarnedElementProps: Record<string, unknown> | null = null;

  @track hasFocus = false;

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
        `fd-input: elementProps included ${rejectedKeys.map((key) => `"${key}"`).join(', ')}, which fd-input already controls via its own @api props -- ignored to avoid desyncing the input's state. Use the dedicated @api prop instead (e.g. \`value\`, \`type\`, \`disabled\`).`
      );
    }

    return result;
  }

  get hasLabel(): boolean {
    return !!this.label;
  }

  get hasHelpText(): boolean {
    return !!this.helpText;
  }

  get controlClasses() {
    return ['control', `control--${this.size}`].join(' ');
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
  }
}
