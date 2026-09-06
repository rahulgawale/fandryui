import { api } from 'lwc';
import Base from 'fd/base';

export default class Checkbox extends Base {
  @api label = '';
  @api checked = false;
  @api disabled = false;
  @api name = '';
  @api value = '';
  @api ariaLabel = '';

  /**
   * `indeterminate` is a DOM-only property with no HTML attribute
   * equivalent, so it can't be reflected declaratively -- it's synced onto
   * the native input imperatively below, same reason select.ts syncs its
   * native <select>'s value in renderedCallback.
   */
  @api indeterminate = false;

  get ariaChecked(): 'true' | 'false' | 'mixed' {
    if (this.indeterminate) return 'mixed';
    return this.checked ? 'true' : 'false';
  }

  renderedCallback() {
    // `indeterminate` is read here via `ariaChecked`, which template.html
    // binds as `aria-checked` -- that's what makes LWC's dependency
    // tracking re-invoke this callback when `indeterminate` changes alone.
    // Without a template read, LWC has no reactive edge for it and this
    // would only ever run on first paint (verified: it silently didn't fire
    // on updates before `ariaChecked` depended on `indeterminate`).
    const input = this.template.querySelector('.input') as HTMLInputElement | null;
    if (input) {
      input.indeterminate = this.indeterminate;
    }
  }

  handleChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.checked = input.checked;

    this.dispatchEvent(
      new CustomEvent('change', {
        detail: this.checked,
        bubbles: true,
        composed: true
      })
    );
  }
}
