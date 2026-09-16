import { LightningElement, api } from 'lwc';

/**
 * Demonstrates rich content inside a data-driven fd-toast: swapped in via
 * `lwc:is`/`lwc:spread` off a `component`/`componentProps` data field, the
 * same per-item composition app.ts's `planOptionsWithIcons` already uses
 * for fd-select -- {toast.message} in a `for:each` is only ever plain
 * text (LWC's `{}` interpolation escapes markup), so a toast that needs
 * more than that (a link, an icon, multiple lines) is a real component
 * like this one, not a richer string.
 */
export default class ToastBody extends LightningElement {
  @api title = '';
  @api detail = '';
  @api actionLabel = '';

  get hasAction(): boolean {
    return !!this.actionLabel;
  }

  handleActionClick() {
    this.dispatchEvent(new CustomEvent('action', { bubbles: true }));
  }
}
