import { api } from 'lwc';
import Base from 'fd/base';

export default class Radio extends Base {
  @api label = '';
  @api name = '';
  @api value = '';
  @api checked = false;
  @api disabled = false;

  handleChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.checked) {
      this.checked = true;

      this.dispatchEvent(
        new CustomEvent('change', {
          detail: { value: this.value, name: this.name },
          bubbles: true,
          composed: true
        })
      );
    }
  }
}
