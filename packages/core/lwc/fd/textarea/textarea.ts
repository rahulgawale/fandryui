import { api } from 'lwc';
import Base from '../base/base';

export default class Textarea extends Base {

  @api label = '';
  @api helpText = '';
  @api value = '';
  @api name = '';
  @api placeholder = '';
  @api rows = 3;
  @api disabled = false;
  @api readonly = false;
  @api required = false;

  get hasLabel(): boolean {
    return !!this.label;
  }

  get hasHelpText(): boolean {
    return !!this.helpText;
  }

  handleInput(event: Event) {
    const target = event.target as HTMLTextAreaElement;
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
    const target = event.target as HTMLTextAreaElement;
    this.value = target.value;

    this.dispatchEvent(
      new CustomEvent('change', {
        detail: this.value,
        bubbles: true,
        composed: true
      })
    );
  }
}
