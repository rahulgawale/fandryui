import { api } from 'lwc';
import Base from 'fandry/base';
import { partList } from 'fandry/parts';

export default class FdText extends Base {
  @api as: 'p' | 'span' | 'div' = 'p';
  @api size: 'xs' | 'sm' | 'md' = 'md';
  @api variant: 'default' | 'muted' = 'default';

  get classes(): string {
    return ['text', `text--${this.as}`, `text--${this.size}`, `text--${this.variant}`].join(' ');
  }

  // Deliberately `role="paragraph"` on a single element, not a real
  // <p>/<div>/<span> swap -- same constraint fandry-heading hit: LWC templates
  // are static, and branching `as` across several `template if:true`
  // blocks (one real tag each) breaks slot content projection (confirmed
  // live -- see heading.ts for the full story). `role="paragraph"` is
  // ARIA 1.2's own document-structure role for exactly this case: a
  // paragraph whose semantics aren't carried by a host-language <p>
  // element. `as="span"`/`as="div"` need no ARIA equivalent -- both are
  // implicitly `role="generic"`, so the `display` driven by their
  // `text--{as}` class is the only difference between them.
  get role(): 'paragraph' | undefined {
    return this.as === 'p' ? 'paragraph' : undefined;
  }

  get basePart(): string {
    return partList('base', { [this.variant]: true });
  }
}
