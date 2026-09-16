import { createElement } from 'lwc';
import FdText from '../text';

describe('fd-text', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders with the default "p" as, size, and variant classes', () => {
    const element = createElement('fd-text', { is: FdText });
    document.body.appendChild(element);

    const text = element.shadowRoot!.querySelector('div')!;
    expect(text.className).toBe('text text--p text--md text--default');
  });

  it('sets role="paragraph" for the default "p" as', () => {
    const element = createElement('fd-text', { is: FdText });
    document.body.appendChild(element);

    const text = element.shadowRoot!.querySelector('div')!;
    expect(text.getAttribute('role')).toBe('paragraph');
  });

  it.each(['span', 'div'] as const)('applies no role for as="%s"', (as) => {
    const element = createElement('fd-text', { is: FdText });
    element.as = as;
    document.body.appendChild(element);

    const text = element.shadowRoot!.querySelector('div')!;
    expect(text.hasAttribute('role')).toBe(false);
    expect(text.className).toBe(`text text--${as} text--md text--default`);
  });

  it('applies the requested size class', () => {
    const element = createElement('fd-text', { is: FdText });
    element.size = 'xs';
    document.body.appendChild(element);

    const text = element.shadowRoot!.querySelector('div')!;
    expect(text.className).toBe('text text--p text--xs text--default');
  });

  it('applies the requested variant class', () => {
    const element = createElement('fd-text', { is: FdText });
    element.variant = 'muted';
    document.body.appendChild(element);

    const text = element.shadowRoot!.querySelector('div')!;
    expect(text.className).toBe('text text--p text--md text--muted');
  });

  it('exposes a default slot for content', () => {
    const element = createElement('fd-text', { is: FdText });
    document.body.appendChild(element);

    const slot = element.shadowRoot!.querySelector('slot');
    expect(slot).not.toBeNull();
  });
});
