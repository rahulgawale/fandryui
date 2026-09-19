import { createElement } from 'lwc';
import FdLink from '../link';

describe('fandry-link', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders with the default variant class and reflects href', () => {
    const element = createElement('fandry-link', { is: FdLink });
    element.href = 'https://example.com';
    document.body.appendChild(element);

    const anchor = element.shadowRoot!.querySelector('a')!;
    expect(anchor.className).toBe('link link--default');
    expect(anchor.getAttribute('href')).toBe('https://example.com');
  });

  it('applies the muted variant class', () => {
    const element = createElement('fandry-link', { is: FdLink });
    element.variant = 'muted';
    document.body.appendChild(element);

    const anchor = element.shadowRoot!.querySelector('a')!;
    expect(anchor.className).toBe('link link--muted');
  });

  it('defaults target to "_self" and sets no rel', () => {
    const element = createElement('fandry-link', { is: FdLink });
    element.href = 'https://example.com';
    document.body.appendChild(element);

    const anchor = element.shadowRoot!.querySelector('a')!;
    expect(anchor.getAttribute('target')).toBe('_self');
    expect(anchor.hasAttribute('rel')).toBe(false);
  });

  it('auto-adds rel="noopener noreferrer" for target="_blank"', () => {
    const element = createElement('fandry-link', { is: FdLink });
    element.href = 'https://example.com';
    element.target = '_blank';
    document.body.appendChild(element);

    const anchor = element.shadowRoot!.querySelector('a')!;
    expect(anchor.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('lets a consumer override rel even when target="_blank"', () => {
    const element = createElement('fandry-link', { is: FdLink });
    element.target = '_blank';
    element.rel = 'nofollow';
    document.body.appendChild(element);

    const anchor = element.shadowRoot!.querySelector('a')!;
    expect(anchor.getAttribute('rel')).toBe('nofollow');
  });

  it('removes href and sets aria-disabled when disabled', () => {
    const element = createElement('fandry-link', { is: FdLink });
    element.href = 'https://example.com';
    element.disabled = true;
    document.body.appendChild(element);

    const anchor = element.shadowRoot!.querySelector('a')!;
    expect(anchor.hasAttribute('href')).toBe(false);
    expect(anchor.getAttribute('aria-disabled')).toBe('true');
    expect(anchor.className).toContain('link--disabled');
  });

  it('lets a consumer extend elementProps (e.g. title) via lwc:spread', () => {
    const element = createElement('fandry-link', { is: FdLink });
    element.elementProps = { title: 'Opens documentation' };
    document.body.appendChild(element);

    const anchor = element.shadowRoot!.querySelector('a')!;
    expect(anchor.title).toBe('Opens documentation');
  });

  it('puts the tab stop on a wrapper, since Safari skips <a href> in plain Tab order whatever its tabindex, and takes the anchor itself out of the order', () => {
    const element = createElement('fandry-link', { is: FdLink });
    element.href = 'https://example.com';
    document.body.appendChild(element);

    const tabStop = element.shadowRoot!.querySelector('.tab-stop') as HTMLElement;
    const anchor = element.shadowRoot!.querySelector('a')!;
    expect(tabStop.tabIndex).toBe(0);
    expect(anchor.tabIndex).toBe(-1);
  });

  it('forwards Enter on the tab stop to the anchor as a click, keeping modifier keys, and ignores other keys', () => {
    const element = createElement('fandry-link', { is: FdLink });
    element.href = 'https://example.com';
    document.body.appendChild(element);

    const anchor = element.shadowRoot!.querySelector('a')!;
    const clicks: MouseEvent[] = [];
    anchor.addEventListener('click', (event) => {
      event.preventDefault();
      clicks.push(event as MouseEvent);
    });
    const tabStop = element.shadowRoot!.querySelector('.tab-stop')!;
    tabStop.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', bubbles: true }));
    expect(clicks).toHaveLength(0);
    tabStop.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', metaKey: true, bubbles: true }));
    expect(clicks).toHaveLength(1);
    expect(clicks[0].metaKey).toBe(true);
    expect(clicks[0].shiftKey).toBe(false);
  });

  it('exposes the link role and name on the tab stop and hides the anchor from assistive tech', () => {
    const element = createElement('fandry-link', { is: FdLink });
    element.href = 'https://example.com';
    document.body.appendChild(element);

    const tabStop = element.shadowRoot!.querySelector('.tab-stop')!;
    const anchor = element.shadowRoot!.querySelector('a')!;
    expect(tabStop.getAttribute('role')).toBe('link');
    expect(anchor.getAttribute('aria-hidden')).toBe('true');
    expect(tabStop.getAttribute('aria-labelledby')).toBe(anchor.getAttribute('id'));
  });

  it('mirrors disabled onto the tab stop and drops its tab stop', () => {
    const element = createElement('fandry-link', { is: FdLink });
    element.href = 'https://example.com';
    element.disabled = true;
    document.body.appendChild(element);

    const tabStop = element.shadowRoot!.querySelector('.tab-stop')!;
    expect(tabStop.getAttribute('aria-disabled')).toBe('true');
    expect(tabStop.hasAttribute('tabindex')).toBe(false);
  });

  it('applies a consumer elementProps.tabIndex to the tab stop, not the anchor, without warning', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const element = createElement('fandry-link', { is: FdLink });
    element.href = 'https://example.com';
    element.elementProps = { tabIndex: -1 };
    document.body.appendChild(element);

    const tabStop = element.shadowRoot!.querySelector('.tab-stop') as HTMLElement;
    const anchor = element.shadowRoot!.querySelector('a')!;
    expect(tabStop.tabIndex).toBe(-1);
    expect(anchor.tabIndex).toBe(-1);
    expect(warnSpy).not.toHaveBeenCalled();
    warnSpy.mockRestore();
  });

  it('does not let elementProps clobber href, and warns once about it', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const element = createElement('fandry-link', { is: FdLink });
    element.href = 'https://example.com';
    element.elementProps = { href: 'https://evil.example' };
    document.body.appendChild(element);

    const anchor = element.shadowRoot!.querySelector('a')!;
    expect(anchor.getAttribute('href')).toBe('https://example.com');
    expect(warnSpy).toHaveBeenCalledTimes(1);
    warnSpy.mockRestore();
  });
});
