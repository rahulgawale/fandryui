import { api } from 'lwc';
import Base from 'fandry/base';
import { partList } from 'fandry/parts';

// See fandry-link's link.ts for why this list exists: it keeps a
// consumer's `elementProps` from clobbering a property the component
// itself controls.
const RESERVED_ELEMENT_PROPS = ['href', 'class', 'ariaCurrent'];

export default class SidebarItem extends Base {
  @api href = '';
  @api active = false;

  // Spread onto the native <a> via `lwc:spread` -- see fandry-checkbox's
  // checkbox.ts for why this can't reach `data-*` attributes.
  @api elementProps: Record<string, unknown> = {};

  get classes(): string {
    return ['item', this.active ? 'item--active' : ''].filter(Boolean).join(' ');
  }

  // Unlike fandry-link's variant styling, "active" here is a real
  // navigation state (this is the page the user is currently on), so it
  // carries the ARIA semantics for that, not just a visual class.
  get ariaCurrent(): 'page' | undefined {
    return this.active ? 'page' : undefined;
  }

  get tabStopIndex(): string | undefined {
    return this.resolveTabStopIndex(this.elementProps, true);
  }

  handleKeydown(event: KeyboardEvent): void {
    this.activateAnchorOnEnter(event);
  }

  get resolvedElementProps(): Record<string, unknown> {
    return this.withoutTabIndex(
      this.resolveElementProps(this.elementProps, RESERVED_ELEMENT_PROPS, 'fandry-sidebar-item')
    );
  }

  get linkPart(): string {
    return partList('link', { current: this.active });
  }
}
