import { api, track } from 'lwc';
import FdSearchState from 'fandry/searchState';
import type { FdSearchItem } from 'fandry/searchState';
import { exitFinished } from 'fandry/motion';

export type FdCommandItem = FdSearchItem;

/** Text the palette announces that isn't markup; see `messages`. */
export interface FdCommandMessages {
  /** What a screen reader hears as the list narrows: how many results there are. */
  results: (count: number) => string;
}

export const DEFAULT_COMMAND_MESSAGES: FdCommandMessages = {
  results: (count) => (count === 1 ? '1 result' : `${count} results`)
};

// A stable empty list (the source cache compares by identity).
const NO_ITEMS: FdSearchItem[] = [];

/**
 * A command palette: a modal search box over a list of things to do. Type to
 * narrow the list, arrow to one, Enter to pick it -- and `select` says which.
 * The search, ranking and keyboard behavior live in fandry/searchState; this
 * adds the modal popup around them.
 *
 * It is deliberately generic. It knows nothing about what an item *does* (or
 * that one might navigate somewhere): it reports the chosen `value` and the
 * consumer decides. It also owns no global shortcut -- binding Cmd+K (or
 * anything else) to `open` is application behavior, so it lives with the
 * application:
 *
 *   <fandry-command label="Command palette" placeholder="Type a command…"
 *     items={items} open={isOpen} onselect={handleSelect} ontoggle={handleToggle}>
 *   </fandry-command>
 *
 *   handleSelect(event) { run(event.detail.value); }  // it closes itself
 *   handleToggle(event) { this.isOpen = event.detail; }
 *
 * Its open/close lifecycle (mount through the exit animation, focus
 * hand-off, scroll lock) mirrors fandry-dialog -- see dialog.ts. Unlike it,
 * the popup is a native <dialog> shown with showModal().
 */
export default class FdCommand extends FdSearchState {
  @api label = '';
  /** The accessible name, as `aria-label` on any element. Wins over `label`. */
  @api ariaLabel = '';
  @api placeholder = '';
  @api items: FdCommandItem[] = [];
  @api messages: Partial<FdCommandMessages> = {};

  private _open = false;

  // Whether the palette is in the DOM: true while open, and stays true
  // through the exit animation after `open` goes false (see fandry/motion).
  @track isMounted = false;
  private previouslyFocused: HTMLElement | null = null;
  private previousBodyOverflow: string | null = null;
  private focusPending = false;

  // Getter/setter for the same reason as fandry-dialog's `open` -- see
  // dialog.ts: it catches every path that can flip this open/closed,
  // including a consumer binding it externally.
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

    if (!wasOpen && value) {
      // Every opening starts from an empty search.
      this.setQuery('');
      this.previouslyFocused = this.findActiveElement();
      this.lockBodyScroll();
      this.focusPending = true;
    } else if (wasOpen && !value) {
      this.unlockBodyScroll();
      // Before focus goes back: while the dialog is modal the page is inert,
      // and nothing in it can take focus.
      this.dialog?.close?.();
      this.previouslyFocused?.focus();
      this.previouslyFocused = null;
    }
  }

  // `items` bound to data that hasn't arrived yet (`undefined`) is an empty
  // list, not a render error.
  protected get source(): FdSearchItem[] {
    return this.items ?? NO_ITEMS;
  }

  // Nothing is "the value" here, so the option the keyboard is on is the
  // selected one -- see searchState's isAriaSelected.
  protected isAriaSelected(_selected: boolean, active: boolean): boolean {
    return active;
  }

  // Read out as the list narrows; "no results" is the `empty` slot instead.
  get resultsText(): string {
    return { ...DEFAULT_COMMAND_MESSAGES, ...this.messages }.results(this.resultCount);
  }

  protected commit(item: FdSearchItem) {
    this.dispatchEvent(
      new CustomEvent('select', {
        detail: { value: item.value },
        bubbles: true
      })
    );
    this.close();
  }

  connectedCallback() {
    document.addEventListener('keydown', this.handleDocumentKeydown);
  }

  disconnectedCallback() {
    document.removeEventListener('keydown', this.handleDocumentKeydown);

    // Removed from the DOM while still open (e.g. a route change) -- don't
    // leave the page permanently unable to scroll.
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

  // A closing palette must not take focus or clicks while it fades. `''`
  // (attribute present) / `undefined` (removed): `inert` is a boolean
  // attribute.
  get backdropInert(): string | undefined {
    return this.open ? undefined : '';
  }

  renderedCallback() {
    super.renderedCallback();

    if (this.focusPending && this.open) {
      this.focusPending = false;
      this.showModal();
      const input = this.template.querySelector('.input') as HTMLElement | null;
      input?.focus();
    }

    if (!this.open && this.isMounted) {
      const backdrop = this.template.querySelector('.backdrop');
      exitFinished(backdrop).then(() => {
        // Reopened while it was exiting -- the palette is live again.
        if (!this.open) {
          this.isMounted = false;
        }
      });
    }
  }

  private get dialog(): HTMLDialogElement | null {
    return this.template.querySelector('dialog');
  }

  /* Modal, so the browser makes everything outside the palette inert: a
     screen reader's cursor can't wander into the page behind it, in any
     browser and across shadow roots. Reopened mid-exit, the same element is
     shown again. Not in every environment (jsdom has no showModal). */
  private showModal() {
    const dialog = this.dialog;
    if (dialog && !dialog.open && typeof dialog.showModal === 'function') {
      dialog.showModal();
    }
  }

  // The browser's own Escape (and Android's back): closed our way instead,
  // so `toggle` fires and the exit animation runs.
  handleCancel(event: Event) {
    event.preventDefault();
    this.close();
  }

  handleBackdropClick(event: MouseEvent) {
    // Only a click that lands directly on the backdrop itself, not one that
    // started inside the panel and bubbled up.
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  // Every key is handled on the input, so a mousedown anywhere else on the
  // panel (its padding, the empty message, a group heading) must not blur it
  // -- that would silently stop the arrow keys and let Tab walk out to the
  // page behind the backdrop. The input itself still needs the default, to
  // place the caret.
  handlePanelMouseDown(event: MouseEvent) {
    if ((event.target as HTMLElement).tagName !== 'INPUT') {
      event.preventDefault();
    }
  }

  handleDocumentKeydown = (event: KeyboardEvent) => {
    if (this.open && event.key === 'Escape') {
      this.close();
    }
  };

  handleInputKeydown(event: KeyboardEvent) {
    // The input is the palette's only tab stop (options are reached with the
    // arrow keys), so Tab has nowhere to go inside it -- and letting it
    // leave would put focus behind the modal backdrop.
    if (event.key === 'Tab') {
      event.preventDefault();
      return;
    }

    super.handleInputKeydown(event);
  }

  // Public so a consumer can close it from their own code, the same way
  // Escape, a backdrop click and picking an item do.
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

  // See fandry-popover's isFocusInsideOwnContent for why `document.activeElement`
  // alone isn't enough: it only resolves to the outermost shadow host.
  private findActiveElement(): HTMLElement | null {
    let node: Element | null = document.activeElement;
    while (node && node.shadowRoot && node.shadowRoot.activeElement) {
      node = node.shadowRoot.activeElement;
    }
    return node as HTMLElement | null;
  }
}
