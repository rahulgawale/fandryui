import { createElement } from 'lwc';
import FdCommand from '../command';
import TestItem from '../../searchState/__tests__/testItem';
import { mockAnimations, settle } from '../../motion/__tests__/animationMock';

const ITEMS = [
  { label: 'New file', value: 'new-file', group: 'File' },
  { label: 'Open file', value: 'open-file', group: 'File', keywords: ['browse'] },
  { label: 'Toggle theme', value: 'theme', group: 'View', description: 'Light or dark' },
  { label: 'Delete everything', value: 'delete', group: 'View', disabled: true },
  { label: 'Help', value: 'help' }
];

const flush = () => Promise.resolve();

const create = (props: Record<string, unknown> = {}) => {
  const element = createElement('fandry-command', { is: FdCommand });
  Object.assign(element, { items: ITEMS, label: 'Command palette', open: true, ...props });
  document.body.appendChild(element);
  return element;
};

const input = (element: Element) => element.shadowRoot!.querySelector('.input') as HTMLInputElement;
const labels = (element: Element) =>
  Array.from(element.shadowRoot!.querySelectorAll('[role="option"] .option-label')).map((node) => node.textContent);
const activeLabel = (element: Element) =>
  element.shadowRoot!.querySelector('.option--active .option-label')?.textContent;

const type = async (element: Element, text: string) => {
  input(element).value = text;
  input(element).dispatchEvent(new Event('input', { bubbles: true, composed: true }));
  await flush();
};

const press = async (element: Element, key: string) => {
  const event = new KeyboardEvent('keydown', { key, bubbles: true, composed: true, cancelable: true });
  input(element).dispatchEvent(event);
  await flush();
  return event;
};

