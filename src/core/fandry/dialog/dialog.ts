import { api, track } from 'lwc';
import Base from 'fandry/base';
import { exitFinished } from 'fandry/motion';

export default class Dialog extends Base {
  @api label = '';
  /** The accessible name, as `aria-label` on any element. Wins over `label`. */
  @api ariaLabel = '';

  private _open = false;

  // Whether the dialog is in the DOM: true while open, and stays true
  // through the exit animation after `open` goes false (see fandry/motion).
  @track isMounted = false;
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

    if (value) {
      this.isMounted = true;
    }

    // A server render (SSR) only needs the open markup; the browser sets
    // `open` again and locks scrolling and moves focus then.
    if (typeof document === 'undefined') {
      return;
    }

    if (!wasOpen && value) {
      this.previouslyFocused = this.findActiveElement();
      this.lockBodyScroll();
      this.focusPending = true;
    } else if (wasOpen && !value) {
      // Out of the top layer now, so the page is no longer inert and can take focus back.
      this.nativeDialog?.close?.();
      this.unlockBodyScroll();
      this.previouslyFocused?.focus();
      this.previouslyFocused = null;
    }
  }

  connectedCallback() {
    // Rendered on a server (SSR): there is no document yet, and the browser runs this again.
    if (typeof document === 'undefined') {
      return;
    }
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

  get accessibleLabel(): string {
    return this.ariaLabel || this.label;
  }

  get backdropClasses(): string {
    return this.open ? 'backdrop' : 'backdrop backdrop--closing';
  }

  // A closing dialog must not take focus or clicks while it fades -- body
  // scroll and focus are already handed back by the `open` setter. `''`
  // (attribute present) / `undefined` (removed): `inert` is a boolean
  // attribute.
  get backdropInert(): string | undefined {
    return this.open ? undefined : '';
  }

  // Until the first render, and after the dialog unmounts, there is none.
  private get nativeDialog(): HTMLDialogElement | undefined {
    return this.refs?.dialog as HTMLDialogElement | undefined;
  }

  renderedCallback() {
    const dialog = this.nativeDialog;
    // showModal() needs the element in the page, so it waits for the render. jsdom has none.
    if (this.open && dialog && !dialog.open) {
      dialog.showModal?.();
    }

    if (this.focusPending && this.open) {
      this.focusPending = false;
      (this.refs?.panel as HTMLElement | undefined)?.focus();
    }

    if (!this.open && this.isMounted) {
      exitFinished(this.nativeDialog).then(() => {
        // Reopened while it was exiting -- the dialog is live again.
        if (!this.open) {
          this.isMounted = false;
        }
      });
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

  /* Escape is handled on the document, as before. A component inside that
     stops Escape's keydown from reaching the document also has to cancel
     it, or the browser's own Escape (the cancel event below) closes the
     dialog. */
  handleDocumentKeydown = (event: KeyboardEvent) => {
    if (!this.open) {
      return;
    }

    if (event.key === 'Escape') {
      this.close();
    }
  };

  // The browser's Escape: closed through close(), so the exit animation plays.
  handleCancel = (event: Event) => {
    event.preventDefault();
    this.close();
  };

  // The browser can close a modal without a cancel event; keep `open` in step.
  handleNativeClose = () => {
    if (this.open && !this.nativeDialog?.open) {
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
