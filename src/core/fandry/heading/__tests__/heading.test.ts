import { createElement } from 'lwc';
import FdHeading from '../heading';
import HeadingHarness from './headingHarness';

describe('fandry-heading', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders level 2 by default', () => {
    const element = createElement('fandry-heading', { is: FdHeading });
    document.body.appendChild(element);

    const heading = element.shadowRoot!.querySelector('[part="base"]')!;
    expect(heading).not.toBeNull();
    expect(heading.tagName).toBe('H2');
    expect(heading.className).toBe('heading heading--2');
  });

  it.each([1, 2, 3, 4, 5, 6] as const)('renders an h%i for that level', (level) => {
    const element = createElement('fandry-heading', { is: FdHeading });
    element.level = level;
    document.body.appendChild(element);

    const heading = element.shadowRoot!.querySelector('[part="base"]')!;
    expect(heading.tagName).toBe(`H${level}`);
    expect(heading.className).toBe(`heading heading--${level}`);
  });

  it('renders exactly one heading element', () => {
    const element = createElement('fandry-heading', { is: FdHeading });
    element.level = 3;
    document.body.appendChild(element);

    const headings = element.shadowRoot!.querySelectorAll('[part="base"]');
    expect(headings.length).toBe(1);
  });

  it('exposes a default slot for content', () => {
    const element = createElement('fandry-heading', { is: FdHeading });
    document.body.appendChild(element);

    const slot = element.shadowRoot!.querySelector('slot');
    expect(slot).not.toBeNull();
  });

  it('projects slotted content into the heading', async () => {
    const harness = createElement('heading-harness', { is: HeadingHarness });
    document.body.appendChild(harness);
    await Promise.resolve();

    // Reading `.textContent` off an element inside fandry-heading's own
    // shadow root doesn't reflect synthetic-shadow slot projection under
    // this project's jsdom test environment (confirmed: it comes back
    // empty even when projection genuinely works) -- `assignedNodes()` on
    // the real `<slot>` element is what actually reflects assignment.
    const heading = harness.shadowRoot!.querySelector('fandry-heading')!;
    const slot = heading.shadowRoot!.querySelector('slot') as HTMLSlotElement;
    const assigned = slot.assignedNodes();
    expect(assigned).toHaveLength(1);
    expect(assigned[0].textContent).toBe('Page title');
  });

  it('keeps projecting slotted content when the level changes', async () => {
    const harness = createElement('heading-harness', { is: HeadingHarness });
    document.body.appendChild(harness);
    await Promise.resolve();

    harness.level = 1;
    await Promise.resolve();

    const heading = harness.shadowRoot!.querySelector('fandry-heading')!;
    expect(heading.shadowRoot!.querySelector('[part="base"]')!.tagName).toBe('H1');
    const slot = heading.shadowRoot!.querySelector('slot') as HTMLSlotElement;
    expect(slot.assignedNodes()[0].textContent).toBe('Page title');
  });
});
