import { api } from 'lwc';
import Base from 'fd/base';

// See checkbox.ts for why this list exists: it keeps a consumer's
// `elementProps` from clobbering a property the component itself controls.
const RESERVED_ELEMENT_PROPS = ['type', 'class', 'disabled'];

export default class FdButton extends Base {
  @api variant: 'default' | 'secondary' | 'ghost' = 'default';
  @api size: 'sm' | 'md' | 'lg' = 'md';
  @api disabled = false;
  @api type: 'button' | 'submit' | 'reset' = 'button';

  // Spread onto the native <button> via `lwc:spread` -- see checkbox.ts for
  // why this can't reach `data-*` attributes, and why that's not solved
  // with a dedicated prop either.
  @api elementProps: Record<string, unknown> = { tabIndex: 0 };

  get classes() {
    return ['button', `button--${this.variant}`, `button--${this.size}`].join(
      ' '
    );
  }

  get resolvedElementProps(): Record<string, unknown> {
    return this.resolveElementProps(this.elementProps, RESERVED_ELEMENT_PROPS, 'fd-button');
  }

  // Without this, `someFdButton.focus()` is a no-op: a custom element isn't
  // itself focusable just because its shadow tree contains a focusable
  // native <button> (confirmed live in a real browser -- fd-popover's own
  // Escape handler calls `trigger?.focus()` on whatever's slotted as
  // `slot="trigger"`, and with an fd-button trigger and no override here,
  // focus silently fell through to document.body instead of landing back
  // on the button). Same fix as fd-radio's/fd-menu-item's own focus().
  @api
  focus() {
    const button = this.template.querySelector('.button') as HTMLElement | null;
    button?.focus();
  }
}
