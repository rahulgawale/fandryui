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
    ['input', '.label'],
    ['input', '.help-text'],
    ['select', '.label'],
    ['select', '.help-text'],
    ['textarea', '.label'],
    ['textarea', '.help-text'],
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

  it('keeps the required asterisk beside a slotted label', async () => {
    const harness = createElement('text-slots-harness', { is: TextSlotsHarness });
    document.body.appendChild(harness);
    await settle();

    const select = harness.shadowRoot!.querySelector('.select')!;
    expect(select.shadowRoot!.querySelector('.label .required')).not.toBeNull();
  });

  /* Slotted, the label and help text still name and describe the textarea:
     both wrappers are in its own shadow root, with the control. */
  it('labels and describes the textarea from its slots', async () => {
    const harness = createElement('text-slots-harness', { is: TextSlotsHarness });
    document.body.appendChild(harness);
    await settle();

    const root = harness.shadowRoot!.querySelector('.textarea')!.shadowRoot!;
    const textarea = root.querySelector('textarea')!;
    expect(textarea.labels).toContain(root.querySelector('label'));
    expect(root.querySelector('.label .required')).not.toBeNull();
    expect(textarea.getAttribute('aria-describedby')).toBe(root.querySelector('.help-text')!.id);
  });

  it('points the radio group at its slotted label', async () => {
    const harness = createElement('text-slots-harness', { is: TextSlotsHarness });
    document.body.appendChild(harness);
    await settle();

    const group = harness.shadowRoot!.querySelector('.group')!;
    expect(group.shadowRoot!.querySelector('[role="radiogroup"]')!.hasAttribute('aria-labelledby')).toBe(true);
  });
});
