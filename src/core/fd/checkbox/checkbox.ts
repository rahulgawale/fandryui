import { api } from 'lwc';
import Base from 'fd/base';

// Properties the component itself already binds onto the native <input> --
// stripped from a consumer's `elementProps` before spreading so a
// (possibly accidental) matching key there can't desync the checkbox's own
// controlled state (e.g. `elementProps={ checked: false }` silently
// unchecking a checkbox whose `checked` API prop is still `true`).
const RESERVED_ELEMENT_PROPS = ['type', 'name', 'value', 'checked', 'disabled', 'class', 'onchange', 'ariaChecked', 'ariaLabel'];

export default class Checkbox extends Base {
  @api label = '';
  @api checked = false;
  @api disabled = false;
  @api name = '';
  @api value = '';
  @api ariaLabel = '';

  // Spread onto the native <input> via `lwc:spread` -- lets a consumer pass
  // through anything the library doesn't already control (tabIndex,
  // additional aria-* attributes, etc). Defaults tabIndex to 0 because
  // Safari excludes checkboxes from the Tab order by default otherwise; a
  // consumer can override it (e.g. `{ tabIndex: -1 }`).
  //
  // Deliberately can't reach `data-*` attributes -- `lwc:spread` sets JS
  // IDL properties (camelCase), and a plain <input> has no `data-testid`
  // property, only `.dataset`. Not solved with a dedicated prop either: a
  // consumer can already tag the `fd-checkbox` host itself with a plain
  // `data-testid` attribute (no library support needed, same as `class`),
  // and every one of these components has exactly one interactive element
  // inside, so a shadow-piercing selector (or `.shadowRoot.querySelector`)
  // already reaches it unambiguously without needing a second prop.
  @api elementProps: Record<string, unknown> = { tabIndex: 0 };

  private lastWarnedElementProps: Record<string, unknown> | null = null;

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
        `fd-checkbox: elementProps included ${rejectedKeys.map((key) => `"${key}"`).join(', ')}, which fd-checkbox already controls via its own @api props -- ignored to avoid desyncing the checkbox's state. Use the dedicated @api prop instead (e.g. \`checked\`, \`disabled\`).`
      );
    }

    return result;
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
    }
  }

  handleChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.checked = input.checked;

    this.dispatchEvent(
      new CustomEvent('change', {
        detail: this.checked,
        bubbles: true,
        composed: true
      })
    );
  }
}
