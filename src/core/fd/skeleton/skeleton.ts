import { api } from 'lwc';
import Base from 'fd/base';

export default class Skeleton extends Base {
  @api variant: 'text' | 'circle' | 'rect' = 'text';

  get classes() {
    return ['skeleton', `skeleton--${this.variant}`].join(' ');
  }
}
