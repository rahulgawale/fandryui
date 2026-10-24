import { createElement } from 'lwc';
import FdMultiSelect from '../multiSelect';
import SlotHarness from './slotHarness';

const OPTIONS = [
  { label: 'Red', value: 'red' },
  { label: 'Green', value: 'green' },
  { label: 'Blue', value: 'blue', disabled: true },
  { label: 'Teal', value: 'teal' }
];

const flush = () => Promise.resolve();

const build = (props: Record<string, unknown> = {}) => {
  const element = createElement('fandry-multi-select', { is: FdMultiSelect });
  Object.assign(element, { options: OPTIONS, ...props });
  document.body.appendChild(element);
  return element;
};

const trigger = (element: Element) => element.shadowRoot!.querySelector('.trigger') as HTMLButtonElement;
const options = (element: Element) => Array.from(element.shadowRoot!.querySelectorAll('[role="option"]')) as HTMLElement[];
const key = (element: Element, k: string) =>
  trigger(element).dispatchEvent(new KeyboardEvent('keydown', { key: k, bubbles: true, cancelable: true }));

const open = async (element: Element) => {
  trigger(element).dispatchEvent(new MouseEvent('click', { bubbles: true }));
  await flush();
};

describe('fandry-multi-select', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('is a multiselectable listbox behind a combobox trigger', () => {
    const element = build();

    expect(trigger(element).getAttribute('role')).toBe('combobox');
    expect(element.shadowRoot!.querySelector('[role="listbox"]')!.getAttribute('aria-multiselectable')).toBe('true');
  });

  it('shows the placeholder, then the one label, then a count', async () => {
    const element = build({ placeholder: 'Pick colors' });
    const summary = () => element.shadowRoot!.querySelector('[part~="value"]')!.textContent;
    await flush();
    expect(summary()).toBe('Pick colors');

    element.value = ['green'];
    await flush();
    expect(summary()).toBe('Green');

    element.value = ['red', 'teal'];
    await flush();
    expect(summary()).toBe('2 selected');
  });

  it('translates the count through messages', async () => {
    const element = build({ value: ['red', 'teal'], messages: { selected: (n: number) => `${n} gewählt` } });
    await flush();

    expect(element.shadowRoot!.querySelector('[part~="value"]')!.textContent).toBe('2 gewählt');
  });

  it('toggles an option on click, keeps the list open and reports the list', async () => {
    const element = build();
    const handler = jest.fn();
    element.addEventListener('change', handler);
    await open(element);

    options(element)[3].click();
    options(element)[0].click();
    await flush();

    // In option order, not click order.
    expect(handler.mock.calls.map((call) => call[0].detail)).toEqual([['teal'], ['red', 'teal']]);
    expect(element.value).toEqual(['red', 'teal']);
    expect(trigger(element).getAttribute('aria-expanded')).toBe('true');
    expect(options(element).map((o) => o.getAttribute('aria-selected'))).toEqual(['true', 'false', 'false', 'true']);

    options(element)[0].click();
    await flush();
    expect(element.value).toEqual(['teal']);
  });

  it('does not toggle a disabled option', async () => {
    const element = build();
    const handler = jest.fn();
    element.addEventListener('change', handler);
    await open(element);

    options(element)[2].click();

    expect(handler).not.toHaveBeenCalled();
  });

  it('does not fire change when value is set from code', async () => {
    const element = build();
    const handler = jest.fn();
    element.addEventListener('change', handler);

    element.value = ['red'];
    await flush();

    expect(handler).not.toHaveBeenCalled();
  });

  it('opens with the keyboard, skips disabled options and toggles with Space and Enter', async () => {
    const element = build();
    const handler = jest.fn();
    element.addEventListener('change', handler);

    key(element, 'ArrowDown');
    await flush();
    expect(trigger(element).getAttribute('aria-expanded')).toBe('true');
    expect(options(element)[0].getAttribute('part')).toContain('active');

    key(element, ' ');
    key(element, 'ArrowDown');
    key(element, 'ArrowDown'); // Blue is disabled: lands on Teal
    await flush();
    key(element, 'Enter');
    await flush();

    expect(element.value).toEqual(['red', 'teal']);
    expect(handler).toHaveBeenCalledTimes(2);
    expect(trigger(element).getAttribute('aria-expanded')).toBe('true');
  });

  it('closes on Escape without changing the value, and stops the event', async () => {
    const element = build({ value: ['red'] });
    const outer = jest.fn();
    document.body.addEventListener('keydown', outer);
    await open(element);

    key(element, 'Escape');
    await flush();

    expect(trigger(element).getAttribute('aria-expanded')).toBe('false');
    expect(element.value).toEqual(['red']);
    expect(outer).not.toHaveBeenCalled();
    document.body.removeEventListener('keydown', outer);
  });

  it('marks selected options and their check boxes as states of their parts', async () => {
    const element = build({ value: ['green'] });
    await open(element);

    const row = options(element)[1];
    expect(row.getAttribute('part')).toBe('option selected active');
    expect(row.querySelector('.box')!.getAttribute('part')).toBe('indicator selected');
  });

  it('is invalid with error text', async () => {
    const element = build({ errorText: 'Pick one' });
    await flush();

    expect(trigger(element).getAttribute('aria-invalid')).toBe('true');
    expect(trigger(element).getAttribute('part')).toBe('control invalid');
  });

  // Slotted content is distributed by a compiled template, so this needs a harness.
  it('takes its label, help text and error text as slots, without the props', async () => {
    const harness = createElement('slot-harness', { is: SlotHarness });
    document.body.appendChild(harness);
    await flush();
    await flush();

    const field = harness.shadowRoot!.querySelector('fandry-multi-select')!;
    const slotted = (name: string) =>
      (field.shadowRoot!.querySelector(`slot[name="${name}"]`) as HTMLSlotElement).assignedElements()[0];

    expect(slotted('label').textContent).toBe('Toppings (pick some)');
    expect(slotted('help-text').textContent).toBe('Tell us everything');
    expect(slotted('error-text').textContent).toBe('Pick at least one');

    // The wrappers show because of the slotted content, not a prop.
    expect(field.shadowRoot!.querySelector('.label')!.hasAttribute('hidden')).toBe(false);
    expect(field.shadowRoot!.querySelector('.help-text')!.hasAttribute('hidden')).toBe(false);

    // Slotted error text makes the field invalid, and is what describes it.
    const trigger = field.shadowRoot!.querySelector('.trigger')!;
    expect(trigger.getAttribute('aria-invalid')).toBe('true');
    expect(trigger.getAttribute('aria-describedby')).toBe('error-text help-text');
  });

  it('hides the label and help text wrappers while there is nothing to show', async () => {
    const element = build();
    await flush();

    expect(element.shadowRoot!.querySelector('.label')!.hasAttribute('hidden')).toBe(true);
    expect(element.shadowRoot!.querySelector('.help-text')!.hasAttribute('hidden')).toBe(true);
  });
});
