import { api } from 'lwc';
import Base from 'fandry/base';

export default class Badge extends Base {
  @api variant: 'default' | 'primary' | 'success' | 'warning' | 'danger' =
    'default';

  get classes() {
    return ['badge', `badge--${this.variant}`].join(' ');
  }
}
