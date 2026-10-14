import { LightningElement } from 'lwc';
import { PLATFORM_PAGES } from 'fandryui/gettingStartedData';
import { THEME_PRESETS, themeStyle } from 'fandryui/themePresets';

// Code samples live here, not in the template: braces in template text are
// LWC expressions.
const THEME_CODE = `/* The whole site */
:root {
  --fd-primary: 24 70% 38%;
  --fd-font-heading: Georgia, serif;
  --fd-radius-md: 0;
}

/* One section of it */
.promo {
  --fd-primary: 160 84% 30%;
}`;

const COMPOSE_CODE = `<fandry-input label="Email">
  <span slot="help-text">
    We only use it for <a href="/privacy">order updates</a>.
  </span>
</fandry-input>`;

const PARTS_CODE = `/* One element inside a component, in one state */
.checkout fandry-switch::part(control checked) {
  box-shadow: 0 0 0 4px hsl(160 84% 30% / 0.25);
}`;

const EXTEND_CODE = `// Same sorting, paging and selection, your own template
import FdTableState from 'fandry/tableState';

export default class OrderGrid extends FdTableState {}`;

// The first commands on each platform, as in the getting-started overview.
const PLATFORM_START: Record<string, { cta: string; code: string }> = {
  'lwr-oss': { cta: 'Start with LWR', code: 'npm install fandryui\nnpx fandry init' },
  salesforce: {
    cta: 'Start with Salesforce DX',
    code: 'npm install --save-dev fandryui\nnpx fandry init\nnpx fandry add button'
  }
};

export default class WhyFandry extends LightningElement {
  platforms = PLATFORM_PAGES.map((page) => ({
    slug: page.slug,
    name: page.name,
    badge: page.badge,
    description: page.description,
    href: `/getting-started/${page.slug}/`,
    ...PLATFORM_START[page.slug]
  }));

  themeCode = THEME_CODE;
  composeCode = COMPOSE_CODE;
  partsCode = PARTS_CODE;
  extendCode = EXTEND_CODE;

  ladder = [
    { key: 'tokens', step: '1', title: 'Tokens', text: 'Set `--fd-*` on `:root`, a section or one element to change colors, type, spacing, radius and motion.' },
    { key: 'parts', step: '2', title: 'Parts and states', text: 'Restyle one element inside a component with `::part()`, including states like `checked` or `disabled`.' },
    { key: 'slots', step: '3', title: 'Slots and messages', text: 'Replace or add content and text. Every visible string is a slot or a `messages` entry, so sites can translate it.' },
    { key: 'extend', step: '4', title: 'Extend the state class', text: 'Components with real state ship it as a template-less class. Keep the behavior, write your own markup.' },
    { key: 'copy', step: '5', title: 'Copy the component', text: 'The source is short, plain LWC. Copy it into your namespace and change anything, keeping the tokens.' }
  ];

  lbcGoals = [
    'Standard Salesforce UI patterns',
    'Consistency with Lightning Experience',
    'Enterprise stability, maintained by Salesforce',
    'Styling hooks and some slots within the SLDS look'
  ];

  fandryGoals = [
    'Custom interfaces with your own product identity',
    'Composition: slots, parts and extendable state',
    'Theming from one token scale',
    'Source you can read, copy and evolve on your schedule'
  ];

  tradeOffs = [
    {
      key: 'fewer',
      title: 'Fewer components',
      text: 'Fandry is a small set of primitives and a few blocks, not the full Lightning Base Components catalog. Some screens will still call for a `lightning-*` component, and slotting one into a fandry component works.'
    },
    {
      key: 'not-slds',
      title: 'It does not look like Salesforce',
      text: 'That is the point, and also the cost. If your app should feel like part of Lightning Experience, base components are the better fit.'
    },
    {
      key: 'opinionated',
      title: 'Opinionated, on purpose',
      text: 'Customization goes through tokens, parts, slots and state classes, not a growing list of props. Some changes mean composing or copying rather than flipping a flag.'
    },
    {
      key: 'yours',
      title: 'Updates are yours to take',
      text: 'On Salesforce, `fandry add` copies source into your project. Running it again updates the components you have not edited and leaves your changes alone, so you decide when anything changes.'
    },
    {
      key: 'platform',
      title: 'Still a Salesforce platform citizen',
      text: 'Fandry depends on LWC, LWR and Lightning Web Security like any other component. Independence from base components is not independence from the platform.'
    },
    {
      key: 'not-react',
      title: 'Not a React replacement',
      text: 'Fandry is a component library. It has no router, state store or rendering model of its own; your application stays plain LWC.'
    }
  ];

  themes = THEME_PRESETS.map((preset) => ({ ...preset, style: themeStyle(preset) }));
}
