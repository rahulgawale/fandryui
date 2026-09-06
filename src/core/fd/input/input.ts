import { api, track } from 'lwc';
import Base from 'fd/base';

export default class Input extends Base {
  @api label = '';
  @api helpText = '';
  @api value = '';
  @api type: string = 'text';
  @api name = '';
  @api placeholder = '';
  @api disabled = false;
  @api readonly = false;
  @api required = false;
  @api size: 'sm' | 'md' | 'lg' = 'md';

  @track hasFocus = false;

  get hasLabel(): boolean {
    return !!this.label;
  }

  get hasHelpText(): boolean {
    return !!this.helpText;
  }

  get controlClasses() {
    return ['control', `control--${this.size}`].join(' ');
  }

  handleInput(event: Event) {
    // The native `input` event is `composed: true`, so without this it
    // would ALSO reach any `oninput` listener a consumer attaches to this
    // component -- as a second, distinct call, after the semantic one
    // dispatched below, but with `event.detail` being `0` (UIEvent's
    // legacy numeric default), not the typed value. Confirmed live: an
    // `oninput` listener saw both a CustomEvent(detail: "k") and an
    // InputEvent(detail: 0) for a single keystroke.
    event.stopPropagation();

    const target = event.target as HTMLInputElement;
    this.value = target.value;

    this.dispatchEvent(
      new CustomEvent('input', {
        detail: this.value,
        bubbles: true,
        composed: true
      })
    );
  }

  handleChange(event: Event) {
    // Unlike `input`, the native `change` event is NOT composed -- it
    // never crosses the shadow boundary on its own, so there's nothing to
    // stop here (confirmed live: an external `onchange` listener saw only
    // the semantic CustomEvent below, never a second native delivery).

    const target = event.target as HTMLInputElement;
    this.value = target.value;

    this.dispatchEvent(
      new CustomEvent('change', {
        detail: this.value,
        bubbles: true,
        composed: true
      })
    );
  }

  handleFocus() {
    this.hasFocus = true;
  }

  handleBlur() {
    this.hasFocus = false;
  }
}
