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

  // role="alert" is an assertive live region -- it interrupts whatever a
  // screen reader is currently announcing, which is appropriate for
  // warning/danger but overbearing for routine info/success messages.
  // role="status" (polite) waits for a pause instead. Per WAI-ARIA
  // guidance on live-region urgency.
  get role(): 'alert' | 'status' {
    return this.variant === 'warning' || this.variant === 'danger' ? 'alert' : 'status';
  }
}
