import Base from 'fd/base';
import { api } from 'lwc';

// See checkbox.ts for why this list exists: it keeps a consumer's
// `elementProps` from clobbering a property the component itself controls.
const RESERVED_ELEMENT_PROPS = ['type', 'name', 'value', 'checked', 'disabled', 'class', 'role', 'onchange', 'ariaChecked'];

export default class Switch extends Base {
  @api label = '';
  @api checked = false;
  @api disabled = false;
  @api name = '';
  @api value = '';

  // Spread onto the native <input> via `lwc:spread` -- see checkbox.ts for
  // why this can't reach `data-*` attributes, and why that's not solved
  // with a dedicated prop either.
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
        `fd-switch: elementProps included ${rejectedKeys.map((key) => `"${key}"`).join(', ')}, which fd-switch already controls via its own @api props -- ignored to avoid desyncing the switch's state. Use the dedicated @api prop instead (e.g. \`checked\`, \`disabled\`).`
      );
    }

    return result;
  }

  get ariaChecked() {
    return this.checked ? 'true' : 'false';
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
