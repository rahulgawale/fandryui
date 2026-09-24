import { api } from 'lwc';
import Base from 'fandry/base';
import { partList } from 'fandry/parts';

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

  // Only a crumb with an href is a link. Then the `.tab-stop` wrapper takes
  // the link role, the tab stop and the label, and the <a> is hidden from
  // assistive tech (see Base.activateAnchorOnEnter for why). Otherwise the
  // crumb is plain text and none of this applies.
  get isLink(): boolean {
    return Boolean(this.computedHref);
  }

  get linkRole(): 'link' | undefined {
    return this.isLink ? 'link' : undefined;
  }

  get labelledBy(): 'anchor' | undefined {
    return this.isLink ? 'anchor' : undefined;
  }

  get anchorAriaHidden(): 'true' | undefined {
    return this.isLink ? 'true' : undefined;
  }

  get tabStopIndex(): string | undefined {
    return this.resolveTabStopIndex(this.elementProps, this.isLink);
  }

  handleKeydown(event: KeyboardEvent): void {
    this.activateAnchorOnEnter(event);
  }

  get resolvedElementProps(): Record<string, unknown> {
    return this.withoutTabIndex(
      this.resolveElementProps(this.elementProps, RESERVED_ELEMENT_PROPS, 'fandry-breadcrumb-item')
    );
  }

  get linkPart(): string {
    return partList('link', { current: this.current });
  }
}
