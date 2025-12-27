import { api } from 'lwc';
import Base from 'fd/base';

export default class FdButton extends Base {
  @api variant: 'default' | 'secondary' | 'ghost' = 'default';
  @api size: 'sm' | 'md' = 'md';
  @api disabled = false;
  @api type: 'button' | 'submit' | 'reset' = 'button';

  get classes() {
    return ['button', `button--${this.variant}`, `button--${this.size}`].join(
      ' '
    );
  }
}
