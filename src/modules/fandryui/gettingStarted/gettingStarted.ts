import { LightningElement } from 'lwc';
import {
  GETTING_STARTED_PAGES,
  getGettingStartedPage
} from 'fandryui/gettingStartedData';

export default class GettingStarted extends LightningElement {
  slug = '';

  connectedCallback() {
    // Same approach as componentDoc: there is no client-side router (see
    // lwr.config.json's static multi-route config), so each page is its own
    // real route and the browser's URL says which one to render.
    const match = window.location.pathname.match(/\/getting-started(?:\/([a-z-]+))?\/?$/);
    this.slug = match && match[1] ? match[1] : '';
  }

  get page() {
    return getGettingStartedPage(this.slug);
  }

  get isOverview() {
    return this.page.slug === '';
  }

  get sidebarItems() {
    return GETTING_STARTED_PAGES.map((page) => ({
      slug: page.slug || 'overview',
      name: page.name,
      href: page.slug ? `/getting-started/${page.slug}` : '/getting-started',
      active: page.slug === this.page.slug
    }));
  }

  // Overview links to the two platform pages, as cards.
  get platformCards() {
    return GETTING_STARTED_PAGES.filter((page) => page.slug).map((page) => ({
      slug: page.slug,
      name: page.name,
      badge: page.badge,
      href: `/getting-started/${page.slug}`,
      description: page.description
    }));
  }

  // The template can't switch on a block's `type`, so each block carries one
  // boolean per kind, and a stable key for for:each.
  get sections() {
    return this.page.sections.map((section) => ({
      ...section,
      blocks: section.blocks.map((block, index) => ({
        ...block,
        key: `${section.id}-${index}`,
        isText: block.type === 'text',
        isList: block.type === 'list',
        isCode: block.type === 'code',
        isTree: block.type === 'tree',
        isNote: block.type === 'note'
      }))
    }));
  }
}
