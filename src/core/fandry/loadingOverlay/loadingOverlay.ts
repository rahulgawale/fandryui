import { api } from 'lwc';
import Base from 'fandry/base';
import { exitFinished } from 'fandry/motion';

/*
  "This page, or this panel, is busy": a backdrop that blocks the pointer and
  the keyboard, and a card with a spinner and a label. Not a dialog: it
  takes no focus, has nothing to close and asks nothing.
*/
export default class LoadingOverlay extends Base {
  /** Covers the nearest positioned ancestor instead of the viewport. */
  @api contained = false;

  private _open = false;

  // Whether the overlay is in the DOM: true while open, and through the exit
  // animation after `open` goes false (see fandry/motion).
  isMounted = false;

  // The label's text while the overlay shows, for the live region.
  announcement = '';

  private announcePending = false;
  private announceTimer: ReturnType<typeof setTimeout> | undefined;
  // Where keys are blocked: the document, or the ancestor a contained overlay covers.
  private keyTarget: Node | null = null;

  @api
  get open(): boolean {
    return this._open;
  }

  set open(value: boolean) {
    const wasOpen = this._open;
    this._open = value;

    if (value) {
      this.isMounted = true;
      this.announcePending = this.announcePending || !wasOpen;
      return;
    }

    this.stopAnnouncing();
    this.unblockKeys();
    if (this.isMounted && this.isWaitingToAppear()) {
      // Closed within the delay: nothing was shown, so nothing fades out.
      this.isMounted = false;
    }
  }

  disconnectedCallback() {
    this.stopAnnouncing();
    this.unblockKeys();
  }

  get overlayClasses(): string {
    return [
      'overlay',
      this.contained && 'overlay--contained',
      this.open && 'overlay--open',
      !this.open && this.isMounted && 'overlay--closing'
    ]
      .filter(Boolean)
      .join(' ');
  }

  renderedCallback() {
    const overlay = this.template.querySelector('.overlay') as HTMLElement | null;

    if (this.open && overlay) {
      this.blockKeys(overlay);
      if (this.announcePending) {
        this.announcePending = false;
        // With the overlay, after its delay: a fast operation says nothing,
        // and the text doesn't land on top of the press that started it.
        this.announceTimer = setTimeout(() => this.announce(), entranceDelay(overlay));
      }
    }

    if (!this.open && this.isMounted) {
      exitFinished(this.template.querySelector('.overlay')).then(() => {
        // Reopened while it was exiting -- the overlay is live again.
        if (!this.open) {
          this.isMounted = false;
        }
      });
    }
  }

  // A label swapped while the overlay shows is read out too.
  handleSlotChange() {
    if (this.open && this.announcement) {
      this.announce();
    }
  }

  private stopAnnouncing() {
    clearTimeout(this.announceTimer);
    this.announcePending = false;
    this.announcement = '';
  }

  /* Tab, Enter, Space and typing must not reach what the overlay covers.
     Browser shortcuts still work, and so does Tab out of a contained
     overlay's panel. Focus stays where it was. */
  private handleKeydown = (event: KeyboardEvent) => {
    const isShortcut = event.metaKey || event.ctrlKey || event.altKey || /^F\d+$/.test(event.key);
    if (!this.open || isShortcut || (this.contained && event.key === 'Tab')) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
  };

  private blockKeys(overlay: HTMLElement) {
    const target = (this.contained && overlay.offsetParent) || document;
    if (target === this.keyTarget) {
      return;
    }
    this.unblockKeys();
    this.keyTarget = target;
    target.addEventListener('keydown', this.handleKeydown as EventListener, true);
  }

  private unblockKeys() {
    this.keyTarget?.removeEventListener('keydown', this.handleKeydown as EventListener, true);
    this.keyTarget = null;
  }

  // The slotted label's text, or the slot's fallback while nothing is slotted.
  private announce() {
    const slot = this.template.querySelector('slot');
    const text = (slot?.assignedNodes({ flatten: true }) ?? [])
      .map((node) => node.textContent)
      .join('')
      .trim();
    if (this.open && text !== this.announcement) {
      this.announcement = text;
    }
  }

  // Whether the entrance is still in its delay (--fd-loading-overlay-delay),
  // or never started.
  private isWaitingToAppear(): boolean {
    const overlay = this.template.querySelector('.overlay');
    if (!overlay || typeof overlay.getAnimations !== 'function') {
      return false;
    }
    return overlay
      .getAnimations()
      .every((animation) => Number(animation.currentTime ?? 0) < Number(animation.effect?.getComputedTiming().delay ?? 0));
  }
}

// The entrance animation's delay (--fd-loading-overlay-delay), in ms.
function entranceDelay(overlay: Element): number {
  const [entrance] = typeof overlay.getAnimations === 'function' ? overlay.getAnimations() : [];
  return Number(entrance?.effect?.getComputedTiming().delay ?? 0);
}
