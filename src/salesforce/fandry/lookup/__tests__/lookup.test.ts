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

    it('shows the empty message once a search for the query has come back empty', async () => {
      jest.useFakeTimers();
      const element = create({ results: [] });

      await type(element, 'zzz');
      jest.advanceTimersByTime(300); // `search` has fired; nothing is loading
      await flush();

      expect(element.shadowRoot!.querySelector('.empty')?.textContent).toContain('No records found');
    });

    it('does not claim "No records found" (it says Searching) before the search has even fired', async () => {
      jest.useFakeTimers();
      const element = create({ results: [] });

      await type(element, 'zzz');

      expect(element.shadowRoot!.querySelector('.empty')).toBeNull();
      expect(element.shadowRoot!.querySelector('fandry-spinner')).not.toBeNull();
      expect(element.shadowRoot!.querySelector('[role="listbox"]')!.getAttribute('aria-busy')).toBe('true');
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

    it('does nothing when the chosen record\'s label is clicked (there is no input to open)', async () => {
      const element = create({ record: ACME });
      const onSearch = jest.fn();
      element.addEventListener('search', onSearch);

      (element.shadowRoot!.querySelector('.selected-label') as HTMLElement).click();
      (element.shadowRoot!.querySelector('.field') as HTMLElement).click();
      await flush();

      expect(onSearch).not.toHaveBeenCalled();

      // ...so clearing later opens nothing on its own.
      (element.shadowRoot!.querySelector('.clear') as HTMLElement).click();
      await flush();
      await flush();
      expect(element.shadowRoot!.querySelector('.panel')).toBeNull();
      expect(input(element).getAttribute('aria-expanded')).toBe('false');
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

    it('is single-select unless asked', async () => {
      const element = create({ results: RESULTS });

      await click(element);
      await press(element, 'Enter');

      expect(element.shadowRoot!.querySelector('[role="listbox"]')).toBeNull();
      expect(element.shadowRoot!.querySelector('.clear-all')).toBeNull();
    });
  });

  describe('value', () => {
    const UNKNOWN = 'a-001X';

    // The `resolve` listener must be attached before the element connects: a
    // value set up front is asked about on the very first render.
    const build = (props: Record<string, unknown>) => {
      const element = createElement('fandry-lookup', { is: FdLookup });
      const onResolve = jest.fn();
      element.addEventListener('resolve', onResolve);
      Object.assign(element, props);
      document.body.appendChild(element);
      return { element, onResolve };
    };
    const shown = (element: Element) => element.shadowRoot!.querySelector('.selected-label');
    const chipTexts = (element: Element) =>
      Array.from(element.shadowRoot!.querySelectorAll('.pill-label')).map((node) => node.textContent);

    describe('single', () => {
      it('renders an id by finding its record in results, without asking', () => {
        const { element, onResolve } = build({ value: '001A', results: RESULTS });

        expect(shown(element)?.textContent).toBe('Acme Corp');
        expect(shown(element)!.classList.contains('selected-label--unresolved')).toBe(false);
        expect(onResolve).not.toHaveBeenCalled();
      });

      it('renders an id by finding its record in `record`, without asking', () => {
        const { element, onResolve } = build({ value: '001A', record: ACME });

        expect(shown(element)?.textContent).toBe('Acme Corp');
        expect(onResolve).not.toHaveBeenCalled();
      });

      it('shows an unknown id as itself, muted, and asks for it once', async () => {
        const { element, onResolve } = build({ value: UNKNOWN, label: 'Account' });

        expect(shown(element)?.textContent).toBe(UNKNOWN);
        expect(shown(element)!.classList.contains('selected-label--unresolved')).toBe(true);
        expect(onResolve).toHaveBeenCalledTimes(1);
        expect(onResolve.mock.calls[0][0].detail).toEqual({ values: [UNKNOWN] });

        // Re-rendering (the label is in the template) must not ask again.
        element.label = 'Accounts';
        await flush();
        expect(element.shadowRoot!.querySelector('.label')!.textContent).toContain('Accounts');
        expect(onResolve).toHaveBeenCalledTimes(1);
      });

      it('names the id once the consumer supplies the record, and does not ask again', async () => {
        const { element, onResolve } = build({ value: '001A' });
        expect(shown(element)?.textContent).toBe('001A');

        element.record = ACME;
        await flush();

        expect(shown(element)?.textContent).toBe('Acme Corp');
        expect(shown(element)!.classList.contains('selected-label--unresolved')).toBe(false);
        expect(onResolve).toHaveBeenCalledTimes(1);
      });

      it('also names it when the record shows up in results later', async () => {
        const { element } = build({ value: '001B' });

        element.results = RESULTS;
        await flush();

        expect(shown(element)?.textContent).toBe('Globex');
      });

      it('labels the clear button after the shown name, or the id while unresolved', async () => {
        const { element } = build({ value: '001A' });
        expect(element.shadowRoot!.querySelector('.clear')!.getAttribute('aria-label')).toBe('Clear 001A');

        element.record = ACME;
        await flush();
        expect(element.shadowRoot!.querySelector('.clear')!.getAttribute('aria-label')).toBe('Clear Acme Corp');
      });

      it('reads back the id, before and after the user picks, and after they clear', async () => {
        const { element } = build({ value: '001A', results: RESULTS });
        expect(element.value).toBe('001A');
        expect(element.record.label).toBe('Acme Corp');

        (element.shadowRoot!.querySelector('.clear') as HTMLElement).click();
        await flush();
        expect(element.value).toBe('');
        expect(element.record).toBeNull();

        await click(element);
        await press(element, 'ArrowDown');
        await press(element, 'Enter');
        expect(element.value).toBe('001B');
      });

      it('clears an unresolved id, reporting a null record', async () => {
        const { element } = build({ value: UNKNOWN });
        const onChange = jest.fn();
        element.addEventListener('change', onChange);

        (element.shadowRoot!.querySelector('.clear') as HTMLElement).click();
        await flush();

        expect(onChange.mock.calls[0][0].detail).toEqual({ value: '', record: null });
      });

      it('reports the id and record on change after a pick', async () => {
        const { element } = build({ value: '', results: RESULTS });
        const onChange = jest.fn();
        element.addEventListener('change', onChange);

        await click(element);
        await press(element, 'Enter');

        expect(onChange.mock.calls[0][0].detail.value).toBe('001A');
        expect(onChange.mock.calls[0][0].detail.record.label).toBe('Acme Corp');
      });

      it('clears when value is set to empty, null or undefined', async () => {
        for (const empty of ['', null, undefined]) {
          const { element } = build({ value: '001A', results: RESULTS });
          element.value = empty;
          await flush();
          expect(shown(element)).toBeNull();
          expect(input(element)).not.toBeNull();
        }
      });

      it('asks again when value changes to a different unknown id', async () => {
        const { element, onResolve } = build({ value: UNKNOWN });

        element.value = 'a-001Y';
        await flush();

        expect(onResolve).toHaveBeenCalledTimes(2);
        expect(onResolve.mock.calls[1][0].detail).toEqual({ values: ['a-001Y'] });
      });

      it('ignores extra ids in single mode', () => {
        const { element } = build({ value: ['001A', '001B'], results: RESULTS });

        expect(shown(element)?.textContent).toBe('Acme Corp');
        expect(element.value).toBe('001A');
      });

      it('lets value decide what is selected: a record for some other id is ignored', async () => {
        const { element } = build({ value: '001A', results: RESULTS });

        element.record = GLOBEX; // value said 001A; this only supplies names
        await flush();

        expect(shown(element)?.textContent).toBe('Acme Corp');
        expect(element.value).toBe('001A');
      });

      it('does not ask about an empty value', () => {
        const { onResolve } = build({ value: '' });

        expect(onResolve).not.toHaveBeenCalled();
      });

      it('agrees with record when both are bound, in either order', () => {
        const a = build({ value: '001A', record: ACME });
        const b = build({ record: ACME, value: '001A' });

        for (const { element, onResolve } of [a, b]) {
          expect(shown(element)?.textContent).toBe('Acme Corp');
          expect(onResolve).not.toHaveBeenCalled();
        }
      });
    });

    describe('multiple', () => {
      it('renders ids as chips, naming each from records or results', () => {
        const { element, onResolve } = build({
          multiple: true,
          value: ['001A', '001B'],
          records: [ACME],
          results: [GLOBEX]
        });

        expect(chipTexts(element)).toEqual(['Acme Corp', 'Globex']);
        expect(onResolve).not.toHaveBeenCalled();
      });

      it('asks only for the ids it cannot name, in one event', () => {
        const { element, onResolve } = build({ multiple: true, value: ['001A', UNKNOWN, 'a-001Y'], records: [ACME] });

        expect(chipTexts(element)).toEqual(['Acme Corp', UNKNOWN, 'a-001Y']);
        const muted = element.shadowRoot!.querySelectorAll('.pill-label--unresolved');
        expect(muted.length).toBe(2);
        expect(onResolve).toHaveBeenCalledTimes(1);
        expect(onResolve.mock.calls[0][0].detail).toEqual({ values: [UNKNOWN, 'a-001Y'] });
      });

      it('does not ask again just because it re-rendered', async () => {
        const { element, onResolve } = build({ multiple: true, value: [UNKNOWN] });

        element.placeholder = 'Search'; // rendered on the input
        await flush();

        expect(input(element).getAttribute('placeholder')).toBe('Search');
        expect(onResolve).toHaveBeenCalledTimes(1);
      });

      it('names the ids as the consumer supplies their records, without asking again', async () => {
        const { element, onResolve } = build({ multiple: true, value: ['001A', '001B'] });
        expect(chipTexts(element)).toEqual(['001A', '001B']);

        element.records = [ACME, GLOBEX];
        await flush();

        expect(chipTexts(element)).toEqual(['Acme Corp', 'Globex']);
        expect(element.shadowRoot!.querySelectorAll('.pill-label--unresolved').length).toBe(0);
        expect(onResolve).toHaveBeenCalledTimes(1);
      });

      it('is independent of attribute order: multiple may be set after value', () => {
        const { element } = build({ value: ['001A', '001B'], records: [ACME, GLOBEX], multiple: true });

        expect(chipTexts(element)).toEqual(['Acme Corp', 'Globex']);
      });

      it('reads back the ids as an array, updated on pick, removal and clear all', async () => {
        const { element } = build({ multiple: true, value: ['001A'], records: [ACME], results: RESULTS });
        expect(element.value).toEqual(['001A']);

        await click(element);
        await press(element, 'Enter'); // Acme is hidden, so this picks Globex
        await flush();
        expect(element.value).toEqual(['001A', '001B']);
        expect(element.records.map((record: { id: string }) => record.id)).toEqual(['001A', '001B']);

        (element.shadowRoot!.querySelectorAll('.pill-remove')[0] as HTMLElement).click();
        await flush();
        expect(element.value).toEqual(['001B']);

        (element.shadowRoot!.querySelector('.clear-all') as HTMLElement).click();
        await flush();
        expect(element.value).toEqual([]);
      });

      it('does not offer an id that is only selected by value (no record yet)', async () => {
        const { element } = build({ multiple: true, value: ['001A'], results: RESULTS });

        await click(element);

        expect(labels(element)).toEqual(['Globex']);
      });

      it('lets an unresolved chip be removed, and reports the remaining ids', async () => {
        const { element } = build({ multiple: true, value: ['001A', UNKNOWN], records: [ACME] });
        const onChange = jest.fn();
        element.addEventListener('change', onChange);

        const remove = element.shadowRoot!.querySelectorAll('.pill-remove')[1] as HTMLElement;
        expect(remove.getAttribute('aria-label')).toBe(`Remove ${UNKNOWN}`);
        remove.click();
        await flush();

        expect(onChange.mock.calls[0][0].detail.values).toEqual(['001A']);
        expect(chipTexts(element)).toEqual(['Acme Corp']);
      });

      it('reports every id on change, including ones still unresolved, but only resolved records', async () => {
        const { element } = build({ multiple: true, value: ['001A', UNKNOWN], records: [ACME], results: [GLOBEX] });
        const onChange = jest.fn();
        element.addEventListener('change', onChange);

        await click(element);
        await press(element, 'Enter'); // picks Globex

        const detail = onChange.mock.calls[0][0].detail;
        expect(detail.values).toEqual(['001A', UNKNOWN, '001B']);
        expect(detail.records.map((record: { id: string }) => record.id)).toEqual(['001A', '001B']);
      });

      it('takes Backspace to remove the last chip, resolved or not', async () => {
        const { element } = build({ multiple: true, value: ['001A', UNKNOWN], records: [ACME] });

        await press(element, 'Backspace');

        expect(element.value).toEqual(['001A']);
      });

      it('does not re-ask, or reset the chips, when the consumer echoes value back after a change', async () => {
        const { element, onResolve } = build({ multiple: true, value: ['001A'], records: [ACME], results: RESULTS });

        await click(element);
        await press(element, 'Enter');
        await flush();
        const reported = element.value;
        element.value = [...reported]; // what a `value={ids}` binding does after `onchange`
        await flush();

        expect(chipTexts(element)).toEqual(['Acme Corp', 'Globex']);
        expect(onResolve).not.toHaveBeenCalled();
      });

      it('asks again for an id that was removed and later set again', async () => {
        const { element, onResolve } = build({ multiple: true, value: [UNKNOWN] });
        expect(onResolve).toHaveBeenCalledTimes(1);

        element.value = [];
        await flush();
        element.value = [UNKNOWN];
        await flush();

        expect(onResolve).toHaveBeenCalledTimes(2);
      });

      it('accepts a lone string, null and undefined as value', async () => {
        const { element } = build({ multiple: true, value: '001A', records: [ACME] });
        expect(chipTexts(element)).toEqual(['Acme Corp']);

        element.value = null;
        await flush();
        expect(chipTexts(element)).toEqual([]);
        element.value = undefined;
        await flush();
        expect(element.value).toEqual([]);
      });
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

    it('does not change what the fading panel says when dismissed while a search is pending', async () => {
      jest.useFakeTimers();
      const animations = mockAnimations();
      const element = create({ results: [] });

      await type(element, 'zzz');
      jest.advanceTimersByTime(300); // that search came back empty
      await flush();
      expect(element.shadowRoot!.querySelector('.empty')).not.toBeNull();

      await type(element, 'zzzz'); // a new search is now pending
      await press(element, 'Escape');
      await settle();

      // Still fading out: it must not flip from "Searching…" to "No records found".
      expect(element.shadowRoot!.querySelector('.panel--closing')).not.toBeNull();
      expect(element.shadowRoot!.querySelector('.empty')).toBeNull();
      expect(element.shadowRoot!.querySelector('fandry-spinner')).not.toBeNull();

      await animations.finish();
      animations.restore();
    });

    it('reopens cleanly after being dismissed mid-search', async () => {
      jest.useFakeTimers();
      const element = create({ results: [] });
      const onSearch = jest.fn();
      element.addEventListener('search', onSearch);

      await type(element, 'zzz');
      await press(element, 'Escape'); // dropped before it fired
      jest.advanceTimersByTime(300);
      expect(onSearch).not.toHaveBeenCalled();

      await click(element); // reopening asks straight away, and clears "pending"
      expect(onSearch).toHaveBeenCalledTimes(1);
      await flush();
      expect(element.shadowRoot!.querySelector('.empty')).not.toBeNull();
    });

    it('shows the searching row below the results, so starting a search never pushes them down', async () => {
      const element = create({ results: RESULTS, loading: true });

      await click(element);

      const listbox = element.shadowRoot!.querySelector('[role="listbox"]')!;
      const status = element.shadowRoot!.querySelector('.status')!;
      expect(listbox.compareDocumentPosition(status) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    });

    it('gives the clear and remove buttons an explicit tabindex (Safari skips bare buttons)', async () => {
      const single = create({ record: ACME });
      expect(single.shadowRoot!.querySelector('.clear')!.getAttribute('tabindex')).toBe('0');

      const multi = create({ multiple: true, records: [ACME] });
      expect(multi.shadowRoot!.querySelector('.pill-remove')!.getAttribute('tabindex')).toBe('0');
      expect(multi.shadowRoot!.querySelector('.clear-all')!.getAttribute('tabindex')).toBe('0');
    });

    it('keeps the input focused when any part of the panel is pressed, not only the listbox', async () => {
      const element = create({ results: [], loading: true });
      await type(element, 'ac');

      const pressed = (target: Element) => {
        const event = new MouseEvent('mousedown', { bubbles: true, cancelable: true });
        target.dispatchEvent(event);
        return event.defaultPrevented;
      };

      expect(pressed(element.shadowRoot!.querySelector('.status')!)).toBe(true);
      expect(pressed(element.shadowRoot!.querySelector('.panel')!)).toBe(true);
      expect(pressed(element.shadowRoot!.querySelector('[role="listbox"]')!)).toBe(true);
    });

    it('lets Escape through to an enclosing dialog when the open list has nothing to show', async () => {
      const element = create({ results: [] }); // empty query, no recents: open, but no panel
      const outer = jest.fn();
      document.addEventListener('keydown', outer);

      await click(element);
      expect(element.shadowRoot!.querySelector('.panel')).toBeNull();
      await press(element, 'Escape');

      expect(outer).toHaveBeenCalledTimes(1);
      expect(input(element).getAttribute('aria-expanded')).toBe('false');
      document.removeEventListener('keydown', outer);
    });

    it('does not blur the input when the field\'s own padding is pressed (and so never reopens or re-searches)', async () => {
      const element = create({ multiple: true, records: [ACME], results: RESULTS });
      const onSearch = jest.fn();
      element.addEventListener('search', onSearch);

      await click(element);
      expect(onSearch).toHaveBeenCalledTimes(1);

      const pressed = (target: Element) => {
        const event = new MouseEvent('mousedown', { bubbles: true, cancelable: true });
        target.dispatchEvent(event);
        return event.defaultPrevented;
      };
      expect(pressed(element.shadowRoot!.querySelector('.field')!)).toBe(true);
      expect(pressed(element.shadowRoot!.querySelector('.tokens')!)).toBe(true);
      // Controls keep their own default: the input places the caret, buttons press.
      expect(pressed(input(element))).toBe(false);
      expect(pressed(element.shadowRoot!.querySelector('.pill-remove')!)).toBe(false);

      (element.shadowRoot!.querySelector('.field') as HTMLElement).click(); // list already open
      await flush();
      expect(onSearch).toHaveBeenCalledTimes(1);
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

  it('renders an empty lookup, not an error, while results and records are still undefined', async () => {
    // A render that throws leaves the previous DOM in place (and LWC only
    // logs it), so "no exception" proves nothing here: assert on something
    // only a *successful* render of the empty state can produce.
    jest.useFakeTimers();

    const single = create({ results: undefined });
    await type(single, 'zzz');
    jest.advanceTimersByTime(300); // `search` fired, nothing came back
    await flush();
    expect(single.shadowRoot!.querySelector('.empty')?.textContent).toContain('No records found');

    const multi = create({ multiple: true, results: null, records: undefined });
    expect(multi.shadowRoot!.querySelector('.input')).not.toBeNull(); // initial render got past `chips`
    await type(multi, 'zzz');
    jest.advanceTimersByTime(300);
    await flush();
    expect(multi.shadowRoot!.querySelector('.empty')).not.toBeNull();

    await press(multi, 'Backspace'); // nothing to remove: `slice` on undefined must not run
    expect(multi.shadowRoot!.querySelectorAll('.pill').length).toBe(0);
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

describe('fandry-lookup text', () => {
  afterEach(() => {
    while (document.body.firstChild) document.body.removeChild(document.body.firstChild);
  });

  it('names its remove and clear buttons from messages', async () => {
    const multi = create({
      multiple: true,
      value: [ACME.id],
      records: [ACME],
      messages: { remove: (name: string) => `${name} entfernen` }
    });
    const single = create({
      value: ACME.id,
      record: ACME,
      messages: { clear: (name: string) => `${name} leeren` }
    });
    await flush();
    await flush();

    expect(multi.shadowRoot!.querySelector('.pill-remove')!.getAttribute('aria-label')).toBe('Acme Corp entfernen');
    expect(single.shadowRoot!.querySelector('.clear')!.getAttribute('aria-label')).toBe('Acme Corp leeren');
  });

  it('makes "Clear all" a slot, with the English text as fallback', async () => {
    const element = create({ multiple: true, value: [ACME.id], records: [ACME] });
    await flush();
    await flush();

    expect(element.shadowRoot!.querySelector('.clear-all slot[name="clear-all"]')!.textContent).toBe('Clear all');
  });
});
