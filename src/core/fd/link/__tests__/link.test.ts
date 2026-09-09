import { createElement } from 'lwc';
import FdLink from '../link';

describe('fd-link', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders with the default variant class and reflects href', () => {
    const element = createElement('fd-link', { is: FdLink });
    element.href = 'https://example.com';
    document.body.appendChild(element);

    const anchor = element.shadowRoot!.querySelector('a')!;
    expect(anchor.className).toBe('link link--default');
    expect(anchor.getAttribute('href')).toBe('https://example.com');
  });

  it('applies the muted variant class', () => {
    const element = createElement('fd-link', { is: FdLink });
    element.variant = 'muted';
    document.body.appendChild(element);

    const anchor = element.shadowRoot!.querySelector('a')!;
    expect(anchor.className).toBe('link link--muted');
  });

  it('defaults target to "_self" and sets no rel', () => {
    const element = createElement('fd-link', { is: FdLink });
    element.href = 'https://example.com';
    document.body.appendChild(element);

    const anchor = element.shadowRoot!.querySelector('a')!;
    expect(anchor.getAttribute('target')).toBe('_self');
    expect(anchor.hasAttribute('rel')).toBe(false);
  });

  it('auto-adds rel="noopener noreferrer" for target="_blank"', () => {
    const element = createElement('fd-link', { is: FdLink });
    element.href = 'https://example.com';
    element.target = '_blank';
    document.body.appendChild(element);

    const anchor = element.shadowRoot!.querySelector('a')!;
    expect(anchor.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('lets a consumer override rel even when target="_blank"', () => {
    const element = createElement('fd-link', { is: FdLink });
    element.target = '_blank';
    element.rel = 'nofollow';
    document.body.appendChild(element);

    const anchor = element.shadowRoot!.querySelector('a')!;
    expect(anchor.getAttribute('rel')).toBe('nofollow');
  });

  it('removes href and sets aria-disabled when disabled', () => {
    const element = createElement('fd-link', { is: FdLink });
    element.href = 'https://example.com';
    element.disabled = true;
    document.body.appendChild(element);

    const anchor = element.shadowRoot!.querySelector('a')!;
    expect(anchor.hasAttribute('href')).toBe(false);
    expect(anchor.getAttribute('aria-disabled')).toBe('true');
    expect(anchor.className).toContain('link--disabled');
  });

  it('lets a consumer extend elementProps (e.g. title) via lwc:spread', () => {
    const element = createElement('fd-link', { is: FdLink });
    element.elementProps = { title: 'Opens documentation' };
    document.body.appendChild(element);

    const anchor = element.shadowRoot!.querySelector('a')!;
    expect(anchor.title).toBe('Opens documentation');
  });

  it('defaults to tabIndex 0 so Safari includes it in the Tab order without Full Keyboard Access', () => {
    const element = createElement('fd-link', { is: FdLink });
    element.href = 'https://example.com';
    document.body.appendChild(element);

    const anchor = element.shadowRoot!.querySelector('a')!;
    expect(anchor.tabIndex).toBe(0);
  });

  it('forces tabIndex to -1 while disabled, even if a consumer sets their own elementProps.tabIndex', () => {
    const element = createElement('fd-link', { is: FdLink });
    element.href = 'https://example.com';
    element.disabled = true;
    element.elementProps = { tabIndex: 3 };
    document.body.appendChild(element);

    const anchor = element.shadowRoot!.querySelector('a')!;
    expect(anchor.tabIndex).toBe(-1);
  });

  it('does not let elementProps clobber href, and warns once about it', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const element = createElement('fd-link', { is: FdLink });
    element.href = 'https://example.com';
    element.elementProps = { href: 'https://evil.example' };
    document.body.appendChild(element);

    const anchor = element.shadowRoot!.querySelector('a')!;
    expect(anchor.getAttribute('href')).toBe('https://example.com');
    expect(warnSpy).toHaveBeenCalledTimes(1);
    warnSpy.mockRestore();
  });
});
