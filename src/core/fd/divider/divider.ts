import { api } from 'lwc';
import Base from 'fd/base';

export default class Divider extends Base {
  @api orientation: 'horizontal' | 'vertical' = 'horizontal';

  get classes() {
    return ['divider', `divider--${this.orientation}`].join(' ');
  }
}
