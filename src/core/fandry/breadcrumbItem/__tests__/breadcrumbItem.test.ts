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

  it('makes a linked crumb a tab stop with the link role, and leaves plain-text crumbs alone', () => {
    const linked = createElement('fandry-breadcrumb-item', { is: FdBreadcrumbItem });
    linked.href = '/a';
    document.body.appendChild(linked);
    const tabStop = linked.shadowRoot!.querySelector('.tab-stop') as HTMLElement;
    const anchor = linked.shadowRoot!.querySelector('a')!;
    expect(tabStop.tabIndex).toBe(0);
    expect(tabStop.getAttribute('role')).toBe('link');
    expect(anchor.tabIndex).toBe(-1);
    expect(anchor.getAttribute('aria-hidden')).toBe('true');

    const current = createElement('fandry-breadcrumb-item', { is: FdBreadcrumbItem });
    current.href = '/b';
    current.current = true;
    document.body.appendChild(current);
    const currentTabStop = current.shadowRoot!.querySelector('.tab-stop')!;
    const currentAnchor = current.shadowRoot!.querySelector('a')!;
    expect(currentTabStop.hasAttribute('tabindex')).toBe(false);
    expect(currentTabStop.hasAttribute('role')).toBe(false);
    expect(currentAnchor.hasAttribute('aria-hidden')).toBe(false);
    expect(currentAnchor.getAttribute('aria-current')).toBe('page');
  });
});
