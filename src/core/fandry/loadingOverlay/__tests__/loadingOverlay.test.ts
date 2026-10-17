import { createElement } from 'lwc';
import FdLoadingOverlay from '../loadingOverlay';
import { isBrowserShortcut } from 'fandry/loadingOverlayState';
import SlotHarness from './slotHarness';
import ContentHarness from './contentHarness';
import QuietHarness from './quietHarness';
import { mockAnimations, AnimationMock } from '../../motion/__tests__/animationMock';

const flush = () => Promise.resolve();
const settle = async () => {
  for (let i = 0; i < 4; i++) await Promise.resolve();
};

type Overlay = HTMLElement & { open: boolean; contained: boolean; label: string; messages: { label?: string } };

const create = (props: Partial<Overlay> = {}, parent: Node = document.body): Overlay => {
  const element = createElement('fandry-loading-overlay', { is: FdLoadingOverlay }) as unknown as Overlay;
  Object.assign(element, props);
  parent.appendChild(element);
  return element;
};
const statusOf = (element: HTMLElement) => element.shadowRoot!.querySelector('[role="status"]')!;
const overlayOf = (element: HTMLElement) => element.shadowRoot!.querySelector('[part="backdrop"]');
const panelOf = (element: HTMLElement) => element.shadowRoot!.querySelector('[part="panel"]');

// An entrance animation at `currentTime`, with a 150ms delay and a 200ms fade.
const originalGetAnimations = Element.prototype.getAnimations;
const entranceAt = (currentTime: number, delay = 150) => {
  Element.prototype.getAnimations = () =>
    [
      { currentTime, effect: { getComputedTiming: () => ({ delay, endTime: delay + 200 }) }, finished: new Promise(() => {}) }
    ] as unknown as Animation[];
};

