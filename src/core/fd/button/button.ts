import { api } from 'lwc';
import Base from 'fd/base';

export default class FdButton extends Base {
  @api variant = 'primary';
  @api type = 'button';
  @api disabled = false;

  get classes() {
    return `btn btn--${this.variant}`;
  }
}
