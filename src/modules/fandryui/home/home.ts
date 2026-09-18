import { LightningElement } from 'lwc';

export default class Home extends LightningElement {
  // Light DOM -- so page-level classes in src/assets/styles/global.css
  // (e.g. fandry-container/fandry-grid, see layoutPatternsExample) can
  // actually reach markup composed directly in this template. A normal
  // Shadow DOM root here would block that global stylesheet from crossing
  // in at all, the same way it can't reach into any other section's own
  // shadow root (which is why dashboardExample.css/featureGrid.css each
  // carry their own local, scoped .container/.grid instead).
  static renderMode = 'light';
}
