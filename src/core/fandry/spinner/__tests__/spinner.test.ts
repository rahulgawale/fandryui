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

  it('takes its default label from messages', () => {
    const element = createElement('fandry-spinner', { is: FdSpinner });
    element.messages = { label: 'Chargement' };
    document.body.appendChild(element);

    expect(element.shadowRoot!.querySelector('span')!.getAttribute('aria-label')).toBe('Chargement');

    element.label = 'Enregistrement';
    return Promise.resolve().then(() => {
      expect(element.shadowRoot!.querySelector('span')!.getAttribute('aria-label')).toBe('Enregistrement');
    });
  });

  it('takes aria-label, which wins over label', () => {
    const element = createElement('fandry-spinner', { is: FdSpinner });
    Object.assign(element, { label: 'From label', ariaLabel: 'From aria-label' });
    document.body.appendChild(element);

    expect(element.shadowRoot!.querySelector('span')!.getAttribute('aria-label')).toBe('From aria-label');
  });
});
