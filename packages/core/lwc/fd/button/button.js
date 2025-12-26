import { LightningElement, api } from 'lwc';

export default class FdButton extends LightningElement {
  @api variant = 'primary';
  @api type = 'button';
  @api disabled = false;

  get classes() {
    return `btn btn--${this.variant}`;
  }
}
