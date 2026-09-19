import { api, track } from 'lwc';
import FdSearchState from 'fandry/searchState';
import type { FdSearchItem } from 'fandry/searchState';
import { exitFinished } from 'fandry/motion';

export type FdCommandItem = FdSearchItem;

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
 * hand-off, scroll lock) mirrors fandry-dialog -- see dialog.ts.
 */
export default class FdCommand extends FdSearchState {
  @api label = '';
  @api placeholder = '';
  @api items: FdCommandItem[] = [];

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
      this.previouslyFocused?.focus();
      this.previouslyFocused = null;
    }
  }

  protected get source(): FdSearchItem[] {
    return this.items;
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
