// Content for the /getting-started pages. Kept as data (like componentsData)
// so the page component only decides *how* to render each block, and the
// commands and directory trees live in one place that is easy to keep honest.

export type GettingStartedBlock =
  | { type: 'text'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'code'; label: string; code: string }
  | { type: 'tree'; label: string; code: string }
  | { type: 'note'; variant: 'info' | 'success' | 'warning'; title: string; text: string };

export interface GettingStartedSection {
  id: string;
  title: string;
  blocks: GettingStartedBlock[];
}

export interface GettingStartedPage {
  slug: string;
  name: string;
  badge: string;
  title: string;
  description: string;
  sections: GettingStartedSection[];
}

const LWR_OSS: GettingStartedPage = {
  slug: 'lwr-oss',
  name: 'LWR / LWC OSS',
  badge: 'npm',
  title: 'Getting started with LWR / LWC OSS',
  description:
    'Install one npm package, point your project at it, and use <fandry-*> components. Your bundler ships only the ones you use.',
  sections: [
    {
      id: 'requirements',
      title: 'Requirements',
      blocks: [
        {
          type: 'list',
          items: [
            'Node.js 18 or newer',
            'An LWR or LWC OSS project using lwc 8.x (lwc is a peer dependency, so Fandry uses your copy)',
            'npm, or pnpm / yarn if you prefer'
          ]
        }
      ]
    },
    {
      id: 'install',
      title: '1. Install',
      blocks: [
        {
          type: 'text',
          text: 'One package brings every component and its single third-party dependency (@tanstack/table-core, used by fandry-table). There is nothing else to install.'
        },
        { type: 'code', label: 'Terminal', code: 'npm install fandryui' }
      ]
    },
    {
      id: 'init',
      title: '2. Initialize',
      blocks: [
        {
          type: 'text',
          text: 'The CLI detects your project from lwr.config.json or lwc.config.json and registers the package as a module source. You can also make this edit by hand.'
        },
        { type: 'code', label: 'Terminal', code: 'npx fandry init' },
        {
          type: 'code',
          label: 'lwr.config.json (after)',
          code: `{
  "lwc": {
    "modules": [
      { "dir": "$rootDir/src/modules" },
      { "npm": "fandryui" }
    ]
  },
  "routes": [ ... ]
}`
        },
        {
          type: 'note',
          variant: 'info',
          title: 'lwc.config.json projects',
          text: 'Plain LWC OSS projects keep the same record at the top level: "modules": [ { "npm": "fandryui" } ].'
        }
      ]
    },
    {
      id: 'use',
      title: '3. Use a component',
      blocks: [
        {
          type: 'text',
          text: 'The package brings its own fandry namespace, so fandry/button is <fandry-button>. No imports are needed in your template.'
        },
        {
          type: 'code',
          label: 'src/modules/my/app/app.html',
          code: `<template>
  <fandry-button onclick={handleSave}>Save</fandry-button>

  <fandry-select
    label="Fruit"
    options={options}
    value={fruit}
    onchange={handleChange}
  ></fandry-select>
</template>`
        },
        {
          type: 'code',
          label: 'src/modules/my/app/app.js',
          code: `import { LightningElement } from 'lwc';

export default class App extends LightningElement {
  fruit = 'apple';
  options = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' }
  ];

  handleSave() {}
  handleChange(event) {
    this.fruit = event.detail;
  }
}`
        }
      ]
    },
    {
      id: 'structure',
      title: 'What your project looks like',
      blocks: [
        {
          type: 'tree',
          label: 'Directory structure',
          code: `my-lwr-app/
├── lwr.config.json            # { "npm": "fandryui" } added by \`fandry init\`
├── fandry.json                # written by \`fandry init\`
├── package.json               # "fandryui" in dependencies
├── node_modules/
│   └── fandryui/
│       ├── lwc.config.json    # the public modules ("expose")
│       ├── registry.json
│       └── modules/fandry/    # readable source, one folder per component
│           ├── base/
│           ├── button/
│           ├── select/
│           └── table/ ...
└── src/
    └── modules/
        └── my/
            └── app/           # your code
                ├── app.html
                └── app.js`
        },
        {
          type: 'text',
          text: 'Everything under node_modules/fandryui is readable LWC source. Fandry is not a black box: open a component to see exactly what it does.'
        }
      ]
    },
    {
      id: 'shipping',
      title: 'Only what you use ships',
      blocks: [
        {
          type: 'text',
          text: 'There is no registry and nothing is registered globally. Your bundler follows the module graph from your templates, so a page that uses fandry-button does not include table, dialog or lookup. There is nothing to add with the CLI on this platform.'
        }
      ]
    },
    {
      id: 'next',
      title: 'Next steps',
      blocks: [
        {
          type: 'list',
          items: [
            'Extend the shared base class: import Base from "fandry/base" gives your own component Fandry\'s stylesheet and design tokens.',
            'Theme by setting any --fd-* token on :root (e.g. --fd-primary: 210 90% 40%; --fd-radius-md: 0), or on one section to theme just that part of the page.',
            'Restyle one element inside a component with ::part(), e.g. fandry-link::part(link). Each component page lists its parts.',
            'Need a change inside a component that neither CSS nor slots can reach? Copy it into your own namespace and make it yours. Its source is short, plain LWC; keep extends Base and it still follows your tokens.',
            'Browse every component, its props and examples under Components.'
          ]
        },
        {
          type: 'note',
          variant: 'warning',
          title: 'Build fails with LWC1121 in @lwrjs/loader?',
          text: 'Fresh installs of lwr 0.18.3 can pull @lwc/compiler 9.x, which rejects LWR\'s own loader. Pin your @lwc/* packages to the same 8.x version as lwc (npm "overrides"). The repository\'s examples/consumer/package.json shows a working set.'
        }
      ]
    }
  ]
};

