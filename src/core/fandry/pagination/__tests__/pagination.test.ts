import { createElement } from 'lwc';
import FdPagination from '../pagination';

describe('fandry-pagination', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders neither link when no hrefs are provided', () => {
    const element = createElement('fandry-pagination', { is: FdPagination });
    document.body.appendChild(element);

    expect(element.shadowRoot!.querySelectorAll('a').length).toBe(0);
  });

  it('renders a previous link when previousHref is set', () => {
    const element = createElement('fandry-pagination', { is: FdPagination });
    element.previousHref = '/components/badge';
    element.previousLabel = 'Badge';
    document.body.appendChild(element);

    const previous = element.shadowRoot!.querySelector('a.link--previous')!;
    expect(previous.getAttribute('href')).toBe('/components/badge');
    expect(previous.querySelector('.title')!.textContent).toBe('Badge');
    expect(element.shadowRoot!.querySelector('a.link--next')).toBeNull();
  });

  it('renders a next link when nextHref is set', () => {
    const element = createElement('fandry-pagination', { is: FdPagination });
    element.nextHref = '/components/card';
    element.nextLabel = 'Card';
    document.body.appendChild(element);

    const next = element.shadowRoot!.querySelector('a.link--next')!;
    expect(next.getAttribute('href')).toBe('/components/card');
    expect(next.querySelector('.title')!.textContent).toBe('Card');
    expect(element.shadowRoot!.querySelector('a.link--previous')).toBeNull();
  });

  it('renders both links when both hrefs are provided', () => {
    const element = createElement('fandry-pagination', { is: FdPagination });
    element.previousHref = '/components/badge';
    element.previousLabel = 'Badge';
    element.nextHref = '/components/card';
    element.nextLabel = 'Card';
    document.body.appendChild(element);

    expect(element.shadowRoot!.querySelectorAll('a').length).toBe(2);
  });
});
