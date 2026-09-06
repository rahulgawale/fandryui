import { api, track } from 'lwc';
import Base from 'fd/base';

export interface FdSelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export default class Select extends Base {
  @api label = '';
  @api helpText = '';
  @api name = '';
  @api value = '';
  @api placeholder = '';
  @api options: FdSelectOption[] = [];
  @api disabled = false;
  @api required = false;

  @track hasFocus = false;

  get hasLabel(): boolean {
    return !!this.label;
  }

  get hasHelpText(): boolean {
    return !!this.helpText;
  }

  get hasPlaceholder(): boolean {
    return !!this.placeholder;
  }

  renderedCallback() {
    // <select value={value}> is not a valid template binding (LWC1057) -- the
    // native element only exposes value as a property, and its initial
    // selection must be synced imperatively after the <option> children render.
    const select = this.template.querySelector('select') as HTMLSelectElement | null;
    if (select && select.value !== this.value) {
      select.value = this.value;
    }
  }

  handleChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.value = target.value;

    this.dispatchEvent(
      new CustomEvent('change', {
        detail: this.value,
        bubbles: true,
        composed: true
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
