import { api } from 'lwc';
import Base from 'fd/base';

export default class Checkbox extends Base {
  @api label = '';
  @api checked = false;
  @api disabled = false;
  @api name = '';
  @api value = '';

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
