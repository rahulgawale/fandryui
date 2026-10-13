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
// The label is announced on a timer: the entrance delay, 150ms at the least.
const announced = async () => {
  await settle();
  await new Promise((resolve) => setTimeout(resolve, 170));
  await settle();
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
    await announced();

    expect(statusOf(element)).toBe(status);
    expect(status.textContent).toBe('Loading');
    expect(overlayOf(element)!.className).toBe('overlay overlay--open');
  });

  it('announces a label the page slots in', async () => {
    const harness = createElement('slot-harness', { is: SlotHarness });
    document.body.appendChild(harness);
    await announced();

    expect(statusOf(harness.shadowRoot!.querySelector('fandry-loading-overlay')!).textContent).toBe('Saving template…');
  });

  it('empties the region when it closes', async () => {
    const element = create({ open: true });
    await announced();

    element.open = false;
    await settle();

    expect(statusOf(element).textContent).toBe('');
  });

  it('does not announce at the instant it opens, even with no entrance delay', async () => {
    const element = create({ open: true });
    await settle();
    await new Promise((resolve) => setTimeout(resolve, 20));

    expect(statusOf(element).textContent).toBe('');
  });

  it('says nothing when it closes before it was announced', async () => {
    const element = create({ open: true });
    await settle();

    element.open = false;
    await announced();

    expect(statusOf(element).textContent).toBe('');
  });

  describe('keyboard', () => {
    const press = (init: KeyboardEventInit, target: EventTarget = document.body) => {
      const event = new KeyboardEvent('keydown', { bubbles: true, cancelable: true, composed: true, ...init });
      target.dispatchEvent(event);
      return event.defaultPrevented;
    };

    it('blocks Tab, Enter and Space while open, and nothing once closed', async () => {
      const element = create();
      expect(press({ key: 'Tab' })).toBe(false);

      element.open = true;
      await settle();
      expect(press({ key: 'Tab' })).toBe(true);
      expect(press({ key: 'Enter' })).toBe(true);
      expect(press({ key: ' ' })).toBe(true);

      element.open = false;
      await settle();
      expect(press({ key: 'Tab' })).toBe(false);
    });

    it('keeps blocked keys from the page\'s own handlers', async () => {
      create({ open: true });
      await settle();
      const handler = jest.fn();
      document.body.addEventListener('keydown', handler);

      press({ key: 'Escape' });

      expect(handler).not.toHaveBeenCalled();
      document.body.removeEventListener('keydown', handler);
    });

    it('lets browser shortcuts through', async () => {
      create({ open: true });
      await settle();

      expect(press({ key: 'r', metaKey: true })).toBe(false);
      expect(press({ key: 'F5' })).toBe(false);
    });

    it('lets Tab leave a contained overlay\'s panel, and blocks the rest', async () => {
      create({ open: true, contained: true });
      await settle();

      expect(press({ key: 'Tab' })).toBe(false);
      expect(press({ key: 'Enter' })).toBe(true);
    });

    it('stops blocking when it is removed while open', async () => {
      const element = create({ open: true });
      await settle();

      document.body.removeChild(element);

      expect(press({ key: 'Tab' })).toBe(false);
    });
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
