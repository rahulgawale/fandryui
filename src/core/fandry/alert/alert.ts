import { api, track } from 'lwc';
import Base from 'fandry/base';
import { partList } from 'fandry/parts';

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
    return partList('base', { [this.variant]: true });
  }

  /* Which text slots have content, so a label or help text a page slots in
     shows even without the matching prop. The wrapper stays in the DOM
     (hidden while empty), so its slot is always there to be filled. */
  @track textSlots: Record<string, boolean> = {};

  handleTextSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    const filled = slot.assignedNodes().some((node) => node.nodeType === 1 || !!node.textContent?.trim());
    this.textSlots = { ...this.textSlots, [slot.name || 'default']: filled };
  }

  get titleHidden(): boolean {
    return !this.hasTitle;
  }
}
