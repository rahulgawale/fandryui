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
const overlayOf = (element: HTMLElement) => element.shadowRoot!.querySelector('.overlay');
const cardOf = (element: HTMLElement) => element.shadowRoot!.querySelector('.card');
const settle = async () => {
  for (let i = 0; i < 4; i++) await Promise.resolve();
};

describe('fandry-loading-overlay', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('keeps an empty live region in the page while closed, and nothing else', () => {
    const element = create();

    expect(statusOf(element).textContent).toBe('');
    expect(statusOf(element).getAttribute('aria-live')).toBe('polite');
    expect(overlayOf(element)).toBeNull();
  });

  it('puts the label into that same region as text when it opens', async () => {
    const element = create();
    const status = statusOf(element);

    element.open = true;
    await settle();

    expect(statusOf(element)).toBe(status);
    expect(status.textContent).toBe('Loading');
    expect(overlayOf(element)!.className).toBe('overlay overlay--open');
  });

  it('announces a label the page slots in', async () => {
    const harness = createElement('slot-harness', { is: SlotHarness });
    document.body.appendChild(harness);
    await settle();

    expect(statusOf(harness.shadowRoot!.querySelector('fandry-loading-overlay')!).textContent).toBe('Saving template…');
  });

  it('empties the region when it closes', async () => {
    const element = create({ open: true });
    await settle();

    element.open = false;
    await settle();

    expect(statusOf(element).textContent).toBe('');
  });

  it('hides what it draws from assistive technology: the region speaks for it', () => {
    const element = create({ open: true });

    expect(overlayOf(element)!.getAttribute('aria-hidden')).toBe('true');
    expect(overlayOf(element)!.getAttribute('part')).toBe('backdrop');
    expect(element.shadowRoot!.querySelector('fandry-spinner')!.getAttribute('exportparts')).toBe('base: spinner');
  });

  it('does not take focus', () => {
    const button = document.createElement('button');
    document.body.appendChild(button);
    button.focus();

    create({ open: true });

    expect(document.activeElement).toBe(button);
  });

  it('covers the nearest positioned ancestor when contained', () => {
    expect(overlayOf(create({ contained: true, open: true }))!.classList.contains('overlay--contained')).toBe(true);
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
      expect(overlayOf(element)!.className).toBe('overlay overlay--closing');
    });

    it('removes the card once the exit animation finishes', async () => {
      const element = create({ open: true });

      element.open = false;
      await flush();
      await animations.finish();

      expect(overlayOf(element)).toBeNull();
    });

    it('reopening during the exit keeps the card', async () => {
      const element = create({ open: true });

      element.open = false;
      await flush();
      element.open = true;
      await animations.finish();

      expect(cardOf(element)).not.toBeNull();
      expect(overlayOf(element)!.className).toBe('overlay overlay--open');
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

      expect(overlayOf(element)).toBeNull();
    });

    it('plays its exit once it has appeared', async () => {
      const element = create({ open: true });
      entranceAt(400);

      element.open = false;
      await flush();

      expect(cardOf(element)).not.toBeNull();
      expect(overlayOf(element)!.className).toBe('overlay overlay--closing');
    });
  });
});
