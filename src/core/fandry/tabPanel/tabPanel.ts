import { api } from 'lwc';
import Base from 'fandry/base';

export default class FdTabPanel extends Base {
  /** Matches the `value` of one fandry-tab. */
  @api value = '';

  /** Set by fandry-tabs; read-only for a page, which sets `value` on fandry-tabs. */
  @api selected = false;

  /* Names this panel (aria-label). An id can't reach across shadow roots, so
     the panel can't point at its tab with aria-labelledby. */
  @api ariaLabel = '';

  get hiddenPanel(): boolean {
    return !this.selected;
  }

  get label(): string | null {
    return this.ariaLabel || null;
  }

  /* A panel is a Tab stop only when it has nothing focusable to Tab to
     (WAI-ARIA tabs pattern), so keyboard users can still reach its content. */
  hasFocusable = false;

  get tabStop(): '0' | undefined {
    return this.hasFocusable ? undefined : '0';
  }

  /* Looks at the page's own markup, not into other components' shadow
     roots. A custom element counts as focusable when it defines its own
     focus() (every interactive fandry-* component does). */
  handleSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    const focusable = (el: Element) =>
      el.matches('a[href], button, input, select, textarea, summary, [tabindex]:not([tabindex="-1"])') ||
      (el.localName.includes('-') && (el as HTMLElement).focus !== HTMLElement.prototype.focus);
    this.hasFocusable = slot.assignedElements().some((el) => focusable(el) || Array.from(el.querySelectorAll('*')).some(focusable));
  }
}
