import { api } from 'lwc';
import Base from 'fd/base';

export default class Textarea extends Base {
  @api label = '';
  @api helpText = '';
  @api value = '';
  @api name = '';
  @api placeholder = '';
  @api rows = 3;
  @api disabled = false;
  @api readonly = false;
  @api required = false;

  get hasLabel(): boolean {
    return !!this.label;
  }

  get hasHelpText(): boolean {
    return !!this.helpText;
  }

  handleInput(event: Event) {
    // See fd/input's handleInput -- the native `input` event is
    // `composed: true` and would otherwise also reach a consumer's
    // `oninput` listener a second time, with `event.detail` as `0`
    // (UIEvent's legacy numeric default) instead of the typed value.
    event.stopPropagation();

    const target = event.target as HTMLTextAreaElement;
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
    // Unlike `input`, the native `change` event is NOT composed -- see
    // fd/input's handleChange for why nothing needs to be stopped here.

    const target = event.target as HTMLTextAreaElement;
    this.value = target.value;

    this.dispatchEvent(
      new CustomEvent('change', {
        detail: this.value,
        bubbles: true,
        composed: true
      })
    );
  }
}
