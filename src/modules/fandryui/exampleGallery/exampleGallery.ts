import { LightningElement } from 'lwc';

export default class ExampleGallery extends LightningElement {
  // All 11 patterns below live in this one file -- a single link to it,
  // rather than a per-pattern line-anchor, since line numbers here drift
  // with every edit and a stale anchor is worse than none.
  sourceUrl =
    'https://github.com/rahulgawale/fandryui/blob/main/src/modules/fandryui/exampleGallery/exampleGallery.html';

  pricingFeatures = ['Unlimited components', 'Priority support', 'Custom theming'];

  teamMembers = [
    { key: 'ada', initials: 'AL', name: 'Ada Lovelace', role: 'Engineer', badge: 'Admin', variant: 'primary' },
    { key: 'grace', initials: 'GH', name: 'Grace Hopper', role: 'Engineer', badge: 'Member', variant: 'default' },
    { key: 'alan', initials: 'AT', name: 'Alan Turing', role: 'Researcher', badge: 'Member', variant: 'default' }
  ];

  files = [
    { key: 'report', name: 'quarterly-report.pdf', size: '2.4 MB' },
    { key: 'warranty', name: 'warranty-terms.docx', size: '640 KB' }
  ];

  kpis = [
    { key: 'revenue', label: 'Revenue', value: '$84,200', change: '+12%', variant: 'success' },
    { key: 'customers', label: 'New customers', value: '38', change: '+4%', variant: 'success' },
    { key: 'churn', label: 'Churn', value: '1.2%', change: '+0.3%', variant: 'danger' }
  ];

  searchResults = [
    { key: 'order', label: '#10482 — Industrial Pump', badge: 'Order' },
    { key: 'person', label: 'Ada Lovelace', badge: 'Person' },
    { key: 'product', label: 'Filter Kit', badge: 'Product' }
  ];

  crumbPages = [
    { key: 'documents', label: 'Documents', title: 'Documents', body: 'Every file synced to your account, organized by project.' },
    { key: 'projects', label: 'Projects', title: 'Projects', body: 'One folder per active project across the team.' },
    { key: 'redesign', label: 'Redesign', title: 'Website Redesign', body: 'Design files, briefs, and assets for the Q3 site redesign.' }
  ];

  activeCrumbKey = 'redesign';

  get crumbItems() {
    return this.crumbPages.map((page) => ({ ...page, current: page.key === this.activeCrumbKey }));
  }

  get activePage() {
    return this.crumbPages.find((page) => page.key === this.activeCrumbKey) ?? this.crumbPages[0];
  }

  // Decorative "#" links/buttons in these demo cards aren't real
  // navigation -- without this, a click follows href="#" and scrolls the
  // whole marketing page to top (same issue the dashboard's Search/Help
  // links had; see dashboardExample.ts).
  handleNoopClick(event: Event) {
    event.preventDefault();
  }

  // Each crumb is a real fandry-breadcrumb-item link (href="#" for this
  // demo, same reasoning as handleNoopClick above) -- clicking one swaps
  // which card renders below and which crumb reports aria-current="page",
  // without a real page navigation.
  handleCrumbClick(event: Event) {
    event.preventDefault();
    const key = (event.currentTarget as HTMLElement).dataset.key;
    if (key) {
      this.activeCrumbKey = key;
    }
  }
}
