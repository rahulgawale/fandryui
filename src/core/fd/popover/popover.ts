import { api } from 'lwc';
import Base from 'fd/base';

export default class Popover extends Base {
  @api placement: 'top' | 'bottom' | 'left' | 'right' = 'bottom';

  private _open = false;

  // A plain `@api open = false` field can't distinguish "just closed" from
  // "still closed" -- needed below to catch every path that can close this
  // popover, not only the ones (like Escape) that already call `setOpen`
  // internally. A consumer closing it externally via a prop binding (e.g.
  // `<fd-popover open={menuOpen}>` after `this.menuOpen = false` in an
  // `onselect` handler, since fd-popover has no opinion on what it
  // contains and can't reach into a menu's selection logic itself) goes
  // through this same setter, because LWC applies template prop bindings
  // by calling it.
  @api
  get open(): boolean {
    return this._open;
  }

  set open(value: boolean) {
    const wasOpen = this._open;
    this._open = value;

    if (wasOpen && !value) {
      this.restoreFocusIfStillOurs();
    }
  }

  get panelClasses(): string {
    return ['panel', `panel--${this.placement}`].join(' ');
  }

  connectedCallback() {
    // Listening on `this` (the host) catches clicks bubbling up from the
    // slotted trigger even when that trigger is its own custom element with
    // its own shadow tree (e.g. fd-button) -- an onclick bound inside our
    // own template on the wrapping <span> doesn't reliably see events that
    // originate inside a *nested* shadow tree.
    this.addEventListener('click', this.handleHostClick);
    document.addEventListener('click', this.handleDocumentClick);
    document.addEventListener('keydown', this.handleDocumentKeydown);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.handleHostClick);
    document.removeEventListener('click', this.handleDocumentClick);
    document.removeEventListener('keydown', this.handleDocumentKeydown);
  }

  handleHostClick = (event: MouseEvent) => {
    const target = event.target as Element;
    if (target.closest('[slot="trigger"]')) {
      this.setOpen(!this.open);
    }
  };

  handleDocumentClick = (event: MouseEvent) => {
    // `event.target` is retargeted per-listener -- read from a document-level
    // listener it resolves to the outermost light-DOM ancestor (e.g. the app
    // root), not the real click origin, so `host.contains(event.target)` is
    // always false here. `composedPath()` gives the untargeted real path.
    if (this.open && !event.composedPath().includes(this.template.host)) {
      this.setOpen(false);
    }
  };

  handleDocumentKeydown = (event: KeyboardEvent) => {
    if (this.open && event.key === 'Escape') {
      this.setOpen(false);

      const trigger = this.querySelector('[slot="trigger"]') as HTMLElement | null;
      trigger?.focus();
    }
  };

  // Returns focus to the trigger when closing, but only if focus is still
  // somewhere inside this popover's own light-DOM content (trigger or
  // panel) -- the common case of e.g. a chosen menu item, focused via
  // keyboard or click, whose element is about to be unslotted along with
  // the rest of the panel. If focus has already moved elsewhere (e.g. an
  // outside click landed on some other focusable element and dismissed
  // this popover as a side effect), leave it alone -- stealing focus back
  // would fight the user's own action. Escape's own handler below already
  // restores focus unconditionally, per the WAI-ARIA menu-button pattern's
  // explicit Escape behavior, so this covers every *other* close path.
  private restoreFocusIfStillOurs() {
    if (!this.isFocusInsideOwnContent()) {
      return;
    }

    const trigger = this.querySelector('[slot="trigger"]') as HTMLElement | null;
    trigger?.focus();
  }

  private isFocusInsideOwnContent(): boolean {
    // `document.activeElement` only resolves to the *outermost* shadow
    // host on the path to the real focused node -- confirmed live in a
    // real browser with this project's actual nesting depth (menu item ->
    // menu -> popover -> app, each its own shadow root): it returned the
    // top-level app element, not fd-menu-item, so a plain upward walk from
    // it never reaches the popover host. Each shadow root along the way
    // exposes its *own* `activeElement`, so walking down through those
    // first finds the real focused node before walking back up.
    let node: Element | null = document.activeElement;
    while (node && node.shadowRoot && node.shadowRoot.activeElement) {
      node = node.shadowRoot.activeElement;
    }

    // Deliberately not `this.contains(...)` / `this.closest(...)` --
    // confirmed those aren't callable on a component instance under this
    // project's synthetic-shadow test environment (throws "not a
    // function"), the same gap `menu.ts` hit and documented. Walking
    // upward by hand from the plain DOM node found above (never calling a
    // traversal method on `this` itself) sidesteps it, hopping through
    // shadow boundaries via `ShadowRoot.host` the way `getRootNode()`
    // would.
    const host = this.template.host;
    let current: Node | null = node;

    while (current) {
      if (current === host) {
        return true;
      }

      current = current instanceof ShadowRoot ? current.host : current.parentNode;
    }

    return false;
  }

  setOpen(open: boolean) {
    if (this.open === open) {
      return;
    }

    this.open = open;

    // bubbles-only, not composed: the parent that consumes fd-popover
    // listens via ontoggle on the host itself (already in the parent's own
    // light DOM), so it doesn't need to cross the parent's shadow boundary
    // to receive this -- composed: true would let it escape past the parent
    // to every ancestor component, which Salesforce's LWC security
    // guidelines advise against unless that's actually needed.
    this.dispatchEvent(
      new CustomEvent('toggle', {
        detail: this.open,
        bubbles: true
      })
    );
  }
}
