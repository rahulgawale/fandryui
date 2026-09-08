import { api } from 'lwc';
import Base from 'fd/base';

// See checkbox.ts for why this list exists: it keeps a consumer's
// `elementProps` from clobbering a property the component itself controls.
const RESERVED_ELEMENT_PROPS = ['type', 'name', 'value', 'checked', 'disabled', 'class', 'onchange'];

export default class Radio extends Base {
  @api label = '';
  @api name = '';
  @api value = '';
  @api checked = false;
  @api disabled = false;

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
        `fd-radio: elementProps included ${rejectedKeys.map((key) => `"${key}"`).join(', ')}, which fd-radio already controls via its own @api props -- ignored to avoid desyncing the radio's state. Use the dedicated @api prop instead (e.g. \`checked\`, \`disabled\`).`
      );
    }

    return result;
  }

  // Lets fd-radio-group move real focus to a specific radio's native input
  // (e.g. arrow-key navigation between radios) -- the default inherited
  // HTMLElement.focus() would just focus this custom element's own host,
  // which does nothing useful without an internal <input> actually
  // receiving focus.
  @api
  focus() {
    const input = this.template.querySelector('.input') as HTMLInputElement | null;
    input?.focus();
  }

  handleChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.checked) {
      this.checked = true;

      this.dispatchEvent(
        new CustomEvent('change', {
          detail: { value: this.value, name: this.name },
          bubbles: true
        })
      );
    }
  }
}
