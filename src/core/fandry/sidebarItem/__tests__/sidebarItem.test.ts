import { createElement } from 'lwc';
import FdSidebarItem from '../sidebarItem';

describe('fandry-sidebar-item', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders an anchor with the given href', () => {
    const element = createElement('fandry-sidebar-item', { is: FdSidebarItem });
    element.href = '/components/button';
    document.body.appendChild(element);

    const anchor = element.shadowRoot!.querySelector('a')!;
    expect(anchor.getAttribute('href')).toBe('/components/button');
    expect(anchor.className).toBe('item');
    expect(anchor.hasAttribute('aria-current')).toBe(false);
  });

  it('marks the active item with aria-current and a modifier class', () => {
    const element = createElement('fandry-sidebar-item', { is: FdSidebarItem });
    element.href = '/components/button';
    element.active = true;
    document.body.appendChild(element);

    const anchor = element.shadowRoot!.querySelector('a')!;
    expect(anchor.className).toBe('item item--active');
    expect(anchor.getAttribute('aria-current')).toBe('page');
  });

  it('does not let elementProps clobber href, and warns once about it', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const element = createElement('fandry-sidebar-item', { is: FdSidebarItem });
    element.href = '/components/button';
    element.elementProps = { href: '/hijacked' };
    document.body.appendChild(element);

    const anchor = element.shadowRoot!.querySelector('a')!;
    expect(anchor.getAttribute('href')).toBe('/components/button');
    expect(warnSpy).toHaveBeenCalledTimes(1);
    warnSpy.mockRestore();
  });

  it('puts the tab stop on a wrapper (Safari skips <a href> in plain Tab order) and forwards Enter to the anchor', () => {
    const element = createElement('fandry-sidebar-item', { is: FdSidebarItem });
    element.href = '/components/button';
    document.body.appendChild(element);

    const tabStop = element.shadowRoot!.querySelector('.tab-stop') as HTMLElement;
    const anchor = element.shadowRoot!.querySelector('a')!;
    expect(tabStop.tabIndex).toBe(0);
    expect(anchor.tabIndex).toBe(-1);

    let clicks = 0;
    anchor.addEventListener('click', (event) => {
      event.preventDefault();
      clicks += 1;
    });
    tabStop.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    expect(clicks).toBe(1);
  });

  it('carries the link role, name and aria-current on the tab stop and hides the anchor', () => {
    const element = createElement('fandry-sidebar-item', { is: FdSidebarItem });
    element.href = '/components/button';
    element.active = true;
    document.body.appendChild(element);

    const tabStop = element.shadowRoot!.querySelector('.tab-stop')!;
    const anchor = element.shadowRoot!.querySelector('a')!;
    expect(tabStop.getAttribute('role')).toBe('link');
    expect(tabStop.getAttribute('aria-current')).toBe('page');
    expect(tabStop.getAttribute('aria-labelledby')).toBe(anchor.getAttribute('id'));
    expect(anchor.getAttribute('aria-hidden')).toBe('true');
  });

  it('applies a consumer elementProps.tabIndex to the tab stop', () => {
    const element = createElement('fandry-sidebar-item', { is: FdSidebarItem });
    element.href = '/components/button';
    element.elementProps = { tabIndex: -1 };
    document.body.appendChild(element);

    const tabStop = element.shadowRoot!.querySelector('.tab-stop') as HTMLElement;
    expect(tabStop.tabIndex).toBe(-1);
  });
});