describe('fandry-command', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
    document.body.style.overflow = '';
  });

  it('renders nothing while closed', () => {
    const element = create({ open: false });

    expect(element.shadowRoot!.querySelector('.panel')).toBeNull();
  });

  it('renders a modal dialog with a labelled combobox input when open', () => {
    const element = create();

    const panel = element.shadowRoot!.querySelector('.panel')!;
    expect(panel.getAttribute('role')).toBe('dialog');
    expect(panel.getAttribute('aria-modal')).toBe('true');
    expect(panel.getAttribute('aria-label')).toBe('Command palette');
    expect(input(element).getAttribute('role')).toBe('combobox');
    expect(input(element).getAttribute('aria-label')).toBe('Command palette');
  });

  it('lists ungrouped items first, then each group with its heading', () => {
    const element = create();

    const headings = Array.from(element.shadowRoot!.querySelectorAll('.group-label')).map((node) => node.textContent);
    expect(headings).toEqual(['File', 'View']);
    expect(labels(element)).toEqual(['Help', 'New file', 'Open file', 'Toggle theme', 'Delete everything']);
  });

  it('focuses the input on open', async () => {
    const element = create({ open: false });
    element.open = true;
    await flush();
    await flush();

    expect(element.shadowRoot!.activeElement).toBe(input(element));
  });

  it('filters as the user types, matching keywords and descriptions too', async () => {
    const element = create();

    await type(element, 'file');
    expect(labels(element)).toEqual(['New file', 'Open file']);

    await type(element, 'browse');
    expect(labels(element)).toEqual(['Open file']);

    await type(element, 'dark');
    expect(labels(element)).toEqual(['Toggle theme']);
  });

  it('renders a custom component in place of the label', async () => {
    const element = create({
      items: [
        { label: 'Plain', value: 'plain' },
        { label: 'Pro', value: 'pro', component: TestItem, componentProps: { icon: '💎', label: 'Pro' } }
      ]
    });
    await flush();

    const rows = element.shadowRoot!.querySelectorAll('[role="option"]');
    expect(rows[0].querySelector('.option-label')?.textContent).toBe('Plain');

    // The custom component renders inside its own shadow root.
    const host = rows[1].firstElementChild as Element & { shadowRoot: ShadowRoot };
    expect(host.shadowRoot.querySelector('.custom-item')?.getAttribute('data-icon')).toBe('💎');
    expect(rows[1].querySelector('.option-label')).toBeNull();
  });

  it('renders an empty palette, not an error, while items are still undefined', async () => {
    const element = create({ items: undefined });

    expect(element.shadowRoot!.querySelectorAll('[role="option"]').length).toBe(0);
    expect(element.shadowRoot!.querySelector('.empty')).not.toBeNull();
    await type(element, 'abc');
    expect(element.shadowRoot!.querySelector('.empty')).not.toBeNull();
  });

  it('shows the empty message when nothing matches', async () => {
    const element = create();

    await type(element, 'zzz');

    expect(element.shadowRoot!.querySelector('.empty')?.textContent).toContain('No results');
  });

  it('starts on the first result and re-targets it when the query changes', async () => {
    const element = create();
    expect(activeLabel(element)).toBe('Help');

    await press(element, 'ArrowDown');
    expect(activeLabel(element)).toBe('New file');

    await type(element, 'theme');
    expect(activeLabel(element)).toBe('Toggle theme');
  });

  it('wraps arrow navigation and skips disabled items', async () => {
    const element = create();

    await press(element, 'ArrowUp'); // wraps to the last *enabled* item
    expect(activeLabel(element)).toBe('Toggle theme');

    await press(element, 'ArrowDown'); // wraps to the first
    expect(activeLabel(element)).toBe('Help');
  });

  it('dispatches select with the value on Enter, then closes itself', async () => {
    const element = create();
    const onSelect = jest.fn();
    const onToggle = jest.fn();
    element.addEventListener('select', onSelect);
    element.addEventListener('toggle', onToggle);

    await press(element, 'ArrowDown');
    await press(element, 'Enter');

    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(onSelect.mock.calls[0][0].detail).toEqual({ value: 'new-file' });
    expect(onToggle.mock.calls[0][0].detail).toBe(false);
    expect(element.open).toBe(false);
  });

  it('selects on click, but never a disabled item', async () => {
    const element = create();
    const onSelect = jest.fn();
    element.addEventListener('select', onSelect);

    const options = element.shadowRoot!.querySelectorAll('[role="option"]');
    (options[4] as HTMLElement).click(); // Delete everything (disabled)
    await flush();
    expect(onSelect).not.toHaveBeenCalled();

    (options[3] as HTMLElement).click();
    await flush();
    expect(onSelect.mock.calls[0][0].detail).toEqual({ value: 'theme' });
  });

  it('closes on Escape and on a backdrop click, but not on a panel click', async () => {
    const element = create();
    const onToggle = jest.fn();
    element.addEventListener('toggle', onToggle);

    element.shadowRoot!.querySelector('.panel')!.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await flush();
    expect(element.open).toBe(true);

    element.shadowRoot!.querySelector('.backdrop')!.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await flush();
    expect(element.open).toBe(false);

    element.open = true;
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await flush();
    expect(element.open).toBe(false);
    expect(onToggle).toHaveBeenCalledTimes(2);
  });

  it('keeps the input focused when the panel (not the input) is pressed', async () => {
    const element = create();
    const press = (target: Element) => {
      const event = new MouseEvent('mousedown', { bubbles: true, cancelable: true });
      target.dispatchEvent(event);
      return event.defaultPrevented;
    };

    expect(press(element.shadowRoot!.querySelector('.search')!)).toBe(true);
    expect(press(element.shadowRoot!.querySelector('.listbox')!)).toBe(true);
    // The input itself keeps its default, so the caret can be placed.
    expect(press(input(element))).toBe(false);
  });

  it('ignores Enter while an IME composition is being confirmed', async () => {
    const element = create();
    const onSelect = jest.fn();
    element.addEventListener('select', onSelect);

    input(element).dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Enter', isComposing: true, bubbles: true, composed: true, cancelable: true })
    );
    await flush();

    expect(onSelect).not.toHaveBeenCalled();
    expect(element.open).toBe(true);
  });

  it('keeps Tab from leaving the input', async () => {
    const element = create();

    const event = await press(element, 'Tab');

    expect(event.defaultPrevented).toBe(true);
  });

  it('starts every opening with an empty search', async () => {
    const element = create();

    await type(element, 'file');
    element.close();
    await flush();
    element.open = true;
    await flush();

    expect(input(element).value).toBe('');
    expect(labels(element).length).toBe(ITEMS.length);
  });

  it('locks body scroll while open and restores it on close', async () => {
    const element = create({ open: false });
    document.body.style.overflow = 'auto';

    element.open = true;
    expect(document.body.style.overflow).toBe('hidden');

    element.close();
    expect(document.body.style.overflow).toBe('auto');
  });

  it('hands focus back to whatever had it before opening', async () => {
    const trigger = document.createElement('button');
    document.body.appendChild(trigger);
    trigger.focus();

    const element = create({ open: false });
    element.open = true;
    await flush();
    element.close();

    expect(document.activeElement).toBe(trigger);
  });

  it('stays mounted through the exit animation, then unmounts', async () => {
    const animations = mockAnimations();
    const element = create();
    await flush();

    element.close();
    await flush();
    await settle();
    expect(element.shadowRoot!.querySelector('.backdrop--closing')).not.toBeNull();

    await animations.finish();
    await settle();
    expect(element.shadowRoot!.querySelector('.backdrop')).toBeNull();
    animations.restore();
  });
});
