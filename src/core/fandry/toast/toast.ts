import { api, track } from 'lwc';
import Base from 'fandry/base';

export default class FdToast extends Base {
  @api variant: 'info' | 'success' | 'warning' | 'danger' = 'info';

  private _duration = 5000;

  // 0 disables the auto-dismiss timer, leaving the toast open until
  // something else calls dismiss() -- e.g. a close button composed into
  // the default slot by the consumer (see toast.html: deliberately no
  // dedicated close-button prop/slot of its own, same reasoning as
  // fandry-card staying a plain slotted wrapper).
  //
  // A getter/setter pair (rather than a plain @api field) because a static
  // template attribute (e.g. `duration="4000"`) is always a string -- LWC
  // only auto-coerces Boolean-defaulted @api props from bare attributes,
  // so a Number-defaulted one like this needs its own coercion or callers
  // get a string silently passed to `window.setTimeout`.
  @api
  get duration(): number {
    return this._duration;
  }

  set duration(value: number) {
    this._duration = Number(value);
  }

  @track isClosing = false;

  private dismissTimerId: number | null = null;

  connectedCallback() {
    this.scheduleAutoDismiss();
  }

  disconnectedCallback() {
    this.clearDismissTimer();
  }

  get classes(): string {
    return ['toast', `toast--${this.variant}`, this.isClosing ? 'toast--closing' : '']
      .filter(Boolean)
      .join(' ');
  }

  // Mirrors fandry-alert's own role split: warning/danger are urgent enough to
  // interrupt (assertive `alert`), info/success can wait for a pause
  // (polite `status`). See alert.ts for the full WAI-ARIA reasoning.
  get role(): 'alert' | 'status' {
    return this.variant === 'warning' || this.variant === 'danger' ? 'alert' : 'status';
  }

  private scheduleAutoDismiss() {
    if (this.duration > 0) {
      this.dismissTimerId = window.setTimeout(() => this.dismiss(), this.duration);
    }
  }

  private clearDismissTimer() {
    if (this.dismissTimerId !== null) {
      window.clearTimeout(this.dismissTimerId);
      this.dismissTimerId = null;
    }
  }

  // Public so a consumer's own slotted close button can trigger the same
  // closing animation the auto-dismiss timer uses, instead of this
  // component needing to own a dedicated close affordance itself.
  @api
  dismiss() {
    if (this.isClosing) {
      return;
    }

    this.clearDismissTimer();
    this.isClosing = true;
  }

  // CSS-driven, not a `setTimeout` guessing the animation's duration --
  // see fandry-tooltip's own handleAnimationEnd for why. Only a completed exit
  // animation should notify the consumer; this event fires on the toast's
  // own mount-in animation too, so isClosing (already true only once
  // dismiss() has run) is what tells the two apart.
  handleAnimationEnd = () => {
    if (this.isClosing) {
      // bubbles-only: the consumer listens via ondismiss on the host
      // itself (already in their own light DOM) to remove this fandry-toast
      // from whatever list rendered it -- no need to cross further shadow
      // boundaries. See fandry-popover's `toggle` event for the same
      // reasoning.
      this.dispatchEvent(new CustomEvent('dismiss', { bubbles: true }));
    }
  };
}
