import { createElement } from 'lwc';
import FdSpinner from '../spinner';

describe('fandry-spinner', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders with the default "md" size class', () => {
    const element = createElement('fandry-spinner', { is: FdSpinner });
    document.body.appendChild(element);

    const spinner = element.shadowRoot!.querySelector('span')!;
    expect(spinner.className).toBe('spinner spinner--md');
  });

  it('applies the requested size class', () => {
    const element = createElement('fandry-spinner', { is: FdSpinner });
    element.size = 'lg';
    document.body.appendChild(element);

    const spinner = element.shadowRoot!.querySelector('span')!;
    expect(spinner.className).toBe('spinner spinner--lg');
  });

  it('exposes role="status" with a default accessible label', () => {
    const element = createElement('fandry-spinner', { is: FdSpinner });
    document.body.appendChild(element);

    const spinner = element.shadowRoot!.querySelector('[role="status"]')!;
    expect(spinner.getAttribute('aria-label')).toBe('Loading');
  });

  it('reflects a custom accessible label', () => {
    const element = createElement('fandry-spinner', { is: FdSpinner });
    element.label = 'Saving changes';
    document.body.appendChild(element);

    const spinner = element.shadowRoot!.querySelector('[role="status"]')!;
    expect(spinner.getAttribute('aria-label')).toBe('Saving changes');
  });
});

// aria-label, as on any element, names it too, and wins over `label`.
describe('fandry-spinner aria-label', () => {
  afterEach(() => {
    while (document.body.firstChild) document.body.removeChild(document.body.firstChild);
  });

  it('names it with aria-label over label', () => {
    const element = createElement('fandry-spinner', { is: FdSpinner });
    Object.assign(element, { label: 'From label', ariaLabel: 'From aria-label' });
    document.body.appendChild(element);

    for (const selector of ['span']) {
      expect(element.shadowRoot!.querySelector(selector)!.getAttribute('aria-label')).toBe('From aria-label');
    }
  });
});
