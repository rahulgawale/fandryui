import Base from 'fd/base';
import { api } from 'lwc';

export default class Switch extends Base {
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
