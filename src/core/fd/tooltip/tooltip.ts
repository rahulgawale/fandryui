import { api, track } from 'lwc';
import Base from 'fd/base';

// Each instance needs a genuinely unique id, not a static literal -- a
// consumer can have two fd-tooltips open at once (e.g. one left open by a
// lingering mouse hover while Tab focuses a second trigger elsewhere), and
// a duplicate `id="panel"` on both would make `aria-describedby` ambiguous
// about which tooltip it refers to.
let idCounter = 0;

export default class FdTooltip extends Base {
  @api placement: 'top' | 'bottom' | 'left' | 'right' = 'top';

  // Debounces the hover path only (see handleTriggerFocusIn below) so a
  // fast mouse pass-over doesn't flash the tooltip open. No matching
  // close delay: fd-tooltip's content is meant to be plain descriptive
  // text (per the WAI-ARIA tooltip pattern, never interactive), so there's
  // no reason for a consumer to move the pointer toward the panel itself,
  // and hiding on the next tick keeps the "why is this still open"
  // surface area small.
  @api openDelay = 300;

  // Deliberately no `content`/`text` @api prop -- the default slot already
  // covers plain text the same way fd-popover's panel does, and stays
  // rich-content-capable for free (see fd-popover's own panel slot).
  //
  // Deliberately uncontrolled (no `@api open` the way fd-popover has) --
  // unlike a popover, a tooltip's open state is never something a
  // consumer's own business logic decides; it only ever tracks hover/focus
  // of its own trigger, so there's nothing for an external `open` binding
  // to usefully drive.
  @track isOpen = false;

  private readonly tooltipId = `fd-tooltip-${++idCounter}`;
  private openTimerId: number | null = null;

  get panelClasses(): string {
    return ['panel', `panel--${this.placement}`].join(' ');
  }

  // Confirmed live (both in this project's jest environment and a real
  // browser via lwr dev) that a template `id` binding's *rendered* value
  // isn't always the literal string assigned to it -- LWC's engine is
  // free to rewrite/scope it. That rewrite happens only within this own
  // template, though, and can't reach the `aria-describedby` this sets on
  // the slotted (different-template, light-DOM) trigger element -- so
  // that has to be wired off the real rendered id read back here, not
  // `this.tooltipId` directly, which could silently drift from it.
  renderedCallback() {
    const trigger = this.getTriggerElement();
    if (!trigger) {
      return;
    }

    const panel = this.template.querySelector('.panel');
    if (this.isOpen && panel) {
      trigger.setAttribute('aria-describedby', panel.id);
    } else {
      trigger.removeAttribute('aria-describedby');
    }
  }

  connectedCallback() {
    // Bubbling variants (not mouseenter/mouseleave/focus/blur), listened
    // for on the host itself -- see fd-popover's connectedCallback for why
    // a plain template-bound handler on our own internal `.trigger` span
    // can't reliably observe events originating inside a slotted trigger
    // that's its own custom element with its own shadow tree (e.g.
    // fd-button); this is the same fix, generalized to hover/focus.
    this.addEventListener('mouseover', this.handleTriggerMouseOver);
    this.addEventListener('mouseout', this.handleTriggerMouseOut);
    this.addEventListener('focusin', this.handleTriggerFocusIn);
    this.addEventListener('focusout', this.handleTriggerFocusOut);
    document.addEventListener('keydown', this.handleDocumentKeydown);
  }

  disconnectedCallback() {
    this.removeEventListener('mouseover', this.handleTriggerMouseOver);
    this.removeEventListener('mouseout', this.handleTriggerMouseOut);
    this.removeEventListener('focusin', this.handleTriggerFocusIn);
    this.removeEventListener('focusout', this.handleTriggerFocusOut);
    document.removeEventListener('keydown', this.handleDocumentKeydown);
    this.clearOpenTimer();
  }

  // `event.target` (not composedPath()) matches fd-popover's own
  // `handleHostClick` -- confirmed there that a host-level listener sees
  // the real originating element directly, not a retargeted one.
  private isWithinTrigger(target: EventTarget | null): boolean {
    return target instanceof Element ? !!target.closest('[slot="trigger"]') : false;
  }

  handleTriggerMouseOver = (event: MouseEvent) => {
    // mouseover/mouseout (unlike mouseenter/mouseleave) re-fire for every
    // descendant boundary crossed while moving around inside a compound
    // trigger -- ignoring moves where both sides of the crossing are
    // still within the trigger keeps this to one open per hover, one
    // close per leave.
    if (
      !this.isWithinTrigger(event.target) ||
      this.isWithinTrigger(event.relatedTarget as Element | null)
    ) {
      return;
    }

    this.scheduleShow();
  };

  handleTriggerMouseOut = (event: MouseEvent) => {
    if (
      !this.isWithinTrigger(event.target) ||
      this.isWithinTrigger(event.relatedTarget as Element | null)
    ) {
      return;
    }

    this.clearOpenTimer();
    this.hide();
  };

  handleTriggerFocusIn = (event: FocusEvent) => {
    if (!this.isWithinTrigger(event.target)) {
      return;
    }

    // No delay on keyboard focus -- unlike an incidental mouse pass-over,
    // a Tab landing on the trigger is a deliberate move, and the WAI-ARIA
    // tooltip pattern expects immediate feedback for it.
    this.clearOpenTimer();
    this.show();
  };

  handleTriggerFocusOut = (event: FocusEvent) => {
    if (!this.isWithinTrigger(event.target)) {
      return;
    }

    this.clearOpenTimer();
    this.hide();
  };

  handleDocumentKeydown = (event: KeyboardEvent) => {
    // Dismiss-only, no focus movement -- unlike fd-popover's Escape
    // handling, focus already sits on the trigger in the keyboard-driven
    // case (that's what opened the tooltip), and a hover-driven open has
    // no focus to give back.
    if (this.isOpen && event.key === 'Escape') {
      this.hide();
    }
  };

  private scheduleShow() {
    this.clearOpenTimer();
    this.openTimerId = window.setTimeout(() => this.show(), this.openDelay);
  }

  private clearOpenTimer() {
    if (this.openTimerId !== null) {
      window.clearTimeout(this.openTimerId);
      this.openTimerId = null;
    }
  }

  private getTriggerElement(): Element | null {
    return this.querySelector('[slot="trigger"]');
  }

  private show() {
    this.clearOpenTimer();

    if (this.isOpen) {
      return;
    }

    this.isOpen = true;
    this.dispatchEvent(new CustomEvent('toggle', { detail: true, bubbles: true }));
  }

  private hide() {
    this.clearOpenTimer();

    if (!this.isOpen) {
      return;
    }

    this.isOpen = false;
    this.dispatchEvent(new CustomEvent('toggle', { detail: false, bubbles: true }));
  }
}
