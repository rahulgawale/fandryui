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

  get resolvedElementProps(): Record<string, unknown> {
    return this.resolveElementProps(this.elementProps, RESERVED_ELEMENT_PROPS, 'fd-switch');
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
        bubbles: true
      })
    );
  }
}