const SALESFORCE: GettingStartedPage = {
  slug: 'salesforce',
  name: 'Salesforce DX',
  badge: 'sfdx',
  title: 'Getting started on Salesforce',
  description:
    'The platform has no bundler and cannot import npm packages, so the CLI copies components into your project as source you own, with everything they depend on.',
  sections: [
    {
      id: 'requirements',
      title: 'Requirements',
      blocks: [
        {
          type: 'list',
          items: [
            'A Salesforce DX project (it has an sfdx-project.json)',
            'The Salesforce CLI (sf) and an authorized org',
            'Node.js 18 or newer, to run the fandry CLI'
          ]
        },
        {
          type: 'note',
          variant: 'info',
          title: 'Native shadow DOM, whatever your org uses',
          text: "Fandry components render in native shadow DOM (they set static shadowSupportMode = 'native'), even in orgs that run other components on the synthetic-shadow polyfill. That is what lets you restyle their internals with ::part() and keeps their behavior identical to LWR. Your own components don't need to change: they can stay synthetic and still use and style fandry components, and Lightning components you slot into fandry (a lightning-button in a card or dialog) keep working. The one place not to use Lightning base components is inside an option's component (select, combobox, command, lookup): fandry renders that component, so it runs in native shadow, where base components lose their SLDS styling. SLDS and other global CSS don't reach inside them; theme them with --fd-* tokens and parts."
        }
      ]
    },
    {
      id: 'install',
      title: '1. Install the CLI',
      blocks: [
        {
          type: 'text',
          text: 'Install fandryui as a dev dependency. It is only used to run the fandry CLI and to copy source out of; nothing from node_modules is deployed.'
        },
        { type: 'code', label: 'Terminal', code: 'npm install --save-dev fandryui' },
        {
          type: 'text',
          text: 'Prefer not to install it? Every command below also works as npx fandryui <command>.'
        }
      ]
    },
    {
      id: 'init',
      title: '2. Initialize',
      blocks: [
        {
          type: 'text',
          text: 'Fandry gets its own package directory next to your app code, so the copied source is easy to tell apart and can be deployed on its own.'
        },
        { type: 'code', label: 'Terminal', code: 'npx fandry init' },
        {
          type: 'code',
          label: 'sfdx-project.json (after)',
          code: `{
  "packageDirectories": [
    { "path": "force-app", "default": true },
    { "path": "fandryui" }
  ],
  "namespace": "",
  "sourceApiVersion": "67.0"
}`
        },
        {
          type: 'text',
          text: 'Use --dir <path> to install into a different package directory. Your existing indentation and default package directory are left untouched.'
        }
      ]
    },
    {
      id: 'add',
      title: '3. Add components',
      blocks: [
        {
          type: 'text',
          text: 'Name the components you want. Their dependencies are followed for you: adding table also adds input, checkbox, pagination, skeleton, the shared base and more.'
        },
        { type: 'code', label: 'Terminal', code: 'npx fandry add button input table' },
        {
          type: 'code',
          label: 'Output',
          code: `Added 10 bundle(s) to fandryui/main/default/lwc (3 requested, 7 dependencies)
  + fandryBase
  + fandryButton
  + fandryLabel
  + fandryInput
  + fandryCheckbox
  + fandryPagination
  + fandrySkeleton
  + fandryTableCore
  + fandryTableState
  + fandryTable`
        },
        {
          type: 'code',
          label: 'Other commands',
          code: `npx fandry list                  # every component and what it depends on
npx fandry add --all             # everything
npx fandry add table --dry-run   # show what would be added
npx fandry add table --overwrite # replace table even if you edited it`
        },
        {
          type: 'text',
          text: 'Each bundle gets a .js-meta.xml using your project\'s sourceApiVersion, and it is never rewritten after that, so you can expose a component or add targets safely. Bundles you have edited are never overwritten unless you name them with --overwrite.'
        }
      ]
    },
    {
      id: 'structure',
      title: 'What your project looks like',
      blocks: [
        {
          type: 'tree',
          label: 'Directory structure',
          code: `my-sfdx-project/
├── sfdx-project.json          # "fandryui" package directory added by \`fandry init\`
├── fandry.json                # written by \`fandry init\`
├── package.json
├── force-app/                 # your app
│   └── main/default/lwc/
│       └── myComponent/
└── fandryui/                  # Fandry: your source now, commit it
    └── main/default/lwc/
        ├── fandryBase/        # shared class, base.css, tokens.css, motion.css
        ├── fandryButton/
        ├── fandryInput/
        ├── fandryLabel/
        ├── fandryCheckbox/
        ├── fandryPagination/
        ├── fandrySkeleton/
        ├── fandryTable/
        ├── fandryTableState/
        └── fandryTableCore/   # @tanstack/table-core, bundled`
        },
        {
          type: 'text',
          text: 'The copied files are yours: commit them, edit them, deploy them. They are ordinary LWC source, not a managed package.'
        },
        {
          type: 'note',
          variant: 'info',
          title: 'Make it yours: CSS, then slots, then your own copy',
          text: 'Style most things from your own CSS with --fd-* tokens and ::part(), down to a rainbow border. Add to a component through its slots: a loading spinner is just slotted content. For a change inside a component that neither CSS nor slots reach, like a different native element or different internal behavior, copy fandryButton to myButton, rename it, and change anything: it still extends fandryBase, so it keeps your tokens and native shadow DOM. fandry add does not overwrite files you changed unless you pass --overwrite. With lightning-* components the only equivalent is rebuilding from SLDS blueprints.'
        }
      ]
    },
    {
      id: 'use',
      title: '4. Use a component',
      blocks: [
        {
          type: 'text',
          text: 'On the platform your code lives in the default c namespace, so fandryButton is <c-fandry-button>. No imports are needed in the template.'
        },
        {
          type: 'code',
          label: 'force-app/main/default/lwc/myComponent/myComponent.html',
          code: `<template>
  <lightning-card title="Team">
    <c-fandry-button onclick={handleSave}>Save</c-fandry-button>

    <c-fandry-table
      columns={columns}
      data={rows}
      caption="Team members"
      enable-pagination
      page-size="3"
      enable-global-filter
    ></c-fandry-table>
  </lightning-card>
</template>`
        },
        {
          type: 'code',
          label: 'force-app/main/default/lwc/myComponent/myComponent.js',
          code: `import { LightningElement } from 'lwc';

export default class MyComponent extends LightningElement {
  columns = [
    { id: 'name', accessorKey: 'name', header: 'Name' },
    { id: 'role', accessorKey: 'role', header: 'Role' }
  ];
  rows = [
    { name: 'Ada Lovelace', role: 'Engineer' },
    { name: 'Alan Turing', role: 'Researcher' }
  ];

  handleSave() {}
}`
        }
      ]
    },
    {
      id: 'deploy',
      title: '5. Deploy',
      blocks: [
        {
          type: 'text',
          text: 'Deploy Fandry first (or both directories in one command), then your app.'
        },
        {
          type: 'code',
          label: 'Terminal',
          code: `sf project deploy start --source-dir fandryui --target-org my-org
sf project deploy start --source-dir force-app --target-org my-org

# or both at once
sf project deploy start --source-dir fandryui --source-dir force-app --target-org my-org`
        },
        {
          type: 'note',
          variant: 'success',
          title: 'Tested on a real org',
          text: 'button, input, table (with its bundled table-core), pagination and the table search were deployed to an org and run on a Lightning page.'
        }
      ]
    },
    {
      id: 'limits',
      title: 'Good to know',
      blocks: [
        {
          type: 'note',
          variant: 'warning',
          title: 'select, combobox, command and lookup use dynamic components',
          text: 'They use lwc:is, which Salesforce only accepts when the bundle\'s own .js-meta.xml declares the lightning__dynamicComponent capability (with API 55 or later and Lightning Web Security on); otherwise the deploy fails with LWC1188. fandry add writes the capability into the meta files it creates and tells you if an existing one lacks it. Nothing in jsconfig.json or your project settings does this.'
        },
        {
          type: 'list',
          items: [
            'Fandry is not a managed package. Components are plain c-namespace source in your project.',
            'The table depends on @tanstack/table-core. Because npm packages cannot be imported on the platform, fandry add table installs it as the fandryTableCore bundle.',
            'Upgrading: update fandryui, then run fandry add <name> again. Bundles you have not edited are updated to the new version, edited ones are skipped, and --overwrite replaces only the components you name. Commit fandry.json: it records what was installed so an upgrade can be told apart from an edit.'
          ]
        }
      ]
    }
  ]
};

