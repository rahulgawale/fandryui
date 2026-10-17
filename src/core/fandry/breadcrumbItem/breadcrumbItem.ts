import { api } from 'lwc';
import Base from 'fandry/base';
import { partList } from 'fandry/parts';
import { resolveElementProps } from 'fandry/elementProps';
import { activateAnchorOnClick, activateAnchorOnEnter, resolveTabStopIndex, withoutTabIndex } from 'fandry/anchorTabStop';

// See fandry-sidebar-item's sidebarItem.ts for why this list exists: it
// keeps a consumer's `elementProps` from clobbering a property the
// component itself controls.
const RESERVED_ELEMENT_PROPS = ['href', 'class', 'ariaCurrent'];

export default class BreadcrumbItem extends Base {
  @api href = '';
  @api current = false;

  // Spread onto the native <a> via `lwc:spread` -- see fandry-checkbox's
  // checkbox.ts for why this can't reach `data-*` attributes.
  @api elementProps: Record<string, unknown> = {};

  /* Always the same <a>, so the `link` part and `elementProps` keep one
     target: the current crumb just loses its href, and an <a> without one
     is plain text, as the WAI-ARIA breadcrumb pattern wants. */
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
    return resolveTabStopIndex(this.elementProps, this.isLink);
  }

  handleKeydown(event: KeyboardEvent): void {
    activateAnchorOnEnter(event, this.template);
  }

  handleClick(event: MouseEvent): void {
    activateAnchorOnClick(event, this.template);
  }

  get resolvedElementProps(): Record<string, unknown> {
    return withoutTabIndex(
      resolveElementProps(this, this.elementProps, RESERVED_ELEMENT_PROPS, 'fandry-breadcrumb-item')
    );
  }

  get linkPart(): string {
    return partList('link', { current: this.current });
  }
}