describe('fandry-loading-overlay', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
    Element.prototype.getAnimations = originalGetAnimations;
  });

  it('keeps an empty live region in the page while closed, and nothing else', () => {
    const element = create();

    expect(statusOf(element).textContent).toBe('');
    expect(statusOf(element).getAttribute('aria-live')).toBe('polite');
    expect(overlayOf(element)).toBeNull();
  });

  it('shows a spinner and the default label, the spinner hidden from assistive technology', () => {
    const element = create({ open: true });
    const spinner = element.shadowRoot!.querySelector('fandry-spinner')!;

    expect(overlayOf(element)!.hasAttribute('aria-hidden')).toBe(false);
    expect(panelOf(element)).not.toBeNull();
    expect(spinner.getAttribute('exportparts')).toBe('base: spinner');
    expect(spinner.getAttribute('aria-hidden')).toBe('true');
    expect(element.shadowRoot!.querySelector('[part="label"]')!.textContent).toBe('Loading');
  });

  it('shows messages.label as the default label', () => {
    const element = create({ open: true, messages: { label: 'Chargement' } });

    expect(element.shadowRoot!.querySelector('[part="label"]')!.textContent).toBe('Chargement');
  });

  it('shows the label prop over messages.label, with the spinner', () => {
    const element = create({ open: true, label: 'Saving template…', messages: { label: 'Chargement' } });

    expect(element.shadowRoot!.querySelector('[part="label"]')!.textContent).toBe('Saving template…');
    expect(element.shadowRoot!.querySelector('fandry-spinner')).not.toBeNull();
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

  describe('announcement', () => {
    beforeEach(() => {
      jest.useFakeTimers({ doNotFake: ['queueMicrotask', 'nextTick'] });
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    const after = async (ms: number) => {
      await settle();
      jest.advanceTimersByTime(ms);
      await settle();
    };

    it('puts the label into the same region as text, 150ms after it opens', async () => {
      const element = create();
      const status = statusOf(element);

      element.open = true;
      await after(149);
      expect(status.textContent).toBe('');

      await after(1);
      expect(statusOf(element)).toBe(status);
      expect(status.textContent).toBe('Loading');
    });

    it('waits for a longer entrance delay', async () => {
      entranceAt(0, 400);
      const element = create({ open: true });

      await after(399);
      expect(statusOf(element).textContent).toBe('');

      await after(1);
      expect(statusOf(element).textContent).toBe('Loading');
    });

    const overlayIn = async (harness: Element) => {
      document.body.appendChild(harness);
      await after(150);
      return harness.shadowRoot!.querySelector<HTMLElement>('fandry-loading-overlay')!;
    };

    it('announces content the page slots in', async () => {
      expect(statusOf(await overlayIn(createElement('slot-harness', { is: SlotHarness }))).textContent).toBe('Saving template…');
    });

    it('announces the label prop', async () => {
      const element = create({ open: true, label: 'Saving template…' });
      await after(150);

      expect(statusOf(element).textContent).toBe('Saving template…');
    });

    it('announces slotted content without what is aria-hidden', async () => {
      const harness = createElement('content-harness', { is: ContentHarness }) as HTMLElement & { open: boolean };
      harness.open = true;

      expect(statusOf(await overlayIn(harness)).textContent).toBe('Importing Cancel');
    });

    it('announces messages.label when the content has no text', async () => {
      const harness = createElement('quiet-harness', { is: QuietHarness });

      expect(statusOf(await overlayIn(harness)).textContent).toBe('Loading');
    });

    it('empties the region when it closes', async () => {
      const element = create({ open: true });
      await after(150);

      element.open = false;
      await settle();

      expect(statusOf(element).textContent).toBe('');
    });

    it('says nothing when it closes before it was announced', async () => {
      const element = create({ open: true });
      await after(100);

      element.open = false;
      await after(500);

      expect(statusOf(element).textContent).toBe('');
    });

    it('announces again where it lands when moved while open', async () => {
      const element = create({ open: true });
      await after(150);
      const panel = document.body.appendChild(document.createElement('div'));

      panel.appendChild(element);
      await after(149);
      expect(statusOf(element).textContent).toBe('');

      await after(1);
      expect(statusOf(element).textContent).toBe('Loading');
    });
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

    it("keeps blocked keys from the page's own handlers", async () => {
      create({ open: true });
      await settle();
      const handler = jest.fn();
      document.body.addEventListener('keydown', handler);

      press({ key: 'Escape' });
      press({ key: 's', ctrlKey: true });

      expect(handler).not.toHaveBeenCalled();
      document.body.removeEventListener('keydown', handler);
    });

    it('blocks editing and page shortcuts, and lets the browser keep its own', async () => {
      create({ open: true });
      await settle();

      expect(press({ key: 'v', ctrlKey: true })).toBe(true);
      expect(press({ key: 'z', metaKey: true })).toBe(true);
      expect(press({ key: 'Enter', ctrlKey: true })).toBe(true);
      expect(press({ key: 'Backspace', altKey: true })).toBe(true);

      expect(press({ key: 'r', metaKey: true })).toBe(false);
      expect(press({ key: 'R', ctrlKey: true, shiftKey: true })).toBe(false);
      expect(press({ key: 'ArrowLeft', altKey: true })).toBe(false);
      expect(press({ key: 'F5' })).toBe(false);
    });

    it("lets the Mac's history and tab shortcuts through", async () => {
      create({ open: true });
      await settle();

      expect(press({ key: '[', metaKey: true })).toBe(false);
      expect(press({ key: ']', metaKey: true })).toBe(false);
      expect(press({ key: 'ArrowLeft', metaKey: true })).toBe(false);
      expect(press({ key: '}', metaKey: true, shiftKey: true })).toBe(false);
      expect(press({ key: 'PageDown', ctrlKey: true })).toBe(false);
    });

    it('lets keys reach content in the overlay once it has focus', async () => {
      const harness = createElement('content-harness', { is: ContentHarness }) as HTMLElement & { open: boolean };
      harness.open = true;
      document.body.appendChild(harness);
      await settle();
      const cancel = harness.shadowRoot!.querySelector('button')!;
      expect(press({ key: 'Enter' }, cancel)).toBe(true);

      cancel.focus();

      expect(press({ key: 'Enter' }, cancel)).toBe(false);
    });

    it('treats AltGr as typing, not as a shortcut', () => {
      const altGr = new KeyboardEvent('keydown', { key: '@', ctrlKey: true, altKey: true, modifierAltGraph: true });

      expect(isBrowserShortcut(altGr)).toBe(false);
    });

    describe('contained', () => {
      const panelWith = async (props: Partial<Overlay>) => {
        const panel = document.body.appendChild(document.createElement('div'));
        const inside = panel.appendChild(document.createElement('button'));
        const outside = document.body.appendChild(document.createElement('button'));
        const element = create(props, panel);
        await settle();
        return { element, inside, outside };
      };

      it('blocks keys inside the element it is in, and none outside', async () => {
        const { inside, outside } = await panelWith({ open: true, contained: true });

        expect(press({ key: 'Enter' }, inside)).toBe(true);
        expect(press({ key: 'Enter' }, outside)).toBe(false);
      });

      it('lets Tab leave the panel', async () => {
        const { inside } = await panelWith({ open: true, contained: true });

        expect(press({ key: 'Tab' }, inside)).toBe(false);
        expect(press({ key: 'Tab', shiftKey: true }, inside)).toBe(false);
      });

      it('follows `contained` when it changes while open', async () => {
        const { element, outside } = await panelWith({ open: true, contained: true });

        element.contained = false;
        await settle();

        expect(press({ key: 'Enter' }, outside)).toBe(true);
      });
    });

    it('stops blocking when it is removed while open', async () => {
      const element = create({ open: true });
      await settle();

      document.body.removeChild(element);

      expect(press({ key: 'Tab' })).toBe(false);
    });
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

      expect(panelOf(element)).not.toBeNull();
      expect(overlayOf(element)!.classList.contains('overlay--closing')).toBe(true);
    });

    it('is removed once the exit animation finishes', async () => {
      const element = create({ open: true });

      element.open = false;
      await flush();
      await animations.finish();

      expect(overlayOf(element)).toBeNull();
    });

    it('reopening during the exit keeps it', async () => {
      const element = create({ open: true });

      element.open = false;
      await flush();
      element.open = true;
      await animations.finish();

      expect(panelOf(element)).not.toBeNull();
      expect(overlayOf(element)!.classList.contains('overlay--closing')).toBe(false);
    });
  });

  /* The delay is the entrance animation's own (--fd-loading-overlay-delay).
     Closing before the entrance has finished removes the overlay at once:
     an exit would start from full opacity and flash. */
  describe('closed before it has appeared', () => {
    it.each([
      ['within the delay', 100],
      ['while it fades in', 250]
    ])('is removed at once %s', async (_when, currentTime) => {
      const element = create({ open: true });
      entranceAt(currentTime);

      element.open = false;
      await flush();

      expect(overlayOf(element)).toBeNull();
    });

    it('is never drawn when opened and closed before it rendered', async () => {
      const element = create();

      element.open = true;
      element.open = false;
      await settle();

      expect(overlayOf(element)).toBeNull();
    });

    it('plays its exit once the entrance has finished', async () => {
      const element = create({ open: true });
      entranceAt(400);

      element.open = false;
      await flush();

      expect(overlayOf(element)!.classList.contains('overlay--closing')).toBe(true);
    });

    it('plays its exit when a site removed the entrance animation', async () => {
      const element = create({ open: true });
      Element.prototype.getAnimations = () => [];

      element.open = false;
      await flush();

      expect(overlayOf(element)!.classList.contains('overlay--closing')).toBe(true);
    });
  });
});
