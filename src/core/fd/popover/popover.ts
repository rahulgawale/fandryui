import { api } from 'lwc';
import Base from 'fd/base';

export default class Popover extends Base {
  @api placement: 'top' | 'bottom' | 'left' | 'right' = 'bottom';
  @api open = false;

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
