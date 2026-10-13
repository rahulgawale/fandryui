import { api } from 'lwc';
import Base from 'fandry/base';
import { exitFinished } from 'fandry/motion';

/* The soonest the label is announced, whatever the visual delay: VoiceOver
   drops text that lands while it is still speaking the press that opened
   the overlay. */
const ANNOUNCE_AFTER_MS = 150;

// With Ctrl or Cmd, the keys that belong to the browser and not to the page.
const BROWSER_KEYS = new Set(['r', 'l', 't', 'w', 'n', 'q', 'c', 'f', '+', '-', '=', 'tab', ...'0123456789']);

/* Whether a key is the browser's to handle (reload, zoom, tabs, history)
   and so passes through an open overlay. Everything else is the page's:
   typing, activating, pasting, the page's own shortcuts. */
export function isBrowserShortcut(event: KeyboardEvent): boolean {
  if (/^F\d+$/.test(event.key)) {
    return true;
  }
  // AltGr reports Ctrl+Alt, and types a character.
  if (event.getModifierState?.('AltGraph')) {
    return false;
  }
  if (event.metaKey || event.ctrlKey) {
    return BROWSER_KEYS.has(event.key.toLowerCase());
  }
  return event.altKey && (event.key === 'ArrowLeft' || event.key === 'ArrowRight');
}

/*
  "This page, or this panel, is busy": a backdrop that blocks the pointer and
  the keyboard, and a card with a spinner and a label. Not a dialog: it
  takes no focus, has nothing to close and asks nothing.
*/
export default class LoadingOverlay extends Base {
  /** Covers the nearest positioned ancestor instead of the viewport. Put the overlay directly inside it. */
  @api contained = false;

  private _open = false;

  // In the DOM while open, and through the exit animation (see fandry/motion).
  isMounted = false;

  // The label's text while the overlay shows, for the live region.
  announcement = '';

  private announcePending = false;
  private announceTimer: ReturnType<typeof setTimeout> | undefined;
  // Where keys are blocked: the document, or a contained overlay's parent.
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
    if (wasOpen && !this.hasAppeared()) {
      // Nothing was fully shown, so nothing fades out.
      this.isMounted = false;
    }
  }

  disconnectedCallback() {
    this.stopAnnouncing();
    this.unblockKeys();
    // Moved while open: announce again where it lands.
    this.announcePending = this.open;
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
    const overlay = this.template.querySelector('.overlay');

    if (this.open && overlay) {
      this.blockKeys();
      if (this.announcePending) {
        this.announcePending = false;
        // With the overlay, after its delay, so a fast operation says nothing.
        this.announceTimer = setTimeout(() => this.announce(), Math.max(entranceTiming(overlay).delay, ANNOUNCE_AFTER_MS));
      }
    }

    if (!this.open && this.isMounted) {
      exitFinished(overlay).then(() => {
        // Reopened while it was exiting -- the overlay is live again.
        if (!this.open) {
          this.isMounted = false;
        }
      });
    }
  }

  // The label is announced once, when the overlay shows; again if it is swapped.
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

  /* Keys must not reach what the overlay covers. Tab may leave a contained
     overlay's panel. Focus stays where it was. */
  private handleKeydown = (event: KeyboardEvent) => {
    if (!this.open || isBrowserShortcut(event) || (this.contained && event.key === 'Tab')) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
  };

  private blockKeys() {
    const target = (this.contained && this.template.host.parentNode) || document;
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

  /* Whether the entrance has finished. Closing before that (within the
     delay, or mid-fade) removes the overlay at once: an exit would start
     from full opacity and flash. */
  private hasAppeared(): boolean {
    const overlay = this.template.querySelector('.overlay');
    if (!overlay) {
      return false;
    }
    const { currentTime, endTime } = entranceTiming(overlay);
    return currentTime >= endTime;
  }
}

/* The entrance animation's timing, in ms. All zero where there is none (a
   site removed it, or no Web Animations API), which reads as "appeared". */
function entranceTiming(overlay: Element): { delay: number; endTime: number; currentTime: number } {
  const [entrance] = typeof overlay.getAnimations === 'function' ? overlay.getAnimations() : [];
  const timing = entrance?.effect?.getComputedTiming();
  return {
    delay: Number(timing?.delay ?? 0),
    endTime: Number(timing?.endTime ?? 0),
    currentTime: Number(entrance?.currentTime ?? 0)
  };
}
