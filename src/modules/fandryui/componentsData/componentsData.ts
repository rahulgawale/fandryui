export interface ComponentProp {
  name: string;
  type: string;
  default: string;
  description: string;
}

// An additional example + code block shown after the entry's main one.
// `demo` is a key in componentDoc's DEMO_COMPONENTS map.
export interface ComponentExample {
  title: string;
  demo: string;
  code: string;
}

// A short explanation shown in an info alert under the main code block:
// why the component is used the way it is, where that is not obvious.
export interface ComponentNote {
  title: string;
  paragraphs: string[];
}

export interface ComponentEntry {
  slug: string;
  name: string;
  tag: string;
  category: string;
  description: string;
  props: ComponentProp[];
  /** Elements a page can style with `tag::part(name)`; described in PART_DESCRIPTIONS. */
  parts?: string[];
  /** Names added to a part while a state is on (`::part(control checked)`); described in STATE_DESCRIPTIONS. */
  states?: string[];
  code: string;
  examples?: ComponentExample[];
  notes?: ComponentNote[];
  /** A live example of theming this component with tokens and parts, shown under the default example. */
  customize?: ComponentExample;
}

// Sidebar/pagination order follows this list, category by category -- so
// prev/next walks the sidebar top-to-bottom rather than some unrelated
// order.
export const CATEGORY_ORDER = ['Layout', 'Typography', 'Forms', 'Feedback', 'Overlays & Data', 'Salesforce'];

/*
  One vocabulary for every component's parts, so a name means the same thing
  wherever it appears: `control` is always the box a field draws, `indicator`
  always the mark that shows a state. A component's page lists the names it
  has; parts.test.ts keeps those lists equal to the templates.
*/
export const PART_DESCRIPTIONS: Record<string, string> = {
  base: 'The outermost element.',
  label: 'The label.',
  required: 'The required-field asterisk.',
  control: 'The box the field draws: a text field\'s border, a select\'s button, a checkbox\'s box, a radio\'s circle, a switch\'s track.',
  indicator: 'The mark that shows the state or value: a checkbox\'s check, a radio\'s dot, a switch\'s thumb, a progress bar\'s fill.',
  input: 'The native `<input>`.',
  textarea: 'The native `<textarea>`.',
  prefix: 'The wrapper of the prefix slot.',
  suffix: 'The wrapper of the suffix slot.',
  'help-text': 'The help text under the field.',
  'error-text': 'The error under the field. In the page even while empty, so style it only for a field that is `invalid`.',
  value: 'The selected value, as shown in the closed field.',
  chevron: 'The dropdown arrow.',
  trigger: 'The wrapper of the trigger slot.',
  panel: 'The surface that opens: a dropdown\'s list, a popover, a tooltip, a dialog, a loading overlay\'s box.',
  backdrop: 'The dimmed layer behind a modal panel, or a loading overlay\'s cover.',
  spinner: 'A loading overlay\'s spinner (a fandry-spinner\'s `base`).',
  arrow: 'The arrow that points at the trigger.',
  search: 'The wrapper of the search input.',
  listbox: 'The list of options.',
  group: 'A group of options.',
  'group-label': 'A group\'s heading.',
  option: 'One option.',
  'option-label': 'An option\'s label.',
  'option-description': 'An option\'s second line.',
  empty: 'What shows when there is nothing to list.',
  status: 'A status line (a page count, "Searching…").',
  link: 'The native `<a>`.',
  list: 'The element holding the items.',
  separator: 'The separator before the item.',
  title: 'The title line.',
  body: 'The content below the title.',
  image: 'The `<img>`.',
  initials: 'The initials shown when there is no image.',
  previous: 'The link to the previous page (also a `link`), or the viewer\'s button to the previous picture.',
  next: 'The link to the next page (also a `link`), or the viewer\'s button to the next picture.',
  eyebrow: 'The small "Previous" / "Next" line.',
  button: 'The Previous and Next buttons, or a tile\'s button (a fandry-button\'s `base`).',
  toolbar: 'The bar above the table that holds the search box, or the viewer\'s bar above the picture.',
  container: 'The scrolling box around the table.',
  table: 'The native `<table>`.',
  caption: 'The `<caption>`, or a picture\'s caption.',
  'header-row': 'The header row.',
  'header-cell': 'A header cell.',
  'sort-button': 'The button in a sortable header cell.',
  'header-label': 'A header\'s text.',
  'sort-indicator': 'The sort arrow.',
  row: 'A body row.',
  cell: 'A body cell.',
  'selection-cell': 'The checkbox cell of a row or of the header (also a `cell` or `header-cell`).',
  'loading-row': 'A placeholder row while loading (also a `row`).',
  'empty-row': 'The row shown when there are no rows (also a `row`).',
  footer: 'The bar under the table.',
  'selection-status': 'The "n of m selected" text.',
  pagination: 'The wrapper of the pagination slot.',
  selection: 'The chosen record, in single-select mode.',
  'selection-label': 'The chosen record\'s name.',
  'clear-button': 'The button that clears the chosen record.',
  chips: 'The row of chosen records and the input, in multi-select mode.',
  chip: 'One chosen record.',
  'chip-label': 'A chosen record\'s name.',
  'chip-remove': 'The button that removes one chosen record.',
  'clear-all': 'The Clear all button.',
  field: 'One field of a form: its label, control, help text and error (a fandry-form-field\'s `base`).',
  revert: 'The button that puts back a changed field\'s saved value.',
  item: 'One tile of the grid.',
  frame: 'The box a tile\'s picture fills, at the grid\'s aspect ratio.',
  placeholder: 'A skeleton tile while loading (a fandry-skeleton\'s `base`).',
  'close-button': 'The button that closes the viewer (a fandry-button\'s `base`).',
  'keys-button': 'The button that shows the viewer\'s keyboard shortcuts (a fandry-button\'s `base`).',
  keys: 'The box that holds the viewer\'s keyboard shortcuts.',
  stage: 'The area that shows the picture and takes swipes and pinches.',
  viewer: 'The full-screen viewer\'s content (a fandry-media-viewer\'s `base`).',
  'viewer-image': 'The picture in the viewer (a fandry-media-viewer\'s `image`).',
  'viewer-caption': 'The caption in the viewer (a fandry-media-viewer\'s `caption`).'
};

/*
  States are names added to a part while the state is on, so a page can
  style one state: `fandry-checkbox::part(control checked)` (::part() with
  several names matches only an element that has all of them). The same
  word means the same thing on every component.
*/
export const STATE_DESCRIPTIONS: Record<string, string> = {
  checked: 'The box, circle or track of a checked control.',
  indeterminate: 'A checkbox that is neither checked nor unchecked, or a progress bar with no known value.',
  disabled: 'A control, option or item that cannot be used.',
  invalid: 'A field that has error text.',
  changed: 'A form field whose value differs from the saved one.',
  selected: 'The chosen option, or a selected table row.',
  active: 'The option the keyboard or pointer is on.',
  current: 'The link to the page being viewed.',
  sorted: 'A header cell whose column is sorted (also `ascending` or `descending`).',
  ascending: 'A header cell sorted low to high.',
  descending: 'A header cell sorted high to low.',
  default: 'The default look (`variant="default"`).',
  primary: '`variant="primary"`.',
  secondary: '`variant="secondary"`.',
  ghost: '`variant="ghost"`.',
  muted: '`variant="muted"`.',
  info: '`variant="info"`.',
  success: '`variant="success"`.',
  warning: '`variant="warning"`.',
  danger: '`variant="danger"`.'
};

/*
  The parts and states of the blocks, in the same vocabulary. A block has
  its own page under /blocks rather than an entry in COMPONENTS, so its
  parts are listed here; parts.test.ts holds every block that has a
  template to this list (one with no parts needs no entry).
*/
export interface BlockParts {
  tag: string;
  parts: string[];
  states?: string[];
}

export const BLOCKS: BlockParts[] = [
  { tag: 'fandry-form', parts: ['field', 'revert'], states: ['changed'] },
  { tag: 'fandry-form-field', parts: ['base', 'list', 'label', 'revert'], states: ['changed'] },
  {
    tag: 'fandry-media-gallery',
    parts: ['base', 'item', 'button', 'frame', 'image', 'caption', 'placeholder', 'viewer', 'backdrop', 'panel', 'toolbar', 'status', 'keys-button', 'keys', 'close-button', 'stage', 'previous', 'next', 'viewer-image', 'viewer-caption'],
    states: ['disabled']
  },
  { tag: 'fandry-media-keys', parts: ['base'] },
  { tag: 'fandry-media-grid', parts: ['base', 'item', 'button', 'frame', 'image', 'caption', 'placeholder'] },
  {
    tag: 'fandry-media-viewer',
    parts: ['base', 'backdrop', 'panel', 'toolbar', 'status', 'keys-button', 'keys', 'close-button', 'stage', 'image', 'previous', 'next', 'caption'],
    states: ['disabled']
  }
];

