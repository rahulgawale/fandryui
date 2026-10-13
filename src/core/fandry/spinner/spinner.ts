import { api } from 'lwc';
import Base from 'fandry/base';
import { slotHasContent } from 'fandry/textSlots';

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

  // Visible text in the default slot names the status, so it isn't read twice.
  get namedByText(): boolean {
    return this.hasText && !this.ariaLabel;
  }

  get ringLabel(): string | null {
    return this.namedByText ? null : this.accessibleLabel;
  }

  get ringLabelledBy(): string | null {
    return this.namedByText ? 'label' : null;
  }

  // Whether the default slot has content -- see fandry/textSlots.
  hasText = false;

  handleTextSlotChange(event: Event) {
    this.hasText = slotHasContent(event.target as HTMLSlotElement);
  }

  get labelHidden(): boolean {
    return !this.hasText;
  }

  get classes() {
    return ['spinner', `spinner--${this.size}`].join(' ');
  }
}
