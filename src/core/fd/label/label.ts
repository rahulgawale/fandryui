import Base from 'fd/base';
import { api } from 'lwc';

// See fd-checkbox's checkbox.ts for why this list exists: it keeps a
// consumer's `elementProps` from clobbering a property the component
// itself controls. Note the native <label> element's IDL property for the
// `for` attribute is `htmlFor` (`for` is a reserved word in JS) -- `for`
// itself matches nothing on the real element and would have let
// `elementProps={ htmlFor: 'x' }` silently clobber the label's real
// association undetected.
const RESERVED_ELEMENT_PROPS = ['htmlFor', 'class'];

export default class Label extends Base {
  @api htmlFor = '';
  @api required = false;

  // Spread onto the native <label> via `lwc:spread` -- see checkbox.ts for
  // why this can't reach `data-*` attributes, and why that's not solved
  // with a dedicated prop either.
  @api elementProps: Record<string, unknown> = {};

  get resolvedElementProps(): Record<string, unknown> {
    return this.resolveElementProps(this.elementProps, RESERVED_ELEMENT_PROPS, 'fd-label');
  }
}