export const COMPONENTS: ComponentEntry[] = [
  // ---- Layout ----
  {
    slug: 'breadcrumb',
    name: 'Breadcrumb',
    tag: 'fandry-breadcrumb',
    parts: ['base', 'list'],
    customize: {
      title: 'Custom colors and parts',
      demo: 'breadcrumb-theme',
      code: `<!-- template -->
<div class="brand" onclick={handleNoopClick}>
  <fandry-breadcrumb>
    <fandry-breadcrumb-item href="#">Home</fandry-breadcrumb-item>
    <fandry-breadcrumb-item href="#">Shoes</fandry-breadcrumb-item>
    <fandry-breadcrumb-item current>Stride Runner</fandry-breadcrumb-item>
  </fandry-breadcrumb>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-primary: 160 84% 26%;
  --fd-text-muted: 160 15% 38%;
}

fandry-breadcrumb::part(list) {
  padding: 0.5rem 1rem;
  background: hsl(160 40% 96%);
  border-radius: 999px;
}

fandry-breadcrumb-item::part(separator) {
  color: hsl(160 84% 26%);
}

fandry-breadcrumb-item::part(link) {
  font-weight: 600;
  text-decoration: none;
}`
    },
    category: 'Layout',
    description: 'A navigation trail of ancestor pages — pair with fandry-breadcrumb-item for each crumb.',
    props: [
      { name: 'aria-label', type: 'string', default: '—', description: 'Names this nav landmark, e.g. "Folder path". Overrides messages.label.' },
      { name: 'messages', type: '{ label }', default: '{}', description: 'Replaces the default name ("Breadcrumb") for every instance, e.g. to translate it.' }
    ],
    code: `<fandry-breadcrumb>
  <fandry-breadcrumb-item href="/">Home</fandry-breadcrumb-item>
  <fandry-breadcrumb-item href="/components">Components</fandry-breadcrumb-item>
  <fandry-breadcrumb-item current>Breadcrumb</fandry-breadcrumb-item>
</fandry-breadcrumb>`
  },
  {
    slug: 'breadcrumb-item',
    name: 'Breadcrumb Item',
    tag: 'fandry-breadcrumb-item',
    parts: ['base', 'separator', 'link'],
    states: ['current'],
    customize: {
      title: 'Custom colors and parts',
      demo: 'breadcrumb-theme',
      code: `<!-- template -->
<div class="brand" onclick={handleNoopClick}>
  <fandry-breadcrumb>
    <fandry-breadcrumb-item href="#">Home</fandry-breadcrumb-item>
    <fandry-breadcrumb-item href="#">Shoes</fandry-breadcrumb-item>
    <fandry-breadcrumb-item current>Stride Runner</fandry-breadcrumb-item>
  </fandry-breadcrumb>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-primary: 160 84% 26%;
  --fd-text-muted: 160 15% 38%;
}

fandry-breadcrumb::part(list) {
  padding: 0.5rem 1rem;
  background: hsl(160 40% 96%);
  border-radius: 999px;
}

fandry-breadcrumb-item::part(separator) {
  color: hsl(160 84% 26%);
}

fandry-breadcrumb-item::part(link) {
  font-weight: 600;
  text-decoration: none;
}`
    },
    category: 'Layout',
    description: 'A single crumb inside fandry-breadcrumb, with a current-page state.',
    props: [
      { name: 'href', type: 'string', default: "''", description: 'Link target — omitted (along with the current page) renders as plain text.' },
      { name: 'current', type: 'boolean', default: 'false', description: "Marks this as the current page (plain text, not a link, + aria-current)." }
    ],
    code: `<fandry-breadcrumb-item href="/components">Components</fandry-breadcrumb-item>`
  },
  {
    slug: 'card',
    name: 'Card',
    tag: 'fandry-card',
    parts: ['base'],
    customize: {
      title: 'Custom colors and parts',
      demo: 'card-theme',
      code: `<!-- template -->
<div class="brand row">
  <fandry-card class="promo">
    <fandry-heading level="4">Summer sale</fandry-heading>
    <fandry-text variant="muted">Up to 40% off trail gear, this week only.</fandry-text>
  </fandry-card>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-radius-lg: 1.25rem;
  --fd-border: 160 30% 85%;
  --fd-text-muted: 160 15% 38%;
}

fandry-card::part(base) {
  padding: 1.5rem;
  box-shadow: 0 8px 24px hsl(160 40% 20% / 0.12);
}

/* One card only, gradient and all. */
.promo::part(base) {
  background: linear-gradient(135deg, hsl(160 60% 95%), hsl(45 90% 93%));
}`
    },
    category: 'Layout',
    description: 'A bordered, padded surface for grouping related content.',
    props: [],
    code: `<fandry-card>
  <fandry-heading level="3">Pro Plan</fandry-heading>
  <fandry-text variant="muted">Everything in Free, plus priority support.</fandry-text>
</fandry-card>`
  },
  {
    slug: 'divider',
    name: 'Divider',
    tag: 'fandry-divider',
    parts: ['base'],
    customize: {
      title: 'Custom colors and parts',
      demo: 'divider-theme',
      code: `<!-- template -->
<div class="brand stack narrow">
  <fandry-text>Free shipping over $50</fandry-text>
  <fandry-divider></fandry-divider>
  <fandry-text>30-day returns</fandry-text>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-border: 160 84% 26%;
  --fd-border-width: 3px;
}

fandry-divider::part(base) {
  border-radius: 999px;
  opacity: 0.35;
}`
    },
    category: 'Layout',
    description: 'A horizontal or vertical rule for separating content.',
    props: [{ name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'Rule direction.' }],
    code: `<fandry-divider></fandry-divider>
<fandry-divider orientation="vertical"></fandry-divider>`
  },
  {
    slug: 'pagination',
    name: 'Pagination',
    tag: 'fandry-pagination',
    parts: ['base', 'link', 'previous', 'eyebrow', 'title', 'next', 'status', 'button'],
    states: ['disabled'],
    customize: {
      title: 'Custom colors and parts',
      demo: 'pagination-theme',
      code: `<!-- template -->
<div class="brand stack">
  <fandry-pagination
    previous-href="#"
    previous-label="Sizing guide"
    next-href="#"
    next-label="Care instructions"
    onclick={handleNoopClick}
  ></fandry-pagination>
  <fandry-pagination page-index={pageIndex} page-count="5" onchange={handlePageChange}></fandry-pagination>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-primary: 160 84% 26%;
  --fd-radius-lg: 1rem;
  --fd-radius-md: 999px;
  --fd-border: 160 30% 85%;
}

fandry-pagination::part(link) {
  background: hsl(160 40% 97%);
}

fandry-pagination::part(eyebrow) {
  color: hsl(160 84% 26%);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

fandry-pagination::part(title) {
  font-weight: 700;
}

fandry-pagination::part(status) {
  font-weight: 600;
}`
    },
    category: 'Layout',
    description: 'Previous/next navigation between pages. Links between two adjacent pages, or Previous / Page N of M / Next buttons for paging a collection.',
    props: [
      { name: 'previous-href', type: 'string', default: "''", description: 'Omit to hide the previous link (e.g. on the first page).' },
      { name: 'previous-label', type: 'string', default: "''", description: 'Title of the previous page.' },
      { name: 'next-href', type: 'string', default: "''", description: 'Omit to hide the next link (e.g. on the last page).' },
      { name: 'next-label', type: 'string', default: "''", description: 'Title of the next page.' },
      { name: 'page-index', type: 'number', default: 'undefined', description: 'Zero-based current page. Setting it switches from links to Previous/Next buttons; listen for `change` (detail.pageIndex) and update it. Replace controls via the previous, status and next slots, or just the buttons\' words via previous-text and next-text.' },
      { name: 'page-count', type: 'number', default: '-1', description: 'Total pages in page mode; -1 means unknown (Next stays enabled).' },
      { name: 'aria-label', type: 'string', default: '—', description: 'Names this nav landmark, e.g. "Results pages". Overrides messages.label.' },
      { name: 'messages', type: '{ label, status(page, pageCount) }', default: '{}', description: 'Replaces the default landmark name ("Pagination") and page mode\'s status line, e.g. to translate them. Link mode\'s "Previous" / "Next" lines are the previous-eyebrow and next-eyebrow slots.' }
    ],
    code: `<fandry-pagination
  previous-href="/components/pagination"
  previous-label="Pagination"
  next-href="/components/sidebar"
  next-label="Sidebar"
></fandry-pagination>`,
    examples: [
      {
        title: 'Page mode',
        demo: 'pagination-pages',
        code: `<!-- template -->
<fandry-pagination
  page-index={pageIndex}
  page-count={pageCount}
  onchange={handlePageChange}
></fandry-pagination>

// component
pageIndex = 0;
pageCount = 5;

handlePageChange(event) {
  this.pageIndex = event.detail.pageIndex;
}`
      }
    ]
  },
  {
    slug: 'sidebar',
    name: 'Sidebar',
    tag: 'fandry-sidebar',
    parts: ['base'],
    customize: {
      title: 'Custom colors and parts',
      demo: 'sidebar-theme',
      code: `<!-- template -->
<div class="brand narrow" onclick={handleNoopClick}>
  <fandry-sidebar aria-label="Shop">
    <fandry-sidebar-item href="#" active>Shoes</fandry-sidebar-item>
    <fandry-sidebar-item href="#">Bags</fandry-sidebar-item>
    <fandry-sidebar-item href="#">Home</fandry-sidebar-item>
  </fandry-sidebar>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-primary: 160 84% 26%;
  --fd-radius-md: 999px;
}

fandry-sidebar::part(base) {
  padding: 0.5rem;
  background: hsl(160 40% 97%);
  border-radius: 1rem;
}

fandry-sidebar-item::part(link) {
  font-weight: 600;
}`
    },
    category: 'Layout',
    description: 'A vertical navigation rail — pair with fandry-sidebar-item for links.',
    props: [
      { name: 'aria-label', type: 'string', default: '—', description: 'Names this nav landmark, e.g. "Components". Overrides messages.label.' },
      { name: 'messages', type: '{ label }', default: '{}', description: 'Replaces the default name ("Sidebar") for every instance, e.g. to translate it.' }
    ],
    code: `<fandry-sidebar aria-label="Components">
  <fandry-sidebar-item href="/components/button" active>Button</fandry-sidebar-item>
  <fandry-sidebar-item href="/components/card">Card</fandry-sidebar-item>
</fandry-sidebar>`
  },
  {
    slug: 'sidebar-item',
    name: 'Sidebar Item',
    tag: 'fandry-sidebar-item',
    parts: ['base', 'link'],
    states: ['current'],
    customize: {
      title: 'Custom colors and parts',
      demo: 'sidebar-theme',
      code: `<!-- template -->
<div class="brand narrow" onclick={handleNoopClick}>
  <fandry-sidebar aria-label="Shop">
    <fandry-sidebar-item href="#" active>Shoes</fandry-sidebar-item>
    <fandry-sidebar-item href="#">Bags</fandry-sidebar-item>
    <fandry-sidebar-item href="#">Home</fandry-sidebar-item>
  </fandry-sidebar>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-primary: 160 84% 26%;
  --fd-radius-md: 999px;
}

fandry-sidebar::part(base) {
  padding: 0.5rem;
  background: hsl(160 40% 97%);
  border-radius: 1rem;
}

fandry-sidebar-item::part(link) {
  font-weight: 600;
}`
    },
    category: 'Layout',
    description: 'A single navigation row for fandry-sidebar, with an active/current-page state.',
    props: [
      { name: 'href', type: 'string', default: "''", description: 'Link target.' },
      { name: 'active', type: 'boolean', default: 'false', description: "Marks this as the current page (styling + aria-current)." }
    ],
    code: `<fandry-sidebar-item href="/components/card" active>Card</fandry-sidebar-item>`
  },

  // ---- Typography ----
  {
    slug: 'heading',
    name: 'Heading',
    tag: 'fandry-heading',
    parts: ['base'],
    customize: {
      title: 'Custom colors and parts',
      demo: 'heading-theme',
      code: `<!-- template -->
<div class="brand stack">
  <fandry-heading level="4" class="eyebrow">New arrivals</fandry-heading>
  <fandry-heading level="2">The summer collection</fandry-heading>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-font-heading: Georgia, "Times New Roman", serif;
  --fd-text: 160 40% 14%;
  --fd-heading-letter-spacing: -0.02em;
}

fandry-heading.eyebrow::part(base) {
  font-family: system-ui, sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: hsl(160 84% 26%);
}`
    },
    category: 'Typography',
    description: 'A semantically-leveled heading, sized off the shared type scale.',
    props: [{ name: 'level', type: '1 | 2 | 3 | 4 | 5 | 6', default: '2', description: 'Heading level: renders the matching h1-h6.' }],
    code: `<fandry-heading level="2">Section title</fandry-heading>`
  },
  {
    slug: 'icon',
    name: 'Icon',
    tag: 'fandry-icon',
    parts: ['base'],
    customize: {
      title: 'Custom colors and parts',
      demo: 'icon-theme',
      code: `<!-- template -->
<div class="brand row">
  <fandry-icon size="md">
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.9 6.9L22 9.3l-5.5 4.8L18 21l-6-3.6L6 21l1.5-6.9L2 9.3l7.1-.4z"></path>
    </svg>
  </fandry-icon>
  <fandry-icon size="md" class="large">
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.9 6.9L22 9.3l-5.5 4.8L18 21l-6-3.6L6 21l1.5-6.9L2 9.3l7.1-.4z"></path>
    </svg>
  </fandry-icon>
</div>

/* css */
fandry-icon::part(base) {
  box-sizing: content-box;
  padding: 0.5rem;
  color: hsl(45 90% 45%);
  background: hsl(45 90% 94%);
  border-radius: 999px;
}

/* One icon only, at any size. */
.large::part(base) {
  width: 2.5rem;
  height: 2.5rem;
}`
    },
    category: 'Typography',
    description: 'A sizing/color frame around a slotted glyph — brings no icon set of its own.',
    props: [
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Icon size.' },
      { name: 'label', type: 'string', default: "''", description: 'Set only when the icon is the sole content conveying meaning (icon-only button).' },
      { name: 'aria-label', type: 'string', default: '—', description: 'The same name, set the standard way. Wins over label.' }
    ],
    code: `<fandry-icon size="md" label="Favorite">
  <svg viewBox="0 0 24 24">...</svg>
</fandry-icon>`
  },
  {
    slug: 'label',
    name: 'Label',
    tag: 'fandry-label',
    parts: ['base', 'required'],
    customize: {
      title: 'Custom colors and parts',
      demo: 'label-theme',
      code: `<!-- template -->
<div class="brand stack narrow">
  <label for="theme-email"><fandry-label required>Email</fandry-label></label>
  <input id="theme-email" type="email" class="native-input" placeholder="you@brand.com" />
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-text: 160 40% 14%;
}

fandry-label::part(base) {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

fandry-label::part(required) {
  color: hsl(160 84% 26%);
}`
    },
    category: 'Typography',
    description: 'The text of a form label, with an optional required indicator. Put it inside your own `<label>`, or in the `label` slot of a field.',
    notes: [
      {
        title: 'Why you write the <label> yourself',
        paragraphs: [
          'A label finds its control by id, and the browser looks an id up inside one shadow root only. A `<label>` rendered inside `fandry-label` could never reach a control outside it: it would look right, give the control no name for a screen reader, and do nothing when clicked.',
          'So you write the `<label>`, beside its control, and `fandry-label` goes inside it as the text. That is how web components work, not something particular to this library: each component is a tree of its own, so two elements that refer to each other have to be in the same one.',
          'The fields (`fandry-input`, `fandry-textarea`, `fandry-select`, `fandry-combobox`, `fandry-lookup`) follow the same rule from the inside. Each renders its own `<label>` next to its own control, so they take the label as a prop or a slot and need no `fandry-label`.'
        ]
      }
    ],
    props: [
      { name: 'required', type: 'boolean', default: 'false', description: 'Shows the required asterisk. It is only the mark: set `required` on your control as well. In a field\'s `label` slot the field shows it instead, from its own `required`.' },
      { name: 'html-for', type: 'string', default: '—', description: 'Deprecated: it does nothing. The `for` goes on the `<label>` you wrap this in.' }
    ],
    code: `<!-- with your own control -->
<label for="username"><fandry-label required>Username</fandry-label></label>
<input id="username" />

<!-- in a field's label slot: it looks like the field's label, and the
     field shows the asterisk -->
<fandry-input required>
  <fandry-label slot="label">Username</fandry-label>
</fandry-input>`
  },
  {
    slug: 'text',
    name: 'Text',
    tag: 'fandry-text',
    parts: ['base'],
    states: ['default', 'muted'],
    customize: {
      title: 'Custom colors and parts',
      demo: 'text-theme',
      code: `<!-- template -->
<div class="brand stack narrow">
  <fandry-text>Every pair is made to order in our Porto workshop.</fandry-text>
  <fandry-text variant="muted" size="sm">Ships in 5 to 7 days.</fandry-text>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-font-sans: Georgia, "Times New Roman", serif;
  --fd-text: 160 40% 14%;
  --fd-text-muted: 160 15% 38%;
}

fandry-text::part(base) {
  line-height: 1.7;
}`
    },
    category: 'Typography',
    description: 'Body text — pick the rendered tag and size independently.',
    props: [
      { name: 'as', type: "'p' | 'span' | 'div'", default: "'p'", description: 'The element rendered: a paragraph (p), a block (div) or inline text (span).' },
      { name: 'size', type: "'xs' | 'sm' | 'md'", default: "'md'", description: 'Font size.' },
      { name: 'variant', type: "'default' | 'muted'", default: "'default'", description: 'Text color.' }
    ],
    code: `<fandry-text variant="muted" size="sm">Helper text</fandry-text>`
  },

  // ---- Forms ----
  {
    slug: 'button',
    name: 'Button',
    tag: 'fandry-button',
    examples: [
      {
        title: 'A loading state, with a slot',
        demo: 'button-loading',
        code: `<!-- template: the spinner is just slotted content -->
<fandry-button element-props={saveButtonProps} onclick={handleSave}>
  <template lwc:if={saving}>
    <fandry-spinner size="sm" aria-hidden="true"></fandry-spinner>
  </template>
  {saveLabel}
</fandry-button>

// js
saving = false;

// The text says what's happening; the spinner beside it is decoration.
get saveLabel() {
  return this.saving ? 'Saving…' : 'Save';
}

// aria-disabled, not disabled: disabling the focused button would drop
// focus to the page. It keeps focus but ignores clicks, so handleSave
// can't run twice. tabIndex: 0 is fandry-button's own default.
get saveButtonProps() {
  return { tabIndex: 0, ariaDisabled: this.saving ? 'true' : null };
}

async handleSave() {
  this.saving = true;
  try {
    await this.save();
  } finally {
    this.saving = false;
  }
}

<!-- Need it on many screens? Wrap it once in your own small component that
     renders fandry-button like this: composition, nothing copied. -->`
      }
    ],
    parts: ['base'],
    states: ['default', 'secondary', 'ghost', 'disabled'],
    customize: {
      title: 'Custom colors and parts',
      demo: 'button-theme',
      code: `<!-- template -->
<div class="brand row">
  <fandry-button class="cta">Add to cart</fandry-button>
  <fandry-button variant="secondary">Save for later</fandry-button>
  <fandry-button variant="ghost">Share</fandry-button>
  <fandry-button class="rainbow">Launch sale</fandry-button>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-primary: 160 84% 26%;
  --fd-ring-color: 160 84% 36%;
  --fd-radius-md: 999px;
}

fandry-button::part(base) {
  font-weight: 700;
  letter-spacing: 0.02em;
}

fandry-button.cta::part(base) {
  padding-inline: 1.5rem;
}

/* The glow goes on the element, not the part: a box-shadow on the part
   would replace the button's focus ring. */
fandry-button.cta {
  filter: drop-shadow(0 6px 12px hsl(160 84% 26% / 0.35));
}

/* A variant is a state too: only secondary buttons. */
fandry-button::part(base secondary) {
  color: hsl(160 84% 26%);
  border-color: hsl(160 84% 26%);
}

/* Even a rainbow border is only CSS: two layers under the label, on the
   part's own ::before and ::after. No copy of the component needed. */
fandry-button.rainbow::part(base) {
  position: relative;
  isolation: isolate;
  border-color: transparent;
  background: transparent;
  color: hsl(160 40% 14%);
}

fandry-button.rainbow::part(base)::before,
fandry-button.rainbow::part(base)::after {
  content: '';
  position: absolute;
  border-radius: inherit;
}

fandry-button.rainbow::part(base)::before {
  inset: -1px;
  z-index: -2;
  background: conic-gradient(#ff4d4d, #ffb84d, #f5f54d, #4dff88, #4dd2ff, #7a4dff, #ff4de1, #ff4d4d);
  animation: rainbow-turn 4s linear infinite;
}

fandry-button.rainbow::part(base)::after {
  inset: 2px;
  z-index: -1;
  background: hsl(0 0% 100%);
}

@keyframes rainbow-turn {
  to {
    filter: hue-rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  fandry-button.rainbow::part(base)::before {
    animation: none;
  }
}`
    },
    category: 'Forms',
    description: 'A native button with `default`/`secondary`/`ghost` variants and three sizes.',
    props: [
      { name: 'variant', type: "'default' | 'secondary' | 'ghost'", default: "'default'", description: 'Visual style.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Button size.' },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description:
          "Disables the button. A button that must keep focus (one that is saving) takes `element-props={ tabIndex: 0, ariaDisabled: 'true' }` instead: it looks the same, has the same `disabled` state, and its clicks are ignored."
      },
      { name: 'type', type: "'button' | 'submit' | 'reset'", default: "'button'", description: 'Native button type.' }
    ],
    code: `<fandry-button variant="secondary" size="lg">Save</fandry-button>`
  },
  {
    slug: 'checkbox',
    name: 'Checkbox',
    tag: 'fandry-checkbox',
    parts: ['base', 'control', 'indicator', 'label'],
    states: ['checked', 'indeterminate', 'disabled'],
    customize: {
      title: 'Custom colors and parts',
      demo: 'checkbox-theme',
      code: `<!-- template -->
<div class="brand stack">
  <fandry-checkbox label="Gift wrap this order" checked></fandry-checkbox>
  <fandry-checkbox label="Email me about new arrivals"></fandry-checkbox>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-primary: 160 84% 26%;
  --fd-ring-color: 160 84% 36%;
  --fd-radius-sm: 0.375rem;
}

fandry-checkbox::part(control) {
  border-color: hsl(160 84% 26%);
}

fandry-checkbox::part(label) {
  font-weight: 600;
}

/* A state: only the checked box. A glow, as a filter: the box draws
   its focus ring with box-shadow. */
fandry-checkbox::part(control checked) {
  filter: drop-shadow(0 0 3px hsl(160 84% 26% / 0.45));
}`
    },
    category: 'Forms',
    description: 'A checkbox with a built-in label and indeterminate support.',
    props: [
      { name: 'label', type: 'string', default: "''", description: 'Visible label.' },
      { name: 'checked', type: 'boolean', default: 'false', description: 'Checked state.' },
      { name: 'indeterminate', type: 'boolean', default: 'false', description: 'Visual mixed state (synced onto the native input imperatively).' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the checkbox.' },
      { name: 'default slot', type: 'slot', default: 'the label prop', description: 'Markup in place of the label. Shown even without the label prop.' }
    ],
    code: `<fandry-checkbox label="Accept terms" onchange={handleChange}></fandry-checkbox>`,
    examples: [
      {
        title: 'A checkbox list',
        demo: 'checkbox-list',
        code: `<!-- template -->
<fieldset class="list">
  <legend>Toppings</legend>
  <template for:each={toppings} for:item="topping">
    <fandry-checkbox key={topping.value} label={topping.label}
      value={topping.value} checked={topping.checked}
      onchange={handleChange}></fandry-checkbox>
  </template>
</fieldset>

// component
handleChange(event) {
  const { value, checked } = event.target;
  this.toppings = this.toppings.map((t) =>
    t.value === value ? { ...t, checked } : t);
}

/* css */
.list { display: flex; flex-direction: column; gap: var(--fd-space-2); border: 0; padding: 0; }

// A list of checkboxes is not a component: each box is its own tab stop,
// so there is no focus or state to share. A native <fieldset> and <legend>
// name the group for assistive technology, and CSS lays it out. In a form,
// use the form block's \`checkboxes\` field type, which does this for you
// (and takes a required rule, help text and an error); fandry-multi-select
// folds the same options into a dropdown.`
      }
    ]
  },
  {
    slug: 'combobox',
    name: 'Combobox',
    tag: 'fandry-combobox',
    parts: ['base', 'label', 'required', 'control', 'input', 'chevron', 'panel', 'listbox', 'group', 'group-label', 'option', 'option-label', 'option-description', 'empty', 'help-text', 'error-text'],
    states: ['disabled', 'invalid', 'selected', 'active'],
    customize: {
      title: 'Custom colors and parts',
      demo: 'combobox-theme',
      code: `<!-- template -->
<div class="brand narrow">
  <fandry-combobox
    label="Category"
    placeholder="Search categories"
    options={options}
    value={value}
    onchange={handleChange}
  ></fandry-combobox>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-radius-md: 0.75rem;
  --fd-border-focus: 160 84% 36%;
  --fd-ring-color: 160 84% 36%;
  --fd-bg-muted: 160 40% 94%;
}

fandry-combobox::part(control) {
  background: hsl(160 40% 98%);
  font-weight: 600;
}

fandry-combobox::part(group-label) {
  color: hsl(160 84% 26%);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

fandry-combobox::part(option-description) {
  font-style: italic;
}`
    },
    category: 'Forms',
    description: 'A searchable select — type to narrow the options, then pick one.',
    props: [
      { name: 'label', type: 'string', default: "''", description: 'Visible label.' },
      { name: 'placeholder', type: 'string', default: "''", description: 'Shown when nothing is selected or typed.' },
      { name: 'help-text', type: 'string', default: "''", description: 'Helper text below the field.' },
      { name: 'error-text', type: 'string', default: "''", description: 'An error shown under the field: the field is invalid while it has one (`aria-invalid`, the `invalid` state), and a screen reader hears it when it appears and when the field is focused.' },
      { name: 'name', type: 'string', default: "''", description: 'Exposed as `data-name` on the input.' },
      { name: 'options', type: '{ label, value, description?, group?, keywords?, disabled? }[]', default: '[]', description: 'The options. Search matches label, description, keywords and group; a prefix in the label ranks first.' },
      { name: 'value', type: 'string', default: "''", description: 'Selected value. Listen for `change` (detail is the new value).' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the field.' },
      { name: 'required', type: 'boolean', default: 'false', description: 'Marks the field required (asterisk + aria-required).' },
      { name: 'element-props', type: 'Record<string, unknown>', default: '{}', description: 'Spread onto the native input (e.g. `{ tabIndex: 2 }`); keys the component controls are ignored with a warning.' },
      { name: 'empty (slot)', type: 'slot', default: "'No results'", description: 'Replaces the message shown when nothing matches.' },
      { name: 'label · help-text · error-text (slots)', type: 'slot', default: 'the props', description: 'Markup in place of the label, help text or error text. Shown even without the matching prop.' }
    ],
    code: `<fandry-combobox
  label="Framework"
  placeholder="Search frameworks"
  options={frameworkOptions}
  value={value}
  onchange={handleChange}
></fandry-combobox>`,
    examples: [
      {
        title: 'Custom rows and empty state',
        demo: 'combobox-custom',
        code: `<!-- template -->
<fandry-combobox label="Plan" options={planOptions}
  value={value} onchange={handleChange}>
  <span slot="empty">No plan matches.</span>
</fandry-combobox>

// component
import PlanRow from 'my/planRow'; // your LWC: @api icon, label, hint

planOptions = [
  {
    label: 'Free', value: 'free', component: PlanRow,
    componentProps: { icon: '🌱', label: 'Free' }
  },
  {
    label: 'Pro', value: 'pro', component: PlanRow,
    componentProps: { icon: '💎', label: 'Pro', hint: 'Popular' }
  }
];

// The component draws only the inside of the row; the row keeps its
// highlight, hover and click. Search still matches on \`label\`
// (and keywords/description), so give every item a real one.`
      },
      {
        title: 'Build on the base class: own template, async search',
        demo: 'search-custom',
        code: `<!-- template: your own markup, bound to the inherited handlers -->
<input role="combobox" aria-expanded="true"
  aria-controls="people"
  aria-activedescendant={activeDescendant}
  oninput={handleInput}
  onkeydown={handleInputKeydown} />
<ul id="people" role="listbox"
  onmousedown={handleListboxMouseDown}>
  <template for:each={renderGroups} for:item="group">
    <template for:each={group.options} for:item="option">
      <li key={option.id} id={option.id} class={option.classes}
        role="option" data-option-id={option.id}
        onclick={handleOptionClick}
        onmousemove={handleOptionMouseMove}>
        {option.label}
      </li>
    </template>
  </template>
</ul>

// component
import FdSearchState from 'fandry/searchState';

export default class PeopleSearch extends FdSearchState {
  results = [];

  // what to list
  protected get source() { return this.results; }
  // the server already filtered
  protected filterItems(items) { return items; }
  // what picking one does
  protected commit(item) { this.picked = item.label; }

  // start the search
  protected setQuery(value) {
    super.setQuery(value);
    fetchPeople(value).then((people) => (this.results = people));
  }
}

// Keep the input and the options in the same template: aria-activedescendant
// can't point across a shadow boundary.`
      }
    ]
  },
  {
    slug: 'input',
    name: 'Input',
    tag: 'fandry-input',
    examples: [
      {
        title: 'An error',
        demo: 'input-error',
        code: `<!-- template -->
<fandry-input label="Email" type="email" required
  help-text="We'll send the receipt here."
  error-text={emailError} value={email}
  oninput={handleInput} onchange={handleChange}></fandry-input>

// component
email = '';
emailError = '';

// Checked when the field is left: an error while still typing is noise.
handleChange(event) {
  this.email = event.detail;
  this.emailError = this.check(this.email);
}

// Once there is an error, it goes as soon as the value is right.
handleInput(event) {
  this.email = event.detail;
  if (this.emailError) this.emailError = this.check(this.email);
}

// A field is invalid while it has error text: there is no separate flag.
// The control gets aria-invalid and the error as its description, and a
// screen reader hears the error when it appears. Textarea, select,
// combobox and lookup take error-text the same way.
//
// Markup instead of a string goes in the slot:
//   <span slot="error-text">Taken. <a href="/login">Sign in?</a></span>

/* css: the field while it is invalid, and the message */
fandry-input::part(control invalid) { background: hsl(0 80% 98%); }
fandry-input::part(error-text) { font-weight: 600; }`
      }
    ],
    parts: ['base', 'label', 'control', 'prefix', 'input', 'suffix', 'help-text', 'error-text', 'required'],
    states: ['disabled', 'invalid'],
    customize: {
      title: 'Custom colors and parts',
      demo: 'input-theme',
      code: `<!-- template -->
<div class="brand narrow">
  <fandry-input label="Email" type="email" placeholder="you@brand.com" required>
    <span slot="help-text">We'll send your receipt here. <a href="#privacy">How we use it</a></span>
  </fandry-input>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-radius-md: 999px;
  --fd-border: 160 30% 80%;
  --fd-border-focus: 160 84% 36%;
  --fd-ring-color: 160 84% 36%;
}

fandry-input::part(control) {
  padding-inline: 1rem;
  background: hsl(160 40% 98%);
}

fandry-input::part(label) {
  font-weight: 700;
}

fandry-input::part(required) {
  color: hsl(160 84% 26%);
}

fandry-input::part(help-text) {
  font-style: italic;
}`
    },
    category: 'Forms',
    description: 'A text input with a label, help text, and prefix/suffix slots.',
    props: [
      { name: 'label', type: 'string', default: "''", description: 'Visible label.' },
      { name: 'help-text', type: 'string', default: "''", description: 'Helper text below the field.' },
      { name: 'error-text', type: 'string', default: "''", description: 'An error shown under the field: the field is invalid while it has one (`aria-invalid`, the `invalid` state), and a screen reader hears it when it appears and when the field is focused.' },
      { name: 'type', type: 'string', default: "'text'", description: 'Native input type (email, password, ...).' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Field size.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the field.' },
      { name: 'label · help-text · error-text (slots)', type: 'slot', default: 'the props', description: 'Markup in place of the label, help text or error text (a link, an icon). Shown even without the matching prop.' }
    ],
    code: `<fandry-input label="Email" type="email" placeholder="you@company.com"></fandry-input>`
  },
  {
    slug: 'link',
    name: 'Link',
    tag: 'fandry-link',
    parts: ['base', 'link'],
    states: ['default', 'muted', 'disabled', 'current'],
    customize: {
      title: 'Custom colors and parts',
      demo: 'link-theme',
      code: `<!-- template -->
<div class="brand" onclick={handleNoopClick}>
  <fandry-text>
    Not the right size? See <fandry-link href="#">shipping and returns</fandry-link>.
  </fandry-text>
</div>

/* css */
fandry-link::part(link) {
  color: hsl(160 84% 26%);
  font-weight: 600;
  text-decoration: none;
  border-bottom: 2px solid hsl(160 84% 26% / 0.3);
}

fandry-link::part(link):hover {
  border-bottom-color: currentColor;
}`
    },
    category: 'Forms',
    description: 'Anchor styling with default/muted variants and a disabled state.',
    props: [
      { name: 'href', type: 'string', default: "''", description: 'Link target.' },
      { name: 'target', type: "'_self' | '_blank' | '_parent' | '_top'", default: "'_self'", description: 'Native anchor target.' },
      { name: 'variant', type: "'default' | 'muted'", default: "'default'", description: 'Visual style.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Renders with no href, removing it from tab order.' },
      { name: 'element-props', type: 'Record<string, unknown>', default: '{}', description: 'Spread onto the native `<a>` (e.g. `{ title: \'Docs\' }`). `{ ariaCurrent: \'page\' }` marks a nav\'s current page for assistive tech and adds the `current` state.' }
    ],
    code: `<fandry-link href="https://github.com/rahulgawale/fandryui" target="_blank">GitHub</fandry-link>`
  },
  {
    slug: 'radio',
    name: 'Radio',
    tag: 'fandry-radio',
    parts: ['base', 'control', 'indicator', 'label'],
    states: ['checked', 'disabled'],
    customize: {
      title: 'Custom colors and parts',
      demo: 'radio-theme',
      code: `<!-- template -->
<div class="brand">
  <fandry-radio-group name="theme-shipping" value="standard" label="Shipping">
    <fandry-radio name="theme-shipping" value="standard" label="Standard" checked></fandry-radio>
    <fandry-radio name="theme-shipping" value="express" label="Express"></fandry-radio>
    <fandry-radio name="theme-shipping" value="pickup" label="Pick up in store"></fandry-radio>
  </fandry-radio-group>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-primary: 160 84% 26%;
  --fd-ring-color: 160 84% 36%;
}

fandry-radio-group::part(label) {
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

fandry-radio-group::part(list) {
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.5rem;
}

fandry-radio::part(control) {
  border-color: hsl(160 84% 26%);
}

fandry-radio::part(label) {
  font-weight: 600;
}`
    },
    category: 'Forms',
    description: 'A single radio input — pair with fandry-radio-group for the roving-tabindex group.',
    props: [
      { name: 'label', type: 'string', default: "''", description: 'Visible label.' },
      { name: 'name', type: 'string', default: "''", description: 'Radio group name (must match the group).' },
      { name: 'value', type: 'string', default: "''", description: "This option's value." },
      { name: 'checked', type: 'boolean', default: 'false', description: 'Checked state.' },
      { name: 'default slot', type: 'slot', default: 'the label prop', description: 'Markup in place of the label. Shown even without the label prop.' }
    ],
    code: `<fandry-radio-group name="plan" value="pro" label="Choose a plan">
  <fandry-radio name="plan" value="free" label="Free"></fandry-radio>
  <fandry-radio name="plan" value="pro" label="Pro"></fandry-radio>
</fandry-radio-group>`
  },
  {
    slug: 'radio-group',
    name: 'Radio Group',
    tag: 'fandry-radio-group',
    parts: ['base', 'label', 'list'],
    customize: {
      title: 'Custom colors and parts',
      demo: 'radio-theme',
      code: `<!-- template -->
<div class="brand">
  <fandry-radio-group name="theme-shipping" value="standard" label="Shipping">
    <fandry-radio name="theme-shipping" value="standard" label="Standard" checked></fandry-radio>
    <fandry-radio name="theme-shipping" value="express" label="Express"></fandry-radio>
    <fandry-radio name="theme-shipping" value="pickup" label="Pick up in store"></fandry-radio>
  </fandry-radio-group>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-primary: 160 84% 26%;
  --fd-ring-color: 160 84% 36%;
}

fandry-radio-group::part(label) {
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

fandry-radio-group::part(list) {
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.5rem;
}

fandry-radio::part(control) {
  border-color: hsl(160 84% 26%);
}

fandry-radio::part(label) {
  font-weight: 600;
}`
    },
    category: 'Forms',
    description: 'A roving-tabindex container for a set of fandry-radio buttons.',
    props: [
      { name: 'name', type: 'string', default: "''", description: 'Shared name for every radio in the group.' },
      { name: 'value', type: 'string', default: "''", description: 'Selected value.' },
      { name: 'label', type: 'string', default: "''", description: 'Group label (rendered as the fieldset legend equivalent).' },
      { name: 'label (slot)', type: 'slot', default: 'the label prop', description: 'Markup in place of the group label. Shown even without the label prop.' }
    ],
    code: `<fandry-radio-group name="plan" value="pro" label="Choose a plan">
  <fandry-radio name="plan" value="free" label="Free"></fandry-radio>
  <fandry-radio name="plan" value="pro" label="Pro"></fandry-radio>
  <fandry-radio name="plan" value="enterprise" label="Enterprise"></fandry-radio>
</fandry-radio-group>`
  },
  {
    slug: 'select',
    name: 'Select',
    tag: 'fandry-select',
    parts: ['base', 'label', 'required', 'control', 'value', 'chevron', 'listbox', 'option', 'group', 'group-label', 'help-text', 'error-text', 'panel'],
    states: ['disabled', 'invalid', 'selected', 'active'],
    customize: {
      title: 'Custom colors and parts',
      demo: 'select-theme',
      code: `<!-- template -->
<div class="brand narrow">
  <fandry-select label="Size" placeholder="Choose a size" options={options} value="m"></fandry-select>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-radius-md: 0.75rem;
  --fd-border-focus: 160 84% 36%;
  --fd-ring-color: 160 84% 36%;
  --fd-bg-muted: 160 40% 94%;
}

fandry-select::part(control) {
  background: hsl(160 40% 98%);
  font-weight: 600;
}

fandry-select::part(panel) {
  box-shadow: 0 12px 32px hsl(160 40% 20% / 0.18);
}

fandry-select::part(option) {
  padding-block: 0.5rem;
}

/* A state: only the chosen option. */
fandry-select::part(option selected) {
  font-weight: 700;
  color: hsl(160 84% 26%);
}`
    },
    category: 'Forms',
    description: 'A custom listbox-style select, with optional grouped options.',
    props: [
      { name: 'label', type: 'string', default: "''", description: 'Visible label.' },
      { name: 'placeholder', type: 'string', default: "''", description: 'Shown when nothing is selected.' },
      { name: 'options', type: '{ label, value, disabled?, component?, componentProps? }[]', default: '[]', description: 'Flat option list. An option\'s `component` (with `componentProps`) draws its own row instead of the label -- see the custom options example.' },
      { name: 'groups', type: '{ label, options }[]', default: '[]', description: 'Grouped option list (used instead of options).' },
      { name: 'value', type: 'string', default: "''", description: 'Selected value. `\'\'` (or null) is no selection and shows the placeholder, unless an option has that value: give one `value: \'\'` to offer "None".' },
      { name: 'change (event)', type: 'CustomEvent<string>', default: '—', description: 'Fires when the user picks a different value; `event.detail` is the new value. Not fired when `value` is set from code.' },
      { name: 'help-text', type: 'string', default: "''", description: 'Helper text below the field.' },
      { name: 'error-text', type: 'string', default: "''", description: 'An error shown under the field: the field is invalid while it has one (`aria-invalid`, the `invalid` state), and a screen reader hears it when it appears and when the field is focused.' },
      { name: 'label · help-text · error-text (slots)', type: 'slot', default: 'the props', description: 'Markup in place of the label, help text or error text. Shown even without the matching prop.' }
    ],
    code: `<fandry-select
  label="Plan"
  placeholder="Choose a plan"
  options={planOptions}
  value="pro"
></fandry-select>`,
    examples: [
      {
        title: 'Custom options',
        demo: 'select-custom',
        code: `<!-- template -->
<fandry-select label="Plan" options={planOptions}
  value={value} onchange={handleChange}></fandry-select>

// component
import PlanRow from 'my/planRow'; // your LWC: @api icon, label, hint

planOptions = [
  {
    label: 'Free', value: 'free', component: PlanRow,
    componentProps: { icon: '🌱', label: 'Free' }
  },
  {
    label: 'Pro', value: 'pro', component: PlanRow,
    componentProps: { icon: '💎', label: 'Pro', hint: 'Popular' }
  },
  { label: 'Enterprise', value: 'enterprise', disabled: true } // plain option
];

// The component draws only the inside of the row; the row keeps its
// highlight, hover, keyboard and click, and \`label\` stays the accessible
// name and what typeahead matches, so give every option a real one.
// The chosen option's component is also shown in the closed control.
//
// On Salesforce this uses lwc:is: fandry-select's .js-meta.xml needs the
// lightning__dynamicComponent capability (API 55+), which \`fandry add\` writes.`
      },
      {
        title: 'A long list, with the keyboard',
        demo: 'select-long',
        code: `<!-- template -->
<fandry-select label="Country" placeholder="Choose a country"
  options={countryOptions} value={value} onchange={handleChange}></fandry-select>

// component
handleChange(event) {
  this.value = event.detail;
}

// The list scrolls once it is taller than --fd-listbox-max-height, and
// the option the keyboard is on is kept in view. Hovering never scrolls.
//
// Closed:  Enter, Space, ArrowDown or ArrowUp open the list
//          ArrowLeft / ArrowRight choose the previous or next option
//          typing chooses the option that starts with what was typed
// Open:    ArrowUp / ArrowDown move, and stop at the first and last option
//          Home / End, Page Up / Page Down move further
//          typing moves to a match: "new z" finds New Zealand, and "s"
//          pressed again steps through the options that start with s
//          Enter or Space choose; Escape or Tab close without choosing`
      }
    ]
  },
  {
    slug: 'multi-select',
    name: 'Multi-select',
    tag: 'fandry-multi-select',
    parts: ['base', 'label', 'required', 'control', 'value', 'chevron', 'listbox', 'option', 'indicator', 'option-label', 'help-text', 'error-text', 'panel'],
    states: ['disabled', 'invalid', 'selected', 'active'],
    customize: {
      title: 'Custom colors and parts',
      demo: 'multi-select-theme',
      code: `<!-- template -->
<div class="brand narrow">
  <fandry-multi-select label="Sizes" placeholder="Choose sizes" options={options} value={value}></fandry-multi-select>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-radius-md: 0.75rem;
  --fd-border-focus: 160 84% 36%;
  --fd-ring-color: 160 84% 36%;
  --fd-primary: 160 84% 36%;
  --fd-bg-muted: 160 40% 94%;
}

fandry-multi-select::part(control) {
  background: hsl(160 40% 98%);
  font-weight: 600;
}

/* A state of a part: only the boxes that are checked. */
fandry-multi-select::part(indicator selected) {
  border-radius: 50%;
}`
    },
    category: 'Forms',
    description: 'A select that keeps several options: each row has a check box, and picking one leaves the list open.',
    props: [
      { name: 'label', type: 'string', default: "''", description: 'Visible label.' },
      { name: 'placeholder', type: 'string', default: "''", description: 'Shown when nothing is chosen.' },
      { name: 'options', type: '{ label, value, disabled? }[]', default: '[]', description: 'The option list.' },
      { name: 'value', type: 'string[]', default: '[]', description: 'The chosen values, in option order. Like a native control it updates itself as the user picks.' },
      { name: 'messages', type: 'FdMultiSelectMessages', default: 'DEFAULT_MULTI_SELECT_MESSAGES', description: 'The text that is not markup: `selected(count)` is what the closed field shows once more than one option is chosen ("3 selected"). One option shows its label.' },
      { name: 'change (event)', type: 'CustomEvent<string[]>', default: '—', description: 'Fires each time the user checks or unchecks an option; `event.detail` is the new list. Not fired when `value` is set from code.' },
      { name: 'help-text', type: 'string', default: "''", description: 'Helper text below the field.' },
      { name: 'error-text', type: 'string', default: "''", description: 'An error shown under the field: the field is invalid while it has one (`aria-invalid`, the `invalid` state).' },
      { name: 'label · help-text · error-text (slots)', type: 'slot', default: 'the props', description: 'Markup in place of the label, help text or error text. Shown even without the matching prop.' }
    ],
    code: `<fandry-multi-select
  label="Toppings"
  placeholder="Choose toppings"
  options={toppingOptions}
  value={value}
  onchange={handleChange}
></fandry-multi-select>

// component
handleChange(event) {
  this.value = event.detail; // ['olives', 'peppers']
}

// Closed:  Enter, Space, ArrowDown or ArrowUp open the list
// Open:    ArrowUp / ArrowDown, Home / End move
//          Enter or Space check or uncheck the option, and the list stays open
//          Escape or Tab close it; what is checked stays`,
    examples: [
      {
        title: 'Label, help text and error as slots',
        demo: 'multi-select-slots',
        code: `<!-- template -->
<fandry-multi-select placeholder="Choose toppings"
  options={toppingOptions} value={value} onchange={handleChange}>
  <span slot="label">Toppings <em>(pick any)</em></span>
  <span slot="help-text">Extra toppings are <strong>free</strong> this week.</span>
  <span slot="error-text" if:true={empty}>Pick <strong>at least one</strong> topping.</span>
</fandry-multi-select>

// component
get empty() {
  return this.value.length === 0;
}

// Each slot takes the place of its prop and works without it. A slotted
// error text makes the field invalid, as the error-text prop does, and the
// field tells a screen reader about it. The label and help text stay
// hidden until they have content.`
      }
    ]
  },
  {
    slug: 'switch',
    name: 'Switch',
    tag: 'fandry-switch',
    parts: ['base', 'control', 'indicator', 'label'],
    states: ['checked', 'disabled'],
    customize: {
      title: 'Custom colors and parts',
      demo: 'switch-theme',
      code: `<!-- template -->
<div class="brand stack">
  <fandry-switch label="Email me when it's back in stock" checked></fandry-switch>
  <fandry-switch label="Text me delivery updates"></fandry-switch>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-primary: 160 84% 26%;
  --fd-border: 160 20% 80%;
  --fd-ring-color: 160 84% 36%;
}

fandry-switch::part(indicator) {
  box-shadow: 0 1px 3px hsl(0 0% 0% / 0.3);
}

fandry-switch::part(label) {
  font-weight: 600;
}`
    },
    category: 'Forms',
    description: 'A toggle switch with a built-in label.',
    props: [
      { name: 'label', type: 'string', default: "''", description: 'Visible label.' },
      { name: 'checked', type: 'boolean', default: 'false', description: 'On/off state.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the switch.' },
      { name: 'default slot', type: 'slot', default: 'the label prop', description: 'Markup in place of the label. Shown even without the label prop.' }
    ],
    code: `<fandry-switch label="Enable notifications" checked></fandry-switch>`
  },
  {
    slug: 'textarea',
    name: 'Textarea',
    tag: 'fandry-textarea',
    parts: ['base', 'label', 'control', 'textarea', 'help-text', 'error-text', 'required'],
    states: ['disabled', 'invalid'],
    customize: {
      title: 'Custom colors and parts',
      demo: 'textarea-theme',
      code: `<!-- template -->
<div class="brand narrow">
  <fandry-textarea label="Gift message" placeholder="Add a note for the recipient" rows="3"></fandry-textarea>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-radius-md: 1rem;
  --fd-border-focus: 160 84% 36%;
  --fd-ring-color: 160 84% 36%;
}

fandry-textarea::part(control) {
  padding: 0.75rem 1rem;
  font-family: Georgia, "Times New Roman", serif;
  background: hsl(45 90% 97%);
}

fandry-textarea::part(label) {
  font-weight: 700;
}`
    },
    category: 'Forms',
    description: 'A multi-line text input with a label and help text.',
    props: [
      { name: 'label', type: 'string', default: "''", description: 'Visible label.' },
      { name: 'help-text', type: 'string', default: "''", description: 'Helper text below the field.' },
      { name: 'error-text', type: 'string', default: "''", description: 'An error shown under the field: the field is invalid while it has one (`aria-invalid`, the `invalid` state), and a screen reader hears it when it appears and when the field is focused.' },
      { name: 'rows', type: 'number', default: '3', description: 'Visible row count.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the field.' },
      { name: 'label · help-text · error-text (slots)', type: 'slot', default: 'the props', description: 'Markup in place of the label, help text or error text. Shown even without the matching prop.' }
    ],
    code: `<fandry-textarea label="Notes" rows="4"></fandry-textarea>`
  },

  // ---- Feedback ----
  {
    slug: 'alert',
    name: 'Alert',
    tag: 'fandry-alert',
    parts: ['base', 'title', 'body'],
    states: ['info', 'success', 'warning', 'danger'],
    customize: {
      title: 'Custom colors and parts',
      demo: 'alert-theme',
      code: `<!-- template -->
<div class="brand stack">
  <fandry-alert title="Free shipping">Orders over $50 ship free, anywhere in the EU.</fandry-alert>
  <fandry-alert variant="success" title="Order placed">We'll email you when it ships.</fandry-alert>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-info: 45 90% 40%;
  --fd-success: 160 84% 26%;
  --fd-radius-md: 0.75rem;
  --fd-surface-tint: 10%;
}

fandry-alert::part(base) {
  border-left-width: 6px;
}

fandry-alert::part(title) {
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}`
    },
    category: 'Feedback',
    description: 'An inline banner for a status message, with an optional title.',
    props: [
      { name: 'variant', type: "'info' | 'success' | 'warning' | 'danger'", default: "'info'", description: 'Status color and icon.' },
      { name: 'title', type: 'string', default: "''", description: 'Optional bold title above the message.' },
      { name: 'title (slot)', type: 'slot', default: 'the title prop', description: 'Markup in place of the title. Shown even without the title prop.' }
    ],
    code: `<fandry-alert variant="success" title="Saved">Your changes have been saved.</fandry-alert>`
  },
  {
    slug: 'badge',
    name: 'Badge',
    tag: 'fandry-badge',
    parts: ['base'],
    states: ['default', 'primary', 'success', 'warning', 'danger'],
    customize: {
      title: 'Custom colors and parts',
      demo: 'badge-theme',
      code: `<!-- template -->
<div class="brand row">
  <fandry-badge variant="danger">Sale</fandry-badge>
  <fandry-badge variant="success">New</fandry-badge>
  <fandry-badge variant="primary">Buy 2, get 1 free</fandry-badge>
  <fandry-badge>Bestseller</fandry-badge>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-primary: 160 84% 26%;
  --fd-success: 160 84% 26%;
  --fd-danger: 350 80% 42%;
  --fd-bg-muted: 45 90% 90%;
}

fandry-badge::part(base) {
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border-radius: 999px;
}`
    },
    category: 'Feedback',
    description: 'A small status/label pill.',
    props: [{ name: 'variant', type: "'default' | 'primary' | 'success' | 'warning' | 'danger'", default: "'default'", description: 'Color variant. The colored ones are soft, not solid, so a column of badges stays quieter than the data beside it. Each derives its fill, border and text from its own color (`--fd-primary`, `--fd-success`, `--fd-warning`, `--fd-danger`) with `--fd-bg`, `--fd-text` and `--fd-surface-tint`, so it follows a rebrand and dark themes.' }],
    code: `<fandry-badge variant="primary">New</fandry-badge>`
  },
  {
    slug: 'progress',
    name: 'Progress',
    tag: 'fandry-progress',
    parts: ['base', 'indicator'],
    states: ['indeterminate'],
    customize: {
      title: 'Custom colors and parts',
      demo: 'progress-theme',
      code: `<!-- template -->
<div class="brand stack narrow">
  <fandry-progress value="35" label="Free shipping progress"></fandry-progress>
  <fandry-progress value="80" label="Order progress"></fandry-progress>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-primary: 160 84% 26%;
  --fd-bg-muted: 160 30% 90%;
}

fandry-progress::part(base) {
  height: 0.75rem;
  border-radius: 999px;
}

fandry-progress::part(indicator) {
  border-radius: 999px;
  background: linear-gradient(90deg, hsl(160 84% 26%), hsl(45 90% 50%));
}`
    },
    category: 'Feedback',
    description: 'A determinate or indeterminate progress bar.',
    props: [
      { name: 'value', type: 'number', default: '0', description: 'Current progress, from 0 to max.' },
      { name: 'max', type: 'number', default: '100', description: 'Maximum value.' },
      { name: 'label', type: 'string', default: "''", description: 'Accessible label.' },
      { name: 'aria-label', type: 'string', default: '—', description: 'The same name, set the standard way. Wins over label.' },
      { name: 'indeterminate', type: 'boolean', default: 'false', description: 'Shows an animated bar of unknown duration instead of value/max.' }
    ],
    code: `<fandry-progress value="60" label="Uploading"></fandry-progress>`
  },
  {
    slug: 'skeleton',
    name: 'Skeleton',
    tag: 'fandry-skeleton',
    parts: ['base'],
    customize: {
      title: 'Custom colors and parts',
      demo: 'skeleton-theme',
      code: `<!-- template -->
<div class="brand row">
  <fandry-skeleton variant="circle"></fandry-skeleton>
  <div class="stack grow">
    <fandry-skeleton variant="text"></fandry-skeleton>
    <fandry-skeleton variant="rect"></fandry-skeleton>
  </div>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-bg-muted: 160 40% 90%;
  --fd-radius-md: 1rem;
  --fd-radius-sm: 999px;
}

fandry-skeleton::part(base) {
  background: linear-gradient(90deg, hsl(160 40% 90%), hsl(45 80% 92%));
}`
    },
    category: 'Feedback',
    description: 'A loading placeholder shaped like the content it stands in for.',
    props: [{ name: 'variant', type: "'text' | 'circle' | 'rect'", default: "'text'", description: 'Placeholder shape.' }],
    code: `<fandry-skeleton variant="circle"></fandry-skeleton>
<fandry-skeleton variant="text"></fandry-skeleton>`
  },
  {
    slug: 'spinner',
    name: 'Spinner',
    tag: 'fandry-spinner',
    parts: ['base', 'label'],
    customize: {
      title: 'Custom colors and parts',
      demo: 'spinner-theme',
      code: `<!-- template -->
<div class="brand row">
  <fandry-spinner size="sm" label="Loading"></fandry-spinner>
  <fandry-spinner size="md" label="Loading"></fandry-spinner>
  <fandry-spinner size="lg" label="Loading"></fandry-spinner>
  <fandry-spinner size="sm">Saving record…</fandry-spinner>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-primary: 160 84% 26%;
  --fd-spinner-thickness: 0.2em;
}

/* The track is the border color. Set on the spinner alone, it is a tint
   of the primary color here and the border color everywhere else. */
fandry-spinner {
  --fd-border: 160 84% 26% / 0.2;
}

fandry-spinner::part(base) {
  border-right-color: hsl(45 90% 50%);
}

fandry-spinner::part(label) {
  color: hsl(160 84% 26%);
  font-weight: 600;
}`
    },
    category: 'Feedback',
    description: 'A loading spinner in three sizes, with optional text beside it.',
    props: [
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Spinner size. The ring\'s thickness follows it (`--fd-spinner-thickness`, in em of the ring).' },
      { name: 'default slot', type: 'slot', default: '—', description: 'Text shown beside the ring, e.g. "Loading fields…". It becomes the status a screen reader reads, in place of label.' },
      { name: 'label', type: 'string', default: "''", description: 'Names a spinner that shows no text, e.g. "Saving changes". Not displayed. Overrides messages.label.' },
      { name: 'aria-label', type: 'string', default: '—', description: 'The same name, set the standard way. Wins over label, and is read in place of slotted text.' },
      { name: 'messages', type: '{ label }', default: '{}', description: 'Replaces the default name ("Loading") for every instance, e.g. to translate it.' }
    ],
    examples: [
      {
        title: 'With a label',
        demo: 'spinner-label',
        code: `<!-- Text in the default slot shows beside the ring. Style it with ::part(label). -->
<fandry-spinner size="sm">Loading fields…</fandry-spinner>
<fandry-spinner size="md">Saving record…</fandry-spinner>
<fandry-spinner size="lg">Converting lead…</fandry-spinner>`
      }
    ],
    code: `<fandry-spinner size="md"></fandry-spinner>`
  },
  {
    slug: 'loading-overlay',
    name: 'Loading Overlay',
    tag: 'fandry-loading-overlay',
    parts: ['backdrop', 'panel', 'spinner', 'label'],
    customize: {
      title: 'Custom colors and parts',
      demo: 'loading-overlay-theme',
      code: `<!-- template -->
<div class="brand row">
  <fandry-button onclick={handleSave}>Save record</fandry-button>
  <fandry-loading-overlay open={saving} label="Saving record…"></fandry-loading-overlay>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-primary: 160 84% 26%;
  --fd-backdrop: 160 40% 10%;
  --fd-backdrop-opacity: 0.4;
  --fd-loading-overlay-delay: 0ms;
}

/* The spinner's track is the border color: a tint of the primary here. */
fandry-loading-overlay {
  --fd-border: 160 84% 26% / 0.2;
}

fandry-loading-overlay::part(backdrop) {
  backdrop-filter: blur(4px);
}

fandry-loading-overlay::part(panel) {
  flex-direction: row;
  padding: 1rem 1.5rem;
  border-radius: 999px;
}

/* The ring is 1em square: its font-size is its size. */
fandry-loading-overlay::part(spinner) {
  font-size: 1.25rem;
}

fandry-loading-overlay::part(label) {
  font-weight: 600;
}`
    },
    category: 'Feedback',
    description: 'Covers the page, or one panel, while it is busy. A backdrop blocks the pointer and the keyboard, and a panel shows a spinner and a label.',
    props: [
      { name: 'open', type: 'boolean', default: 'false', description: 'Whether the page or panel is busy. Bind it rather than wrapping the overlay in `lwc:if`: it stays in the page so its label is announced, and so it can fade out.' },
      { name: 'contained', type: 'boolean', default: 'false', description: 'Covers the nearest positioned ancestor (position: relative) instead of the viewport, and blocks keys inside its parent element. Put the overlay directly inside the panel it covers.' },
      { name: 'label', type: 'string', default: "''", description: 'The text under the spinner, e.g. "Saving record…". Wins over messages.label. To restyle it (bold, color), use `::part(label)`, not the slot.' },
      { name: 'messages', type: '{ label }', default: '{}', description: 'Replaces the default label ("Loading") for every instance, e.g. to translate it.' },
      { name: 'default slot', type: 'slot', default: 'spinner and label', description: 'The whole content of the panel, spinner included: your own indicator, markup in the text, a progress bar, a Cancel button. Its text (minus anything `aria-hidden`) is what is announced, or the label when it has none.' }
    ],
    notes: [
      {
        title: 'Not a dialog',
        paragraphs: [
          'It blocks the pointer and the keyboard the moment it opens, but takes no focus and has nothing to close: the page must always set open back to false, on errors and timeouts too. It only shows after `--fd-loading-overlay-delay` (`150ms`), so an operation that finishes sooner never flashes an overlay.',
          'Focus stays where it was. Over the page, keys do nothing until it closes (typing, Tab, Enter, Space, arrow-key scrolling, paste, the page\'s own shortcuts); the browser\'s shortcuts and wheel or touch scrolling still work. A contained overlay blocks keys inside the element it is in and lets Tab leave it. Keys still reach content in the overlay once it has focus: focus a Cancel button you put there yourself.',
          'It blocks hardware keys, not every input method: text from an IME or an on-screen keyboard, and a screen reader\'s own click, can still reach what is behind it. Guard the actions that must not run twice.',
          'It keeps a polite status region in the page at all times and puts the content\'s text into it once the overlay shows, so a screen reader announces it. A label edited in place while it is open is not announced again. Mark a slotted spinner `aria-hidden="true"`: the region already says what is happening.'
        ]
      }
    ],
    examples: [
      {
        title: 'Your own content',
        demo: 'loading-overlay-custom',
        code: `<!-- template: the default slot replaces the spinner and label, so bring your own indicator -->
<fandry-button onclick={handleImport}>Import contacts</fandry-button>
<fandry-loading-overlay open={importing}>
  <fandry-progress value={percent} label="Import progress"></fandry-progress>
  <fandry-text>Importing contacts…</fandry-text>
  <fandry-button variant="secondary" onclick={handleCancel}>Cancel</fandry-button>
</fandry-loading-overlay>

// js: keys are blocked outside the overlay, so put focus on the action
async handleImport() {
  this.importing = true;
  await Promise.resolve();
  this.template.querySelector('fandry-loading-overlay fandry-button').focus();
}`
      },
      {
        title: 'Over one panel',
        demo: 'loading-overlay-contained',
        code: `<!-- template: the overlay goes directly inside the panel it covers -->
<div class="panel">
  <fandry-card>
    ...
    <fandry-button variant="secondary" onclick={handleRefresh}>Refresh</fandry-button>
  </fandry-card>
  <fandry-loading-overlay open={refreshing} contained label="Refreshing…"></fandry-loading-overlay>
</div>

/* css */
.panel {
  position: relative;
}

/* Follow the panel's corners */
.panel fandry-loading-overlay::part(backdrop) {
  border-radius: var(--fd-radius-lg, 0.5rem);
}`
      }
    ],
    code: `<fandry-button onclick={handleConvert}>Convert lead</fandry-button>
<fandry-loading-overlay open={converting} label="Converting lead…"></fandry-loading-overlay>`
  },
  {
    slug: 'toast',
    name: 'Toast',
    tag: 'fandry-toast',
    parts: ['base'],
    states: ['info', 'success', 'warning', 'danger'],
    customize: {
      title: 'Custom colors and parts',
      demo: 'toast-theme',
      code: `<!-- template -->
<div class="brand panel">
  <fandry-button variant="secondary" onclick={handleAdd}>Add to cart</fandry-button>
  <fandry-toast-viewport placement="bottom-right" contained label="Notifications">
    <template for:each={toasts} for:item="toast">
      <fandry-toast key={toast.id} data-id={toast.id} variant="success" duration="3000" ondismiss={handleDismiss}>
        {toast.message}
      </fandry-toast>
    </template>
  </fandry-toast-viewport>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-success: 160 84% 26%;
  --fd-radius-md: 0.75rem;
}

fandry-toast::part(base) {
  font-weight: 600;
  border-left-width: 6px;
  background: hsl(160 40% 97%);
}

fandry-toast-viewport::part(base) {
  gap: 0.75rem;
}`
    },
    category: 'Feedback',
    description: 'An auto-dismissing notification — pair with `fandry-toast-viewport` for placement.',
    props: [
      { name: 'variant', type: "'info' | 'success' | 'warning' | 'danger'", default: "'info'", description: 'Status color.' },
      { name: 'duration', type: 'number', default: '4000', description: 'Milliseconds before auto-dismiss.' }
    ],
    code: `<fandry-toast variant="success" duration="4000" ondismiss={handleDismiss}>
  Changes saved.
</fandry-toast>`
  },
  {
    slug: 'toast-viewport',
    name: 'Toast Viewport',
    tag: 'fandry-toast-viewport',
    parts: ['base'],
    customize: {
      title: 'Custom colors and parts',
      demo: 'toast-theme',
      code: `<!-- template -->
<div class="brand panel">
  <fandry-button variant="secondary" onclick={handleAdd}>Add to cart</fandry-button>
  <fandry-toast-viewport placement="bottom-right" contained label="Notifications">
    <template for:each={toasts} for:item="toast">
      <fandry-toast key={toast.id} data-id={toast.id} variant="success" duration="3000" ondismiss={handleDismiss}>
        {toast.message}
      </fandry-toast>
    </template>
  </fandry-toast-viewport>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-success: 160 84% 26%;
  --fd-radius-md: 0.75rem;
}

fandry-toast::part(base) {
  font-weight: 600;
  border-left-width: 6px;
  background: hsl(160 40% 97%);
}

fandry-toast-viewport::part(base) {
  gap: 0.75rem;
}`
    },
    category: 'Feedback',
    description: 'A fixed or contained stacking region that positions `fandry-toast`.',
    props: [
      { name: 'placement', type: "'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'", default: "'bottom-right'", description: 'Corner to stack from.' },
      { name: 'contained', type: 'boolean', default: 'false', description: 'position: absolute against the nearest positioned ancestor instead of the viewport.' },
      { name: 'label', type: 'string', default: "''", description: 'Accessible label for the stacking region.' },
      { name: 'aria-label', type: 'string', default: '—', description: 'The same name, set the standard way. Wins over label.' }
    ],
    code: `<fandry-toast-viewport placement="bottom-right" label="Notifications">
  <fandry-toast variant="info">Heads up.</fandry-toast>
</fandry-toast-viewport>`
  },
  {
    slug: 'tooltip',
    name: 'Tooltip',
    tag: 'fandry-tooltip',
    parts: ['trigger', 'panel', 'arrow'],
    customize: {
      title: 'Custom colors and parts',
      demo: 'tooltip-theme',
      code: `<!-- template -->
<div class="brand row">
  <fandry-tooltip placement="top" open-delay="0">
    <fandry-button slot="trigger" variant="secondary">Hover me</fandry-button>
    Free returns within 30 days
  </fandry-tooltip>
</div>

/* css */
fandry-tooltip::part(panel) {
  padding: 0.5rem 0.75rem;
  font-weight: 600;
  background: hsl(160 84% 26%);
  border-radius: 0.5rem;
}

fandry-tooltip::part(arrow) {
  background: hsl(160 84% 26%);
}`
    },
    category: 'Feedback',
    description: 'A hover/focus description bubble for a slotted trigger.',
    props: [
      { name: 'placement', type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: 'Bubble position relative to the trigger.' },
      { name: 'open-delay', type: 'number', default: '300', description: 'Milliseconds of hover before the bubble opens.' }
    ],
    code: `<fandry-tooltip placement="top">
  <fandry-button slot="trigger" variant="secondary">Hover me</fandry-button>
  Saves your changes
</fandry-tooltip>`
  },

  // ---- Overlays & Data ----
  {
    slug: 'avatar',
    name: 'Avatar',
    tag: 'fandry-avatar',
    parts: ['base', 'image', 'initials'],
    customize: {
      title: 'Custom colors and parts',
      demo: 'avatar-theme',
      code: `<!-- template -->
<div class="brand row">
  <fandry-avatar initials="AL" size="sm"></fandry-avatar>
  <fandry-avatar initials="GH" size="md"></fandry-avatar>
  <fandry-avatar initials="KJ" size="lg"></fandry-avatar>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-bg-muted: 160 40% 90%;
  --fd-text-muted: 160 84% 22%;
}

fandry-avatar::part(base) {
  border-radius: 0.75rem;
  font-weight: 700;
}

fandry-avatar::part(initials) {
  letter-spacing: 0.04em;
}`
    },
    category: 'Overlays & Data',
    description: 'A circular avatar with an image and initials fallback.',
    props: [
      { name: 'src', type: 'string', default: "''", description: 'Image URL — falls back to initials on error.' },
      { name: 'initials', type: 'string', default: "''", description: 'Fallback initials.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Avatar size.' }
    ],
    code: `<fandry-avatar initials="JD" size="md"></fandry-avatar>`
  },
  {
    slug: 'command',
    name: 'Command',
    tag: 'fandry-command',
    parts: ['backdrop', 'panel', 'search', 'input', 'listbox', 'group', 'group-label', 'option', 'option-label', 'option-description', 'empty'],
    states: ['selected', 'active', 'disabled'],
    customize: {
      title: 'Custom colors and parts',
      demo: 'command-theme',
      code: `<!-- template -->
<div class="brand row">
  <fandry-button variant="secondary" onclick={handleOpen}>Search the shop</fandry-button>
  <fandry-command
    label="Search the shop"
    placeholder="Search products and pages…"
    items={items}
    open={isOpen}
    ontoggle={handleToggle}
  ></fandry-command>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-radius-lg: 1.25rem;
  --fd-backdrop: 160 40% 10%;
  --fd-backdrop-opacity: 0.45;
  --fd-bg-muted: 160 40% 94%;
}

fandry-command::part(search) {
  border-bottom: 2px solid hsl(160 84% 26%);
}

fandry-command::part(group-label) {
  color: hsl(160 84% 26%);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

fandry-command::part(option-description) {
  font-style: italic;
}`
    },
    category: 'Overlays & Data',
    description: 'A command palette — a modal search box over a list of actions. Generic: it reports the chosen value and leaves what it does (and the `Cmd+K`/`Ctrl+K` shortcut) to you.',
    props: [
      { name: 'open', type: 'boolean', default: 'false', description: 'Whether the palette is shown. Listen for `toggle` (detail is the new state) and update it.' },
      { name: 'label', type: 'string', default: "''", description: 'Accessible name of the palette.' },
      { name: 'aria-label', type: 'string', default: '—', description: 'The same name, set the standard way. Wins over label.' },
      { name: 'placeholder', type: 'string', default: "''", description: 'Hint shown in the empty search box.' },
      { name: 'messages', type: '{ results(count) }', default: '{}', description: 'Replaces what a screen reader hears as the list narrows ("3 results"), e.g. to translate it. "No results" is the `empty` slot.' },
      { name: 'items', type: '{ label, value, description?, group?, keywords?, disabled? }[]', default: '[]', description: 'The commands. Ungrouped items list first; grouped items sit under their heading.' },
      { name: 'select (event)', type: 'CustomEvent<{ value }>', default: '—', description: 'Fired when an item is picked; the palette then closes itself.' },
      { name: 'empty (slot)', type: 'slot', default: "'No results found'", description: 'Replaces the message shown when nothing matches.' }
    ],
    code: `<fandry-command
  label="Command palette"
  placeholder="Type a command or search…"
  items={items}
  open={isOpen}
  ontoggle={handleToggle}
  onselect={handleSelect}
></fandry-command>

// component
handleToggle(event) { this.isOpen = event.detail; }
handleSelect(event) { run(event.detail.value); }`,
    examples: [
      {
        title: 'Custom rows and empty state',
        demo: 'command-custom',
        code: `<!-- template -->
<fandry-command label="Command palette" items={items}
  open={isOpen} ontoggle={handleToggle} onselect={handleSelect}>
  <span slot="empty">Nothing to run for that.</span>
</fandry-command>

// component
import CommandRow from 'my/commandRow'; // your LWC: @api icon, label, hint

items = [
  {
    label: 'New file', value: 'new-file', group: 'File',
    component: CommandRow,
    componentProps: { icon: '📄', label: 'New file', hint: '⌘N' }
  },
  {
    label: 'Toggle theme', value: 'toggle-theme', group: 'View',
    component: CommandRow,
    componentProps: { icon: '🌗', label: 'Toggle theme' }
  }
];

// The component draws only the inside of the row; the row keeps its
// highlight, hover and click. Search still matches on \`label\`
// (and keywords/description), so give every item a real one.`
      },
      {
        title: 'Build on the base class: own template, async search',
        demo: 'search-custom',
        code: `<!-- template: your own markup, bound to the inherited handlers -->
<input role="combobox" aria-expanded="true"
  aria-controls="people"
  aria-activedescendant={activeDescendant}
  oninput={handleInput}
  onkeydown={handleInputKeydown} />
<ul id="people" role="listbox"
  onmousedown={handleListboxMouseDown}>
  <template for:each={renderGroups} for:item="group">
    <template for:each={group.options} for:item="option">
      <li key={option.id} id={option.id} class={option.classes}
        role="option" data-option-id={option.id}
        onclick={handleOptionClick}
        onmousemove={handleOptionMouseMove}>
        {option.label}
      </li>
    </template>
  </template>
</ul>

// component
import FdSearchState from 'fandry/searchState';

export default class PeopleSearch extends FdSearchState {
  results = [];

  // what to list
  protected get source() { return this.results; }
  // the server already filtered
  protected filterItems(items) { return items; }
  // what picking one does
  protected commit(item) { this.picked = item.label; }

  // start the search
  protected setQuery(value) {
    super.setQuery(value);
    fetchPeople(value).then((people) => (this.results = people));
  }
}

// Keep the input and the options in the same template: aria-activedescendant
// can't point across a shadow boundary.`
      }
    ]
  },
  {
    slug: 'dialog',
    name: 'Dialog',
    tag: 'fandry-dialog',
    parts: ['backdrop', 'panel'],
    customize: {
      title: 'Custom colors and parts',
      demo: 'dialog-theme',
      code: `<!-- template -->
<div class="brand row">
  <fandry-button onclick={handleOpen}>Remove from cart</fandry-button>
  <fandry-dialog open={isOpen} label="Remove from cart" ontoggle={handleToggle}>
    <fandry-heading level="3">Remove Stride Runner?</fandry-heading>
    <fandry-text variant="muted">You can add it back any time.</fandry-text>
    <div class="row actions">
      <fandry-button variant="secondary" onclick={handleClose}>Keep it</fandry-button>
      <fandry-button onclick={handleClose}>Remove</fandry-button>
    </div>
  </fandry-dialog>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-primary: 160 84% 26%;
  --fd-radius-lg: 1.25rem;
  --fd-backdrop: 160 40% 10%;
}

fandry-dialog::part(panel) {
  padding: 2rem;
  border-top: 6px solid hsl(160 84% 26%);
}

fandry-dialog::part(backdrop) {
  backdrop-filter: blur(4px);
}`
    },
    category: 'Overlays & Data',
    description: 'A modal panel over a backdrop, with Escape/backdrop-click to close and focus returned to the trigger.',
    props: [
      { name: 'open', type: 'boolean', default: 'false', description: 'Open state (consumer-controlled via ontoggle).' },
      { name: 'label', type: 'string', default: "''", description: 'Accessible name for the dialog.' },
      { name: 'aria-label', type: 'string', default: '—', description: 'The same name, set the standard way. Wins over label.' }
    ],
    code: `<fandry-dialog open={isOpen} label="Delete item" ontoggle={handleToggle}>
  <fandry-heading level="3">Delete item?</fandry-heading>
  <fandry-text variant="muted">This action can't be undone.</fandry-text>
</fandry-dialog>`
  },
  {
    slug: 'menu',
    name: 'Menu',
    tag: 'fandry-menu',
    parts: ['base'],
    customize: {
      title: 'Custom colors and parts',
      demo: 'menu-theme',
      code: `<!-- template -->
<div class="brand narrow">
  <fandry-menu>
    <fandry-menu-item value="edit" label="Edit order"></fandry-menu-item>
    <fandry-menu-item value="track" label="Track package"></fandry-menu-item>
    <fandry-menu-item value="cancel" label="Cancel order" class="danger"></fandry-menu-item>
  </fandry-menu>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-bg-muted: 160 40% 94%;
  --fd-radius-sm: 0.5rem;
}

fandry-menu::part(base) {
  padding: 0.375rem;
  border: 1px solid hsl(160 30% 85%);
  border-radius: 0.75rem;
}

fandry-menu-item::part(base) {
  font-weight: 600;
}

fandry-menu-item.danger::part(base) {
  color: hsl(0 72% 42%);
}`
    },
    category: 'Overlays & Data',
    description: 'A listbox-style menu — composes with fandry-popover for its own trigger and positioning.',
    props: [],
    code: `<fandry-menu onselect={handleSelect}>
  <fandry-menu-item value="edit" label="Edit"></fandry-menu-item>
  <fandry-menu-item value="delete" label="Delete"></fandry-menu-item>
</fandry-menu>`
  },
  {
    slug: 'menu-item',
    name: 'Menu Item',
    tag: 'fandry-menu-item',
    parts: ['base'],
    states: ['disabled'],
    customize: {
      title: 'Custom colors and parts',
      demo: 'menu-theme',
      code: `<!-- template -->
<div class="brand narrow">
  <fandry-menu>
    <fandry-menu-item value="edit" label="Edit order"></fandry-menu-item>
    <fandry-menu-item value="track" label="Track package"></fandry-menu-item>
    <fandry-menu-item value="cancel" label="Cancel order" class="danger"></fandry-menu-item>
  </fandry-menu>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-bg-muted: 160 40% 94%;
  --fd-radius-sm: 0.5rem;
}

fandry-menu::part(base) {
  padding: 0.375rem;
  border: 1px solid hsl(160 30% 85%);
  border-radius: 0.75rem;
}

fandry-menu-item::part(base) {
  font-weight: 600;
}

fandry-menu-item.danger::part(base) {
  color: hsl(0 72% 42%);
}`
    },
    category: 'Overlays & Data',
    description: 'A single selectable row inside `fandry-menu`.',
    props: [
      { name: 'value', type: 'string', default: "''", description: 'Value reported to onselect.' },
      { name: 'label', type: 'string', default: "''", description: 'Visible label.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Excludes the item from selection.' }
    ],
    code: `<fandry-menu-item value="edit" label="Edit"></fandry-menu-item>`
  },
  {
    slug: 'popover',
    name: 'Popover',
    tag: 'fandry-popover',
    parts: ['trigger', 'panel'],
    customize: {
      title: 'Custom colors and parts',
      demo: 'popover-theme',
      code: `<!-- template -->
<div class="brand row">
  <fandry-popover placement="bottom">
    <fandry-button slot="trigger" variant="secondary">Delivery options</fandry-button>
    <fandry-text size="sm">Standard: 3 to 5 days. Express: next day.</fandry-text>
  </fandry-popover>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-radius-md: 1rem;
}

fandry-popover::part(panel) {
  padding: 1rem;
  border-top: 4px solid hsl(160 84% 26%);
  box-shadow: 0 12px 32px hsl(160 40% 20% / 0.18);
}`
    },
    category: 'Overlays & Data',
    description: 'An anchored floating panel — owns positioning, not the trigger or content. The panel is never narrower than its trigger; set `display: block` on the popover for a trigger that fills its row.',
    props: [
      { name: 'placement', type: "'top' | 'bottom' | 'left' | 'right'", default: "'bottom'", description: 'Side of the trigger the panel opens on. It opens on the opposite side instead when it would run off the viewport and that side has more room.' },
      { name: 'align', type: "'start' | 'end'", default: "'start'", description: "Which edge of the trigger the panel aligns to, for 'top'/'bottom' placement." },
      { name: 'open', type: 'boolean', default: 'false', description: 'Open state (consumer-controlled via ontoggle).' }
    ],
    code: `<fandry-popover placement="bottom" open={isOpen} ontoggle={handleToggle}>
  <fandry-button slot="trigger" variant="secondary">Actions</fandry-button>
  <div>Popover content</div>
</fandry-popover>`
  },
  {
    slug: 'table',
    name: 'Table',
    tag: 'fandry-table',
    parts: ['toolbar', 'container', 'table', 'caption', 'header-row', 'header-cell', 'selection-cell', 'sort-button', 'header-label', 'sort-indicator', 'row', 'loading-row', 'cell', 'empty-row', 'empty', 'footer', 'selection-status', 'pagination'],
    states: ['selected', 'sorted', 'ascending', 'descending'],
    customize: {
      title: 'Custom colors and parts',
      demo: 'table-theme',
      code: `<!-- template -->
<div class="brand">
  <fandry-table columns={columns} data={data} caption="Recent orders"></fandry-table>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-primary: 160 84% 26%;
  --fd-bg-muted: 160 40% 96%;
  --fd-border: 160 30% 88%;
}

fandry-table::part(container) {
  border: 1px solid hsl(160 30% 88%);
  border-radius: 1rem;
}

fandry-table::part(caption) {
  padding: 0.75rem 1rem 0;
}

fandry-table::part(header-cell) {
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: hsl(160 84% 22%);
}

fandry-table::part(row):hover {
  background: hsl(160 40% 97%);
}`
    },
    category: 'Overlays & Data',
    description: 'A data table with sorting, pagination, selection, and filtering — wraps `@tanstack/table-core`.',
    props: [
      { name: 'columns', type: 'ColumnDef[]', default: '[]', description: 'Column definitions.' },
      { name: 'data', type: 'RowData[]', default: '[]', description: 'Row data.' },
      { name: 'enable-pagination', type: 'boolean', default: 'false', description: 'Turns on page-size-driven pagination.' },
      { name: 'enable-row-selection', type: 'boolean', default: 'false', description: 'Turns on checkbox row selection.' },
      { name: 'enable-global-filter', type: 'boolean', default: 'false', description: 'Turns on a search box that filters all columns.' },
      { name: 'messages', type: '{ selectionStatus, selectRow, selectAll, pageStatus, paginationLabel, previousPage, nextPage }', default: '{}', description: 'Replaces the table\'s own text ("2 of 5 selected", checkbox names, the pagination\'s name, Previous/Next and "Page 1 of 3"), e.g. to translate it. Any key left out keeps its English default.' }
    ],
    code: `<fandry-table
  columns={columns}
  data={data}
  caption="Team members"
  enable-pagination
></fandry-table>`
  },
  // ---- Salesforce ----
  {
    slug: 'lookup',
    name: 'Lookup',
    tag: 'fandry-lookup',
    parts: ['base', 'label', 'required', 'control', 'selection', 'selection-label', 'clear-button', 'chips', 'chip', 'chip-label', 'chip-remove', 'input', 'clear-all', 'panel', 'listbox', 'group', 'group-label', 'option', 'option-label', 'option-description', 'status', 'empty', 'help-text', 'error-text'],
    states: ['disabled', 'invalid', 'selected', 'active'],
    customize: {
      title: 'Custom colors and parts',
      demo: 'lookup-theme',
      code: `<!-- template -->
<div class="brand narrow">
  <fandry-lookup
    label="Account"
    placeholder="Search accounts"
    debounce-ms="300"
    results={results}
    loading={loading}
    record={account}
    onsearch={handleSearch}
    onchange={handleChange}
  ></fandry-lookup>
</div>

/* css */
/* Scoped to this demo. Set the same --fd-* tokens on :root to theme
   every fandry-* component on the site. */
.brand {
  --fd-radius-md: 999px;
  --fd-border-focus: 160 84% 36%;
  --fd-ring-color: 160 84% 36%;
  --fd-bg-muted: 160 40% 94%;
}

fandry-lookup::part(control) {
  padding-inline: 0.75rem;
  background: hsl(160 40% 98%);
}

fandry-lookup::part(panel) {
  border-radius: 1rem;
  box-shadow: 0 12px 32px hsl(160 40% 20% / 0.18);
}

fandry-lookup::part(option-description) {
  font-style: italic;
}`
    },
    category: 'Salesforce',
    description: 'Find and pick a record — one by default, or several with `multiple`. It fetches nothing itself: it reports what was typed, you run the query and hand the records back.',
    props: [
      { name: 'label', type: 'string', default: "''", description: 'Visible label.' },
      { name: 'placeholder', type: 'string', default: "''", description: 'Shown in the empty search box.' },
      { name: 'help-text', type: 'string', default: "''", description: 'Helper text below the field.' },
      { name: 'error-text', type: 'string', default: "''", description: 'An error shown under the field: the field is invalid while it has one (`aria-invalid`, the `invalid` state), and a screen reader hears it when it appears and when the field is focused.' },
      { name: 'name', type: 'string', default: "''", description: 'Exposed as `data-name` on the input.' },
      { name: 'results', type: '{ id, label, description?, disabled?, … }[]', default: '[]', description: 'Matches for the current search, shown exactly as given (never re-filtered). Extra fields ride along and come back in `change`.' },
      { name: 'loading', type: 'boolean', default: 'false', description: 'Shows a searching indicator while your query is in flight.' },
      { name: 'multiple', type: 'boolean', default: 'false', description: 'Allow any number of records, shown as removable chips with a “Clear all”. The list stays open after each pick, already-chosen records are not offered again, and Backspace in an empty field removes the last chip.' },
      { name: 'debounce-ms', type: 'number', default: '250', description: 'Milliseconds typing must pause before `search` fires; 0 searches on every keystroke. Opening the list still searches at once.' },
      { name: 'value', type: 'string | string[]', default: "''", description: 'The selected id (an array of ids with `multiple`). Set it to render existing data; it updates when the user picks or clears. The lookup names each id from `record`/`records` or `results`; for any it can\'t, it fires `resolve` and shows the raw id (muted) until you supply the record.' },
      { name: 'record', type: '{ id, label, … } | null', default: 'null', description: 'Single mode: the selected record, shown as the field\'s value with a clear button. On its own it preselects; once `value` has been set it only supplies the name for that id.' },
      { name: 'records', type: '{ id, label, … }[]', default: '[]', description: 'Multiple mode: the selected records. On its own it preselects; once `value` has been set it only supplies names for those ids (any subset is fine).' },
      { name: 'required', type: 'boolean', default: 'false', description: 'Marks the field required (asterisk + aria-required).' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the field and the pill\'s clear button.' },
      { name: 'element-props', type: 'Record<string, unknown>', default: '{}', description: 'Spread onto the native input; keys the component controls are ignored with a warning.' },
      { name: 'search (event)', type: 'CustomEvent<{ query }>', default: '—', description: 'Fires when the list opens by click or ArrowDown (immediately, so an empty query can offer recent records), after typing pauses, and in `multiple` mode after each pick.' },
      { name: 'resolve (event)', type: 'CustomEvent<{ values }>', default: '—', description: 'Fires once for ids set through `value` that the lookup can\'t name yet. Look them up and set `record`/`records`. It does not repeat for an id already asked about.' },
      { name: 'change (event)', type: 'CustomEvent<{ value, record }> | CustomEvent<{ values, records }>', default: '—', description: 'Single mode: `{ value, record }` on pick, and `{ value: \'\', record: null }` on clear. Multiple mode: `{ values, records }` on every pick, removal and Clear all.' },
      { name: 'empty (slot)', type: 'slot', default: "'No records found'", description: 'Replaces the message shown when a search has no matches.' },
      { name: 'clear-all · searching (slots)', type: 'slot', default: "'Clear all' · 'Searching…'", description: 'Replace the Clear all button\'s text and the searching line.' },
      { name: 'messages', type: '{ searching, clear(name), remove(name) }', default: '{}', description: 'Replaces the accessible names of the spinner and the clear and remove buttons, e.g. to translate them.' },
      { name: 'label · help-text · error-text (slots)', type: 'slot', default: 'the props', description: 'Markup in place of the label, help text or error text. Shown even without the matching prop.' }
    ],
    code: `<!-- template -->
<fandry-lookup
  label="Account"
  placeholder="Search accounts"
  results={results}
  loading={loading}
  record={account}
  onsearch={handleSearch}
  onchange={handleChange}
></fandry-lookup>

// component
async handleSearch(event) {
  this.loading = true;
  // Apex, GraphQL, UI API -- whatever you already use:
  this.results = await findAccounts(event.detail.query);
  this.loading = false;
}

handleChange(event) {
  this.account = event.detail.record; // null when cleared
}

// Ignore a slow earlier answer landing after a newer one: keep a request
// counter and only apply the result of the latest.`,
    examples: [
      {
        title: 'Multiple records',
        demo: 'lookup-multiple',
        code: `<!-- template: bind \`records\` instead of \`record\` -->
<fandry-lookup
  label="Accounts"
  multiple
  results={results}
  loading={loading}
  records={accounts}
  onsearch={handleSearch}
  onchange={handleChange}
></fandry-lookup>

// component
handleChange(event) {
  this.accounts = event.detail.records; // also event.detail.values (the ids)
}

// The list stays open after each pick and fires \`search\` again with an
// empty query, so refresh it (recent records, minus what's now chosen).
// Records already chosen are hidden from \`results\` automatically.`
      },
      {
        title: 'Existing value (single and multiple)',
        demo: 'lookup-value',
        code: `<!-- template: bind \`value\`. Bind \`record\`/\`records\` too, to supply names. -->
<fandry-lookup
  label="Account"
  value={accountId}
  record={account}
  onresolve={handleResolve}
  onchange={handleChange}
></fandry-lookup>

<fandry-lookup
  label="Accounts"
  multiple
  value={accountIds}
  records={accounts}
  onresolve={handleResolveMany}
  onchange={handleChangeMany}
></fandry-lookup>

// component
accountId = '001C';               // straight off a saved record
accountIds = ['001A', '001D'];

// The lookup can't name an id it has no record for. It shows the id, and asks:
async handleResolve(event) {
  const [account] = await getAccounts(event.detail.values);
  this.account = account;
}

async handleResolveMany(event) {
  const found = await getAccounts(event.detail.values);
  this.accounts = [...this.accounts, ...found];
}

// Only the ids it asked about are in event.detail.values. Records for ids
// that aren't in \`value\` are ignored: value decides what's selected.
handleChange(event) {
  this.accountId = event.detail.value;
}
handleChangeMany(event) {
  this.accountIds = event.detail.values;
  this.accounts = event.detail.records;
}`
      }
    ]
  }
];

export function getComponentBySlug(slug: string): ComponentEntry | undefined {
  return COMPONENTS.find((component) => component.slug === slug);
}

export function getAdjacentComponents(slug: string): { previous?: ComponentEntry; next?: ComponentEntry } {
  const index = COMPONENTS.findIndex((component) => component.slug === slug);
  if (index === -1) {
    return {};
  }
  return { previous: COMPONENTS[index - 1], next: COMPONENTS[index + 1] };
}
