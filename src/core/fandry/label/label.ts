import Base from 'fandry/base';
import { api } from 'lwc';
import { resolveElementProps } from 'fandry/elementProps';

// See fandry-checkbox's checkbox.ts for why this list exists: it keeps a
// consumer's `elementProps` from clobbering a property the component
// itself controls.
const RESERVED_ELEMENT_PROPS = ['class'];

// The html-for warning is logged once, not once per label on the page.
let warnedHtmlFor = false;

/**
 * The text of a label: its look, and the required asterisk. It is not the
 * `<label>` element itself, because a `<label>` in this component's shadow
 * root could not reach a control outside it -- an id is only looked up
 * inside one shadow root. The page writes the `<label>`, next to its
 * control, and puts this inside it:
 *
 *   <label for="qty"><fandry-label required>Quantity</fandry-label></label>
 *   <input id="qty" type="number" />
 *
 * It is also what goes in a field's `label` slot (fandry-input,
 * fandry-select, ...), where the field already supplies the `<label>`.
 */
export default class Label extends Base {
  /* Shows the asterisk, and nothing more: being required belongs to the
     control, which the page marks itself. A field with this in its label
     slot shows its own asterisk and turns this one off (see label.css). */
  @api required = false;

  // Spread onto the <span> via `lwc:spread` -- see checkbox.ts for why this
  // can't reach `data-*` attributes, and why that's not solved with a
  // dedicated prop either.
  @api elementProps: Record<string, unknown> = {};

  /* Deprecated, and does nothing. It was the `for` of a <label> rendered
     in here, which never reached the control it named (see above). Kept so
     a page that still sets it is told what to do instead. */
  @api
  get htmlFor(): string {
    return '';
  }

  set htmlFor(value: string) {
    if (value && !warnedHtmlFor) {
      warnedHtmlFor = true;
      // eslint-disable-next-line no-console
      console.warn(
        'fandry-label: html-for does nothing. Wrap fandry-label in your own <label for="..."> instead: <label for="id"><fandry-label>Text</fandry-label></label>.'
      );
    }
  }

  get resolvedElementProps(): Record<string, unknown> {
    return resolveElementProps(this, this.elementProps, RESERVED_ELEMENT_PROPS, 'fandry-label');
  }
}
