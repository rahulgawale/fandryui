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
  ] as const)('renders a real <%s> for as="%s"', (as, tag) => {
    const element = createElement('fandry-text', { is: FdText });
    element.as = as;
    document.body.appendChild(element);

    const text = element.shadowRoot!.querySelector('[part~="base"]')!;
    expect(text.tagName).toBe(tag);
    expect(text.hasAttribute('role')).toBe(false);
    expect(text.className).toBe(`text text--${as} text--md text--default`);
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

    harness.as = 'span';
    await Promise.resolve();

    const text = harness.shadowRoot!.querySelector('fandry-text')!;
    expect(text.shadowRoot!.querySelector('[part~="base"]')!.tagName).toBe('SPAN');
    const slot = text.shadowRoot!.querySelector('slot') as HTMLSlotElement;
    expect(slot.assignedNodes()[0].textContent).toBe('Body copy');
  });
});
