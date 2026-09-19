import { LightningElement } from 'lwc';
import { COMPONENTS, CATEGORY_ORDER } from 'fandryui/componentsData';

const PAGES = [
  { label: 'Home', value: '/' },
  { label: 'Components', value: '/components' },
  { label: 'Examples', value: '/examples' }
];

export default class SiteHeader extends LightningElement {
  paletteOpen = false;

  // Every component page, grouped the way the docs sidebar groups them, plus
  // the top-level pages. Each item's `value` is its URL -- fandry-command
  // only reports what was chosen; navigating there is this app's decision.
  // Tag and slug are keywords so "fandry-select" and "select" both find it.
  paletteItems = [
    ...PAGES.map((page) => ({ ...page, group: 'Pages' })),
    ...CATEGORY_ORDER.flatMap((category) =>
      COMPONENTS.filter((component) => component.category === category).map((component) => ({
        label: component.name,
        value: `/components/${component.slug}`,
        group: category,
        description: component.tag,
        keywords: [component.slug]
      }))
    )
  ];

  // "⌘K" on Apple platforms, "Ctrl K" elsewhere -- display only; the
  // shortcut below accepts either modifier everywhere.
  get shortcutHint(): string {
    return /Mac|iPhone|iPad/.test(navigator.platform) ? '⌘K' : 'Ctrl K';
  }

  connectedCallback() {
    document.addEventListener('keydown', this.handleDocumentKeydown);
  }

  disconnectedCallback() {
    document.removeEventListener('keydown', this.handleDocumentKeydown);
  }

  handleDocumentKeydown = (event: KeyboardEvent) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      // Browsers bind this to their own search/address bar.
      event.preventDefault();
      this.paletteOpen = !this.paletteOpen;
    }
  };

  handlePaletteOpen() {
    this.paletteOpen = true;
  }

  handlePaletteToggle(event: CustomEvent<boolean>) {
    this.paletteOpen = event.detail;
  }

  handlePaletteSelect(event: CustomEvent<{ value: string }>) {
    // No client-side router in this project (see componentDoc.ts) -- each
    // page is a real route, so navigating is a plain page load.
    window.location.assign(event.detail.value);
  }
}
