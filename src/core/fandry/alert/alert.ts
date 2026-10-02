import { api } from 'lwc';
import Base from 'fandry/base';
import { partList } from 'fandry/parts';
import { slotHasContent } from 'fandry/textSlots';

export default class Alert extends Base {
  @api variant: 'info' | 'success' | 'warning' | 'danger' = 'info';
  @api title = '';

  get classes() {
    return ['alert', `alert--${this.variant}`].join(' ');
  }

  get hasTitle(): boolean {
    return !!this.title || !!this.textSlots.title;
  }

  // role="alert" is an assertive live region -- it interrupts whatever a
  // screen reader is currently announcing, which is appropriate for
  // warning/danger but overbearing for routine info/success messages.
  // role="status" (polite) waits for a pause instead. Per WAI-ARIA
  // guidance on live-region urgency.
  get role(): 'alert' | 'status' {
    return this.variant === 'warning' || this.variant === 'danger' ? 'alert' : 'status';
  }

  get basePart(): string {
    return partList('base', { [this.variant || 'info']: true });
  }

  // Which text slots have content -- see fandry/textSlots.
  textSlots: Record<string, boolean> = {};

  handleTextSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    this.textSlots = { ...this.textSlots, [slot.name || 'default']: slotHasContent(slot) };
  }

  get titleHidden(): boolean {
    return !this.hasTitle;
  }
}
