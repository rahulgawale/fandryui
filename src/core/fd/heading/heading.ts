import { api } from 'lwc';
import Base from 'fd/base';

export default class FdHeading extends Base {
  private _level: 1 | 2 | 3 | 4 | 5 | 6 = 2;

  // A getter/setter pair (rather than a plain @api field) because a static
  // template attribute (e.g. `level="3"`) is always a string -- LWC only
  // auto-coerces Boolean-defaulted @api props from bare attributes, so a
  // Number-defaulted one like this needs its own coercion or callers get a
  // string silently miscast as this union type.
  @api
  get level(): 1 | 2 | 3 | 4 | 5 | 6 {
    return this._level;
  }

  set level(value: 1 | 2 | 3 | 4 | 5 | 6) {
    this._level = Number(value) as 1 | 2 | 3 | 4 | 5 | 6;
  }

  // Deliberately `role="heading" aria-level={level}` on one element, not a
  // real h1-h6 -- LWC templates are static, so a tag name can't be
  // interpolated (no `<h{level}>`), and the alternative (branching on
  // `level` across several `template if:true` blocks, one real heading tag
  // each) doesn't work either: confirmed live that LWC flags multiple
  // default `<slot>` elements in one template as an invalid duplicate slot
  // and content silently fails to project into any of them, regardless of
  // how mutually exclusive the branches are. `role="heading"
  // aria-level={level}` is WAI-ARIA's own documented equivalent for
  // exactly this case -- host-language h1-h6 is only preferable when the
  // markup can actually express it, which here it can't.
  get classes(): string {
    return ['heading', `heading--${this.level}`].join(' ');
  }
}
