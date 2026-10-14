import { api } from 'lwc';
import Base from 'fandry/base';
import { exitFinished } from 'fandry/motion';

/** Text the overlay shows or announces; see `messages`. */
export interface FdLoadingOverlayMessages {
  /** The default label, and what is announced when the overlay's content has no text. */
  label: string;
}

export const DEFAULT_LOADING_OVERLAY_MESSAGES: FdLoadingOverlayMessages = {
  label: 'Loading'
};

/* The soonest the label is announced, whatever the visual delay: VoiceOver
   drops text that lands while it is still speaking the press that opened
   the overlay. */
const ANNOUNCE_AFTER_MS = 150;

/* With Ctrl or Cmd, the keys that belong to the browser and not to the page:
   reload, address bar, tabs, find, zoom, history ([ ] and arrows on a Mac). */
const BROWSER_KEYS = new Set([
  'r', 'l', 't', 'w', 'n', 'q', 'c', 'f', '+', '-', '=', 'tab', '[', ']', '{', '}',
  'arrowleft', 'arrowright', 'pageup', 'pagedown', ...'0123456789'
]);

/* Whether a key is the browser's to handle and so passes through an open
   overlay. Everything else is the page's: typing, activating, pasting, the
   page's own shortcuts. */
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
  The behavior of fandry-loading-overlay, with no template: open/close with
  an exit animation, key blocking, and the announcement. A template that
  extends it binds `isMounted`, `overlayClasses` (on the element that
  animates), `announcement` (in a polite status region always in the page)
  and `handleSlotChange` (on its slots). See fandry/loadingOverlay.
*/
export default class FdLoadingOverlayState extends Base {
  /** Covers the nearest positioned ancestor instead of the viewport. Put the overlay directly inside it. */
  @api contained = false;
  /** Replaces any of DEFAULT_LOADING_OVERLAY_MESSAGES, e.g. to translate them. */
  @api messages: Partial<FdLoadingOverlayMessages> = {};

  private _open = false;

  // In the DOM while open, and through the exit animation (see fandry/motion).
  isMounted = false;

  // The content's text while the overlay shows, for the live region.
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

  get labelText(): string {
    return { ...DEFAULT_LOADING_OVERLAY_MESSAGES, ...this.messages }.label;
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

  // The content is announced once, when the overlay shows; again if it is swapped.
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

  // What the overlay shows as text, or the default label when that is nothing.
  private announce() {
    const slot = this.template.querySelector('slot');
    const text = (slot ? readableText(slot) : '').replace(/\s+/g, ' ').trim() || this.labelText;
    if (this.open && text !== this.announcement) {
      this.announcement = text;
    }
  }

  /* Keys must not reach what the overlay covers, but do reach what is in it
     (a Cancel button the page focused). Tab may leave a contained overlay's
     panel. Focus stays where it was. */
  private handleKeydown = (event: KeyboardEvent) => {
    if (
      !this.open ||
      isBrowserShortcut(event) ||
      this.hasFocus() ||
      (this.contained && event.key === 'Tab')
    ) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
  };

  // Whether focus is in the overlay: in its own shadow root or in what is slotted.
  private hasFocus(): boolean {
    const host = this.template.host;
    let active = document.activeElement;
    while (active) {
      if (host.contains(active)) {
        return true;
      }
      active = active.shadowRoot?.activeElement ?? null;
    }
    return false;
  }

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

/* The text a screen reader would read in a node: through slots (assigned
   content, or the fallback), skipping what is aria-hidden. */
function readableText(node: Node): string {
  if (node instanceof HTMLSlotElement) {
    return node.assignedNodes({ flatten: true }).map(readableText).join(' ');
  }
  if (node.nodeType === Node.TEXT_NODE) {
    return node.textContent ?? '';
  }
  if (node instanceof Element && node.getAttribute('aria-hidden') !== 'true') {
    return Array.from(node.childNodes).map(readableText).join('');
  }
  return '';
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