/* Every public token, grouped for the theming page. theming.test.ts fails
   when this and fandry/base/tokens.css disagree. */
export const THEMING_TOKENS = `Color (H S% L%)   --fd-primary  --fd-primary-foreground
                  --fd-accent  --fd-accent-foreground
                  --fd-success  --fd-success-foreground
                  --fd-warning  --fd-warning-foreground
                  --fd-danger  --fd-danger-foreground
                  --fd-bg  --fd-bg-muted  --fd-text  --fd-text-muted
                  --fd-border  --fd-border-focus  --fd-link-visited
Borders           --fd-border-width  --fd-border-width-md  --fd-border-width-lg
Radius            --fd-radius-sm  --fd-radius-md  --fd-radius-lg  --fd-radius-full
Spacing           --fd-space-1  --fd-space-2  --fd-space-3  --fd-space-4  --fd-space-5
Sizes             --fd-size-xs  --fd-size-sm  --fd-size-md  --fd-size-lg
                  --fd-control-height-sm  --fd-control-height-md  --fd-control-height-lg
                  --fd-control-max-width-sm  --fd-control-min-width-sm
                  --fd-listbox-max-height  --fd-chevron-size
                  --fd-overlay-min-width-sm  --fd-overlay-max-width-sm
                  --fd-overlay-max-width-md  --fd-overlay-offset-top
                  --fd-avatar-size-sm  --fd-avatar-size-md  --fd-avatar-size-lg
                  --fd-switch-width  --fd-switch-padding  --fd-tooltip-arrow-size
                  --fd-sidebar-width  --fd-toast-width  --fd-form-column-min-width
Focus ring        --fd-ring-color  --fd-ring-width  --fd-ring-offset
Surfaces          --fd-surface-tint  --fd-shadow-sm  --fd-shadow-color-floating
                  --fd-shadow-color-modal  --fd-shadow-color-subtle
                  --fd-hover-brightness  --fd-disabled-opacity  --fd-pulse-opacity
                  --fd-backdrop  --fd-backdrop-opacity  --fd-z-overlay
Type              --fd-font-sans  --fd-font-mono  --fd-font-heading
                  --fd-font-size-xs  --fd-font-size-sm  --fd-font-size-md
                  --fd-font-size-lg  --fd-font-size-xl  --fd-font-size-2xl
                  --fd-font-size-3xl  --fd-line-height-normal  --fd-line-height-tight
                  --fd-font-weight-medium  --fd-font-weight-semibold
                  --fd-font-weight-bold  --fd-heading-weight
                  --fd-heading-letter-spacing
Motion            --fd-duration-fast  --fd-duration-normal  --fd-duration-slow
                  --fd-duration-spin  --fd-duration-slowest
                  --fd-ease-standard  --fd-ease-emphasized  --fd-ease-in-out`;

