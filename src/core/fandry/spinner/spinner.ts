import { api } from 'lwc';
import Base from 'fandry/base';

/** Text the spinner announces that isn't markup; see `messages`. */
export interface FdSpinnerMessages {
  /** The status's accessible name. */
  label: string;
}

export const DEFAULT_SPINNER_MESSAGES: FdSpinnerMessages = {
  label: 'Loading'
};

export default class Spinner extends Base {
  @api size: 'sm' | 'md' | 'lg' = 'md';
  /** Replaces any of DEFAULT_SPINNER_MESSAGES, e.g. to translate them. */
  @api messages: Partial<FdSpinnerMessages> = {};
  /** This instance's name. Wins over `messages.label`. */
  @api label = '';
  /** This instance's name, as `aria-label` on any element. Wins over `label`. */
  @api ariaLabel = '';

  get accessibleLabel(): string {
    return this.ariaLabel || this.label || { ...DEFAULT_SPINNER_MESSAGES, ...this.messages }.label;
  }

  get classes() {
    return ['spinner', `spinner--${this.size}`].join(' ');
  }
}
