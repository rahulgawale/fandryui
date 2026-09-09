import Base from 'fd/base';

interface FdMenuItemElement extends HTMLElement {
  disabled: boolean;
  elementProps: Record<string, unknown>;
  focus(): void;
}

const ARROW_KEYS = ['ArrowDown', 'ArrowUp'];

// fd-menu owns no trigger and no open/close state -- those belong to
// fd-popover ("a generic overlay primitive with no opinion on what it
// contains", see popover.html). A component instance also has no sanctioned
// way to reach up and drive an ancestor on its own: `this.closest()` isn't
// part of LightningElement's exposed API (confirmed -- it throws "not a
// function" even under this project's synthetic-shadow test environment),
// which rules out fd-menu auto-detecting/controlling an ancestor popover.
// Compose the two instead, with the consumer wiring open/close the way any
// fd-popover consumer already does elsewhere in this codebase:
//
//   <fd-popover open={menuOpen} ontoggle={handleMenuToggle}>
//     <fd-button slot="trigger">Actions</fd-button>
//     <fd-menu onselect={handleMenuSelect}>
//       <fd-menu-item value="edit">Edit</fd-menu-item>
//     </fd-menu>
//   </fd-popover>
//
//   handleMenuSelect(event) {
//     this.menuOpen = false; // event.detail.value is the chosen item
//   }
//
// fd-menu-item's own `select` event already bubbles (see menuItem.ts), so
// fd-menu doesn't need to listen for or re-dispatch it itself -- a
// consumer's `onselect` on the <fd-menu> tag catches it natively, the same
// way it would catch a bubbled DOM event from any other descendant.
// fd-menu's only job is the WAI-ARIA "menu" role/keyboard-navigation
// contract over its slotted fd-menu-item children.
export default class FdMenu extends Base {
  // The item roving tabindex currently sits on -- tracked here (rather than
  // re-derived as "the first enabled item" every time) so a recompute
  // triggered by one item's own change (see handleItemChange below) doesn't
  // silently steal the Tab stop away from a *different* item the
  // user/consumer already interacted with.
  private activeItem?: FdMenuItemElement;

  connectedCallback() {
    this.addEventListener('keydown', this.handleKeydown);
    this.addEventListener('itemchange', this.handleItemChange);
  }

  disconnectedCallback() {
    this.removeEventListener('keydown', this.handleKeydown);
    this.removeEventListener('itemchange', this.handleItemChange);
  }

  // fd-menu-item dispatches this when one of its own properties (currently
  // just `disabled`) changes in place -- e.g. a consumer's `for:each` binds
  // `disabled={row.disabled}` and the bound array updates. Neither
  // `slotchange` nor `renderedCallback` fire for that (see the class
  // comment above and menuItem.ts), so this is the only signal fd-menu gets.
  handleItemChange = () => {
    this.updateRovingTabIndex();
  };

  // Keeps roving tabindex correct any time the slotted items change -- see
  // fd-radio-group's radioGroup.ts for why both renderedCallback *and*
  // slotchange are wired (slotchange doesn't fire under this project's
  // jsdom test environment; renderedCallback covers that, slotchange is
  // the real, standards-based signal in an actual browser).
  renderedCallback() {
    this.updateRovingTabIndex();
  }

  handleSlotChange = () => {
    this.updateRovingTabIndex();
  };

  private getItems(): FdMenuItemElement[] {
    return Array.from(this.querySelectorAll('fd-menu-item')) as FdMenuItemElement[];
  }

  // Roving tabindex per the WAI-ARIA menu pattern -- see fd-radio-group's
  // updateRovingTabIndex for why this can't rely on native per-shadow-root
  // tab stops: every fd-menu-item's internal element lives in its own
  // shadow tree, so only one of them should be a Tab stop at a time, and
  // arrow keys move real DOM focus between them by hand.
  private updateRovingTabIndex(activeItem?: FdMenuItemElement) {
    const items = this.getItems();
    let active = activeItem ?? this.activeItem;

    // Falls back to the first enabled item whenever there's no prior active
    // item, or the one being kept no longer qualifies -- removed from the
    // DOM (a consumer's `for:each` dropped it) or newly disabled.
    if (!active || active.disabled || !items.includes(active)) {
      active = items.find((item) => !item.disabled);
    }

    this.activeItem = active;

    items.forEach((item) => {
      item.elementProps = { tabIndex: item === active ? 0 : -1 };
    });
  }

  private currentItem(event: KeyboardEvent): FdMenuItemElement | undefined {
    return event.composedPath().find((node) => (node as Element).tagName === 'FD-MENU-ITEM') as
      | FdMenuItemElement
      | undefined;
  }

  private moveFocus(current: FdMenuItemElement, delta: number) {
    const items = this.getItems();
    const currentIndex = items.indexOf(current);
    if (currentIndex === -1) {
      return;
    }

    let nextIndex = currentIndex;
    for (let step = 0; step < items.length; step++) {
      nextIndex = (nextIndex + delta + items.length) % items.length;
      if (!items[nextIndex].disabled) {
        break;
      }
    }

    const next = items[nextIndex];
    if (next === current) {
      return;
    }

    this.updateRovingTabIndex(next);
    next.focus();
  }

  handleKeydown = (event: KeyboardEvent) => {
    const current = this.currentItem(event);
    if (!current) {
      return;
    }

    if (ARROW_KEYS.includes(event.key)) {
      event.preventDefault();
      this.moveFocus(current, event.key === 'ArrowDown' ? 1 : -1);
      return;
    }

    if (event.key === 'Home' || event.key === 'End') {
      const items = this.getItems().filter((item) => !item.disabled);
      const target = event.key === 'Home' ? items[0] : items[items.length - 1];
      if (target) {
        event.preventDefault();
        this.updateRovingTabIndex(target);
        target.focus();
      }
    }
  };
}
