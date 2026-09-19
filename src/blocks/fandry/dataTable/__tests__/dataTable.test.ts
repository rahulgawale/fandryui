import { createElement } from 'lwc';
import FdDataTable from '../dataTable';

const STATUS_OPTIONS = [
  { label: 'Active', value: 'active' },
  { label: 'Pending', value: 'pending' }
];

const COLUMNS = [
  {
    id: 'name',
    accessorKey: 'name',
    header: 'Name',
    meta: { editor: { type: 'text' } }
  },
  {
    id: 'seats',
    accessorKey: 'seats',
    header: 'Seats',
    meta: { editor: { type: 'number' } }
  },
  {
    id: 'status',
    accessorKey: 'status',
    header: 'Status',
    meta: {
      filter: { options: STATUS_OPTIONS },
      editor: { type: 'select', options: STATUS_OPTIONS },
      badges: { active: 'success', pending: 'warning' }
    }
  }
];

const DATA = [
  { id: 1, name: 'Acme', seats: 10, status: 'active' },
  { id: 2, name: 'Globex', seats: 4, status: 'pending' },
  { id: 3, name: 'Initech', seats: 25, status: 'active' }
];

// Lets awaited hooks, the async commit and LWC's re-render all settle.
const settle = async () => {
  for (let i = 0; i < 5; i++) await Promise.resolve();
};

function mount(props: Record<string, unknown> = {}) {
  const element = createElement('fandry-data-table', { is: FdDataTable });
  Object.assign(element, {
    columns: COLUMNS,
    data: DATA,
    getRowLabel: (row: { name: string }) => row.name,
    ...props
  });
  document.body.appendChild(element);
  return element as HTMLElement & Record<string, any>;
}

const bodyRows = (el: HTMLElement) =>
  Array.from(el.shadowRoot!.querySelectorAll('tbody tr:not(.loading-row):not(.empty-row)'));
const cellText = (row: Element, index: number) => row.querySelectorAll('td')[index + 1].textContent!.trim();
const names = (el: HTMLElement) => bodyRows(el).map((row) => cellText(row, 0));

async function chooseMenuAction(el: HTMLElement, rowIndex: number, value: string) {
  // fandry-popover only renders its panel (and so the slotted menu) while open.
  const popover = bodyRows(el)[rowIndex].querySelector('fandry-popover')!;
  popover.dispatchEvent(new CustomEvent('toggle', { detail: true, bubbles: true }));
  await settle();
  const menu = bodyRows(el)[rowIndex].querySelector('fandry-menu')!;
  menu.dispatchEvent(new CustomEvent('select', { detail: { value }, bubbles: true }));
  await settle();
}

async function edit(el: HTMLElement, rowIndex: number) {
  await chooseMenuAction(el, rowIndex, 'edit');
}

async function typeInto(el: HTMLElement, columnId: string, value: string) {
  const editor = el.shadowRoot!.querySelector(`[data-column-id="${columnId}"].editor, tr.row--editing [data-column-id="${columnId}"]`)!;
  editor.dispatchEvent(new CustomEvent(editor.tagName === 'FANDRY-SELECT' ? 'change' : 'input', { detail: value, bubbles: true }));
  await settle();
}

const buttonByText = (el: HTMLElement, text: string) =>
  Array.from(el.shadowRoot!.querySelectorAll('fandry-button')).find((b) => b.textContent!.trim() === text) as HTMLElement;

const toastTexts = (el: HTMLElement) =>
  Array.from(el.shadowRoot!.querySelectorAll('fandry-toast')).map((t) => ({
    text: t.textContent!.trim(),
    variant: (t as any).variant
  }));

