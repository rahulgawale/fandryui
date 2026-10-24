import { api } from 'lwc';
import Base from 'fandry/base';
import { partList } from 'fandry/parts';
import { resolveElementProps } from 'fandry/elementProps';

// Keeps a consumer's `elementProps` from clobbering what the button controls.
const RESERVED_ELEMENT_PROPS = ['type', 'class', 'disabled', 'ariaPressed'];

export default class FdToggleButton extends Base {
  /* How the button looks while it is off: outlined, a muted fill, or bare.
     Pressed fills with the primary color; `secondary` and `ghost` turn muted. */
  @api variant: 'default' | 'secondary' | 'ghost' = 'default';

  /** What a fandry-toggle-group matches against its `value` and reports in `change`. */
  @api value = '';

  /* On or off. Like a native checkbox it flips as the user presses and
     `change` reports it; inside a fandry-toggle-group, the group's `value`
     decides it. */
  @api pressed = false;

  private _disabled = false;

  /* A setter, not a field: a bound `disabled` can change on an item already
     in the DOM, so a group learns through an event (see tab.ts). */
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

  // A fandry-toggle-group reassigns tabIndex so only one button is a Tab stop.
  @api elementProps: Record<string, unknown> = { tabIndex: 0 };

  get resolvedElementProps(): Record<string, unknown> {
    return resolveElementProps(this, this.elementProps, RESERVED_ELEMENT_PROPS, 'fandry-toggle-button');
  }

  get ariaPressed(): 'true' | 'false' {
    return this.pressed ? 'true' : 'false';
  }

  get classes(): string {
    return ['toggle', `toggle--${this.variant || 'default'}`].join(' ');
  }

  get basePart(): string {
    return partList('base', { [this.variant || 'default']: true, pressed: this.pressed, disabled: this.disabled });
  }

  handleClick() {
    this.pressed = !this.pressed;
    this.dispatchEvent(new CustomEvent('change', { detail: { pressed: this.pressed }, bubbles: true }));
  }

  @api
  focus() {
    (this.template.querySelector('.toggle') as HTMLElement | null)?.focus();
  }
}
