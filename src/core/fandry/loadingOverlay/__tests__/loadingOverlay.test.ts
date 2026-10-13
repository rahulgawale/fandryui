import { createElement } from 'lwc';
import FdLoadingOverlay from '../loadingOverlay';
import SlotHarness from './slotHarness';
import { mockAnimations, AnimationMock } from '../../motion/__tests__/animationMock';

const flush = () => Promise.resolve();

type Overlay = HTMLElement & { open: boolean; contained: boolean };

const create = (props: Partial<Overlay> = {}): Overlay => {
  const element = createElement('fandry-loading-overlay', { is: FdLoadingOverlay }) as unknown as Overlay;
  Object.assign(element, props);
  document.body.appendChild(element);
  return element;
};
const statusOf = (element: HTMLElement) => element.shadowRoot!.querySelector('[role="status"]')!;
const cardOf = (element: HTMLElement) => element.shadowRoot!.querySelector('.card');

describe('fandry-loading-overlay', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('keeps an empty status region in the page while closed', () => {
    const element = create();

    expect(statusOf(element).className).toBe('overlay');
    expect(cardOf(element)).toBeNull();
  });

  it('is the backdrop part only while it shows', async () => {
    const element = create();
    expect(statusOf(element).hasAttribute('part')).toBe(false);

    element.open = true;
    await flush();
    expect(statusOf(element).getAttribute('part')).toBe('backdrop');
  });

  it('puts the card inside that same region when it opens', async () => {
    const element = create();
    const status = statusOf(element);

    element.open = true;
    await flush();

    expect(statusOf(element)).toBe(status);
    expect(status.classList.contains('overlay--open')).toBe(true);
    expect(status.contains(cardOf(element))).toBe(true);
  });

  it('says "Loading" until a page slots its own label', () => {
    const element = create({ open: true });

    expect(element.shadowRoot!.querySelector('[part="label"] slot')!.textContent).toBe('Loading');

    const harness = createElement('slot-harness', { is: SlotHarness });
    document.body.appendChild(harness);
    const slot = harness.shadowRoot!.querySelector('fandry-loading-overlay')!.shadowRoot!.querySelector('slot')!;
    expect(slot.assignedNodes()[0].textContent).toBe('Saving template…');
  });

  it('hides its spinner from assistive technology: the region reads the label', () => {
    const spinner = create({ open: true }).shadowRoot!.querySelector('fandry-spinner')!;

    expect(spinner.getAttribute('aria-hidden')).toBe('true');
    expect(spinner.getAttribute('exportparts')).toBe('base: spinner');
  });

  it('does not take focus', () => {
    const button = document.createElement('button');
    document.body.appendChild(button);
    button.focus();

    create({ open: true });

    expect(document.activeElement).toBe(button);
  });

  it('covers the nearest positioned ancestor when contained', () => {
    expect(statusOf(create({ contained: true })).classList.contains('overlay--contained')).toBe(true);
  });

  describe('exit lifecycle', () => {
    let animations: AnimationMock;

    beforeEach(() => {
      animations = mockAnimations();
    });

    afterEach(() => {
      animations.restore();
    });

    it('stays mounted, marked closing, while its exit animation plays', async () => {
      const element = create({ open: true });

      element.open = false;
      await flush();

      expect(cardOf(element)).not.toBeNull();
      expect(statusOf(element).className).toBe('overlay overlay--closing');
    });

    it('removes the card once the exit animation finishes', async () => {
      const element = create({ open: true });

      element.open = false;
      await flush();
      await animations.finish();

      expect(cardOf(element)).toBeNull();
      expect(statusOf(element).className).toBe('overlay');
    });

    it('reopening during the exit keeps the card', async () => {
      const element = create({ open: true });

      element.open = false;
      await flush();
      element.open = true;
      await animations.finish();

      expect(cardOf(element)).not.toBeNull();
      expect(statusOf(element).className).toBe('overlay overlay--open');
    });
  });

  /* The delay is the entrance animation's own (--fd-loading-overlay-delay),
     so "not shown yet" is an entrance that hasn't reached it. */
  describe('closed within the delay', () => {
    const original = Element.prototype.getAnimations;
    const entranceAt = (currentTime: number) => {
      Element.prototype.getAnimations = () =>
        [{ currentTime, effect: { getComputedTiming: () => ({ delay: 150 }) }, finished: new Promise(() => {}) }] as unknown as Animation[];
    };

    afterEach(() => {
      Element.prototype.getAnimations = original;
    });

    it('is removed at once, with no exit to play', async () => {
      const element = create({ open: true });
      entranceAt(100);

      element.open = false;
      await flush();

      expect(cardOf(element)).toBeNull();
      expect(statusOf(element).className).toBe('overlay');
    });

    it('plays its exit once it has appeared', async () => {
      const element = create({ open: true });
      entranceAt(400);

      element.open = false;
      await flush();

      expect(cardOf(element)).not.toBeNull();
      expect(statusOf(element).className).toBe('overlay overlay--closing');
    });
  });
});