const THEMING: GettingStartedPage = {
  slug: 'theming',
  name: 'Theming',
  badge: 'css',
  title: 'Theming',
  description:
    'Set --fd-* tokens to change colors, type, spacing, radius and motion for the whole site, one section or one component. Use ::part() to restyle one element inside a component.',
  sections: [
    {
      id: 'how',
      title: 'How it works',
      blocks: [
        {
          type: 'text',
          text: 'Every token has two names. You set the public one, --fd-*. Components read a private one, --_fd-*, which each component resolves from the public name or its default. Custom properties inherit through shadow roots, so a value you set on any ancestor reaches every fandry component below it, and the ones those components render.'
        },
        {
          type: 'code',
          label: 'Inside every component (fandry/base/tokens.css)',
          code: `:host {
  --_fd-primary: var(--fd-primary, 330 81% 48%);
  --_fd-radius-md: var(--fd-radius-md, 0.375rem);
  /* ... */
}`
        },
        {
          type: 'list',
          items: [
            'Set --fd-* names only. The --_fd-* names are internal and can change.',
            'Colors are bare HSL channels with no commas and no hsl(): --fd-primary: 210 90% 40%. Components wrap them in hsl() themselves, which is how they add transparency.',
            'Nothing needs a global stylesheet: every token has a default. Set only what you want to change.'
          ]
        }
      ]
    },
    {
      id: 'global',
      title: 'Set a token for the whole site',
      blocks: [
        {
          type: 'text',
          text: 'Put the tokens on :root in a stylesheet the page loads. Every fandry component on the page inherits them.'
        },
        {
          type: 'code',
          label: 'LWR / LWC OSS: src/assets/theme.css',
          code: `:root {
  --fd-primary: 210 90% 40%;
  --fd-primary-foreground: 0 0% 100%;
  --fd-radius-md: 0;
  --fd-font-sans: "Brand Sans", system-ui, sans-serif;
}`
        },
        {
          type: 'code',
          label: 'LWR / LWC OSS: src/layouts/index.html',
          code: `<head>
  <link rel="stylesheet" href="/assets/theme.css" />
</head>`
        },
        {
          type: 'note',
          variant: 'warning',
          title: ':root in a component stylesheet does not work',
          text: "A component's own CSS is scoped to that component, so :root { ... } in my/app/app.css never reaches the page. Use a stylesheet the layout loads, or set the tokens on :host (see below)."
        },
        {
          type: 'text',
          text: 'On Salesforce, where the page is not yours to edit, pick the place that matches where your components run:'
        },
        {
          type: 'list',
          items: [
            'Experience Cloud LWR site: in Experience Builder, Settings > Advanced > Edit Head Markup, add a <style> with the :root rule, or a <link> to a static resource holding it.',
            'Lightning pages, apps and record pages: set the tokens on :host of your outermost component. Everything it renders inherits them, including fandry components nested in other components.',
            'A whole Lightning app from one file: upload the :root rule as a CSS static resource and load it once with loadStyle from lightning/platformResourceLoader.'
          ]
        },
        {
          type: 'code',
          label: 'Salesforce: force-app/main/default/lwc/myApp/myApp.css',
          code: `:host {
  --fd-primary: 210 90% 40%;
  --fd-radius-md: 0;
}`
        },
        {
          type: 'code',
          label: 'Salesforce: loadStyle a static resource named fandryTheme',
          code: `import { LightningElement } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import fandryTheme from '@salesforce/resourceUrl/fandryTheme';

export default class MyApp extends LightningElement {
  connectedCallback() {
    loadStyle(this, fandryTheme);
  }
}`
        }
      ]
    },
    {
      id: 'section',
      title: 'Override for one section',
      blocks: [
        {
          type: 'text',
          text: 'Set the same tokens on any element. Only the components inside it change; the nearest value wins, as with any inherited CSS property.'
        },
        {
          type: 'code',
          label: 'my/app/app.html',
          code: `<section class="promo">
  <fandry-card>...</fandry-card>
  <fandry-button>Shop the sale</fandry-button>
</section>`
        },
        {
          type: 'code',
          label: 'my/app/app.css',
          code: `.promo {
  --fd-bg: 38 92% 95%;
  --fd-primary: 24 95% 40%;
}`
        }
      ]
    },
    {
      id: 'component',
      title: 'Override for one component',
      blocks: [
        {
          type: 'text',
          text: 'A fandry component reads its tokens on its own element, so a token set on the element itself changes that one instance, and whatever it renders: set --fd-primary on a fandry-table and its checkboxes and pagination buttons follow.'
        },
        {
          type: 'code',
          label: 'my/app/app.html',
          code: `<fandry-button class="danger">Delete</fandry-button>
<fandry-button>Cancel</fandry-button>

<!-- or inline, for a one-off -->
<fandry-input label="Search" style="--fd-radius-md: 999px"></fandry-input>`
        },
        {
          type: 'code',
          label: 'my/app/app.css',
          code: `/* one instance */
.danger {
  --fd-primary: 0 72% 51%;
}

/* every fandry-button this component renders */
fandry-button {
  --fd-radius-md: 999px;
}`
        },
        {
          type: 'note',
          variant: 'info',
          title: 'Put the rule where the element is',
          text: "A selector only matches elements in its own shadow tree. .danger or fandry-button in app.css matches the buttons in app.html, not buttons inside some other component, and a global stylesheet's fandry-button rule matches only buttons outside every component. To change every button on the site, set the token on :root; to change the buttons of one component, set it in that component's CSS. On Salesforce the tag is c-fandry-button."
        }
      ]
    },
    {
      id: 'parts',
      title: 'Restyle one element inside a component',
      blocks: [
        {
          type: 'text',
          text: "When no token covers it, style the element directly with ::part(). Each component's page lists its parts and states. A part also carries the name of each state while it is on, so naming both targets that state only. The same rule as above applies: write it in the stylesheet of the component whose template renders the element."
        },
        {
          type: 'code',
          label: 'my/app/app.css',
          code: `fandry-link::part(link) {
  color: inherit;
  text-decoration: none;
}

fandry-checkbox::part(control checked) {
  background: hsl(160 84% 26%);
}

.danger::part(base) {
  text-transform: uppercase;
}`
        },
        {
          type: 'text',
          text: 'Parts need native shadow DOM, which every fandry component uses, on LWR and on Salesforce alike. Tokens work everywhere.'
        }
      ]
    },
    {
      id: 'order',
      title: 'Which value wins',
      blocks: [
        {
          type: 'list',
          items: [
            'An inline style or a rule on the component element itself.',
            'The nearest ancestor that sets the token: a section, then your component\'s :host, then :root.',
            'The default in tokens.css.',
            'Reduced motion wins over all of them: when the user asks for it, the transition durations go to 0ms whatever the site sets. Looping indicators (spinner, skeleton) keep running.'
          ]
        }
      ]
    },
    {
      id: 'own-css',
      title: 'Using tokens in your own CSS',
      blocks: [
        {
          type: 'text',
          text: 'The private --_fd-* names only exist inside fandry components and components that extend fandry/base. A component that extends Base reads them like the library does. Any other CSS, including markup you slot into a fandry component, only sees the --fd-* values you set yourself, so give it a fallback.'
        },
        {
          type: 'code',
          label: 'Your CSS',
          code: `/* my component extends Base from 'fandry/base' */
.toolbar {
  gap: var(--_fd-space-2);
  color: hsl(var(--_fd-text-muted));
}

/* a plain LightningElement */
.toolbar {
  gap: var(--fd-space-2, 0.5rem);
}`
        }
      ]
    },
    {
      id: 'reference',
      title: 'Every token',
      blocks: [
        {
          type: 'text',
          text: 'The defaults are in fandry/base/tokens.css (node_modules/fandryui/modules/fandry/base/ on LWR, fandryBase/ on Salesforce). --brand-primary and --brand-accent still work as the older names for --fd-primary and --fd-accent.'
        },
        {
          type: 'code',
          label: 'Tokens',
          code: THEMING_TOKENS
        },
        {
          type: 'note',
          variant: 'warning',
          title: 'Deprecated component hooks',
          text: '--fd-button-radius, --fd-button-padding-x, --fd-button-border-width, --fd-card-bg, --fd-card-height and --fd-icon-size still work but will be removed. Use a token set on the element, or its base part: .round::part(base) { border-radius: 999px }.'
        }
      ]
    }
  ]
};

