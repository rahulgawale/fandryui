import { api } from 'lwc';
import Base from 'fd/base';

export default class Spinner extends Base {
  @api size: 'sm' | 'md' | 'lg' = 'md';
  @api label = 'Loading';

  get classes() {
    return ['spinner', `spinner--${this.size}`].join(' ');
  }
}
