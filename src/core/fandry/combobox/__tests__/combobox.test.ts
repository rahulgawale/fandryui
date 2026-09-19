import { createElement } from 'lwc';
import FdCombobox from '../combobox';
import TestItem from '../../searchState/__tests__/testItem';
import { mockAnimations, settle } from '../../motion/__tests__/animationMock';
import { scoreItem } from '../../searchState/searchState';

const OPTIONS = [
  { label: 'Free', value: 'free' },
  { label: 'Pro', value: 'pro' },
  { label: 'Enterprise', value: 'enterprise', disabled: true },
  { label: 'Team', value: 'team', description: 'For small groups' }
];

const flush = () => Promise.resolve();

// jsdom's MouseEvent ignores `movementX/Y` in its init dict.
const moveEvent = (movementX: number, movementY: number) => {
  const event = new MouseEvent('mousemove', { bubbles: true });
  Object.defineProperties(event, { movementX: { value: movementX }, movementY: { value: movementY } });
  return event;
};

const create = (props: Record<string, unknown> = {}) => {
  const element = createElement('fandry-combobox', { is: FdCombobox });
  Object.assign(element, { options: OPTIONS, ...props });
  document.body.appendChild(element);
  return element;
};

const input = (element: Element) => element.shadowRoot!.querySelector('.input') as HTMLInputElement;
const optionLabels = (element: Element) =>
  Array.from(element.shadowRoot!.querySelectorAll('[role="option"] .option-label')).map((node) => node.textContent);

const type = async (element: Element, text: string) => {
  const field = input(element);
  field.value = text;
  field.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
  await flush();
};

const press = async (element: Element, key: string) => {
  input(element).dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true, composed: true, cancelable: true }));
  await flush();
};

