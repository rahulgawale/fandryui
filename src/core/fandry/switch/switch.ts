import Base from 'fandry/base';
import { partList } from 'fandry/parts';
import { api, track } from 'lwc';

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
    return this.resolveElementProps(this.elementProps, RESERVED_ELEMENT_PROPS, 'fandry-switch');
  }

  get ariaChecked() {
    return this.checked ? 'true' : 'false';
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
    return partList('control', { checked: this.checked, disabled: this.disabled });
  }

  /* Which text slots have content, so a label or help text a page slots in
     shows even without the matching prop. The wrapper stays in the DOM
     (hidden while empty), so its slot is always there to be filled. */
  @track textSlots: Record<string, boolean> = {};

  handleTextSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    const filled = slot.assignedNodes().some((node) => node.nodeType === 1 || !!node.textContent?.trim());
    this.textSlots = { ...this.textSlots, [slot.name || 'default']: filled };
  }

  get hasLabel(): boolean {
    return !!this.label || !!this.textSlots['default'];
  }

  get labelHidden(): boolean {
    return !this.hasLabel;
  }
}
