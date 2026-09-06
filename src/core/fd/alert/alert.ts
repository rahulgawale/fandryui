import { api } from 'lwc';
import Base from 'fd/base';

export default class Alert extends Base {
  @api variant: 'info' | 'success' | 'warning' | 'danger' = 'info';
  @api title = '';

  get classes() {
    return ['alert', `alert--${this.variant}`].join(' ');
  }

  get hasTitle(): boolean {
    return !!this.title;
  }
}
