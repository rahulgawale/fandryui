import { createElement } from 'lwc';
import FdBreadcrumbItem from '../breadcrumbItem';

describe('fandry-breadcrumb-item', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders a real link when href is set and not current', () => {
    const element = createElement('fandry-breadcrumb-item', { is: FdBreadcrumbItem });
    element.href = '/components';
    document.body.appendChild(element);

    const link = element.shadowRoot!.querySelector('a.link')!;
    expect(link.getAttribute('href')).toBe('/components');
    expect(link.hasAttribute('aria-current')).toBe(false);
  });

  it('renders no href, and aria-current="page", for the current crumb even with an href', () => {
    const element = createElement('fandry-breadcrumb-item', { is: FdBreadcrumbItem });
    element.href = '/components/breadcrumb';
    element.current = true;
    document.body.appendChild(element);

    const link = element.shadowRoot!.querySelector('a.link')!;
    expect(link.hasAttribute('href')).toBe(false);
    expect(link.getAttribute('aria-current')).toBe('page');
  });

  it('renders no href for a crumb with nowhere to go', () => {
    const element = createElement('fandry-breadcrumb-item', { is: FdBreadcrumbItem });
    document.body.appendChild(element);

    const link = element.shadowRoot!.querySelector('a.link')!;
    expect(link.hasAttribute('href')).toBe(false);
  });

  it('hides its own separator when first, and shows one otherwise', () => {
    const first = createElement('fandry-breadcrumb-item', { is: FdBreadcrumbItem });
    first.first = true;
    document.body.appendChild(first);
    expect(first.shadowRoot!.querySelector('.separator')).toBeNull();

    const rest = createElement('fandry-breadcrumb-item', { is: FdBreadcrumbItem });
    document.body.appendChild(rest);
    expect(rest.shadowRoot!.querySelector('.separator')).not.toBeNull();
  });
});
