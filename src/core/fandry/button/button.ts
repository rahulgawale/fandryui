import { api } from 'lwc';
import Base from 'fandry/base';
import { partList } from 'fandry/parts';
import { resolveElementProps } from 'fandry/elementProps';

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
    return resolveElementProps(this, this.elementProps, RESERVED_ELEMENT_PROPS, 'fandry-button');
  }

  // Without this, `someFdButton.focus()` is a no-op: a custom element isn't
  // itself focusable just because its shadow tree contains a focusable
  // native <button> (confirmed live in a real browser -- fandry-popover's own
  // Escape handler calls `trigger?.focus()` on whatever's slotted as
  // `slot="trigger"`, and with an fandry-button trigger and no override here,
  // focus silently fell through to document.body instead of landing back
  // on the button). Same fix as fandry-radio's/fandry-menu-item's own focus().
  @api
  focus() {
    const button = this.template.querySelector('.button') as HTMLElement | null;
    button?.focus();
  }

  get basePart(): string {
    return partList('base', { [this.variant]: true, disabled: this.disabled });
  }
}
