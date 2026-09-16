import { LightningElement } from 'lwc';

export default class ExampleGallery extends LightningElement {
  // All 10 patterns below live in this one file -- a single link to it,
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

  // Decorative "#" links/buttons in these demo cards aren't real
  // navigation -- without this, a click follows href="#" and scrolls the
  // whole marketing page to top (same issue the dashboard's Search/Help
  // links had; see dashboardExample.ts).
  handleNoopClick(event: Event) {
    event.preventDefault();
  }
}
