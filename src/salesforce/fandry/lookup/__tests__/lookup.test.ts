import { createElement } from 'lwc';
import FdLookup from '../lookup';
import TestItem from '../../../../core/fandry/searchState/__tests__/testItem';
import { mockAnimations, settle } from '../../../../core/fandry/motion/__tests__/animationMock';

const ACME = { id: '001A', label: 'Acme Corp', description: 'Account • Customer', objectApiName: 'Account' };
const GLOBEX = { id: '001B', label: 'Globex', description: 'Account • Prospect' };
const RESULTS = [ACME, GLOBEX];

const flush = () => Promise.resolve();

const create = (props: Record<string, unknown> = {}) => {
  const element = createElement('fandry-lookup', { is: FdLookup });
  Object.assign(element, props);
  document.body.appendChild(element);
  return element;
};

const input = (element: Element) => element.shadowRoot!.querySelector('.input') as HTMLInputElement;
const labels = (element: Element) =>
  Array.from(element.shadowRoot!.querySelectorAll('[role="option"] .option-label')).map((node) => node.textContent);

const click = async (element: Element) => {
  input(element).dispatchEvent(new MouseEvent('click', { bubbles: true }));
  await flush();
};

const type = async (element: Element, text: string) => {
  input(element).value = text;
  input(element).dispatchEvent(new Event('input', { bubbles: true, composed: true }));
  await flush();
};

const press = async (element: Element, key: string, init: KeyboardEventInit = {}) => {
  input(element).dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true, composed: true, cancelable: true, ...init }));
  await flush();
};