describe('fandry-data-table', () => {
  afterEach(() => {
    while (document.body.firstChild) document.body.removeChild(document.body.firstChild);
    delete (Element.prototype as any).getAnimations;
  });

  it('renders rows with a badge for badged columns, selection checkboxes and a row-actions menu', () => {
    const el = mount();

    expect(names(el)).toEqual(['Acme', 'Globex', 'Initech']);
    expect(bodyRows(el)[0].querySelector('fandry-badge')!.textContent!.trim()).toBe('active');
    expect(bodyRows(el)[0].querySelectorAll('fandry-checkbox').length).toBe(1);
    expect(bodyRows(el)[0].querySelector('fandry-popover')).not.toBeNull();
  });

  it('renders skeleton rows instead of data while loading', async () => {
    const el = mount({ loading: true, loadingRowCount: 3 });

    expect(el.shadowRoot!.querySelectorAll('tr.loading-row').length).toBe(3);
    expect(el.shadowRoot!.querySelectorAll('tr.loading-row fandry-skeleton').length).toBeGreaterThan(3);
    expect(names(el)).toEqual([]);

    el.loading = false;
    await settle();
    expect(names(el)).toEqual(['Acme', 'Globex', 'Initech']);
  });

  it('adds one select per column with a filter, and filters rows by its value', async () => {
    const el = mount();

    const selects = el.shadowRoot!.querySelectorAll('.filter fandry-select');
    expect(selects.length).toBe(1);
    expect((selects[0] as any).options.map((o: any) => o.label)).toEqual(['Any status', 'Active', 'Pending']);

    selects[0].dispatchEvent(new CustomEvent('change', { detail: 'pending', bubbles: true }));
    await settle();
    expect(names(el)).toEqual(['Globex']);

    selects[0].dispatchEvent(new CustomEvent('change', { detail: '', bubbles: true }));
    await settle();
    expect(names(el)).toEqual(['Acme', 'Globex', 'Initech']);
  });

  it('searches across columns, and Clear resets both search and filters', async () => {
    const el = mount({ globalFilterDebounceMs: 0 });

    const search = el.shadowRoot!.querySelector('.search fandry-input')!;
    (search as any).value = 'init';
    search.dispatchEvent(new CustomEvent('input', { detail: 'init', bubbles: true }));
    await settle();
    expect(names(el)).toEqual(['Initech']);

    const filter = el.shadowRoot!.querySelector('.filter fandry-select')!;
    filter.dispatchEvent(new CustomEvent('change', { detail: 'pending', bubbles: true }));
    await settle();
    expect(names(el)).toEqual([]);
    expect(el.shadowRoot!.querySelector('.empty-row')!.textContent).toContain('No results');

    buttonByText(el, 'Clear').click();
    await settle();
    expect(names(el)).toEqual(['Acme', 'Globex', 'Initech']);
    expect(buttonByText(el, 'Clear')).toBeUndefined();
  });

  it('paginates', async () => {
    const el = mount({ pageSize: 2 });
    expect(names(el)).toEqual(['Acme', 'Globex']);

    el.shadowRoot!.querySelector('fandry-pagination')!.dispatchEvent(
      new CustomEvent('change', { detail: { pageIndex: 1 }, bubbles: true })
    );
    await settle();
    expect(names(el)).toEqual(['Initech']);
  });

  it('stays on the current page when data is replaced, and steps back if that page is gone', async () => {
    const el = mount({ pageSize: 2 });
    el.shadowRoot!.querySelector('fandry-pagination')!.dispatchEvent(
      new CustomEvent('change', { detail: { pageIndex: 1 }, bubbles: true })
    );
    await settle();
    expect(names(el)).toEqual(['Initech']);

    // A save hands back a new array; the user must not be thrown back to page 1.
    el.data = DATA.map((row) => (row.id === 3 ? { ...row, seats: 26 } : row));
    await settle();
    expect(names(el)).toEqual(['Initech']);

    // Deleting the only row on the last page leaves nothing there.
    el.data = DATA.slice(0, 2);
    await settle();
    expect(names(el)).toEqual(['Acme', 'Globex']);
  });

  it('goes back to page 1 when a filter narrows the results', async () => {
    const el = mount({ pageSize: 1 });
    el.shadowRoot!.querySelector('fandry-pagination')!.dispatchEvent(
      new CustomEvent('change', { detail: { pageIndex: 2 }, bubbles: true })
    );
    await settle();
    expect(names(el)).toEqual(['Initech']);

    el.shadowRoot!.querySelector('.filter fandry-select')!.dispatchEvent(
      new CustomEvent('change', { detail: 'active', bubbles: true })
    );
    await settle();
    expect(names(el)).toEqual(['Acme']);
  });

  it('reports selection', async () => {
    const el = mount();
    const onSelect = jest.fn();
    el.addEventListener('rowselectionchange', onSelect);

    const checkbox = bodyRows(el)[1].querySelector('fandry-checkbox') as any;
    checkbox.checked = true;
    checkbox.dispatchEvent(new CustomEvent('change', { detail: true, bubbles: true }));
    await settle();

    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(onSelect.mock.calls[0][0].detail.rows).toEqual([DATA[1]]);
    expect(el.shadowRoot!.querySelector('.selection-status')!.textContent).toBe('1 of 3 selected');
  });

  it('clears the whole selection, across pages, from one button', async () => {
    const el = mount({ pageSize: 2 });
    const onSelect = jest.fn();
    el.addEventListener('rowselectionchange', onSelect);
    expect(buttonByText(el, 'Clear selection')).toBeUndefined();

    const check = async (index: number) => {
      const checkbox = bodyRows(el)[index].querySelector('fandry-checkbox') as any;
      checkbox.checked = true;
      checkbox.dispatchEvent(new CustomEvent('change', { detail: true, bubbles: true }));
      await settle();
    };
    await check(0);
    el.shadowRoot!.querySelector('fandry-pagination')!.dispatchEvent(
      new CustomEvent('change', { detail: { pageIndex: 1 }, bubbles: true })
    );
    await settle();
    await check(0); // Initech, on page 2
    expect(el.shadowRoot!.querySelector('.selection-status')!.textContent).toBe('2 of 3 selected');

    buttonByText(el, 'Clear selection').click();
    await settle();

    expect(el.shadowRoot!.querySelector('.selection-status')!.textContent).toBe('0 of 3 selected');
    expect(onSelect.mock.calls.pop()![0].detail.rows).toEqual([]);
    expect(buttonByText(el, 'Clear selection')).toBeUndefined();

    // Page 1's row is unchecked too, not just the visible page.
    el.shadowRoot!.querySelector('fandry-pagination')!.dispatchEvent(
      new CustomEvent('change', { detail: { pageIndex: 0 }, bubbles: true })
    );
    await settle();
    expect((bodyRows(el)[0].querySelector('fandry-checkbox') as any).checked).toBe(false);
  });

  describe('inline edit', () => {
    it('turns editable cells into fields for one row when Edit is chosen', async () => {
      const el = mount();
      await edit(el, 1);

      const row = bodyRows(el)[1];
      expect(row.classList.contains('row--editing')).toBe(true);
      expect(row.querySelector('fandry-input[data-column-id="name"]')).not.toBeNull();
      expect(row.querySelector('fandry-input[data-column-id="seats"]')).not.toBeNull();
      expect(row.querySelector('fandry-select[data-column-id="status"]')).not.toBeNull();
      expect(bodyRows(el)[0].querySelector('fandry-input')).toBeNull();
      expect(buttonByText(el, 'Save')).toBeDefined();
    });

    it('also starts on double-click of a cell', async () => {
      const el = mount();
      bodyRows(el)[2].querySelectorAll('td')[1].dispatchEvent(new MouseEvent('dblclick', { bubbles: true }));
      await settle();
      expect(bodyRows(el)[2].classList.contains('row--editing')).toBe(true);
    });

    it('cancel restores the row without calling the hook', async () => {
      const saveRow = jest.fn();
      const el = mount({ saveRow });
      await edit(el, 0);
      await typeInto(el, 'name', 'Changed');

      buttonByText(el, 'Cancel').click();
      await settle();

      expect(saveRow).not.toHaveBeenCalled();
      expect(names(el)).toEqual(['Acme', 'Globex', 'Initech']);
      expect(bodyRows(el)[0].classList.contains('row--editing')).toBe(false);
    });

    it('does not call the hook when nothing changed, and says so', async () => {
      const saveRow = jest.fn();
      const el = mount({ saveRow });
      await edit(el, 0);

      buttonByText(el, 'Save').click();
      await settle();

      expect(saveRow).not.toHaveBeenCalled();
      expect(bodyRows(el)[0].classList.contains('row--editing')).toBe(false);
      // ...but it is never a silent exit.
      expect(toastTexts(el)).toEqual([{ text: 'No changes to save for Acme.', variant: 'info' }]);
    });

    it('saves only what changed (numbers as numbers), shows saving, then a success toast and rowsave', async () => {
      let resolveSave: (row: unknown) => void = () => {};
      const saveRow = jest.fn(() => new Promise((resolve) => (resolveSave = resolve)));
      const el = mount({ saveRow });
      const onSave = jest.fn();
      el.addEventListener('rowsave', onSave);

      await edit(el, 0);
      await typeInto(el, 'seats', '12');
      buttonByText(el, 'Save').click();
      await settle();

      expect(saveRow).toHaveBeenCalledWith(DATA[0], { seats: 12 });
      expect(bodyRows(el)[0].classList.contains('row--saving')).toBe(true);
      expect(el.shadowRoot!.querySelector('tr.row--saving fandry-spinner')).not.toBeNull();
      expect(toastTexts(el)).toEqual([]);

      // jsdom has no Web Animations API; a pending one stands in for the
      // row's "saved" flash so the class can be observed before it is dropped.
      let finishFlash: () => void = () => {};
      (Element.prototype as any).getAnimations = () => [
        { finished: new Promise<void>((resolve) => (finishFlash = resolve)) }
      ];

      const saved = { ...DATA[0], seats: 12 };
      resolveSave(saved);
      await settle();

      const row = bodyRows(el)[0];
      expect(row.classList.contains('row--saving')).toBe(false);
      expect(row.classList.contains('row--editing')).toBe(false);
      expect(row.classList.contains('row--saved')).toBe(true);
      expect(onSave.mock.calls[0][0].detail).toEqual({ id: '1', row: saved, changes: { seats: 12 } });
      expect(toastTexts(el)).toEqual([{ text: 'Saved Acme.', variant: 'success' }]);

      finishFlash();
      await settle();
      expect(bodyRows(el)[0].classList.contains('row--saved')).toBe(false);
    });

    it('keeps the row editing and shows the error in a danger toast when the hook rejects', async () => {
      const saveRow = jest.fn().mockRejectedValue(new Error('Name is taken'));
      const el = mount({ saveRow });
      const onSave = jest.fn();
      el.addEventListener('rowsave', onSave);

      await edit(el, 1);
      await typeInto(el, 'name', 'Acme');
      buttonByText(el, 'Save').click();
      await settle();

      expect(onSave).not.toHaveBeenCalled();
      expect(bodyRows(el)[1].classList.contains('row--editing')).toBe(true);
      expect(bodyRows(el)[1].classList.contains('row--saving')).toBe(false);
      expect(toastTexts(el)).toEqual([{ text: "Couldn't save Globex: Name is taken", variant: 'danger' }]);
    });

    it('saves on Enter and cancels on Escape from a text field', async () => {
      const saveRow = jest.fn().mockResolvedValue(undefined);
      const el = mount({ saveRow });

      await edit(el, 0);
      await typeInto(el, 'name', 'Acme Corp');
      const input = bodyRows(el)[0].querySelector('fandry-input[data-column-id="name"]')!;
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true }));
      await settle();
      expect(saveRow).toHaveBeenCalledWith(DATA[0], { name: 'Acme Corp' });

      await edit(el, 2);
      bodyRows(el)[2]
        .querySelector('fandry-input')!
        .dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true }));
      await settle();
      expect(bodyRows(el)[2].classList.contains('row--editing')).toBe(false);
    });

    it('lets only one row be edited at a time', async () => {
      const el = mount();
      await edit(el, 0);
      await edit(el, 1);

      expect(el.shadowRoot!.querySelectorAll('tr.row--editing').length).toBe(1);
      expect(bodyRows(el)[1].classList.contains('row--editing')).toBe(true);
    });
  });

  describe('delete', () => {
    // The second dialog (the first is the multi-record edit).
    const dialog = (el: HTMLElement) => el.shadowRoot!.querySelectorAll('fandry-dialog')[1] as any;

    it('asks for confirmation, calls the hook, then reports rowdelete and toasts', async () => {
      const deleteRow = jest.fn().mockResolvedValue(undefined);
      const el = mount({ deleteRow });
      const onDelete = jest.fn();
      el.addEventListener('rowdelete', onDelete);

      await chooseMenuAction(el, 1, 'delete');
      expect(dialog(el).open).toBe(true);
      expect(deleteRow).not.toHaveBeenCalled();

      buttonByText(el, 'Delete').click();
      await settle();

      expect(deleteRow).toHaveBeenCalledWith(DATA[1]);
      expect(onDelete.mock.calls[0][0].detail).toEqual({ id: '2', row: DATA[1] });
      expect(dialog(el).open).toBe(false);
      expect(toastTexts(el)).toEqual([{ text: 'Deleted Globex.', variant: 'success' }]);
    });

    it('does nothing when the confirmation is cancelled', async () => {
      const deleteRow = jest.fn();
      const el = mount({ deleteRow });

      await chooseMenuAction(el, 0, 'delete');
      buttonByText(el, 'Cancel').click();
      await settle();

      expect(deleteRow).not.toHaveBeenCalled();
      expect(dialog(el).open).toBe(false);
      expect(toastTexts(el)).toEqual([]);
    });

    it('shows a danger toast and no rowdelete when the hook rejects', async () => {
      const deleteRow = jest.fn().mockRejectedValue(new Error('In use'));
      const el = mount({ deleteRow });
      const onDelete = jest.fn();
      el.addEventListener('rowdelete', onDelete);

      await chooseMenuAction(el, 0, 'delete');
      buttonByText(el, 'Delete').click();
      await settle();

      expect(onDelete).not.toHaveBeenCalled();
      expect(toastTexts(el)).toEqual([{ text: "Couldn't delete Acme: In use", variant: 'danger' }]);
    });
  });

  it('reports actions it does not handle itself through rowaction', async () => {
    const el = mount({
      rowActions: [
        { value: 'edit', label: 'Edit' },
        { value: 'duplicate', label: 'Duplicate' }
      ]
    });
    const onAction = jest.fn();
    el.addEventListener('rowaction', onAction);

    await chooseMenuAction(el, 2, 'duplicate');

    expect(onAction.mock.calls[0][0].detail).toEqual({ action: 'duplicate', id: '3', row: DATA[2] });
    expect(el.shadowRoot!.querySelector('tr.row--editing')).toBeNull();
  });

  it('shows a toast on request, and removes it when it is dismissed', async () => {
    const el = mount();
    el.showToast('info', 'Heads up');
    await settle();
    expect(toastTexts(el)).toEqual([{ text: 'Heads up', variant: 'info' }]);

    el.shadowRoot!.querySelector('fandry-toast')!.dispatchEvent(new CustomEvent('dismiss', { bubbles: true }));
    await settle();
    expect(toastTexts(el)).toEqual([]);
  });

  describe('column visibility', () => {
    const headers = (el: HTMLElement) =>
      Array.from(el.shadowRoot!.querySelectorAll('thead th')).map((th) => th.textContent!.trim());

    // The panel (and its checkboxes) only exists while the popover is open.
    async function openColumns(el: HTMLElement) {
      el.shadowRoot!.querySelector('.toolbar-end fandry-popover')!.dispatchEvent(
        new CustomEvent('toggle', { detail: true, bubbles: true })
      );
      await settle();
      return Array.from(el.shadowRoot!.querySelectorAll('.columns fandry-checkbox')) as any[];
    }

    it('lists every column and hides or shows one when its checkbox changes', async () => {
      const el = mount();
      const onChange = jest.fn();
      el.addEventListener('columnvisibilitychange', onChange);

      const boxes = await openColumns(el);
      expect(boxes.map((b) => b.label)).toEqual(['Name', 'Seats', 'Status']);
      expect(boxes.every((b) => b.checked)).toBe(true);

      boxes[1].dispatchEvent(new CustomEvent('change', { detail: false, bubbles: true }));
      await settle();

      expect(headers(el)).toEqual(['', 'Name', 'Status', 'Actions']);
      expect(bodyRows(el)[0].querySelectorAll('td').length).toBe(4); // select, name, status, actions
      expect(onChange.mock.calls[0][0].detail).toEqual({ columnVisibility: { seats: false } });
      expect(el.columnVisibility).toEqual({ seats: false });

      boxes[1].dispatchEvent(new CustomEvent('change', { detail: true, bubbles: true }));
      await settle();
      expect(headers(el)).toEqual(['', 'Name', 'Seats', 'Status', 'Actions']);
    });

    it('starts with the columns hidden that columnVisibility says', async () => {
      const el = mount({ columnVisibility: { status: false } });
      expect(headers(el)).toEqual(['', 'Name', 'Seats', 'Actions']);
      const boxes = await openColumns(el);
      expect(boxes.map((b) => b.checked)).toEqual([true, true, false]);
    });

    it('keeps the last visible column on', async () => {
      const el = mount({ columnVisibility: { seats: false, status: false } });
      const boxes = await openColumns(el);
      expect(boxes.map((b) => b.disabled)).toEqual([true, false, false]);
    });

    it('keeps skeleton rows and the empty row as wide as the visible columns', async () => {
      const el = mount({ columnVisibility: { seats: false }, loading: true, loadingRowCount: 1 });
      // selection + 2 visible columns + actions
      expect(el.shadowRoot!.querySelectorAll('tr.loading-row td').length).toBe(4);

      el.loading = false;
      el.data = [];
      await settle();
      expect(el.shadowRoot!.querySelector('.empty-cell')!.getAttribute('colspan')).toBe('4');
    });
  });

  describe('multi-record edit', () => {
    async function select(el: HTMLElement, ...indexes: number[]) {
      for (const index of indexes) {
        const checkbox = bodyRows(el)[index].querySelector('fandry-checkbox') as any;
        checkbox.checked = true;
        checkbox.dispatchEvent(new CustomEvent('change', { detail: true, bubbles: true }));
      }
      await settle();
    }

    // The multi-edit dialog is the first of the two (the second confirms deletes).
    const dialog = (el: HTMLElement) => el.shadowRoot!.querySelector('fandry-dialog') as any;
    const field = (el: HTMLElement, columnId: string) =>
      el.shadowRoot!.querySelector(`.bulk [data-column-id="${columnId}"]`)! as HTMLElement & Record<string, any>;
    const fill = async (el: HTMLElement, columnId: string, value: string) => {
      const f = field(el, columnId);
      f.dispatchEvent(new CustomEvent(f.tagName === 'FANDRY-SELECT' ? 'change' : 'input', { detail: value, bubbles: true }));
      await settle();
    };
    const openDialog = async (el: HTMLElement) => {
      buttonByText(el, 'Edit 2 selected').click();
      await settle();
    };

    it('offers the edit only once two or more rows are selected', async () => {
      const el = mount();
      expect(buttonByText(el, 'Edit 1 selected')).toBeUndefined();

      await select(el, 0);
      expect(el.shadowRoot!.querySelector('.toolbar-end > fandry-button')).toBeNull();

      await select(el, 1);
      expect(buttonByText(el, 'Edit 2 selected')).toBeDefined();
    });

    it('is not offered when no column is editable', async () => {
      const el = mount({ columns: COLUMNS.map(({ meta: _meta, ...column }) => column) });
      await select(el, 0, 1);
      expect(el.shadowRoot!.querySelector('.toolbar-end > fandry-button')).toBeNull();
    });

    it('has a field per editable column, each defaulting to "no change"', async () => {
      const el = mount();
      await select(el, 0, 1);
      await openDialog(el);

      expect(dialog(el).open).toBe(true);
      expect(dialog(el).label).toBe('Edit 2 records');
      const fields = Array.from(el.shadowRoot!.querySelectorAll('.bulk [data-column-id]')) as any[];
      expect(fields.map((f) => f.dataset.columnId)).toEqual(['name', 'seats', 'status']);
      expect(field(el, 'seats').type).toBe('number');
      expect(field(el, 'status').options[0]).toEqual({ label: 'No change', value: '' });
      expect(field(el, 'status').value).toBe('');
    });

    it('sends only the filled-in fields (numbers as numbers), then reports each row and clears the selection', async () => {
      let resolveSave: (rows: unknown) => void = () => {};
      const saveRows = jest.fn(() => new Promise((resolve) => (resolveSave = resolve)));
      const el = mount({ saveRows });
      const onSave = jest.fn();
      const onSelection = jest.fn();
      el.addEventListener('rowsave', onSave);
      el.addEventListener('rowselectionchange', onSelection);

      await select(el, 0, 2);
      onSelection.mockClear();
      await openDialog(el);
      await fill(el, 'seats', '50');
      await fill(el, 'status', 'pending');
      buttonByText(el, 'Save').click();
      await settle();

      expect(saveRows).toHaveBeenCalledWith([DATA[0], DATA[2]], { seats: 50, status: 'pending' });
      // Saving: fields locked, spinner in the button, the rows themselves pulse.
      expect(dialog(el).open).toBe(true);
      expect(field(el, 'seats').disabled).toBe(true);
      expect(el.shadowRoot!.querySelector('.bulk fandry-spinner')).not.toBeNull();
      expect(el.shadowRoot!.querySelectorAll('tr.row--saving').length).toBe(2);

      (Element.prototype as any).getAnimations = () => [{ finished: new Promise<void>(() => {}) }];
      resolveSave([
        { ...DATA[0], seats: 50, status: 'pending' },
        { ...DATA[2], seats: 50, status: 'pending' }
      ]);
      await settle();

      expect(dialog(el).open).toBe(false);
      expect(el.shadowRoot!.querySelectorAll('tr.row--saving').length).toBe(0);
      expect(el.shadowRoot!.querySelectorAll('tr.row--saved').length).toBe(2);
      expect(onSave.mock.calls.map((call) => call[0].detail.id)).toEqual(['1', '3']);
      expect(onSave.mock.calls[0][0].detail).toEqual({
        id: '1',
        row: { ...DATA[0], seats: 50, status: 'pending' },
        changes: { seats: 50, status: 'pending' }
      });
      expect(onSelection.mock.calls.pop()![0].detail.rows).toEqual([]);
      expect(toastTexts(el)).toEqual([{ text: 'Saved 2 records.', variant: 'success' }]);
    });

    it('applies the changes itself when there is no hook', async () => {
      const el = mount();
      const onSave = jest.fn();
      el.addEventListener('rowsave', onSave);

      await select(el, 0, 1);
      await openDialog(el);
      await fill(el, 'name', 'Renamed');
      buttonByText(el, 'Save').click();
      await settle();

      expect(onSave.mock.calls.map((call) => call[0].detail.row)).toEqual([
        { ...DATA[0], name: 'Renamed' },
        { ...DATA[1], name: 'Renamed' }
      ]);
    });

    it('keeps the dialog open, with what was typed, and toasts the error when the hook rejects', async () => {
      const saveRows = jest.fn().mockRejectedValue(new Error('Over the seat limit'));
      const el = mount({ saveRows });
      const onSave = jest.fn();
      el.addEventListener('rowsave', onSave);

      await select(el, 0, 1);
      await openDialog(el);
      await fill(el, 'seats', '999');
      buttonByText(el, 'Save').click();
      await settle();

      expect(dialog(el).open).toBe(true);
      expect(field(el, 'seats').value).toBe('999');
      expect(field(el, 'seats').disabled).toBe(false);
      expect(onSave).not.toHaveBeenCalled();
      expect(el.shadowRoot!.querySelectorAll('tr.row--saving').length).toBe(0);
      expect(toastTexts(el)).toEqual([{ text: "Couldn't save 2 records: Over the seat limit", variant: 'danger' }]);
      // Also said inside the dialog, where the user is looking.
      const alert = el.shadowRoot!.querySelector('.bulk fandry-alert') as any;
      expect(alert.variant).toBe('danger');
      expect(alert.textContent.trim()).toBe("Couldn't save 2 records: Over the seat limit");
      expect(buttonByText(el, 'Edit 2 selected')).toBeDefined(); // selection kept

      // Editing a field clears it; saving again starts clean.
      await fill(el, 'seats', '5');
      expect(el.shadowRoot!.querySelector('.bulk fandry-alert')).toBeNull();
    });

    it('does not call the hook when nothing was filled in, and says so inside the dialog', async () => {
      const saveRows = jest.fn();
      const el = mount({ saveRows });

      await select(el, 0, 1);
      await openDialog(el);
      buttonByText(el, 'Save').click();
      await settle();

      expect(saveRows).not.toHaveBeenCalled();
      // Stays open: closing would look like a save that did nothing.
      expect(dialog(el).open).toBe(true);
      const alert = el.shadowRoot!.querySelector('.bulk fandry-alert') as any;
      expect(alert.variant).toBe('info');
      expect(alert.textContent.trim()).toBe('Fill in at least one field to apply, or cancel.');
    });

    it('saves on Enter in a text field, and Cancel closes without saving', async () => {
      const saveRows = jest.fn().mockResolvedValue(undefined);
      const el = mount({ saveRows });

      await select(el, 0, 1);
      await openDialog(el);
      await fill(el, 'name', 'Enter Corp');
      field(el, 'name').dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true }));
      await settle();
      expect(saveRows).toHaveBeenCalledWith([DATA[0], DATA[1]], { name: 'Enter Corp' });

      await select(el, 0, 1);
      await openDialog(el);
      await fill(el, 'name', 'Never sent');
      el.shadowRoot!.querySelector('.bulk')!.querySelectorAll('fandry-button')[0].dispatchEvent(new MouseEvent('click'));
      await settle();
      expect(saveRows).toHaveBeenCalledTimes(1);
      expect(dialog(el).open).toBe(false);
    });

    it('blocks starting a single-row edit while the batch is saving', async () => {
      const saveRows = jest.fn(() => new Promise(() => {}));
      const el = mount({ saveRows });

      await select(el, 0, 1);
      await openDialog(el);
      await fill(el, 'name', 'X');
      buttonByText(el, 'Save').click();
      await settle();

      await edit(el, 2);
      expect(el.shadowRoot!.querySelector('tr.row--editing')).toBeNull();
    });
  });

  it('omits the actions column when there are no row actions', () => {
    const el = mount({ rowActions: [] });
    expect(el.shadowRoot!.querySelector('.actions-cell')).toBeNull();
  });
});
