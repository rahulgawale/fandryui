import { api } from 'lwc';
import Base from 'fandry/base';

export default class Dialog extends Base {
  @api label = '';

  private _open = false;
  private previouslyFocused: HTMLElement | null = null;
  private previousBodyOverflow: string | null = null;
  private focusPending = false;

  // Getter/setter (not a plain `@api open = false` field) for the same
  // reason fandry-popover's `open` is one -- see popover.ts: it's the only
  // way to catch every path that can flip this dialog open/closed,
  // including a consumer binding it externally (`<fandry-dialog
  // open={isOpen}>`), not only the ones (Escape, backdrop click) that
  // already run through `close()` below.
  @api
  get open(): boolean {
    return this._open;
  }

  set open(value: boolean) {
    const wasOpen = this._open;
    this._open = value;

    if (!wasOpen && value) {
      this.previouslyFocused = this.findActiveElement();
      this.lockBodyScroll();
      this.focusPending = true;
    } else if (wasOpen && !value) {
      this.unlockBodyScroll();
      this.previouslyFocused?.focus();
      this.previouslyFocused = null;
    }
  }

  connectedCallback() {
    document.addEventListener('keydown', this.handleDocumentKeydown);
  }

  disconnectedCallback() {
    document.removeEventListener('keydown', this.handleDocumentKeydown);

    // In case this instance is removed from the DOM while still open (e.g.
    // a consumer's route change unmounts it directly, skipping the
    // `open = false` path above), don't leave the page permanently unable
    // to scroll.
    if (this.open) {
      this.unlockBodyScroll();
    }
  }

  renderedCallback() {
    if (this.focusPending && this.open) {
      this.focusPending = false;
      const panel = this.template.querySelector('.panel') as HTMLElement | null;
      panel?.focus();
    }
  }

  handleBackdropClick = (event: MouseEvent) => {
    // Only a click that lands directly on the backdrop itself (not one
    // that started inside .panel and bubbled up to it) should close --
    // both live in this component's own shadow tree, so a plain
    // target/currentTarget check is enough here, unlike fandry-popover's
    // composedPath check (needed there because its trigger lives outside
    // popover.ts's own shadow tree, in the consumer's light DOM).
    if (event.target === event.currentTarget) {
      this.close();
    }
  };

  // No Tab-cycle focus trap: confirmed live that a light-DOM
  // `querySelectorAll('button, a[href], ...')`-style enumeration of
  // "focusable descendants" is broken for the realistic content this
  // dialog actually holds -- every fandry-* interactive primitive (see
  // fandry-button's own `focus()` override and its comment) puts its real
  // native control inside its *own* shadow tree, so the slotted
  // `<fandry-button>` a consumer actually uses never matches a native
  // selector, and `document.activeElement`'s deep-walked node (the real
  // native <button> several shadow roots down) never equals the outer
  // custom element a selector-based scan would have found anyway --
  // confirmed by driving this exact demo in a real browser: Tab silently
  // did nothing. Escape and the backdrop click below remain the way to
  // close; only Tab's native browser-driven order governs focus while
  // open.
  handleDocumentKeydown = (event: KeyboardEvent) => {
    if (!this.open) {
      return;
    }

    if (event.key === 'Escape') {
      this.close();
    }
  };

  // Public so a consumer's own slotted close/cancel/confirm button can
  // trigger the same close path Escape/backdrop-click use -- same
  // reasoning as fandry-toast's public `dismiss()`: fandry-dialog owns no
  // close-button affordance of its own, the consumer composes one into
  // the default slot.
  @api
  close() {
    if (!this.open) {
      return;
    }

    this.open = false;

    // bubbles-only, not composed -- see fandry-popover's `toggle` for why.
    this.dispatchEvent(
      new CustomEvent('toggle', {
        detail: false,
        bubbles: true
      })
    );
  }

  private lockBodyScroll() {
    this.previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  }

  private unlockBodyScroll() {
    document.body.style.overflow = this.previousBodyOverflow ?? '';
    this.previousBodyOverflow = null;
  }

  // Mirrors fandry-popover's isFocusInsideOwnContent walk -- see
  // popover.ts for why `document.activeElement` alone isn't enough (it
  // only resolves to the outermost shadow host on the path to the real
  // focused node).
  private findActiveElement(): HTMLElement | null {
    let node: Element | null = document.activeElement;
    while (node && node.shadowRoot && node.shadowRoot.activeElement) {
      node = node.shadowRoot.activeElement;
    }
    return node as HTMLElement | null;
  }
}
