import { createElement } from 'lwc';
import TooltipTriggerHarness from './tooltipTriggerHarness';
import { mockAnimations, settle, AnimationMock } from '../../motion/__tests__/animationMock';

const flush = () => Promise.resolve();

// jsdom doesn't run CSS animations, so the mock stands in for the browser's
// animation timeline: the exit animation stays pending until
// `animations.finish()` -- see motion/__tests__/animationMock.ts.
let animations: AnimationMock;

const mount = (openDelay = 300) => {
  const harness = createElement('tooltip-trigger-harness', { is: TooltipTriggerHarness });
  harness.openDelay = openDelay;
  document.body.appendChild(harness);
  return harness;
};

describe('fandry-tooltip', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    animations = mockAnimations();
  });

  afterEach(() => {
    animations.restore();
    jest.useRealTimers();
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('does not render the panel initially', async () => {
    const harness = mount();
    await flush();

    const tooltip = harness.shadowRoot!.querySelector('fandry-tooltip')!;
    expect(tooltip.shadowRoot!.querySelector('[role="tooltip"]')).toBeNull();
  });

  it('opens after openDelay when the trigger is hovered', async () => {
    const harness = mount(300);
    await flush();

    const tooltip = harness.shadowRoot!.querySelector('fandry-tooltip')!;
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

    const tooltip = harness.shadowRoot!.querySelector('fandry-tooltip')!;
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

    const tooltip = harness.shadowRoot!.querySelector('fandry-tooltip')!;
    const trigger = harness.shadowRoot!.querySelector('button')!;

    trigger.dispatchEvent(new FocusEvent('focusin', { bubbles: true }));
    await flush();

    expect(tooltip.shadowRoot!.querySelector('[role="tooltip"]')).not.toBeNull();
  });

  it('plays an exit animation on blur, unmounting only once it ends', async () => {
    const harness = mount(300);
    await flush();

    const tooltip = harness.shadowRoot!.querySelector('fandry-tooltip')!;
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

    await animations.finish();
    expect(tooltip.shadowRoot!.querySelector('[role="tooltip"]')).toBeNull();
  });

  it('closes on Escape', async () => {
    const harness = mount(300);
    await flush();

    const tooltip = harness.shadowRoot!.querySelector('fandry-tooltip')!;
    const trigger = harness.shadowRoot!.querySelector('button')!;

    trigger.dispatchEvent(new FocusEvent('focusin', { bubbles: true }));
    await flush();
    expect(tooltip.shadowRoot!.querySelector('[role="tooltip"]')).not.toBeNull();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    await flush();
    const closingPanel = tooltip.shadowRoot!.querySelector('[role="tooltip"]')!;
    expect(closingPanel.classList.contains('panel--closing')).toBe(true);

    await animations.finish();
    expect(tooltip.shadowRoot!.querySelector('[role="tooltip"]')).toBeNull();
  });

  it('unmounts when nothing is animating (reduced motion, or animation overridden to none)', async () => {
    animations.restore();
    const harness = mount(300);
    await flush();

    const tooltip = harness.shadowRoot!.querySelector('fandry-tooltip')!;
    const trigger = harness.shadowRoot!.querySelector('button')!;

    trigger.dispatchEvent(new FocusEvent('focusin', { bubbles: true }));
    await flush();
    trigger.dispatchEvent(new FocusEvent('focusout', { bubbles: true }));
    await settle();

    expect(tooltip.shadowRoot!.querySelector('[role="tooltip"]')).toBeNull();
  });

  it('refocusing during the exit keeps the panel and cancels the pending removal', async () => {
    const harness = mount(300);
    await flush();

    const tooltip = harness.shadowRoot!.querySelector('fandry-tooltip')!;
    const trigger = harness.shadowRoot!.querySelector('button')!;

    trigger.dispatchEvent(new FocusEvent('focusin', { bubbles: true }));
    await flush();
    trigger.dispatchEvent(new FocusEvent('focusout', { bubbles: true }));
    await settle();
    trigger.dispatchEvent(new FocusEvent('focusin', { bubbles: true }));
    await settle();
    await animations.finish();

    const panel = tooltip.shadowRoot!.querySelector('[role="tooltip"]');
    expect(panel).not.toBeNull();
    expect(panel!.classList.contains('panel--closing')).toBe(false);
  });

  it('leaves no stale panel or aria-describedby after repeated show/hide cycles', async () => {
    const harness = mount(300);
    await flush();

    const tooltip = harness.shadowRoot!.querySelector('fandry-tooltip')!;
    const trigger = harness.shadowRoot!.querySelector('button')!;

    for (let i = 0; i < 5; i++) {
      trigger.dispatchEvent(new FocusEvent('focusin', { bubbles: true }));
      await settle();
      trigger.dispatchEvent(new FocusEvent('focusout', { bubbles: true }));
      await settle();
      await animations.finish();
    }

    expect(tooltip.shadowRoot!.querySelectorAll('[role="tooltip"]').length).toBe(0);
    expect(trigger.hasAttribute('aria-describedby')).toBe(false);
  });

  it('sets aria-describedby on the trigger while open and removes it on close', async () => {
    const harness = mount(300);
    await flush();

    const trigger = harness.shadowRoot!.querySelector('button')!;

    trigger.dispatchEvent(new FocusEvent('focusin', { bubbles: true }));
    await flush();
    expect(trigger.hasAttribute('aria-describedby')).toBe(true);

    const tooltip = harness.shadowRoot!.querySelector('fandry-tooltip')!;
    const panel = tooltip.shadowRoot!.querySelector('[role="tooltip"]')!;
    expect(trigger.getAttribute('aria-describedby')).toBe(panel.id);

    trigger.dispatchEvent(new FocusEvent('focusout', { bubbles: true }));
    await flush();
    expect(trigger.hasAttribute('aria-describedby')).toBe(false);
  });

  it('dispatches a "toggle" event carrying the new open state', async () => {
    const harness = mount(300);
    await flush();

    const tooltip = harness.shadowRoot!.querySelector('fandry-tooltip')!;
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

    const tooltip = harness.shadowRoot!.querySelector('fandry-tooltip')!;
    const trigger = harness.shadowRoot!.querySelector('button')!;
    trigger.dispatchEvent(new FocusEvent('focusin', { bubbles: true }));
    await flush();

    const panel = tooltip.shadowRoot!.querySelector('[role="tooltip"]')!;
    expect(panel.classList.contains('panel--right')).toBe(true);
  });

  it('ignores hover/focus events that originate outside the trigger', async () => {
    const harness = mount(300);
    await flush();

    const tooltip = harness.shadowRoot!.querySelector('fandry-tooltip')!;
    tooltip.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
    jest.advanceTimersByTime(1000);
    await flush();

    expect(tooltip.shadowRoot!.querySelector('[role="tooltip"]')).toBeNull();
  });
});
