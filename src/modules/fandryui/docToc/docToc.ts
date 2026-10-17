import { LightningElement, api } from 'lwc';

export interface TocItem {
  anchor: string;
  text: string;
}

// "On this page": plain #links. The docHeading each one names scrolls
// itself into view on hashchange.
export default class DocToc extends LightningElement {
  @api items: TocItem[] = [];

  get links() {
    return this.items.map((item) => ({ ...item, href: `#${item.anchor}` }));
  }
}
