/*
  A copy of fandry-button (src/core/fandry/button) that this site made its
  own: it takes an `action` promise, and while that runs it shows a spinner
  and ignores clicks, so a double click saves once. That is a change of
  markup and behavior, which parts and tokens can't make. Everything else
  is fandry-button's code, unchanged; it still extends fandry/base, so it
  keeps the site's --fd-* tokens and native shadow DOM.
*/
import { api, track } from 'lwc';
import Base from 'fandry/base';
import { partList } from 'fandry/parts';
import { resolveElementProps } from 'fandry/elementProps';

// See checkbox.ts for why this list exists: it keeps a consumer's
// `elementProps` from clobbering a property the component itself controls.
const RESERVED_ELEMENT_PROPS = ['type', 'class', 'disabled'];

export default class AsyncButton extends Base {
  /** `() => Promise` -- run on click. While it runs, a spinner shows and clicks are ignored. */
  @api action?: () => Promise<unknown>;

  /** The spinner's accessible name while the action runs. */
  @api busyLabel = 'Working';

  @track running = false;

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
    return resolveElementProps(this, this.elementProps, RESERVED_ELEMENT_PROPS, 'async-button');
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
    return partList('base', { [this.variant]: true, disabled: this.isDisabled });
  }

  get isDisabled(): boolean {
    return this.disabled || this.running;
  }

  get ariaBusy(): string {
    return this.running ? 'true' : 'false';
  }

  async handleClick() {
    if (!this.action || this.running) return;
    this.running = true;
    try {
      await this.action();
    } finally {
      this.running = false;
    }
  }
}
