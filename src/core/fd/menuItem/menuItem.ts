import { api } from 'lwc';
import Base from 'fd/base';

// See fd-checkbox's checkbox.ts for why this list exists: it keeps a
// consumer's `elementProps` from clobbering a property (or the click/keydown
// wiring) the component itself depends on.
const RESERVED_ELEMENT_PROPS = ['role', 'class', 'ariaDisabled', 'onclick', 'onkeydown'];

export default class FdMenuItem extends Base {
  @api value = '';
  @api label = '';

  private _disabled = false;

  // A plain field wouldn't tell fd-menu when a property-bound `disabled`
  // changes on an item that's already in the DOM (e.g. `disabled={row.disabled}`
  // inside a consumer's own `for:each`) -- `slotchange` only fires on
  // structural changes (nodes added/removed/reordered), never on a
  // property mutating in place, so fd-menu's roving tabindex would
  // otherwise go stale exactly when a row's disabled state flips. This
  // setter dispatches a bubbling `itemchange` fd-menu listens for (see
  // menu.ts) so the roving tabindex gets recomputed on every real change,
  // without fd-menu needing to poll or watch each item's properties itself.
  @api
  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(value: boolean) {
    const next = !!value;
    if (next === this._disabled) {
      return;
    }

    this._disabled = next;
    this.dispatchEvent(new CustomEvent('itemchange', { bubbles: true }));
  }

  // Spread onto the internal div via `lwc:spread` -- see checkbox.ts for
  // why this can't reach `data-*` attributes, and why that's not solved
  // with a dedicated prop either. Defaults to a focusable tabIndex so a
  // standalone fd-menu-item (not inside fd-menu) is still usable on its
  // own -- see fd-radio's radio.ts for the same default. fd-menu (when
  // present) reassigns this same prop for roving-tabindex, exactly like
  // fd-radio-group does to fd-radio.
  @api elementProps: Record<string, unknown> = { tabIndex: 0 };

  get classes(): string {
    return ['item', this.disabled ? 'item--disabled' : ''].filter(Boolean).join(' ');
  }

  get ariaDisabled(): 'true' | 'false' {
    return this.disabled ? 'true' : 'false';
  }

  get resolvedElementProps(): Record<string, unknown> {
    return this.resolveElementProps(this.elementProps, RESERVED_ELEMENT_PROPS, 'fd-menu-item');
  }

  // Lets fd-menu move real focus to a specific item's internal element
  // (e.g. arrow-key navigation between items) -- see fd-radio's focus()
  // for why the default inherited HTMLElement.focus() isn't enough here.
  @api
  focus() {
    const item = this.template.querySelector('.item') as HTMLElement | null;
    item?.focus();
  }

  private activate() {
    if (this.disabled) {
      return;
    }

    this.dispatchEvent(
      new CustomEvent('select', {
        detail: { value: this.value },
        bubbles: true
      })
    );
  }

  handleClick = () => {
    this.activate();
  };

  // A <div role="menuitem"> gets no native activation behavior for
  // Enter/Space the way a real <button> would -- has to be wired by hand,
  // same as any custom interactive-role element.
  handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.activate();
    }
  };
}
