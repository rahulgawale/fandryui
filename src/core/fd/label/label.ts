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

  private lastWarnedElementProps: Record<string, unknown> | null = null;

  get resolvedElementProps(): Record<string, unknown> {
    const result: Record<string, unknown> = {};
    const rejectedKeys: string[] = [];

    for (const [key, value] of Object.entries(this.elementProps)) {
      if (RESERVED_ELEMENT_PROPS.includes(key)) {
        rejectedKeys.push(key);
      } else {
        result[key] = value;
      }
    }

    if (rejectedKeys.length && this.elementProps !== this.lastWarnedElementProps) {
      this.lastWarnedElementProps = this.elementProps;
      // eslint-disable-next-line no-console
      console.warn(
        `fd-label: elementProps included ${rejectedKeys.map((key) => `"${key}"`).join(', ')}, which fd-label already controls via its own @api props -- ignored. Use the dedicated @api prop instead (e.g. \`htmlFor\`).`
      );
    }

    return result;
  }
}
