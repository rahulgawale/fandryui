import { createElement } from 'lwc';
import FdText from '../text';
import TextHarness from './textHarness';

describe('fandry-text', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders with the default "p" as, size, and variant classes', () => {
    const element = createElement('fandry-text', { is: FdText });
    document.body.appendChild(element);

    const text = element.shadowRoot!.querySelector('[part~="base"]')!;
    expect(text.className).toBe('text text--p text--md text--default');
  });

  it.each([
    ['p', 'P'],
    ['span', 'SPAN'],
    ['div', 'DIV']
  ] as const)('as="%s" renders a real %s', (as, tag) => {
    const element = createElement('fandry-text', { is: FdText });
    element.as = as;
    document.body.appendChild(element);

    const text = element.shadowRoot!.querySelector('[part~="base"]')!;
    expect(text.tagName).toBe(tag);
    expect(text.hasAttribute('role')).toBe(false);
    expect(text.className).toBe(`text text--${as} text--md text--default`);
  });

  it.each(['section', undefined, 'SPAN'])('renders and styles an unknown as=%p like a <p>', (as) => {
    const element = createElement('fandry-text', { is: FdText });
    element.as = as as unknown as 'p';
    document.body.appendChild(element);

    const text = element.shadowRoot!.querySelector('[part~="base"]')!;
    expect(text.tagName).toBe('P');
    expect(text.className).toBe('text text--p text--md text--default');
  });

  it('applies the requested size class', () => {
    const element = createElement('fandry-text', { is: FdText });
    element.size = 'xs';
    document.body.appendChild(element);

    const text = element.shadowRoot!.querySelector('[part~="base"]')!;
    expect(text.className).toBe('text text--p text--xs text--default');
  });

  it('applies the requested variant class', () => {
    const element = createElement('fandry-text', { is: FdText });
    element.variant = 'muted';
    document.body.appendChild(element);

    const text = element.shadowRoot!.querySelector('[part~="base"]')!;
    expect(text.className).toBe('text text--p text--md text--muted');
  });

  it('exposes a default slot for content', () => {
    const element = createElement('fandry-text', { is: FdText });
    document.body.appendChild(element);

    const slot = element.shadowRoot!.querySelector('slot');
    expect(slot).not.toBeNull();
  });

  it('keeps projecting slotted content when as changes', async () => {
    const harness = createElement('text-harness', { is: TextHarness });
    document.body.appendChild(harness);
    await Promise.resolve();

    const text = harness.shadowRoot!.querySelector('fandry-text')!;
    for (const [as, tag] of [['span', 'SPAN'], ['div', 'DIV'], ['p', 'P']] as const) {
      harness.as = as;
      await Promise.resolve();

      const bases = text.shadowRoot!.querySelectorAll('[part~="base"]');
      expect(bases).toHaveLength(1);
      expect(bases[0].tagName).toBe(tag);
      const slots = text.shadowRoot!.querySelectorAll('slot');
      expect(slots).toHaveLength(1);
      expect(slots[0].assignedNodes()[0].textContent).toBe('Body copy');
    }
  });
});
