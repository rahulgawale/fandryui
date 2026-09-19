import { api } from 'lwc';
import Base from 'fandry/base';

interface FdBreadcrumbItemElement extends HTMLElement {
  first: boolean;
}

// A nav landmark wrapping an <ol> of fandry-breadcrumb-item crumbs -- the
// same "parent owns list semantics, child owns item semantics" split
// fandry-sidebar/fandry-sidebar-item and fandry-menu/fandry-menu-item already
// use.
export default class Breadcrumb extends Base {
  @api ariaLabel = 'Breadcrumb';

  // Tells each slotted fandry-breadcrumb-item whether it's the first crumb
  // in the trail, so it can hide its own leading separator -- the same
  // "parent walks its slotted children and drives a plain @api prop on
  // each" pattern fandry-menu uses for roving tabindex (see menu.ts's
  // updateRovingTabIndex). Driven by both renderedCallback *and*
  // slotchange for the same reason fandry-menu's is: slotchange doesn't
  // fire under this project's jsdom test environment, renderedCallback
  // covers that; slotchange is the real, standards-based signal in an
  // actual browser.
  renderedCallback() {
    this.updateItemPositions();
  }

  handleSlotChange = () => {
    this.updateItemPositions();
  };

  private updateItemPositions() {
    const items = Array.from(this.querySelectorAll('fandry-breadcrumb-item')) as FdBreadcrumbItemElement[];
    items.forEach((item, index) => {
      item.first = index === 0;
    });
  }
}