describe('fandry-combobox', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders a combobox input and no listbox until opened', () => {
    const element = create();

    expect(input(element).getAttribute('role')).toBe('combobox');
    expect(input(element).getAttribute('aria-expanded')).toBe('false');
    expect(element.shadowRoot!.querySelector('[role="listbox"]')).toBeNull();
  });

  it('shows the selected option label in the field', () => {
    const element = create({ value: 'pro' });

    expect(input(element).value).toBe('Pro');
  });

  it('opens on click and lists every option', async () => {
    const element = create();

    input(element).dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await flush();

    expect(input(element).getAttribute('aria-expanded')).toBe('true');
    expect(optionLabels(element)).toEqual(['Free', 'Pro', 'Enterprise', 'Team']);
    expect(element.shadowRoot!.querySelector('.option-description')?.textContent).toBe('For small groups');
  });

  it('narrows the options as the user types and opens the list', async () => {
    const element = create();

    await type(element, 'te');

    expect(input(element).getAttribute('aria-expanded')).toBe('true');
    // Team (label prefix) outranks Enterprise (substring).
    expect(optionLabels(element)).toEqual(['Team', 'Enterprise']);
  });

  it('shows the empty message when nothing matches', async () => {
    const element = create();

    await type(element, 'zzz');

    expect(element.shadowRoot!.querySelectorAll('[role="option"]').length).toBe(0);
    expect(element.shadowRoot!.querySelector('.empty')?.textContent).toContain('No results');
  });

  it('moves the active option with the arrow keys, skipping disabled ones', async () => {
    const element = create();

    await press(element, 'ArrowDown'); // opens, first option active
    const active = () => element.shadowRoot!.querySelector('.option--active .option-label')?.textContent;
    expect(active()).toBe('Free');

    await press(element, 'ArrowDown');
    expect(active()).toBe('Pro');

    await press(element, 'ArrowDown'); // Enterprise is disabled
    expect(active()).toBe('Team');

    await press(element, 'ArrowDown'); // wraps
    expect(active()).toBe('Free');

    await press(element, 'ArrowUp');
    expect(active()).toBe('Team');
  });

  it('points aria-activedescendant at the active option', async () => {
    const element = create();

    await press(element, 'ArrowDown');

    const activeId = element.shadowRoot!.querySelector('.option--active')!.getAttribute('id');
    expect(activeId).toBeTruthy();
    expect(input(element).getAttribute('aria-activedescendant')).toBe(activeId);
  });

  it('selects the active option on Enter, dispatching change and closing', async () => {
    const element = create();
    const handler = jest.fn();
    element.addEventListener('change', handler);

    await press(element, 'ArrowDown');
    await press(element, 'ArrowDown');
    await press(element, 'Enter');

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].detail).toBe('pro');
    expect(element.value).toBe('pro');
    expect(input(element).value).toBe('Pro');
    expect(input(element).getAttribute('aria-expanded')).toBe('false');
  });

  it('selects an option on click', async () => {
    const element = create();
    const handler = jest.fn();
    element.addEventListener('change', handler);

    input(element).dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await flush();
    (element.shadowRoot!.querySelectorAll('[role="option"]')[1] as HTMLElement).click();
    await flush();

    expect(handler.mock.calls[0][0].detail).toBe('pro');
  });

  it('does not select a disabled option', async () => {
    const element = create();
    const handler = jest.fn();
    element.addEventListener('change', handler);

    input(element).dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await flush();
    (element.shadowRoot!.querySelectorAll('[role="option"]')[2] as HTMLElement).click();
    await flush();

    expect(handler).not.toHaveBeenCalled();
  });

  it('does not dispatch change when the same option is chosen again', async () => {
    const element = create({ value: 'free' });
    const handler = jest.fn();
    element.addEventListener('change', handler);

    await press(element, 'ArrowDown'); // opens on the selected option
    await press(element, 'Enter');

    expect(handler).not.toHaveBeenCalled();
  });

  it('closes on Escape without changing the value, and reverts the typed text', async () => {
    const element = create({ value: 'free' });

    await type(element, 'te');
    await press(element, 'Escape');

    expect(input(element).getAttribute('aria-expanded')).toBe('false');
    expect(element.value).toBe('free');
    expect(input(element).value).toBe('Free');
  });

  it('keeps Escape from reaching an enclosing dialog while the list is open', async () => {
    const element = create();
    const outer = jest.fn();
    document.addEventListener('keydown', outer);

    await press(element, 'ArrowDown');
    await press(element, 'Escape');
    expect(outer).toHaveBeenCalledTimes(1); // only the ArrowDown

    await press(element, 'Escape'); // closed now, so it passes through
    expect(outer).toHaveBeenCalledTimes(2);

    document.removeEventListener('keydown', outer);
  });

  it('closes on blur', async () => {
    const element = create();

    await press(element, 'ArrowDown');
    input(element).dispatchEvent(new Event('blur'));
    await flush();

    expect(input(element).getAttribute('aria-expanded')).toBe('false');
  });

  it('keeps the input focused when the listbox is pressed', async () => {
    const element = create();

    await press(element, 'ArrowDown');
    const event = new MouseEvent('mousedown', { bubbles: true, cancelable: true });
    element.shadowRoot!.querySelector('[role="listbox"]')!.dispatchEvent(event);

    expect(event.defaultPrevented).toBe(true);
  });

  it('keeps the input focused when the empty message or panel padding is pressed', async () => {
    const element = create();
    await type(element, 'zzz');

    const pressed = (target: Element) => {
      const event = new MouseEvent('mousedown', { bubbles: true, cancelable: true });
      target.dispatchEvent(event);
      return event.defaultPrevented;
    };

    expect(pressed(element.shadowRoot!.querySelector('.empty')!)).toBe(true);
    expect(pressed(element.shadowRoot!.querySelector('.panel')!)).toBe(true);
  });

  it('does not open when disabled', async () => {
    const element = create({ disabled: true });

    await press(element, 'ArrowDown');

    expect(element.shadowRoot!.querySelector('[role="listbox"]')).toBeNull();
  });

  it('stays mounted through the exit animation, then unmounts', async () => {
    const animations = mockAnimations();
    const element = create();

    await press(element, 'ArrowDown');
    await press(element, 'Escape');
    await settle();

    expect(element.shadowRoot!.querySelector('.panel--closing')).not.toBeNull();

    await animations.finish();
    await settle();

    expect(element.shadowRoot!.querySelector('.panel')).toBeNull();
    animations.restore();
  });

  it('warns about and ignores reserved elementProps keys', () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const element = create({ elementProps: { role: 'textbox', tabIndex: 3 } });

    expect(input(element).getAttribute('role')).toBe('combobox');
    expect(input(element).tabIndex).toBe(3);
    expect(warn).toHaveBeenCalledTimes(1);
    warn.mockRestore();
  });

  it('renders a custom component in place of the label', async () => {
    const element = create({
      options: [
        { label: 'Plain', value: 'plain' },
        { label: 'Pro', value: 'pro', component: TestItem, componentProps: { icon: '💎', label: 'Pro' } }
      ]
    });
    input(element).dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await flush();

    const rows = element.shadowRoot!.querySelectorAll('[role="option"]');
    expect(rows[0].querySelector('.option-label')?.textContent).toBe('Plain');

    // The custom component renders inside its own shadow root.
    const host = rows[1].firstElementChild as Element & { shadowRoot: ShadowRoot };
    expect(host.shadowRoot.querySelector('.custom-item')?.getAttribute('data-icon')).toBe('💎');
    expect(rows[1].querySelector('.option-label')).toBeNull();
  });

  it('ignores Enter while an IME composition is being confirmed', async () => {
    const element = create();
    const handler = jest.fn();
    element.addEventListener('change', handler);

    await press(element, 'ArrowDown');
    input(element).dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Enter', isComposing: true, bubbles: true, composed: true, cancelable: true })
    );
    await flush();

    expect(handler).not.toHaveBeenCalled();
    expect(input(element).getAttribute('aria-expanded')).toBe('true');
  });

  it('activates an option on real pointer movement over it', async () => {
    const element = create();

    await press(element, 'ArrowDown');
    const rows = element.shadowRoot!.querySelectorAll('[role="option"]');
    rows[1].dispatchEvent(moveEvent(3, 2));
    await flush();

    expect(element.shadowRoot!.querySelector('.option--active')).toBe(rows[1]);
  });

  it('ignores a zero-movement mousemove (the one a browser fires when a row scrolls under a still pointer)', async () => {
    const element = create();

    await press(element, 'ArrowDown');
    const rows = element.shadowRoot!.querySelectorAll('[role="option"]');
    rows[1].dispatchEvent(moveEvent(0, 0));
    await flush();

    expect(element.shadowRoot!.querySelector('.option--active')).toBe(rows[0]);
  });

  it('does not let a mouseenter (a row scrolling under a still pointer) steal the active option', async () => {
    const element = create();

    await press(element, 'ArrowDown');
    const rows = element.shadowRoot!.querySelectorAll('[role="option"]');
    rows[1].dispatchEvent(new MouseEvent('mouseenter'));
    await flush();

    expect(element.shadowRoot!.querySelector('.option--active')).toBe(rows[0]);
  });

  it('renders group headings and gathers items under their group', async () => {
    const element = create({
      options: [
        { label: 'Alpha', value: 'a', group: 'Letters' },
        { label: 'One', value: '1', group: 'Numbers' },
        { label: 'Beta', value: 'b', group: 'Letters' },
        { label: 'Loose', value: 'x' }
      ]
    });

    await press(element, 'ArrowDown');

    const headings = Array.from(element.shadowRoot!.querySelectorAll('.group-label')).map((node) => node.textContent);
    expect(headings).toEqual(['Letters', 'Numbers']);
    expect(optionLabels(element)).toEqual(['Loose', 'Alpha', 'Beta', 'One']);
  });
});

describe('scoreItem', () => {
  const item = { label: 'Date Picker', value: 'dp', keywords: ['calendar'], description: 'Choose a day', group: 'Forms' };

  it('requires every term to match somewhere', () => {
    expect(scoreItem(item, ['date', 'pick'])).toBeGreaterThan(0);
    expect(scoreItem(item, ['date', 'range'])).toBe(-1);
  });

  it('ranks a label prefix above a word-start above a substring', () => {
    const prefix = scoreItem({ label: 'Table', value: 'a' }, ['tab']);
    const wordStart = scoreItem({ label: 'Data Table', value: 'b' }, ['tab']);
    const substring = scoreItem({ label: 'Stable', value: 'c' }, ['tab']);

    expect(prefix).toBeGreaterThan(wordStart);
    expect(wordStart).toBeGreaterThan(substring);
  });

  it('matches keywords, descriptions and groups, weighted below the label', () => {
    expect(scoreItem(item, ['calendar'])).toBeGreaterThan(0);
    expect(scoreItem(item, ['day'])).toBeGreaterThan(0);
    expect(scoreItem(item, ['forms'])).toBeGreaterThan(0);
    expect(scoreItem(item, ['date'])).toBeGreaterThan(scoreItem(item, ['calendar']));
  });
});
