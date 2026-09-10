import { api } from 'lwc';
import Base from 'fd/base';

export default class FdIcon extends Base {
  @api size: 'sm' | 'md' | 'lg' = 'md';

  // Empty (the default) means decorative: the icon is paired with visible
  // text elsewhere (a labelled button, a menu item) so it's hidden from
  // assistive tech entirely rather than announced. Set this only when the
  // icon is the sole content conveying meaning (e.g. an icon-only button).
  @api label = '';

  // Deliberately no `name`/registry lookup and no `elementProps` --
  // fd-icon doesn't ship or own an icon set. It's a sizing/color frame
  // around whatever glyph the consumer slots in (inline <svg>, <img>,
  // an SLDS <lightning-icon>, even an emoji), so there's no single
  // internal native element to spread props onto: the projected glyph is
  // already the consumer's own element carrying whatever attributes they
  // gave it. Baking in a name-keyed icon set would also lock every
  // consumer into one specific icon library's choices.

  get classes(): string {
    return ['icon', `icon--${this.size}`].join(' ');
  }

  get isDecorative(): boolean {
    return !this.label;
  }

  get role(): 'img' | undefined {
    return this.isDecorative ? undefined : 'img';
  }

  get ariaHidden(): 'true' | undefined {
    return this.isDecorative ? 'true' : undefined;
  }

  get ariaLabel(): string | undefined {
    return this.isDecorative ? undefined : this.label;
  }
}
