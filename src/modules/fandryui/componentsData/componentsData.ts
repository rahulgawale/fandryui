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

export interface ComponentEntry {
  slug: string;
  name: string;
  tag: string;
  category: string;
  description: string;
  props: ComponentProp[];
  code: string;
  examples?: ComponentExample[];
}

// Sidebar/pagination order follows this list, category by category -- so
// prev/next walks the sidebar top-to-bottom rather than some unrelated
// order.
export const CATEGORY_ORDER = ['Layout', 'Typography', 'Forms', 'Feedback', 'Overlays & Data', 'Salesforce'];

export const COMPONENTS: ComponentEntry[] = [
  // ---- Layout ----
  {
    slug: 'breadcrumb',
    name: 'Breadcrumb',
    tag: 'fandry-breadcrumb',
    category: 'Layout',
    description: 'A navigation trail of ancestor pages — pair with fandry-breadcrumb-item for each crumb.',
    props: [{ name: 'aria-label', type: 'string', default: "'Breadcrumb'", description: 'Accessible name for the nav landmark.' }],
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
    category: 'Layout',
    description: 'Previous/next navigation — as links between two adjacent pages, or as Previous / Page N of M / Next buttons for paging a collection.',
    props: [
      { name: 'previous-href', type: 'string', default: "''", description: 'Omit to hide the previous link (e.g. on the first page).' },
      { name: 'previous-label', type: 'string', default: "''", description: 'Title of the previous page.' },
      { name: 'next-href', type: 'string', default: "''", description: 'Omit to hide the next link (e.g. on the last page).' },
      { name: 'next-label', type: 'string', default: "''", description: 'Title of the next page.' },
      { name: 'page-index', type: 'number', default: 'undefined', description: 'Zero-based current page. Setting it switches from links to Previous/Next buttons; listen for `change` (detail.pageIndex) and update it. Replace controls via the previous, status and next slots.' },
      { name: 'page-count', type: 'number', default: '-1', description: 'Total pages in page mode; -1 means unknown (Next stays enabled).' }
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
    category: 'Layout',
    description: 'A vertical navigation rail — pair with fandry-sidebar-item for links.',
    props: [{ name: 'aria-label', type: 'string', default: "'Sidebar'", description: 'Accessible name for the nav landmark.' }],
    code: `<fandry-sidebar aria-label="Components">
  <fandry-sidebar-item href="/components/button" active>Button</fandry-sidebar-item>
  <fandry-sidebar-item href="/components/card">Card</fandry-sidebar-item>
</fandry-sidebar>`
  },
  {
    slug: 'sidebar-item',
    name: 'Sidebar Item',
    tag: 'fandry-sidebar-item',
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
    category: 'Typography',
    description: 'A semantically-leveled heading, sized off the shared type scale.',
    props: [{ name: 'level', type: '1 | 2 | 3 | 4 | 5 | 6', default: '2', description: 'Heading level (role="heading" aria-level, not a real h1-h6).' }],
    code: `<fandry-heading level="2">Section title</fandry-heading>`
  },
  {
    slug: 'icon',
    name: 'Icon',
    tag: 'fandry-icon',
    category: 'Typography',
    description: 'A sizing/color frame around a slotted glyph — brings no icon set of its own.',
    props: [
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Icon size.' },
      { name: 'label', type: 'string', default: "''", description: 'Set only when the icon is the sole content conveying meaning (icon-only button).' }
    ],
    code: `<fandry-icon size="md" label="Favorite">
  <svg viewBox="0 0 24 24">...</svg>
</fandry-icon>`
  },
  {
    slug: 'label',
    name: 'Label',
    tag: 'fandry-label',
    category: 'Typography',
    description: 'A form label, with an optional required indicator.',
    props: [
      { name: 'html-for', type: 'string', default: "''", description: 'id of the control this label describes.' },
      { name: 'required', type: 'boolean', default: 'false', description: 'Shows a required indicator.' }
    ],
    code: `<fandry-label html-for="username" required>Username</fandry-label>
<input id="username" />`
  },
  {
    slug: 'text',
    name: 'Text',
    tag: 'fandry-text',
    category: 'Typography',
    description: 'Body text — pick the rendered tag and size independently.',
    props: [
      { name: 'as', type: "'p' | 'span' | 'div'", default: "'p'", description: 'Layout: block (p/div) or inline (span).' },
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
    category: 'Forms',
    description: 'A native button with default/secondary/ghost variants and three sizes.',
    props: [
      { name: 'variant', type: "'default' | 'secondary' | 'ghost'", default: "'default'", description: 'Visual style.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Button size.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the button.' },
      { name: 'type', type: "'button' | 'submit' | 'reset'", default: "'button'", description: 'Native button type.' }
    ],
    code: `<fandry-button variant="secondary" size="lg">Save</fandry-button>`
  },
  {
    slug: 'checkbox',
    name: 'Checkbox',
    tag: 'fandry-checkbox',
    category: 'Forms',
    description: 'A checkbox with a built-in label and indeterminate support.',
    props: [
      { name: 'label', type: 'string', default: "''", description: 'Visible label.' },
      { name: 'checked', type: 'boolean', default: 'false', description: 'Checked state.' },
      { name: 'indeterminate', type: 'boolean', default: 'false', description: 'Visual mixed state (synced onto the native input imperatively).' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the checkbox.' }
    ],
    code: `<fandry-checkbox label="Accept terms" onchange={handleChange}></fandry-checkbox>`
  },
  {
    slug: 'combobox',
    name: 'Combobox',
    tag: 'fandry-combobox',
    category: 'Forms',
    description: 'A searchable select — type to narrow the options, then pick one.',
    props: [
      { name: 'label', type: 'string', default: "''", description: 'Visible label.' },
      { name: 'placeholder', type: 'string', default: "''", description: 'Shown when nothing is selected or typed.' },
      { name: 'help-text', type: 'string', default: "''", description: 'Helper text below the field.' },
      { name: 'name', type: 'string', default: "''", description: 'Exposed as `data-name` on the input.' },
      { name: 'options', type: '{ label, value, description?, group?, keywords?, disabled? }[]', default: '[]', description: 'The options. Search matches label, description, keywords and group; a prefix in the label ranks first.' },
      { name: 'value', type: 'string', default: "''", description: 'Selected value. Listen for `change` (detail is the new value).' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the field.' },
      { name: 'required', type: 'boolean', default: 'false', description: 'Marks the field required (asterisk + aria-required).' },
      { name: 'element-props', type: 'Record<string, unknown>', default: '{}', description: 'Spread onto the native input (e.g. `{ tabIndex: 2 }`); keys the component controls are ignored with a warning.' },
      { name: 'empty (slot)', type: 'slot', default: "'No results'", description: 'Replaces the message shown when nothing matches.' }
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
    category: 'Forms',
    description: 'A text input with a label, help text, and prefix/suffix slots.',
    props: [
      { name: 'label', type: 'string', default: "''", description: 'Visible label.' },
      { name: 'help-text', type: 'string', default: "''", description: 'Helper text below the field.' },
      { name: 'type', type: 'string', default: "'text'", description: 'Native input type (email, password, ...).' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Field size.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the field.' }
    ],
    code: `<fandry-input label="Email" type="email" placeholder="you@company.com"></fandry-input>`
  },
  {
    slug: 'link',
    name: 'Link',
    tag: 'fandry-link',
    category: 'Forms',
    description: 'Anchor styling with default/muted variants and a disabled state.',
    props: [
      { name: 'href', type: 'string', default: "''", description: 'Link target.' },
      { name: 'target', type: "'_self' | '_blank' | '_parent' | '_top'", default: "'_self'", description: 'Native anchor target.' },
      { name: 'variant', type: "'default' | 'muted'", default: "'default'", description: 'Visual style.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Renders with no href, removing it from tab order.' }
    ],
    code: `<fandry-link href="https://github.com/rahulgawale/fandryui" target="_blank">GitHub</fandry-link>`
  },
  {
    slug: 'radio',
    name: 'Radio',
    tag: 'fandry-radio',
    category: 'Forms',
    description: 'A single radio input — pair with fandry-radio-group for the roving-tabindex group.',
    props: [
      { name: 'label', type: 'string', default: "''", description: 'Visible label.' },
      { name: 'name', type: 'string', default: "''", description: 'Radio group name (must match the group).' },
      { name: 'value', type: 'string', default: "''", description: "This option's value." },
      { name: 'checked', type: 'boolean', default: 'false', description: 'Checked state.' }
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
    category: 'Forms',
    description: 'A roving-tabindex container for a set of fandry-radio buttons.',
    props: [
      { name: 'name', type: 'string', default: "''", description: 'Shared name for every radio in the group.' },
      { name: 'value', type: 'string', default: "''", description: 'Selected value.' },
      { name: 'label', type: 'string', default: "''", description: 'Group label (rendered as the fieldset legend equivalent).' }
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
    category: 'Forms',
    description: 'A custom listbox-style select, with optional grouped options.',
    props: [
      { name: 'label', type: 'string', default: "''", description: 'Visible label.' },
      { name: 'placeholder', type: 'string', default: "''", description: 'Shown when nothing is selected.' },
      { name: 'options', type: '{ label, value }[]', default: '[]', description: 'Flat option list.' },
      { name: 'groups', type: '{ label, options }[]', default: '[]', description: 'Grouped option list (used instead of options).' },
      { name: 'value', type: 'string', default: "''", description: 'Selected value.' }
    ],
    code: `<fandry-select
  label="Plan"
  placeholder="Choose a plan"
  options={planOptions}
  value="pro"
></fandry-select>`
  },
  {
    slug: 'switch',
    name: 'Switch',
    tag: 'fandry-switch',
    category: 'Forms',
    description: 'A toggle switch with a built-in label.',
    props: [
      { name: 'label', type: 'string', default: "''", description: 'Visible label.' },
      { name: 'checked', type: 'boolean', default: 'false', description: 'On/off state.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the switch.' }
    ],
    code: `<fandry-switch label="Enable notifications" checked></fandry-switch>`
  },
  {
    slug: 'textarea',
    name: 'Textarea',
    tag: 'fandry-textarea',
    category: 'Forms',
    description: 'A multi-line text input with a label and help text.',
    props: [
      { name: 'label', type: 'string', default: "''", description: 'Visible label.' },
      { name: 'help-text', type: 'string', default: "''", description: 'Helper text below the field.' },
      { name: 'rows', type: 'number', default: '3', description: 'Visible row count.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the field.' }
    ],
    code: `<fandry-textarea label="Notes" rows="4"></fandry-textarea>`
  },

  // ---- Feedback ----
  {
    slug: 'alert',
    name: 'Alert',
    tag: 'fandry-alert',
    category: 'Feedback',
    description: 'An inline banner for a status message, with an optional title.',
    props: [
      { name: 'variant', type: "'info' | 'success' | 'warning' | 'danger'", default: "'info'", description: 'Status color and icon.' },
      { name: 'title', type: 'string', default: "''", description: 'Optional bold title above the message.' }
    ],
    code: `<fandry-alert variant="success" title="Saved">Your changes have been saved.</fandry-alert>`
  },
  {
    slug: 'badge',
    name: 'Badge',
    tag: 'fandry-badge',
    category: 'Feedback',
    description: 'A small status/label pill.',
    props: [{ name: 'variant', type: "'default' | 'primary' | 'success' | 'warning' | 'danger'", default: "'default'", description: 'Color variant.' }],
    code: `<fandry-badge variant="primary">New</fandry-badge>`
  },
  {
    slug: 'progress',
    name: 'Progress',
    tag: 'fandry-progress',
    category: 'Feedback',
    description: 'A determinate or indeterminate progress bar.',
    props: [
      { name: 'value', type: 'number', default: '0', description: 'Current progress, from 0 to max.' },
      { name: 'max', type: 'number', default: '100', description: 'Maximum value.' },
      { name: 'label', type: 'string', default: "''", description: 'Accessible label.' },
      { name: 'indeterminate', type: 'boolean', default: 'false', description: 'Shows an animated bar of unknown duration instead of value/max.' }
    ],
    code: `<fandry-progress value="60" label="Uploading"></fandry-progress>`
  },
  {
    slug: 'skeleton',
    name: 'Skeleton',
    tag: 'fandry-skeleton',
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
    category: 'Feedback',
    description: 'A loading spinner in three sizes.',
    props: [
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Spinner size.' },
      { name: 'label', type: 'string', default: "'Loading'", description: 'Accessible label.' }
    ],
    code: `<fandry-spinner size="md"></fandry-spinner>`
  },
  {
    slug: 'toast',
    name: 'Toast',
    tag: 'fandry-toast',
    category: 'Feedback',
    description: 'An auto-dismissing notification — pair with fandry-toast-viewport for placement.',
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
    category: 'Feedback',
    description: 'A fixed or contained stacking region that positions fandry-toast.',
    props: [
      { name: 'placement', type: "'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'", default: "'bottom-right'", description: 'Corner to stack from.' },
      { name: 'contained', type: 'boolean', default: 'false', description: 'position: absolute against the nearest positioned ancestor instead of the viewport.' },
      { name: 'label', type: 'string', default: "''", description: 'Accessible label for the stacking region.' }
    ],
    code: `<fandry-toast-viewport placement="bottom-right" label="Notifications">
  <fandry-toast variant="info">Heads up.</fandry-toast>
</fandry-toast-viewport>`
  },
  {
    slug: 'tooltip',
    name: 'Tooltip',
    tag: 'fandry-tooltip',
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
    category: 'Overlays & Data',
    description: 'A command palette — a modal search box over a list of actions. Generic: it reports the chosen value and leaves what it does (and the Cmd+K shortcut) to you.',
    props: [
      { name: 'open', type: 'boolean', default: 'false', description: 'Whether the palette is shown. Listen for `toggle` (detail is the new state) and update it.' },
      { name: 'label', type: 'string', default: "''", description: 'Accessible name of the palette.' },
      { name: 'placeholder', type: 'string', default: "''", description: 'Hint shown in the empty search box.' },
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
    category: 'Overlays & Data',
    description: 'A modal panel over a backdrop, with Escape/backdrop-click to close and focus returned to the trigger.',
    props: [
      { name: 'open', type: 'boolean', default: 'false', description: 'Open state (consumer-controlled via ontoggle).' },
      { name: 'label', type: 'string', default: "''", description: 'Accessible name for the dialog (aria-label).' }
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
    category: 'Overlays & Data',
    description: 'A single selectable row inside fandry-menu.',
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
    category: 'Overlays & Data',
    description: 'An anchored floating panel — owns positioning, not the trigger or content.',
    props: [
      { name: 'placement', type: "'top' | 'bottom' | 'left' | 'right'", default: "'bottom'", description: 'Panel position relative to the trigger.' },
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
    category: 'Overlays & Data',
    description: 'A data table with sorting, pagination, selection, and filtering — wraps @tanstack/table-core.',
    props: [
      { name: 'columns', type: 'ColumnDef[]', default: '[]', description: 'Column definitions.' },
      { name: 'data', type: 'RowData[]', default: '[]', description: 'Row data.' },
      { name: 'enable-pagination', type: 'boolean', default: 'false', description: 'Turns on page-size-driven pagination.' },
      { name: 'enable-row-selection', type: 'boolean', default: 'false', description: 'Turns on checkbox row selection.' },
      { name: 'enable-global-filter', type: 'boolean', default: 'false', description: 'Turns on a search box that filters all columns.' }
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
    category: 'Salesforce',
    description: 'Find and pick a record — one by default, or several with `multiple`. It fetches nothing itself: it reports what was typed, you run the query and hand the records back.',
    props: [
      { name: 'label', type: 'string', default: "''", description: 'Visible label.' },
      { name: 'placeholder', type: 'string', default: "''", description: 'Shown in the empty search box.' },
      { name: 'help-text', type: 'string', default: "''", description: 'Helper text below the field.' },
      { name: 'name', type: 'string', default: "''", description: 'Exposed as `data-name` on the input.' },
      { name: 'results', type: '{ id, label, description?, disabled?, … }[]', default: '[]', description: 'Matches for the current search, shown exactly as given (never re-filtered). Extra fields ride along and come back in `change`.' },
      { name: 'loading', type: 'boolean', default: 'false', description: 'Shows a searching indicator while your query is in flight.' },
      { name: 'multiple', type: 'boolean', default: 'false', description: 'Allow any number of records, shown as removable chips with a “Clear all”. The list stays open after each pick, already-chosen records are not offered again, and Backspace in an empty field removes the last chip.' },
      { name: 'record', type: '{ id, label, … } | null', default: 'null', description: 'Single mode: the selected record, shown as the field\'s value with a clear button. Set it to preselect; it updates when the user picks or clears.' },
      { name: 'records', type: '{ id, label, … }[]', default: '[]', description: 'Multiple mode: the selected records. Set it to preselect; it updates on every pick and removal.' },
      { name: 'value', type: 'string', default: "''", description: 'Read-only, single mode: the selected record\'s id. Set `record` to change it.' },
      { name: 'required', type: 'boolean', default: 'false', description: 'Marks the field required (asterisk + aria-required).' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the field and the pill\'s clear button.' },
      { name: 'element-props', type: 'Record<string, unknown>', default: '{}', description: 'Spread onto the native input; keys the component controls are ignored with a warning.' },
      { name: 'search (event)', type: 'CustomEvent<{ query }>', default: '—', description: 'Fires when the list opens (immediately, so an empty query can offer recent records), after typing pauses, and in `multiple` mode after each pick.' },
      { name: 'change (event)', type: 'CustomEvent<{ value, record }> | CustomEvent<{ values, records }>', default: '—', description: 'Single mode: `{ value, record }` on pick, and `{ value: \'\', record: null }` on clear. Multiple mode: `{ values, records }` on every pick, removal and Clear all.' },
      { name: 'empty (slot)', type: 'slot', default: "'No records found'", description: 'Replaces the message shown when a search has no matches.' }
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
