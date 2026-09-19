import { createElement } from 'lwc';
import FdBreadcrumb from '../breadcrumb';
import BreadcrumbHarness from './breadcrumbHarness';

const flush = () => Promise.resolve();

describe('fandry-breadcrumb', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders a nav landmark defaulting aria-label to "Breadcrumb"', () => {
    const element = createElement('fandry-breadcrumb', { is: FdBreadcrumb });
    document.body.appendChild(element);

    expect(element.shadowRoot!.querySelector('nav')!.getAttribute('aria-label')).toBe('Breadcrumb');
  });

  it('reflects a custom ariaLabel onto the nav landmark', () => {
    const element = createElement('fandry-breadcrumb', { is: FdBreadcrumb });
    element.ariaLabel = 'Trail';
    document.body.appendChild(element);

    expect(element.shadowRoot!.querySelector('nav')!.getAttribute('aria-label')).toBe('Trail');
  });

  it('marks only the first slotted crumb as first', async () => {
    // Real slotted markup, not a plain `document.createElement` +
    // `appendChild` from test code -- confirmed live that this component's
    // own `this.querySelectorAll('fandry-breadcrumb-item')` doesn't see
    // children appended that way in this project's test environment, the
    // same gap fandry-popover's own popoverTriggerHarness documents for
    // slot distribution.
    const harness = createElement('breadcrumb-harness', { is: BreadcrumbHarness });
    document.body.appendChild(harness);
    await flush();

    const one = harness.shadowRoot!.querySelector('.one') as HTMLElement & { first?: boolean };
    const two = harness.shadowRoot!.querySelector('.two') as HTMLElement & { first?: boolean };
    const three = harness.shadowRoot!.querySelector('.three') as HTMLElement & { first?: boolean };

    expect(one.first).toBe(true);
    expect(two.first).toBe(false);
    expect(three.first).toBe(false);
  });
});