const OVERVIEW: GettingStartedPage = {
  slug: '',
  name: 'Overview',
  badge: 'start',
  title: 'Getting started',
  description:
    'One source, one npm package, two platforms. Pick the one you build on; the components are the same.',
  sections: [
    {
      id: 'platforms',
      title: 'Choose your platform',
      blocks: [
        {
          type: 'text',
          text: 'Fandry UI is a single package, fandryui. What differs is how your platform resolves code, so what you run and what you write differs slightly.'
        }
      ]
    },
    {
      id: 'compare',
      title: 'At a glance',
      blocks: [
        {
          type: 'code',
          label: 'LWR / LWC OSS',
          code: `npm install fandryui
npx fandry init

<fandry-button>Save</fandry-button>`
        },
        {
          type: 'code',
          label: 'Salesforce DX',
          code: `npm install --save-dev fandryui
npx fandry init
npx fandry add button table

<c-fandry-button>Save</c-fandry-button>`
        },
        {
          type: 'text',
          text: 'LWR and LWC OSS let a package bring its own namespace and have a bundler that ships only what you use, so the whole package is installed and you write <fandry-*>. Salesforce code lives in the default c namespace and has no bundler or npm resolution, so the CLI copies the components you choose, with their dependencies, into your project and you write <c-fandry-*>. It is the same source either way.'
        }
      ]
    },
    {
      id: 'principles',
      title: 'What stays true on both',
      blocks: [
        {
          type: 'list',
          items: [
            'Real LWC components. Readable source you can open, not a black box.',
            'You own the application: layout, state, data, routing. There is no Fandry shell, router or bootstrap.',
            'Use one component or thirty. Nothing forces you to adopt the whole system.',
            'No runtime registry, loader or network fetch for components or icons.'
          ]
        }
      ]
    }
  ]
};

export const GETTING_STARTED_PAGES: GettingStartedPage[] = [OVERVIEW, LWR_OSS, SALESFORCE, THEMING];

// The pages the overview offers as "choose your platform" cards.
export const PLATFORM_PAGES: GettingStartedPage[] = [LWR_OSS, SALESFORCE];

export function getGettingStartedPage(slug: string): GettingStartedPage {
  return GETTING_STARTED_PAGES.find((page) => page.slug === slug) ?? OVERVIEW;
}
