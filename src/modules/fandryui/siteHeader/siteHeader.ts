import { LightningElement } from 'lwc';
import { COMPONENTS, CATEGORY_ORDER } from 'fandryui/componentsData';

const PAGES = [
  { label: 'Home', value: '/' },
  { label: 'Components', value: '/components' },
  { label: 'Examples', value: '/examples' }
];

const IS_APPLE = /Mac|iPhone|iPad/.test(navigator.platform);

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

  get shortcutHint(): string {
    return IS_APPLE ? '⌘K' : 'Ctrl K';
  }

  connectedCallback() {
    document.addEventListener('keydown', this.handleDocumentKeydown);
  }

  disconnectedCallback() {
    document.removeEventListener('keydown', this.handleDocumentKeydown);
  }

  handleDocumentKeydown = (event: KeyboardEvent) => {
    // Cmd on Apple platforms, Ctrl elsewhere -- not both: on macOS, Ctrl+K
    // is "kill to end of line" in every text field. `key` can be missing on
    // synthetic events (autofill, some extensions).
    const modifier = IS_APPLE ? event.metaKey : event.ctrlKey;

    if (modifier && event.key?.toLowerCase() === 'k') {
      // Browsers bind this to their own search/address bar.
      event.preventDefault();
      this.setPaletteOpen(!this.paletteOpen);
    }
  };

  // The header's own z-index (below the shared overlay level, so a popover
  // opening beside it isn't hidden) also caps everything inside its shadow
  // root, palette included -- so while the palette is open the header is
  // lifted above the overlay level, and dropped back after.
  private setPaletteOpen(open: boolean) {
    this.paletteOpen = open;
    this.classList.toggle('palette-open', open);
  }

  handlePaletteOpen() {
    this.setPaletteOpen(true);
  }

  handlePaletteToggle(event: CustomEvent<boolean>) {
    this.setPaletteOpen(event.detail);
  }

  handlePaletteSelect(event: CustomEvent<{ value: string }>) {
    // No client-side router in this project (see componentDoc.ts) -- each
    // page is a real route, so navigating is a plain page load.
    window.location.assign(event.detail.value);
  }
}
