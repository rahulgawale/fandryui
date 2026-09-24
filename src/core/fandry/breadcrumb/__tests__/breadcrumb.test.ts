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

  /* Each crumb hides its own leading separator from its own position
     (:host(:first-child)), so the breadcrumb sets nothing on its items. */
  it('leaves its slotted crumbs alone', async () => {
    const harness = createElement('breadcrumb-harness', { is: BreadcrumbHarness });
    document.body.appendChild(harness);
    await flush();

    for (const name of ['.one', '.two', '.three']) {
      const crumb = harness.shadowRoot!.querySelector(name)!;
      expect('first' in crumb).toBe(false);
      expect(crumb.shadowRoot!.querySelector('.separator')).not.toBeNull();
    }
  });
});
