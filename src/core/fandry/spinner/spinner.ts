import { api } from 'lwc';
import Base from 'fandry/base';

export default class Spinner extends Base {
  @api size: 'sm' | 'md' | 'lg' = 'md';
  @api label = 'Loading';
  /** The accessible name, as `aria-label` on any element. Wins over `label`. */
  @api ariaLabel = '';

  get accessibleLabel(): string {
    return this.ariaLabel || this.label;
  }

  get classes() {
    return ['spinner', `spinner--${this.size}`].join(' ');
  }
}
