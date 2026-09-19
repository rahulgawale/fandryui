import { api } from 'lwc';
import Base from 'fandry/base';

// See fandry-sidebar-item's sidebarItem.ts for why this list exists: it
// keeps a consumer's `elementProps` from clobbering a property the
// component itself controls.
const RESERVED_ELEMENT_PROPS = ['href', 'class', 'ariaCurrent'];

export default class BreadcrumbItem extends Base {
  @api href = '';
  @api current = false;

  // Set imperatively by the parent fandry-breadcrumb (see breadcrumb.ts) --
  // hides this item's own leading separator when it's the first crumb in
  // the trail.
  @api first = false;

  // Spread onto the native <a> via `lwc:spread` -- see fandry-checkbox's
  // checkbox.ts for why this can't reach `data-*` attributes.
  @api elementProps: Record<string, unknown> = {};

  // Always a single <a> (not a conditional <a>/<span> pair) -- two
  // `template if:true`/`if:false` branches each holding their own default
  // <slot> is exactly what fandry-heading's heading.ts documents as
  // confirmed broken (LWC flags multiple default slots in one template as
  // an invalid duplicate, even across mutually exclusive branches). Same
  // fix fandry-link's link.ts already uses for its own disabled state: omit
  // `href` instead of swapping the tag -- an <a> with no href isn't a
  // hyperlink (not focusable, not in the accessibility tree's link role),
  // which is exactly the "plain text" rendering the WAI-ARIA breadcrumb
  // pattern wants for the current page.
  get computedHref(): string | undefined {
    return this.href && !this.current ? this.href : undefined;
  }

  get ariaCurrent(): 'page' | undefined {
    return this.current ? 'page' : undefined;
  }

  get resolvedElementProps(): Record<string, unknown> {
    const resolved = this.resolveElementProps(this.elementProps, RESERVED_ELEMENT_PROPS, 'fandry-breadcrumb-item');

    // Overrides even a consumer-supplied tabIndex -- same "component wins"
    // rule fandry-link's disabled state applies to its own href/tabIndex.
    return this.computedHref ? resolved : { ...resolved, tabIndex: -1 };
  }
}
