import { createElement } from 'lwc';
import FdPopover from '../popover';
import PopoverTriggerHarness from './popoverTriggerHarness';
import { mockAnimations, settle, AnimationMock } from '../../motion/__tests__/animationMock';

const flush = () => Promise.resolve();

describe('fandry-popover', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('does not render the panel when closed', () => {
    const element = createElement('fandry-popover', { is: FdPopover });
    document.body.appendChild(element);

    expect(element.shadowRoot!.querySelector('.panel')).toBeNull();
  });

  it('opens the panel when the trigger is clicked', async () => {
    // A plain onclick inside our own template can't reliably observe a click
    // that starts inside a *slotted* element's own shadow tree (e.g. a real
    // fandry-button trigger) -- production code listens on the host itself, so
    // the test must click a real slotted trigger via a compiled harness
    // rather than dispatching synthetically on our internal .trigger span.
    const harness = createElement('popover-trigger-harness', { is: PopoverTriggerHarness });
    document.body.appendChild(harness);
    await flush();

    const popover = harness.shadowRoot!.querySelector('fandry-popover')!;
    const trigger = harness.shadowRoot!.querySelector('button')!;
    trigger.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await flush();

    expect(popover.shadowRoot!.querySelector('.panel')).not.toBeNull();
  });

  it('closes the panel when the trigger is clicked again', async () => {
    const harness = createElement('popover-trigger-harness', { is: PopoverTriggerHarness });
    harness.open = true;
    document.body.appendChild(harness);
    await flush();

    const popover = harness.shadowRoot!.querySelector('fandry-popover')!;
    const trigger = harness.shadowRoot!.querySelector('button')!;
    trigger.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await settle();

    expect(popover.shadowRoot!.querySelector('.panel')).toBeNull();
  });

  describe('panel position', () => {
    /*
     * jsdom does no layout, so the boxes are supplied: an 800 by 600
     * viewport, which is also the box a fixed panel is placed from, and the
     * trigger's own box in `mount`.
     */
    let layout: jest.SpyInstance[] = [];

    beforeEach(() => {
      layout = [
        jest.spyOn(document.documentElement, 'clientWidth', 'get').mockReturnValue(800),
        jest.spyOn(document.documentElement, 'clientHeight', 'get').mockReturnValue(600),
        jest
          .spyOn(Element.prototype, 'getBoundingClientRect')
          .mockReturnValue({ top: 0, bottom: 600, left: 0, right: 800, width: 800, height: 600 } as DOMRect)
      ];
    });

    afterEach(() => layout.forEach((spy) => spy.mockRestore()));

    function mount(props: Record<string, unknown>) {
      const element = createElement('fandry-popover', { is: FdPopover });
      Object.assign(element, props);
      document.body.appendChild(element);
      const trigger = element.shadowRoot!.querySelector('.trigger') as HTMLElement;
      trigger.getBoundingClientRect = () =>
        ({ top: 100, bottom: 130, left: 200, right: 260, width: 60, height: 30 }) as DOMRect;
      return element;
    }

    const viewport = () => ({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    });

    const panelStyle = async (element: HTMLElement & { open: boolean }) => {
      element.open = true;
      // Once to render the panel, once more to place it: it is measured first.
      await flush();
      await flush();
      return (element.shadowRoot!.querySelector('.panel') as HTMLElement).style;
    };

    it('hangs below the trigger, left edges aligned, in viewport coordinates', async () => {
      const style = await panelStyle(mount({}));
      expect(style.top).toBe('130px');
      expect(style.left).toBe('200px');
      expect(style.right).toMatch(/^(auto)?$/); // jsdom reports `auto` as ''
      expect(style.bottom).toMatch(/^(auto)?$/); // jsdom reports `auto` as ''
    });

    it('aligns to the trigger\'s right edge with align="end"', async () => {
      const style = await panelStyle(mount({ align: 'end' }));
      expect(style.right).toBe(`${viewport().width - 260}px`);
      expect(style.left).toMatch(/^(auto)?$/); // jsdom reports `auto` as ''
    });

    it('sits above, left of and right of the trigger for the other placements', async () => {
      let style = await panelStyle(mount({ placement: 'top' }));
      expect(style.bottom).toBe(`${viewport().height - 100}px`);
      expect(style.top).toMatch(/^(auto)?$/); // jsdom reports `auto` as ''

      style = await panelStyle(mount({ placement: 'left' }));
      expect(style.right).toBe(`${viewport().width - 200}px`);
      expect(style.top).toBe('100px');

      style = await panelStyle(mount({ placement: 'right' }));
      expect(style.left).toBe('260px');
      expect(style.top).toBe('100px');
    });

    // The frames the popover has asked for, run by hand.
    function frames() {
      let pending: FrameRequestCallback[] = [];
      const raf = jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => pending.push(cb));
      return {
        get pending() {
          return pending.length;
        },
        async run() {
          const due = pending;
          pending = [];
          due.forEach((cb) => cb(0));
          await flush();
        },
        restore: () => raf.mockRestore()
      };
    }

    const moveTrigger = (element: HTMLElement, top: number) => {
      const trigger = element.shadowRoot!.querySelector('.trigger') as HTMLElement;
      trigger.getBoundingClientRect = () =>
        ({ top, bottom: top + 30, left: 200, right: 260, width: 60, height: 30 }) as DOMRect;
    };

    const panelOf = (element: HTMLElement) => element.shadowRoot!.querySelector('.panel') as HTMLElement;

    /*
     * No scroll event is involved: a scroll container inside another
     * component's shadow root fires none that a popover could hear.
     */
    it('follows the trigger frame by frame while open', async () => {
      const frame = frames();
      const element = mount({});
      const style = await panelStyle(element);
      expect(style.top).toBe('130px');

      moveTrigger(element, 40);
      await frame.run();
      expect(panelOf(element).style.top).toBe('70px');

      moveTrigger(element, 10);
      await frame.run();
      expect(panelOf(element).style.top).toBe('40px');
      frame.restore();
    });

    it('stops following once closed or removed', async () => {
      const frame = frames();
      const cancel = jest.spyOn(window, 'cancelAnimationFrame');
      const element = mount({});
      await panelStyle(element);
      expect(frame.pending).toBe(1);

      cancel.mockClear();
      element.open = false;
      expect(cancel).toHaveBeenCalled();
      await frame.run();
      expect(frame.pending).toBe(0);

      element.open = true;
      await flush();
      expect(frame.pending).toBe(1);
      cancel.mockClear();
      document.body.removeChild(element);
      expect(cancel).toHaveBeenCalled();
      await frame.run();
      expect(frame.pending).toBe(0);

      cancel.mockRestore();
      frame.restore();
    });

    it('measures from the box a fixed panel is really placed from', async () => {
      const frame = frames();
      const element = mount({ align: 'end' });
      await panelStyle(element);

      // A transformed ancestor at (50, 20), 400 wide: the panel is placed from it.
      const origin = element.shadowRoot!.querySelector('.origin') as HTMLElement;
      origin.getBoundingClientRect = () =>
        ({ top: 20, bottom: 320, left: 50, right: 450, width: 400, height: 300 }) as DOMRect;
      await frame.run();

      expect(panelOf(element).style.top).toBe('110px');
      expect(panelOf(element).style.right).toBe('190px');
      frame.restore();
    });

    /*
     * The wrapper is as wide as the host, which a flex or grid container may
     * have stretched; the panel belongs to the control inside it.
     */
    it('measures the slotted trigger, not the wrapper around it', async () => {
      const harness = createElement('fandry-popover-trigger-harness', { is: PopoverTriggerHarness });
      document.body.appendChild(harness);
      const popover = harness.shadowRoot!.querySelector('fandry-popover') as HTMLElement & { open: boolean };
      const button = harness.shadowRoot!.querySelector('button') as HTMLElement;
      button.getBoundingClientRect = () =>
        ({ top: 10, bottom: 40, left: 300, right: 380, width: 80, height: 30 }) as DOMRect;

      const style = await panelStyle(popover);
      expect(style.top).toBe('40px');
      expect(style.left).toBe('300px');
      expect(style.getPropertyValue('--_fd-popover-trigger-width')).toBe('80px');
    });

    it('tells the panel how wide the trigger is', async () => {
      const style = await panelStyle(mount({}));
      expect(style.getPropertyValue('--_fd-popover-trigger-width')).toBe('60px');
    });

    describe('flip', () => {
      // A 200px square panel.
      let size: jest.SpyInstance[] = [];

      beforeEach(() => {
        size = [
          jest.spyOn(HTMLElement.prototype, 'offsetHeight', 'get').mockReturnValue(200),
          jest.spyOn(HTMLElement.prototype, 'offsetWidth', 'get').mockReturnValue(200)
        ];
      });

      afterEach(() => size.forEach((spy) => spy.mockRestore()));

      const open = async (element: HTMLElement & { open: boolean }) => {
        await panelStyle(element);
        return panelOf(element);
      };

      it('stays on its side while the panel fits there', async () => {
        const panel = await open(mount({}));
        expect(panel.classList).toContain('panel--bottom');
        expect(panel.style.top).toBe('130px');
      });

      it('opens above when it would run off the bottom and there is more room above', async () => {
        const element = mount({});
        moveTrigger(element, 500);
        const panel = await open(element);
        expect(panel.classList).toContain('panel--top');
        expect(panel.classList).not.toContain('panel--bottom');
        expect(panel.style.bottom).toBe('100px');
        expect(panel.style.top).toMatch(/^(auto)?$/);
      });

      it('flips back when the trigger scrolls to where the panel fits again', async () => {
        const frame = frames();
        const element = mount({});
        moveTrigger(element, 500);
        const panel = await open(element);
        expect(panel.classList).toContain('panel--top');

        moveTrigger(element, 100);
        await frame.run();
        expect(panel.classList).toContain('panel--bottom');
        expect(panel.style.top).toBe('130px');
        frame.restore();
      });

      it('stays put when neither side fits and the other has no more room', async () => {
        const element = mount({});
        moveTrigger(element, 250); // 250 above and 320 below, for a 400px panel
        size[0].mockReturnValue(400);
        const panel = await open(element);
        expect(panel.classList).toContain('panel--bottom');
      });

      it('flips a side placement too', async () => {
        // The trigger ends at 260 of 800: a 700px wide panel has more room on the right.
        size[1].mockReturnValue(700);
        const panel = await open(mount({ placement: 'left' }));
        expect(panel.classList).toContain('panel--right');
        expect(panel.style.left).toBe('260px');
      });
    });
  });

  // Whether a click was inside is decided by the host having seen it, not by
  // composedPath() (which Salesforce filters -- see handleDocumentClick), so a
  // click anywhere inside, including the panel's own content, must not close it.
  it('stays open when a click lands inside the panel', async () => {
    const harness = createElement('popover-trigger-harness', { is: PopoverTriggerHarness });
    harness.open = true;
    document.body.appendChild(harness);
    await flush();

    const popover = harness.shadowRoot!.querySelector('fandry-popover')!;
    const content = Array.from(harness.shadowRoot!.querySelectorAll('div')).find((d) => d.textContent === 'Panel content')!;
    content.dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }));
    await settle();

    expect(popover.shadowRoot!.querySelector('.panel')).not.toBeNull();
    expect(popover.shadowRoot!.querySelector('.panel--closing')).toBeNull();
  });

  it('closes when a click lands outside the popover', () => {
    const element = createElement('fandry-popover', { is: FdPopover });
    element.open = true;
    document.body.appendChild(element);

    const outside = document.createElement('div');
    document.body.appendChild(outside);
    outside.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(element.open).toBe(false);
  });

  it('does not close when a click lands on slotted panel content', () => {
    // The panel's default-slot content is a light-DOM child of the host, so
    // `this.contains(event.target)` must treat it as "inside" -- otherwise
    // clicking anything inside the popover (e.g. a menu item) would
    // immediately close it via the outside-click handler.
    const element = createElement('fandry-popover', { is: FdPopover });
    element.open = true;
    const content = document.createElement('div');
    element.appendChild(content);
    document.body.appendChild(element);

    content.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(element.open).toBe(true);
  });

  it('closes on Escape and returns focus to the trigger', async () => {
    // Asserting on document.activeElement directly is unreliable here: LWC's
    // synthetic-shadow polyfill wraps cross-boundary elements in an
    // HTMLBridgeElement in jsdom, and focus() on that bridge doesn't update
    // document.activeElement to the real node the way a real browser would.
    // Spying on the shared HTMLElement.prototype.focus still proves the
    // component called focus() on the actual trigger button.
    const focusSpy = jest.spyOn(HTMLElement.prototype, 'focus');

    const harness = createElement('popover-trigger-harness', { is: PopoverTriggerHarness });
    harness.open = true;
    document.body.appendChild(harness);
    await flush();

    const popover = harness.shadowRoot!.querySelector('fandry-popover') as HTMLElement & { open: boolean };
    const trigger = harness.shadowRoot!.querySelector('button')!;

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    await flush();

    expect(popover.open).toBe(false);
    expect(focusSpy.mock.instances).toContain(trigger);

    focusSpy.mockRestore();
  });

  it('returns focus to the trigger when closed externally while focus is still inside the panel', async () => {
    // The consumer-driven close path (e.g. an fandry-menu's `onselect` handler
    // setting `this.menuOpen = false`, which flows into `<fandry-popover
    // open={menuOpen}>` as a plain prop assignment) never calls `setOpen`
    // directly, unlike the trigger-click/outside-click/Escape paths -- this
    // is what that path looked like before the fix (focus silently fell
    // through to the page instead of returning to the trigger).
    const harness = createElement('popover-trigger-harness', { is: PopoverTriggerHarness });
    harness.open = true;
    document.body.appendChild(harness);
    await flush();

    const popover = harness.shadowRoot!.querySelector('fandry-popover') as HTMLElement & { open: boolean };
    const trigger = harness.shadowRoot!.querySelector('button')!;
    // Light-DOM panel content lives directly in the harness's own template
    // (as a slotted child of fandry-popover), not inside fandry-popover's own
    // shadow tree, so it's reachable via the harness's shadowRoot directly.
    const panelContent = harness.shadowRoot!.querySelector('div')!;

    // jsdom's real focus()/activeElement wiring is unreliable across the
    // synthetic-shadow bridge (see the Escape test above) -- stubbing
    // `document.activeElement` directly simulates "the panel's own content
    // currently has focus" without depending on that.
    const activeElementSpy = jest
      .spyOn(document, 'activeElement', 'get')
      .mockReturnValue(panelContent);
    const focusSpy = jest.spyOn(HTMLElement.prototype, 'focus');

    popover.open = false;
    await flush();

    expect(focusSpy.mock.instances).toContain(trigger);

    activeElementSpy.mockRestore();
    focusSpy.mockRestore();
  });

  it('does not steal focus back to the trigger when closed externally after focus already moved elsewhere', async () => {
    const harness = createElement('popover-trigger-harness', { is: PopoverTriggerHarness });
    harness.open = true;
    document.body.appendChild(harness);
    await flush();

    const popover = harness.shadowRoot!.querySelector('fandry-popover') as HTMLElement & { open: boolean };
    const trigger = harness.shadowRoot!.querySelector('button')!;

    const unrelated = document.createElement('input');
    document.body.appendChild(unrelated);

    const activeElementSpy = jest.spyOn(document, 'activeElement', 'get').mockReturnValue(unrelated);
    const focusSpy = jest.spyOn(HTMLElement.prototype, 'focus');

    popover.open = false;
    await flush();

    expect(focusSpy.mock.instances).not.toContain(trigger);

    activeElementSpy.mockRestore();
    focusSpy.mockRestore();
  });

  it('dispatches a "toggle" event carrying the new open state', async () => {
    const harness = createElement('popover-trigger-harness', { is: PopoverTriggerHarness });
    document.body.appendChild(harness);
    await flush();

    const popover = harness.shadowRoot!.querySelector('fandry-popover')!;
    const trigger = harness.shadowRoot!.querySelector('button')!;

    const handler = jest.fn();
    popover.addEventListener('toggle', handler);

    trigger.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].detail).toBe(true);
  });

  it('reflects the placement prop onto the panel class', () => {
    const element = createElement('fandry-popover', { is: FdPopover });
    element.placement = 'left';
    element.open = true;
    document.body.appendChild(element);

    const panel = element.shadowRoot!.querySelector('.panel')!;
    expect(panel.classList.contains('panel--left')).toBe(true);
  });

  describe('motion', () => {
    let animations: AnimationMock;

    const panelOf = (element: Element) => element.shadowRoot!.querySelector('.panel');

    const mount = async (open = true) => {
      const element = createElement('fandry-popover', { is: FdPopover });
      element.open = open;
      document.body.appendChild(element);
      await flush();
      return element;
    };

    beforeEach(() => {
      animations = mockAnimations();
    });

    afterEach(() => {
      animations.restore();
    });

    it('stays mounted, marked closing and inert, while its exit animation plays', async () => {
      const element = await mount();

      element.open = false;
      await settle();

      expect(element.open).toBe(false);
      expect(panelOf(element)).not.toBeNull();
      expect(panelOf(element)!.classList.contains('panel--closing')).toBe(true);
      expect(panelOf(element)!.hasAttribute('inert')).toBe(true);
    });

    it('removes the panel once the exit animation finishes', async () => {
      const element = await mount();

      element.open = false;
      await settle();
      await animations.finish();

      expect(panelOf(element)).toBeNull();
    });

    it('removes the panel when nothing is animating (reduced motion, or animation overridden to none)', async () => {
      animations.restore();
      const element = await mount();

      element.open = false;
      await settle();

      expect(panelOf(element)).toBeNull();
    });

    it('reopening during the exit keeps the panel and cancels the pending removal', async () => {
      const element = await mount();

      element.open = false;
      await settle();
      element.open = true;
      await settle();
      await animations.finish();

      expect(panelOf(element)).not.toBeNull();
      expect(panelOf(element)!.classList.contains('panel--closing')).toBe(false);
      expect(panelOf(element)!.hasAttribute('inert')).toBe(false);
    });

    it('leaves no stale panel after repeated open/close cycles', async () => {
      const element = await mount(false);

      for (let i = 0; i < 5; i++) {
        element.open = true;
        await settle();
        element.open = false;
        await settle();
        await animations.finish();
      }

      expect(panelOf(element)).toBeNull();
      expect(element.shadowRoot!.querySelectorAll('.panel').length).toBe(0);
    });

    it('returns focus to the trigger immediately on Escape, without waiting for the exit', async () => {
      const focusSpy = jest.spyOn(HTMLElement.prototype, 'focus');
      const harness = createElement('popover-trigger-harness', { is: PopoverTriggerHarness });
      harness.open = true;
      document.body.appendChild(harness);
      await flush();

      const trigger = harness.shadowRoot!.querySelector('button')!;
      const popover = harness.shadowRoot!.querySelector('fandry-popover')!;

      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
      await flush();

      // Exit is still pending (mocked animation hasn't finished), yet focus
      // has already moved.
      expect(popover.shadowRoot!.querySelector('.panel')).not.toBeNull();
      expect(focusSpy.mock.instances).toContain(trigger);

      focusSpy.mockRestore();
    });
  });
});