describe('fandry-lookup', () => {
  afterEach(() => {
    jest.useRealTimers();
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders a combobox input and no panel until opened', () => {
    const element = create({ label: 'Account' });

    expect(input(element).getAttribute('role')).toBe('combobox');
    expect(input(element).getAttribute('aria-expanded')).toBe('false');
    expect(element.shadowRoot!.querySelector('.panel')).toBeNull();
    expect(element.value).toBe('');
  });

  describe('search event', () => {
    it('fires straight away when the list is opened, with the current text', async () => {
      const element = create();
      const handler = jest.fn();
      element.addEventListener('search', handler);

      await click(element);

      expect(handler).toHaveBeenCalledTimes(1);
      expect(handler.mock.calls[0][0].detail).toEqual({ query: '' });
    });

    it('fires when opened from the keyboard', async () => {
      const element = create();
      const handler = jest.fn();
      element.addEventListener('search', handler);

      await press(element, 'ArrowDown');

      expect(handler).toHaveBeenCalledTimes(1);
    });

    it('waits for typing to pause, and only reports the last text', async () => {
      jest.useFakeTimers();
      const element = create();
      const handler = jest.fn();
      element.addEventListener('search', handler);

      await type(element, 'a');
      await type(element, 'ac');
      await type(element, 'acm');
      expect(handler).not.toHaveBeenCalled();

      jest.advanceTimersByTime(300);

      expect(handler).toHaveBeenCalledTimes(1);
      expect(handler.mock.calls[0][0].detail).toEqual({ query: 'acm' });
    });

    it('drops a pending search when the list closes', async () => {
      jest.useFakeTimers();
      const element = create();
      const handler = jest.fn();
      element.addEventListener('search', handler);

      await type(element, 'ac');
      await press(element, 'Escape');
      jest.advanceTimersByTime(300);

      expect(handler).not.toHaveBeenCalled();
    });
  });

  describe('results', () => {
    it('lists the consumer\'s results, with descriptions', async () => {
      const element = create({ results: RESULTS });

      await click(element);

      expect(labels(element)).toEqual(['Acme Corp', 'Globex']);
      expect(element.shadowRoot!.querySelector('.option-description')?.textContent).toBe('Account • Customer');
    });

    it('shows results as given, even when they don\'t contain the typed text', async () => {
      const element = create({ results: RESULTS });

      await type(element, 'zzz-not-in-any-label');

      expect(labels(element)).toEqual(['Acme Corp', 'Globex']);
    });

    it('renders no panel for an empty query with nothing to offer', async () => {
      const element = create();

      await click(element);

      expect(element.shadowRoot!.querySelector('.panel')).toBeNull();
      expect(input(element).getAttribute('aria-expanded')).toBe('false');
    });

    it('shows the empty message for a query with no matches', async () => {
      const element = create({ results: [] });

      await type(element, 'zzz');

      expect(element.shadowRoot!.querySelector('.empty')?.textContent).toContain('No records found');
    });

    it('shows a searching indicator, and no empty message, while loading', async () => {
      const element = create({ loading: true });

      await type(element, 'ac');

      expect(element.shadowRoot!.querySelector('fandry-spinner')).not.toBeNull();
      expect(element.shadowRoot!.querySelector('.empty')).toBeNull();
      expect(element.shadowRoot!.querySelector('[role="listbox"]')!.getAttribute('aria-busy')).toBe('true');
    });

    it('updates the list when new results arrive', async () => {
      const element = create({ results: [ACME] });
      await click(element);

      element.results = RESULTS;
      await flush();

      expect(labels(element)).toEqual(['Acme Corp', 'Globex']);
    });

    it('renders a record\'s own component in place of the label', async () => {
      const element = create({
        results: [{ ...ACME, component: TestItem, componentProps: { icon: '🏢', label: 'Acme Corp' } }]
      });

      await click(element);

      const row = element.shadowRoot!.querySelector('[role="option"]')!;
      const host = row.firstElementChild as Element & { shadowRoot: ShadowRoot };
      expect(host.shadowRoot.querySelector('.custom-item')?.getAttribute('data-icon')).toBe('🏢');
    });
  });

  describe('selecting', () => {
    it('picks the active result on Enter, dispatching change with the record', async () => {
      const element = create({ results: RESULTS });
      const handler = jest.fn();
      element.addEventListener('change', handler);

      await click(element);
      await press(element, 'ArrowDown');
      await press(element, 'Enter');

      expect(handler).toHaveBeenCalledTimes(1);
      const detail = handler.mock.calls[0][0].detail;
      expect(detail.value).toBe('001B');
      expect(detail.record.label).toBe('Globex');
      expect(element.value).toBe('001B');
    });

    it('returns the whole record, extra fields included', async () => {
      const element = create({ results: RESULTS });
      const handler = jest.fn();
      element.addEventListener('change', handler);

      await click(element);
      await press(element, 'Enter');

      expect(handler.mock.calls[0][0].detail.record.objectApiName).toBe('Account');
    });

    it('picks on click', async () => {
      const element = create({ results: RESULTS });
      const handler = jest.fn();
      element.addEventListener('change', handler);

      await click(element);
      (element.shadowRoot!.querySelectorAll('[role="option"]')[0] as HTMLElement).click();
      await flush();

      expect(handler.mock.calls[0][0].detail.value).toBe('001A');
    });

    it('never picks a disabled record', async () => {
      const element = create({ results: [{ ...ACME, disabled: true }] });
      const handler = jest.fn();
      element.addEventListener('change', handler);

      await click(element);
      (element.shadowRoot!.querySelector('[role="option"]') as HTMLElement).click();
      await press(element, 'Enter');

      expect(handler).not.toHaveBeenCalled();
    });

    it('replaces the input with the record as the field\'s value, and moves focus to its clear button', async () => {
      const element = create({ results: RESULTS });

      await click(element);
      await press(element, 'Enter');
      await flush();

      expect(element.shadowRoot!.querySelector('.input')).toBeNull();
      expect(element.shadowRoot!.querySelector('.selected-label')?.textContent).toBe('Acme Corp');
      // Shown as the value, not as a chip (a chip would suggest room for more).
      expect(element.shadowRoot!.querySelector('.pill')).toBeNull();
      const clear = element.shadowRoot!.querySelector('.clear') as HTMLElement;
      expect(clear.getAttribute('aria-label')).toBe('Clear Acme Corp');
      expect(element.shadowRoot!.activeElement).toBe(clear);
    });

    it('shows a record supplied up front as the value', () => {
      const element = create({ record: ACME });

      expect(element.shadowRoot!.querySelector('.selected-label')?.textContent).toBe('Acme Corp');
      expect(element.value).toBe('001A');
    });

    it('ignores Enter while an IME composition is being confirmed', async () => {
      const element = create({ results: RESULTS });
      const handler = jest.fn();
      element.addEventListener('change', handler);

      await click(element);
      await press(element, 'Enter', { isComposing: true });

      expect(handler).not.toHaveBeenCalled();
    });
  });

  describe('clearing', () => {
    it('clears the record, dispatching change with a null record, and refocuses the input', async () => {
      const element = create({ record: ACME });
      const handler = jest.fn();
      element.addEventListener('change', handler);

      (element.shadowRoot!.querySelector('.clear') as HTMLElement).click();
      await flush();
      await flush();

      expect(handler.mock.calls[0][0].detail).toEqual({ value: '', record: null });
      expect(element.value).toBe('');
      expect(element.shadowRoot!.querySelector('.selected-label')).toBeNull();
      expect(element.shadowRoot!.activeElement).toBe(input(element));
    });

    it('starts the next search from an empty field', async () => {
      const element = create({ results: RESULTS });

      await click(element);
      await press(element, 'Enter');
      (element.shadowRoot!.querySelector('.clear') as HTMLElement).click();
      await flush();

      expect(input(element).value).toBe('');
    });
  });

  describe('multiple', () => {
    const chipLabels = (element: Element) =>
      Array.from(element.shadowRoot!.querySelectorAll('.pill-label')).map((node) => node.textContent);

    it('shows the selected records as chips, with the input still there', () => {
      const element = create({ multiple: true, records: [ACME, GLOBEX] });

      expect(chipLabels(element)).toEqual(['Acme Corp', 'Globex']);
      expect(input(element)).not.toBeNull();
      expect(element.shadowRoot!.querySelector('.selected-label')).toBeNull();
    });

    it('marks the listbox multiselectable', async () => {
      const element = create({ multiple: true, results: RESULTS });

      await click(element);

      expect(element.shadowRoot!.querySelector('[role="listbox"]')!.getAttribute('aria-multiselectable')).toBe('true');
    });

    it('adds a pick as a chip, keeps the list open and focused, and clears the text', async () => {
      const element = create({ multiple: true, results: RESULTS });
      const onChange = jest.fn();
      element.addEventListener('change', onChange);

      await type(element, 'ac');
      await press(element, 'Enter');
      await flush();

      expect(chipLabels(element)).toEqual(['Acme Corp']);
      expect(onChange.mock.calls[0][0].detail.values).toEqual(['001A']);
      expect(onChange.mock.calls[0][0].detail.records[0].label).toBe('Acme Corp');
      expect(input(element).value).toBe('');
      expect(input(element).getAttribute('aria-expanded')).toBe('true');
    });

    it('asks for a fresh list after each pick, with an empty query', async () => {
      jest.useFakeTimers();
      const element = create({ multiple: true, results: RESULTS });
      const onSearch = jest.fn();

      await click(element);
      element.addEventListener('search', onSearch);
      await press(element, 'Enter');

      expect(onSearch).toHaveBeenCalledTimes(1);
      expect(onSearch.mock.calls[0][0].detail).toEqual({ query: '' });
    });

    it('does not offer a record that is already selected', async () => {
      const element = create({ multiple: true, results: RESULTS, records: [ACME] });

      await click(element);

      expect(labels(element)).toEqual(['Globex']);
    });

    it('lets the consumer pick several in a row', async () => {
      const element = create({ multiple: true, results: RESULTS });
      const onChange = jest.fn();
      element.addEventListener('change', onChange);

      await click(element);
      await press(element, 'Enter');
      await flush();
      await press(element, 'Enter'); // Acme is gone from the list, so Globex is now first
      await flush();

      expect(chipLabels(element)).toEqual(['Acme Corp', 'Globex']);
      expect(onChange.mock.calls[1][0].detail.values).toEqual(['001A', '001B']);
    });

    it('removes a chip with its button, refocuses the input and reports the change', async () => {
      const element = create({ multiple: true, records: [ACME, GLOBEX] });
      const onChange = jest.fn();
      element.addEventListener('change', onChange);

      const remove = element.shadowRoot!.querySelectorAll('.pill-remove')[0] as HTMLElement;
      expect(remove.getAttribute('aria-label')).toBe('Remove Acme Corp');
      remove.click();
      await flush();
      await flush();

      expect(chipLabels(element)).toEqual(['Globex']);
      expect(onChange.mock.calls[0][0].detail.values).toEqual(['001B']);
      expect(element.shadowRoot!.activeElement).toBe(input(element));
    });

    it('removes the last chip on Backspace in an empty field, but not while there is text', async () => {
      const element = create({ multiple: true, records: [ACME, GLOBEX] });
      const onChange = jest.fn();
      element.addEventListener('change', onChange);

      await type(element, 'gl');
      await press(element, 'Backspace');
      expect(onChange).not.toHaveBeenCalled();
      expect(chipLabels(element)).toEqual(['Acme Corp', 'Globex']);

      await type(element, '');
      await press(element, 'Backspace');
      expect(chipLabels(element)).toEqual(['Acme Corp']);
      expect(onChange.mock.calls[0][0].detail.values).toEqual(['001A']);
    });

    it('shows Clear all only when something is selected, and clears everything', async () => {
      const element = create({ multiple: true });
      expect(element.shadowRoot!.querySelector('.clear-all')).toBeNull();

      element.records = [ACME, GLOBEX];
      await flush();
      const onChange = jest.fn();
      element.addEventListener('change', onChange);

      (element.shadowRoot!.querySelector('.clear-all') as HTMLElement).click();
      await flush();
      await flush();

      expect(chipLabels(element)).toEqual([]);
      expect(onChange.mock.calls[0][0].detail).toEqual({ values: [], records: [] });
      expect(element.shadowRoot!.activeElement).toBe(input(element));
      expect(element.shadowRoot!.querySelector('.clear-all')).toBeNull();
    });

    it('disables the chips\' buttons and Clear all when disabled', () => {
      const element = create({ multiple: true, records: [ACME], disabled: true });

      expect((element.shadowRoot!.querySelector('.pill-remove') as HTMLButtonElement).disabled).toBe(true);
      expect((element.shadowRoot!.querySelector('.clear-all') as HTMLButtonElement).disabled).toBe(true);
    });

    it('does not offer a single-select value or clear button', () => {
      const element = create({ multiple: true, records: [ACME], record: GLOBEX });

      expect(element.value).toBe('');
      expect(element.shadowRoot!.querySelector('.clear')).toBeNull();
    });

    it('is single-select unless asked', async () => {
      const element = create({ results: RESULTS });

      await click(element);
      await press(element, 'Enter');

      expect(element.shadowRoot!.querySelector('[role="listbox"]')).toBeNull();
      expect(element.shadowRoot!.querySelector('.clear-all')).toBeNull();
    });
  });

  describe('dismissing and disabling', () => {
    it('closes on Escape, keeping Escape from an enclosing dialog while open', async () => {
      const element = create({ results: RESULTS });
      const outer = jest.fn();
      document.addEventListener('keydown', outer);

      await click(element);
      await press(element, 'Escape');
      expect(input(element).getAttribute('aria-expanded')).toBe('false');
      expect(outer).toHaveBeenCalledTimes(0);

      await press(element, 'Escape'); // closed now, so it passes through
      expect(outer).toHaveBeenCalledTimes(1);

      document.removeEventListener('keydown', outer);
    });

    it('closes on blur', async () => {
      const element = create({ results: RESULTS });

      await click(element);
      input(element).dispatchEvent(new Event('blur'));
      await flush();

      expect(input(element).getAttribute('aria-expanded')).toBe('false');
    });

    it('does not open, or search, when disabled', async () => {
      const element = create({ results: RESULTS, disabled: true });
      const handler = jest.fn();
      element.addEventListener('search', handler);

      await click(element);

      expect(element.shadowRoot!.querySelector('.panel')).toBeNull();
      expect(handler).not.toHaveBeenCalled();
    });

    it('disables the clear button when disabled', () => {
      const element = create({ record: ACME, disabled: true });

      expect((element.shadowRoot!.querySelector('.clear') as HTMLButtonElement).disabled).toBe(true);
    });

    it('stays mounted through the exit animation, then unmounts', async () => {
      const animations = mockAnimations();
      const element = create({ results: RESULTS });

      await click(element);
      await press(element, 'Escape');
      await settle();
      expect(element.shadowRoot!.querySelector('.panel--closing')).not.toBeNull();

      await animations.finish();
      await settle();
      expect(element.shadowRoot!.querySelector('.panel')).toBeNull();
      animations.restore();
    });
  });

  it('warns about and ignores reserved elementProps keys', () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const element = create({ elementProps: { role: 'textbox', tabIndex: 4 } });

    expect(input(element).getAttribute('role')).toBe('combobox');
    expect(input(element).tabIndex).toBe(4);
    expect(warn).toHaveBeenCalledTimes(1);
    warn.mockRestore();
  });
});
