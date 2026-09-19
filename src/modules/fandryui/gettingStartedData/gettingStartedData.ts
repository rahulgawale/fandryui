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
            'Retheme by setting --brand-primary (H S% L%, no commas) on :root.',
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
          title: 'select, combobox, command and lookup need dynamic components',
          text: 'They use lwc:is, which Salesforce only accepts in orgs with dynamic components enabled; otherwise the deploy fails with LWC1188. fandry add warns when you install one, and fandry list marks them.'
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

export const GETTING_STARTED_PAGES: GettingStartedPage[] = [OVERVIEW, LWR_OSS, SALESFORCE];

export function getGettingStartedPage(slug: string): GettingStartedPage {
  return GETTING_STARTED_PAGES.find((page) => page.slug === slug) ?? OVERVIEW;
}
