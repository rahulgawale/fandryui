import { createElement } from 'lwc';
import TextSlotsHarness from './textSlotsHarness';

/* A label, help text or title a page slots in shows without the matching
   prop: the wrapper is always rendered, and only hidden while empty. */
describe('text slots', () => {
  const settle = async () => {
    for (let i = 0; i < 4; i++) await Promise.resolve();
  };

  afterEach(() => {
    while (document.body.firstChild) document.body.removeChild(document.body.firstChild);
  });

  it.each([
    ['input', 'fandry-label'],
    ['input', '.help-text'],
    ['select', '.label'],
    ['select', '.help-text'],
    ['switch', '.label'],
    ['checkbox', '.label'],
    ['group', '.label'],
    ['alert', '.title']
  ])('shows the %s %s filled from a slot', async (component, wrapper) => {
    const harness = createElement('text-slots-harness', { is: TextSlotsHarness });
    document.body.appendChild(harness);
    await settle();

    const host = harness.shadowRoot!.querySelector(`.${component}`)!;
    expect(host.shadowRoot!.querySelector(wrapper)!.hasAttribute('hidden')).toBe(false);
  });

  it('points the radio group at its slotted label', async () => {
    const harness = createElement('text-slots-harness', { is: TextSlotsHarness });
    document.body.appendChild(harness);
    await settle();

    const group = harness.shadowRoot!.querySelector('.group')!;
    expect(group.shadowRoot!.querySelector('[role="radiogroup"]')!.hasAttribute('aria-labelledby')).toBe(true);
  });
});
