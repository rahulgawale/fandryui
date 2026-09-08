import { createElement } from 'lwc';
import FdSpinner from '../spinner';

describe('fd-spinner', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders with the default "md" size class', () => {
    const element = createElement('fd-spinner', { is: FdSpinner });
    document.body.appendChild(element);

    const spinner = element.shadowRoot!.querySelector('span')!;
    expect(spinner.className).toBe('spinner spinner--md');
  });

  it('applies the requested size class', () => {
    const element = createElement('fd-spinner', { is: FdSpinner });
    element.size = 'lg';
    document.body.appendChild(element);

    const spinner = element.shadowRoot!.querySelector('span')!;
    expect(spinner.className).toBe('spinner spinner--lg');
  });

  it('exposes role="status" with a default accessible label', () => {
    const element = createElement('fd-spinner', { is: FdSpinner });
    document.body.appendChild(element);

    const spinner = element.shadowRoot!.querySelector('[role="status"]')!;
    expect(spinner.getAttribute('aria-label')).toBe('Loading');
  });

  it('reflects a custom accessible label', () => {
    const element = createElement('fd-spinner', { is: FdSpinner });
    element.label = 'Saving changes';
    document.body.appendChild(element);

    const spinner = element.shadowRoot!.querySelector('[role="status"]')!;
    expect(spinner.getAttribute('aria-label')).toBe('Saving changes');
  });
});
