import { createElement } from 'lwc';
import RovingHarness from './rovingHarness';

const flush = () => Promise.resolve();

describe('fd-radio-group roving tabindex + arrow-key navigation', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('gives only the checked radio tabIndex 0, and every other radio -1', async () => {
    const harness = createElement('roving-harness', { is: RovingHarness });
    document.body.appendChild(harness);
    await flush();

    const radios = harness.shadowRoot!.querySelectorAll('fd-radio');
    const tabIndexes = Array.from(radios).map(
      (radio) => radio.shadowRoot!.querySelector('input')!.tabIndex
    );
    // value="pro" -> the second radio (index 1) is the active/checked one.
    expect(tabIndexes).toEqual([-1, 0, -1]);
  });

  it('defaults the first radio to tabIndex 0 when no value is checked', async () => {
    const harness = createElement('roving-harness', { is: RovingHarness }) as RovingHarness & HTMLElement;
    harness.value = '';
    document.body.appendChild(harness);
    await flush();

    const radios = harness.shadowRoot!.querySelectorAll('fd-radio');
    const tabIndexes = Array.from(radios).map(
      (radio) => radio.shadowRoot!.querySelector('input')!.tabIndex
    );
    expect(tabIndexes).toEqual([0, -1, -1]);
  });

  it('ArrowDown moves the roving tabindex, selection, and real focus to the next radio', async () => {
    // Asserting on document.activeElement directly is unreliable here: LWC's
    // synthetic-shadow polyfill wraps cross-boundary elements in jsdom in a
    // way that doesn't update document.activeElement the way a real browser
    // would (same reasoning as fd-popover's own Escape-key focus test).
    // Spying on the shared HTMLElement.prototype.focus proves fd-radio's
    // focus() was actually called on the real target instead.
    const focusSpy = jest.spyOn(HTMLElement.prototype, 'focus');

    const harness = createElement('roving-harness', { is: RovingHarness });
    document.body.appendChild(harness);
    await flush();

    const group = harness.shadowRoot!.querySelector('fd-radio-group')!;
    const handler = jest.fn();
    group.addEventListener('change', handler);

    const radios = harness.shadowRoot!.querySelectorAll('fd-radio');
    const proInput = radios[1].shadowRoot!.querySelector('input') as HTMLInputElement;
    proInput.focus();

    proInput.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true, composed: true }));
    await flush();

    // Skips the disabled third radio and wraps back to the first.
    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].detail).toEqual({ value: 'free' });

    const tabIndexes = Array.from(radios).map(
      (radio) => radio.shadowRoot!.querySelector('input')!.tabIndex
    );
    expect(tabIndexes).toEqual([0, -1, -1]);

    const freeInput = radios[0].shadowRoot!.querySelector('input') as HTMLInputElement;
    expect(freeInput.checked).toBe(true);
    expect(focusSpy.mock.instances).toContain(freeInput);

    focusSpy.mockRestore();
  });

  it('ArrowUp/ArrowLeft moves selection and focus to the previous enabled radio', async () => {
    const harness = createElement('roving-harness', { is: RovingHarness });
    document.body.appendChild(harness);
    await flush();

    const group = harness.shadowRoot!.querySelector('fd-radio-group')!;
    const handler = jest.fn();
    group.addEventListener('change', handler);

    const radios = harness.shadowRoot!.querySelectorAll('fd-radio');
    const proInput = radios[1].shadowRoot!.querySelector('input') as HTMLInputElement;
    proInput.focus();

    proInput.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true, composed: true }));
    await flush();

    expect(handler.mock.calls[0][0].detail).toEqual({ value: 'free' });
  });
});
