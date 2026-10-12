import { api } from 'lwc';
import Base from 'fandry/base';
import { partList } from 'fandry/parts';

export type FdBadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger';

export default class Badge extends Base {
  @api variant: FdBadgeVariant = 'default';

  get classes() {
    return ['badge', `badge--${this.variant}`].join(' ');
  }

  get basePart(): string {
    return partList('base', { [this.variant || 'default']: true });
  }
}
