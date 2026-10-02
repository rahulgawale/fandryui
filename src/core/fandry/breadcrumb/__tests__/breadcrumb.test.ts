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

  it('takes the landmark name from messages', () => {
    const element = createElement('fandry-breadcrumb', { is: FdBreadcrumb });
    element.messages = { label: "Fil d'Ariane" };
    document.body.appendChild(element);

    expect(element.shadowRoot!.querySelector('nav')!.getAttribute('aria-label')).toBe("Fil d'Ariane");
  });

  /* ariaLabel is deprecated in favor of messages.label but keeps working,
     and wins when both are set. */
  it('still reflects a custom ariaLabel onto the nav landmark', () => {
    const element = createElement('fandry-breadcrumb', { is: FdBreadcrumb });
    element.ariaLabel = 'Trail';
    element.messages = { label: "Fil d'Ariane" };
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
