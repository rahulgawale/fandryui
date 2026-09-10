import { createElement } from 'lwc';
import TooltipTriggerHarness from './tooltipTriggerHarness';

const flush = () => Promise.resolve();

// jsdom doesn't actually run CSS animations, so the exit animation's real
// `animationend` never fires on its own -- this stands in for the browser
// finishing it, the same way `jest.advanceTimersByTime` stands in for a
// real setTimeout elsewhere in this file.
const endAnimation = (panel: Element) => {
  panel.dispatchEvent(new Event('animationend'));
};

const mount = (openDelay = 300) => {
  const harness = createElement('tooltip-trigger-harness', { is: TooltipTriggerHarness });
  harness.openDelay = openDelay;
  document.body.appendChild(harness);
  return harness;
};

describe('fd-tooltip', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('does not render the panel initially', async () => {
    const harness = mount();
    await flush();

    const tooltip = harness.shadowRoot!.querySelector('fd-tooltip')!;
    expect(tooltip.shadowRoot!.querySelector('[role="tooltip"]')).toBeNull();
  });

  it('opens after openDelay when the trigger is hovered', async () => {
    const harness = mount(300);
    await flush();

    const tooltip = harness.shadowRoot!.querySelector('fd-tooltip')!;
    const trigger = harness.shadowRoot!.querySelector('button')!;

    trigger.dispatchEvent(
      new MouseEvent('mouseover', { bubbles: true, relatedTarget: document.body })
    );
    await flush();
    expect(tooltip.shadowRoot!.querySelector('[role="tooltip"]')).toBeNull();

    jest.advanceTimersByTime(299);
    await flush();
    expect(tooltip.shadowRoot!.querySelector('[role="tooltip"]')).toBeNull();

    jest.advanceTimersByTime(1);
    await flush();
    expect(tooltip.shadowRoot!.querySelector('[role="tooltip"]')).not.toBeNull();
  });

  it('cancels a pending open if the pointer leaves before openDelay elapses', async () => {
    const harness = mount(300);
    await flush();

    const tooltip = harness.shadowRoot!.querySelector('fd-tooltip')!;
    const trigger = harness.shadowRoot!.querySelector('button')!;

    trigger.dispatchEvent(
      new MouseEvent('mouseover', { bubbles: true, relatedTarget: document.body })
    );
    jest.advanceTimersByTime(150);
    trigger.dispatchEvent(
      new MouseEvent('mouseout', { bubbles: true, relatedTarget: document.body })
    );

    jest.advanceTimersByTime(1000);
    await flush();
    expect(tooltip.shadowRoot!.querySelector('[role="tooltip"]')).toBeNull();
  });

  it('opens immediately on focus, with no delay', async () => {
    const harness = mount(300);
    await flush();

    const tooltip = harness.shadowRoot!.querySelector('fd-tooltip')!;
    const trigger = harness.shadowRoot!.querySelector('button')!;

    trigger.dispatchEvent(new FocusEvent('focusin', { bubbles: true }));
    await flush();

    expect(tooltip.shadowRoot!.querySelector('[role="tooltip"]')).not.toBeNull();
  });

  it('plays an exit animation on blur, unmounting only once it ends', async () => {
    const harness = mount(300);
    await flush();

    const tooltip = harness.shadowRoot!.querySelector('fd-tooltip')!;
    const trigger = harness.shadowRoot!.querySelector('button')!;

    trigger.dispatchEvent(new FocusEvent('focusin', { bubbles: true }));
    await flush();
    expect(tooltip.shadowRoot!.querySelector('[role="tooltip"]')).not.toBeNull();

    trigger.dispatchEvent(new FocusEvent('focusout', { bubbles: true }));
    await flush();
    // Still mounted right after blur -- it needs to stay in the DOM long
    // enough to actually play the reversed fade/scale before disappearing.
    const closingPanel = tooltip.shadowRoot!.querySelector('[role="tooltip"]');
    expect(closingPanel).not.toBeNull();
    expect(closingPanel!.classList.contains('panel--closing')).toBe(true);

    endAnimation(closingPanel!);
    await flush();
    expect(tooltip.shadowRoot!.querySelector('[role="tooltip"]')).toBeNull();
  });

  it('closes on Escape', async () => {
    const harness = mount(300);
    await flush();

    const tooltip = harness.shadowRoot!.querySelector('fd-tooltip')!;
    const trigger = harness.shadowRoot!.querySelector('button')!;

    trigger.dispatchEvent(new FocusEvent('focusin', { bubbles: true }));
    await flush();
    expect(tooltip.shadowRoot!.querySelector('[role="tooltip"]')).not.toBeNull();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    await flush();
    const closingPanel = tooltip.shadowRoot!.querySelector('[role="tooltip"]')!;
    expect(closingPanel.classList.contains('panel--closing')).toBe(true);

    endAnimation(closingPanel);
    await flush();
    expect(tooltip.shadowRoot!.querySelector('[role="tooltip"]')).toBeNull();
  });

  it("does not unmount on the entrance animation's own animationend", async () => {
    const harness = mount(300);
    await flush();

    const tooltip = harness.shadowRoot!.querySelector('fd-tooltip')!;
    const trigger = harness.shadowRoot!.querySelector('button')!;

    trigger.dispatchEvent(new FocusEvent('focusin', { bubbles: true }));
    await flush();

    const panel = tooltip.shadowRoot!.querySelector('[role="tooltip"]')!;
    endAnimation(panel);
    await flush();

    expect(tooltip.shadowRoot!.querySelector('[role="tooltip"]')).not.toBeNull();
  });

  it('sets aria-describedby on the trigger while open and removes it on close', async () => {
    const harness = mount(300);
    await flush();

    const trigger = harness.shadowRoot!.querySelector('button')!;

    trigger.dispatchEvent(new FocusEvent('focusin', { bubbles: true }));
    await flush();
    expect(trigger.hasAttribute('aria-describedby')).toBe(true);

    const tooltip = harness.shadowRoot!.querySelector('fd-tooltip')!;
    const panel = tooltip.shadowRoot!.querySelector('[role="tooltip"]')!;
    expect(trigger.getAttribute('aria-describedby')).toBe(panel.id);

    trigger.dispatchEvent(new FocusEvent('focusout', { bubbles: true }));
    await flush();
    expect(trigger.hasAttribute('aria-describedby')).toBe(false);
  });

  it('dispatches a "toggle" event carrying the new open state', async () => {
    const harness = mount(300);
    await flush();

    const tooltip = harness.shadowRoot!.querySelector('fd-tooltip')!;
    const trigger = harness.shadowRoot!.querySelector('button')!;
    const handler = jest.fn();
    tooltip.addEventListener('toggle', handler);

    trigger.dispatchEvent(new FocusEvent('focusin', { bubbles: true }));
    await flush();

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].detail).toBe(true);
  });

  it('reflects the placement prop onto the panel class', async () => {
    const harness = createElement('tooltip-trigger-harness', { is: TooltipTriggerHarness });
    harness.placement = 'right';
    harness.openDelay = 300;
    document.body.appendChild(harness);
    await flush();

    const tooltip = harness.shadowRoot!.querySelector('fd-tooltip')!;
    const trigger = harness.shadowRoot!.querySelector('button')!;
    trigger.dispatchEvent(new FocusEvent('focusin', { bubbles: true }));
    await flush();

    const panel = tooltip.shadowRoot!.querySelector('[role="tooltip"]')!;
    expect(panel.classList.contains('panel--right')).toBe(true);
  });

  it('ignores hover/focus events that originate outside the trigger', async () => {
    const harness = mount(300);
    await flush();

    const tooltip = harness.shadowRoot!.querySelector('fd-tooltip')!;
    tooltip.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
    jest.advanceTimersByTime(1000);
    await flush();

    expect(tooltip.shadowRoot!.querySelector('[role="tooltip"]')).toBeNull();
  });
});
