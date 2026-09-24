import { api } from 'lwc';
import Base from 'fandry/base';
import { partList } from 'fandry/parts';

export default class Badge extends Base {
  @api variant: 'default' | 'primary' | 'success' | 'warning' | 'danger' =
    'default';

  get classes() {
    return ['badge', `badge--${this.variant}`].join(' ');
  }

  get basePart(): string {
    return partList('base', { [this.variant]: true });
  }
}
