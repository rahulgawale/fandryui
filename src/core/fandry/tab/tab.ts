import { api } from 'lwc';
import Base from 'fandry/base';
import { partList } from 'fandry/parts';
import { resolveElementProps } from 'fandry/elementProps';

// Keeps a consumer's `elementProps` from clobbering what the tab controls.
const RESERVED_ELEMENT_PROPS = ['type', 'role', 'class', 'disabled', 'ariaSelected'];

export default class FdTab extends Base {
  /** Matches the `value` of one fandry-tab-panel. */
  @api value = '';

  /** Set by fandry-tabs; read-only for a page, which sets `value` on fandry-tabs. */
  @api selected = false;

  private _disabled = false;

  /* A setter, not a field: a bound `disabled` can change on a tab that is
     already in the DOM, which neither slotchange nor a re-render of
     fandry-tabs reports. The event is how fandry-tabs learns (see menuItem.ts). */
  @api
  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(value: boolean) {
    const next = !!value;
    if (next === this._disabled) return;
    this._disabled = next;
    this.dispatchEvent(new CustomEvent('itemchange', { bubbles: true }));
  }

  // fandry-tabs reassigns tabIndex so only the selected tab is a Tab stop.
  @api elementProps: Record<string, unknown> = { tabIndex: 0 };

  get resolvedElementProps(): Record<string, unknown> {
    return resolveElementProps(this, this.elementProps, RESERVED_ELEMENT_PROPS, 'fandry-tab');
  }

  get ariaSelected(): 'true' | 'false' {
    return this.selected ? 'true' : 'false';
  }

  get basePart(): string {
    return partList('base', { selected: this.selected, disabled: this.disabled });
  }

  @api
  focus() {
    (this.template.querySelector('.tab') as HTMLElement | null)?.focus();
  }
}
