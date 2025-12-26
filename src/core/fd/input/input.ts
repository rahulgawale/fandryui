import { api, track } from 'lwc';
import Base from 'fd/base';
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

  @track hasFocus = false;

  get hasLabel(): boolean {
    return !!this.label;
  }

  get hasHelpText(): boolean {
    return !!this.helpText;
  }

  handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value = target.value;

    this.dispatchEvent(
      new CustomEvent('input', {
        detail: this.value,
        bubbles: true,
        composed: true
      })
    );
  }

  handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
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
