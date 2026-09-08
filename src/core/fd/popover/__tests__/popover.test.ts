import { createElement } from 'lwc';
import FdPopover from '../popover';
import PopoverTriggerHarness from './popoverTriggerHarness';

const flush = () => Promise.resolve();

describe('fd-popover', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('does not render the panel when closed', () => {
    const element = createElement('fd-popover', { is: FdPopover });
    document.body.appendChild(element);

    expect(element.shadowRoot!.querySelector('.panel')).toBeNull();
  });

  it('opens the panel when the trigger is clicked', async () => {
    // A plain onclick inside our own template can't reliably observe a click
    // that starts inside a *slotted* element's own shadow tree (e.g. a real
    // fd-button trigger) -- production code listens on the host itself, so
    // the test must click a real slotted trigger via a compiled harness
    // rather than dispatching synthetically on our internal .trigger span.
    const harness = createElement('popover-trigger-harness', { is: PopoverTriggerHarness });
    document.body.appendChild(harness);
    await flush();

    const popover = harness.shadowRoot!.querySelector('fd-popover')!;
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

    const popover = harness.shadowRoot!.querySelector('fd-popover')!;
    const trigger = harness.shadowRoot!.querySelector('button')!;
    trigger.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await flush();

    expect(popover.shadowRoot!.querySelector('.panel')).toBeNull();
  });

  it('closes when a click lands outside the popover', () => {
    const element = createElement('fd-popover', { is: FdPopover });
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
    const element = createElement('fd-popover', { is: FdPopover });
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

    const popover = harness.shadowRoot!.querySelector('fd-popover') as HTMLElement & { open: boolean };
    const trigger = harness.shadowRoot!.querySelector('button')!;

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    await flush();

    expect(popover.open).toBe(false);
    expect(focusSpy.mock.instances).toContain(trigger);

    focusSpy.mockRestore();
  });

  it('dispatches a "toggle" event carrying the new open state', async () => {
    const harness = createElement('popover-trigger-harness', { is: PopoverTriggerHarness });
    document.body.appendChild(harness);
    await flush();

    const popover = harness.shadowRoot!.querySelector('fd-popover')!;
    const trigger = harness.shadowRoot!.querySelector('button')!;

    const handler = jest.fn();
    popover.addEventListener('toggle', handler);

    trigger.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].detail).toBe(true);
  });

  it('reflects the placement prop onto the panel class', () => {
    const element = createElement('fd-popover', { is: FdPopover });
    element.placement = 'left';
    element.open = true;
    document.body.appendChild(element);

    const panel = element.shadowRoot!.querySelector('.panel')!;
    expect(panel.classList.contains('panel--left')).toBe(true);
  });
});
