import { createElement } from 'lwc';
import FdSidebar from '../sidebar';

describe('fandry-sidebar', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders a nav landmark with a default aria-label', () => {
    const element = createElement('fandry-sidebar', { is: FdSidebar });
    document.body.appendChild(element);

    const nav = element.shadowRoot!.querySelector('nav.sidebar')!;
    expect(nav.getAttribute('aria-label')).toBe('Sidebar');
  });

  it('applies a custom aria-label', () => {
    const element = createElement('fandry-sidebar', { is: FdSidebar });
    element.ariaLabel = 'Components';
    document.body.appendChild(element);

    const nav = element.shadowRoot!.querySelector('nav.sidebar')!;
    expect(nav.getAttribute('aria-label')).toBe('Components');
  });

  it('exposes a default slot for content', () => {
    const element = createElement('fandry-sidebar', { is: FdSidebar });
    document.body.appendChild(element);

    expect(element.shadowRoot!.querySelector('slot')).not.toBeNull();
  });
});
