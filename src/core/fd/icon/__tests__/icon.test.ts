import { createElement } from 'lwc';
import FdIcon from '../icon';

describe('fd-icon', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('defaults to decorative: aria-hidden, no role, no aria-label', () => {
    const element = createElement('fd-icon', { is: FdIcon });
    document.body.appendChild(element);

    const span = element.shadowRoot!.querySelector('span')!;
    expect(span.getAttribute('aria-hidden')).toBe('true');
    expect(span.hasAttribute('role')).toBe(false);
    expect(span.hasAttribute('aria-label')).toBe(false);
  });

  it('exposes an accessible name and drops aria-hidden when label is set', () => {
    const element = createElement('fd-icon', { is: FdIcon });
    element.label = 'Warning';
    document.body.appendChild(element);

    const span = element.shadowRoot!.querySelector('span')!;
    expect(span.getAttribute('role')).toBe('img');
    expect(span.getAttribute('aria-label')).toBe('Warning');
    expect(span.hasAttribute('aria-hidden')).toBe(false);
  });

  it('defaults to the md size class', () => {
    const element = createElement('fd-icon', { is: FdIcon });
    document.body.appendChild(element);

    const span = element.shadowRoot!.querySelector('span')!;
    expect(span.className).toBe('icon icon--md');
  });

  it('reflects the size prop onto the class', () => {
    const element = createElement('fd-icon', { is: FdIcon });
    element.size = 'lg';
    document.body.appendChild(element);

    const span = element.shadowRoot!.querySelector('span')!;
    expect(span.className).toBe('icon icon--lg');
  });
});
