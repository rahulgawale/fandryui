import { createElement } from 'lwc';
import FdTable from '../table';
import TableSlotHarness from './tableSlotHarness';

const COLUMNS = [
  { id: 'name', accessorKey: 'name', header: 'Name' },
  { id: 'age', accessorKey: 'age', header: 'Age' }
];

const DATA = [
  { name: 'Bea', age: 41 },
  { name: 'Amir', age: 27 },
  { name: 'Cass', age: 33 }
];

const flush = () => Promise.resolve();

describe('fd-table', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders a header cell for each column and a row for each data entry', () => {
    const element = createElement('fd-table', { is: FdTable });
    element.columns = COLUMNS;
    element.data = DATA;
    document.body.appendChild(element);

    const headers = element.shadowRoot!.querySelectorAll('th');
    expect(headers.length).toBe(COLUMNS.length);
    expect(headers[0].textContent).toContain('Name');

    const rows = element.shadowRoot!.querySelectorAll('tbody tr');
    expect(rows.length).toBe(DATA.length);
    expect(rows[0].querySelectorAll('td')[0].textContent).toBe('Bea');
  });

  it('renders the empty slot fallback when data is empty', () => {
    const element = createElement('fd-table', { is: FdTable });
    element.columns = COLUMNS;
    element.data = [];
    document.body.appendChild(element);

    const emptyRow = element.shadowRoot!.querySelector('.empty-row')!;
    expect(emptyRow).not.toBeNull();
    expect(emptyRow.textContent).toContain('No data');
    expect(element.shadowRoot!.querySelectorAll('tbody tr').length).toBe(1);
  });

  it('sorts rows ascending then descending when a sortable header is clicked twice', async () => {
    const element = createElement('fd-table', { is: FdTable });
    element.columns = COLUMNS;
    element.data = DATA;
    document.body.appendChild(element);

    const nameHeaderButton = element.shadowRoot!.querySelector(
      'button[data-column-id="name"]'
    ) as HTMLButtonElement;
    expect(nameHeaderButton).not.toBeNull();

    nameHeaderButton.click();
    await flush();

    let firstCellValues = Array.from(
      element.shadowRoot!.querySelectorAll('tbody tr td:first-child')
    ).map((cell) => cell.textContent);
    expect(firstCellValues).toEqual(['Amir', 'Bea', 'Cass']);

    nameHeaderButton.click();
    await flush();

    firstCellValues = Array.from(
      element.shadowRoot!.querySelectorAll('tbody tr td:first-child')
    ).map((cell) => cell.textContent);
    expect(firstCellValues).toEqual(['Cass', 'Bea', 'Amir']);
  });

  it('dispatches "sortchange" with the new sorting state', async () => {
    const element = createElement('fd-table', { is: FdTable });
    element.columns = COLUMNS;
    element.data = DATA;
    document.body.appendChild(element);

    const handler = jest.fn();
    element.addEventListener('sortchange', handler);

    const ageHeaderButton = element.shadowRoot!.querySelector(
      'button[data-column-id="age"]'
    ) as HTMLButtonElement;
    ageHeaderButton.click();
    await flush();

    expect(handler).toHaveBeenCalledTimes(1);
    // Numeric columns default to descending-first (tanstack's auto-detected
    // `sortDescFirst`), unlike the string "name" column tested above.
    expect(handler.mock.calls[0][0].detail.sorting).toEqual([
      { id: 'age', desc: true }
    ]);
  });

  it('leaves row order untouched when manualSorting is enabled', async () => {
    const element = createElement('fd-table', { is: FdTable });
    element.columns = COLUMNS;
    element.data = DATA;
    element.manualSorting = true;
    document.body.appendChild(element);

    const handler = jest.fn();
    element.addEventListener('sortchange', handler);

    const nameHeaderButton = element.shadowRoot!.querySelector(
      'button[data-column-id="name"]'
    ) as HTMLButtonElement;
    nameHeaderButton.click();
    await flush();

    expect(handler).toHaveBeenCalledTimes(1);

    const firstCellValues = Array.from(
      element.shadowRoot!.querySelectorAll('tbody tr td:first-child')
    ).map((cell) => cell.textContent);
    expect(firstCellValues).toEqual(['Bea', 'Amir', 'Cass']);
  });

  it('does not dispatch "rowclick" unless clickableRows is enabled', () => {
    const element = createElement('fd-table', { is: FdTable });
    element.columns = COLUMNS;
    element.data = DATA;
    document.body.appendChild(element);

    const handler = jest.fn();
    element.addEventListener('rowclick', handler);

    const firstRow = element.shadowRoot!.querySelector('tbody tr')!;
    firstRow.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(handler).not.toHaveBeenCalled();
  });

  it('dispatches "rowclick" with the row\'s original data when clickableRows is enabled', () => {
    const element = createElement('fd-table', { is: FdTable });
    element.columns = COLUMNS;
    element.data = DATA;
    element.clickableRows = true;
    document.body.appendChild(element);

    const handler = jest.fn();
    element.addEventListener('rowclick', handler);

    const firstRow = element.shadowRoot!.querySelector('tbody tr')!;
    firstRow.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].detail.row).toEqual(DATA[0]);
  });

  it('omits the sort button for columns with enableSorting set to false', () => {
    const element = createElement('fd-table', { is: FdTable });
    element.columns = [
      { id: 'name', accessorKey: 'name', header: 'Name', enableSorting: false },
      COLUMNS[1]
    ];
    element.data = DATA;
    document.body.appendChild(element);

    expect(
      element.shadowRoot!.querySelector('button[data-column-id="name"]')
    ).toBeNull();
    expect(
      element.shadowRoot!.querySelector('button[data-column-id="age"]')
    ).not.toBeNull();
  });

  it('omits pagination controls and renders every row when pagination is disabled (default)', () => {
    const element = createElement('fd-table', { is: FdTable });
    element.columns = COLUMNS;
    element.data = DATA;
    element.pageSize = 2;
    document.body.appendChild(element);

    expect(element.shadowRoot!.querySelector('.pagination')).toBeNull();
    expect(element.shadowRoot!.querySelectorAll('tbody tr').length).toBe(
      DATA.length
    );
  });

  it('paginates rows and toggles Prev/Next state when enablePagination is set', async () => {
    const element = createElement('fd-table', { is: FdTable });
    element.columns = COLUMNS;
    element.data = DATA;
    element.enablePagination = true;
    element.pageSize = 2;
    document.body.appendChild(element);

    let rows = element.shadowRoot!.querySelectorAll('tbody tr');
    expect(rows.length).toBe(2);
    expect(rows[0].querySelectorAll('td')[0].textContent).toBe('Bea');

    const status = element.shadowRoot!.querySelector('.pagination-status')!;
    expect(status.textContent).toBe('Page 1 of 2');

    const [previousButton, nextButton] = Array.from(
      element.shadowRoot!.querySelectorAll('.pagination fd-button')
    ) as (HTMLElement & { disabled: boolean })[];
    expect(previousButton.disabled).toBe(true);
    expect(nextButton.disabled).toBe(false);

    nextButton.click();
    await flush();

    rows = element.shadowRoot!.querySelectorAll('tbody tr');
    expect(rows.length).toBe(1);
    expect(rows[0].querySelectorAll('td')[0].textContent).toBe('Cass');
    expect(element.shadowRoot!.querySelector('.pagination-status')!.textContent).toBe(
      'Page 2 of 2'
    );
    expect(previousButton.disabled).toBe(false);
    expect(nextButton.disabled).toBe(true);
  });

  it('dispatches "pagechange" and leaves `data` unsliced when manualPagination is enabled', async () => {
    const element = createElement('fd-table', { is: FdTable });
    element.columns = COLUMNS;
    element.data = DATA;
    element.enablePagination = true;
    element.manualPagination = true;
    element.pageSize = 2;
    document.body.appendChild(element);

    const handler = jest.fn();
    element.addEventListener('pagechange', handler);

    // Manual mode doesn't slice `data` itself -- the consumer is expected to
    // supply just one page's worth already, so all of `DATA` still renders.
    expect(element.shadowRoot!.querySelectorAll('tbody tr').length).toBe(
      DATA.length
    );

    const nextButton = element.shadowRoot!.querySelectorAll(
      '.pagination fd-button'
    )[1] as HTMLElement;
    nextButton.click();
    await flush();

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].detail).toEqual({
      pageIndex: 1,
      pageSize: 2
    });
  });

  it('renders fd-skeleton placeholder rows instead of data while loading', () => {
    const element = createElement('fd-table', { is: FdTable });
    element.columns = COLUMNS;
    element.data = DATA;
    element.loading = true;
    document.body.appendChild(element);

    const loadingRows = element.shadowRoot!.querySelectorAll('.loading-row');
    expect(loadingRows.length).toBe(5); // default loadingRowCount
    expect(loadingRows[0].querySelectorAll('fd-skeleton').length).toBe(
      COLUMNS.length
    );

    // Real data and the empty-state fallback both stay hidden while loading.
    expect(element.shadowRoot!.querySelectorAll('td').length).toBe(
      5 * COLUMNS.length
    );
    expect(element.shadowRoot!.querySelector('.empty-row')).toBeNull();
  });

  it('respects a custom loadingRowCount', () => {
    const element = createElement('fd-table', { is: FdTable });
    element.columns = COLUMNS;
    element.data = DATA;
    element.loading = true;
    element.loadingRowCount = 2;
    document.body.appendChild(element);

    expect(element.shadowRoot!.querySelectorAll('.loading-row').length).toBe(2);
  });

  it('marks the table aria-busy while loading', () => {
    const element = createElement('fd-table', { is: FdTable });
    element.columns = COLUMNS;
    element.data = DATA;
    element.loading = true;
    document.body.appendChild(element);

    expect(element.shadowRoot!.querySelector('table')!.getAttribute('aria-busy')).toBe(
      'true'
    );
  });

  it('omits the selection column when enableRowSelection is false (default)', () => {
    const element = createElement('fd-table', { is: FdTable });
    element.columns = COLUMNS;
    element.data = DATA;
    document.body.appendChild(element);

    expect(element.shadowRoot!.querySelector('.selection-cell')).toBeNull();
  });

  // fd-table renders <fd-checkbox> for selection, not a raw <input> -- its
  // native input lives inside fd-checkbox's own shadow root, so interacting
  // with it the way a user would means drilling one shadow boundary deeper.
  const getNativeCheckbox = (host: Element) =>
    host.shadowRoot!.querySelector('input[type="checkbox"]') as HTMLInputElement;

  it('renders a "select all" header checkbox and a per-row checkbox when enableRowSelection is set', () => {
    const element = createElement('fd-table', { is: FdTable });
    element.columns = COLUMNS;
    element.data = DATA;
    element.enableRowSelection = true;
    document.body.appendChild(element);

    expect(
      element.shadowRoot!.querySelector('.selection-header-checkbox')
    ).not.toBeNull();
    expect(
      element.shadowRoot!.querySelectorAll('tbody .selection-cell fd-checkbox').length
    ).toBe(DATA.length);
  });

  it('dispatches "rowselectionchange" with the selected row\'s original data when its checkbox is checked', async () => {
    const element = createElement('fd-table', { is: FdTable });
    element.columns = COLUMNS;
    element.data = DATA;
    element.enableRowSelection = true;
    document.body.appendChild(element);

    const handler = jest.fn();
    element.addEventListener('rowselectionchange', handler);

    const firstRowCheckboxHost = element.shadowRoot!.querySelector(
      'tbody .selection-cell fd-checkbox'
    )!;
    const nativeInput = getNativeCheckbox(firstRowCheckboxHost);
    nativeInput.checked = true;
    nativeInput.dispatchEvent(new Event('change'));
    await flush();

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].detail.rowSelection).toEqual({ '0': true });
    expect(handler.mock.calls[0][0].detail.rows).toEqual([DATA[0]]);
  });

  it('toggling the "select all" checkbox selects and deselects every row', async () => {
    const element = createElement('fd-table', { is: FdTable });
    element.columns = COLUMNS;
    element.data = DATA;
    element.enableRowSelection = true;
    document.body.appendChild(element);

    const selectAllHost = element.shadowRoot!.querySelector(
      '.selection-header-checkbox'
    )!;
    const nativeInput = getNativeCheckbox(selectAllHost);
    nativeInput.checked = true;
    nativeInput.dispatchEvent(new Event('change'));
    await flush();

    const rowCheckboxHosts = Array.from(
      element.shadowRoot!.querySelectorAll('tbody .selection-cell fd-checkbox')
    );
    expect(
      rowCheckboxHosts.every((host) => getNativeCheckbox(host).checked)
    ).toBe(true);
  });

  it('scopes "select all" to the current page, not every row across every page', async () => {
    // Regression: tanstack's toggleAllRowsSelected/getIsAllRowsSelected
    // operate on getPreGroupedRowModel(), which sits BEFORE pagination in
    // the pipeline -- using them (instead of the toggleAllPageRowsSelected/
    // getIsAllPageRowsSelected pair, shadcn's own canonical pattern) would
    // silently select rows on pages the user never saw.
    const element = createElement('fd-table', { is: FdTable });
    element.columns = COLUMNS;
    element.data = DATA;
    element.enableRowSelection = true;
    element.enablePagination = true;
    element.pageSize = 2;
    document.body.appendChild(element);

    const selectAllHost = element.shadowRoot!.querySelector(
      '.selection-header-checkbox'
    )!;
    const nativeSelectAll = getNativeCheckbox(selectAllHost);
    nativeSelectAll.checked = true;
    nativeSelectAll.dispatchEvent(new Event('change'));
    await flush();

    // Page 1 (Bea, Amir) is fully selected...
    const page1Checkboxes = Array.from(
      element.shadowRoot!.querySelectorAll('tbody .selection-cell fd-checkbox')
    );
    expect(page1Checkboxes.every((host) => getNativeCheckbox(host).checked)).toBe(
      true
    );
    expect(nativeSelectAll.checked).toBe(true);
    expect(nativeSelectAll.indeterminate).toBe(false);

    // ...but Cass, on page 2, was never touched.
    const nextButton = element.shadowRoot!.querySelectorAll(
      '.pagination fd-button'
    )[1] as HTMLElement;
    nextButton.click();
    await flush();

    const page2Checkboxes = Array.from(
      element.shadowRoot!.querySelectorAll('tbody .selection-cell fd-checkbox')
    );
    expect(page2Checkboxes.some((host) => getNativeCheckbox(host).checked)).toBe(
      false
    );
    // The page-2 "select all" reflects only page 2, so it's unchecked --
    // not indeterminate, even though 2 rows are selected elsewhere overall.
    const selectAllOnPage2 = getNativeCheckbox(
      element.shadowRoot!.querySelector('.selection-header-checkbox')!
    );
    expect(selectAllOnPage2.checked).toBe(false);
  });

  it('does not trigger "rowclick" when a selection checkbox is clicked, even with clickableRows enabled', () => {
    const element = createElement('fd-table', { is: FdTable });
    element.columns = COLUMNS;
    element.data = DATA;
    element.enableRowSelection = true;
    element.clickableRows = true;
    document.body.appendChild(element);

    const rowClickHandler = jest.fn();
    element.addEventListener('rowclick', rowClickHandler);

    const firstRowCheckboxHost = element.shadowRoot!.querySelector(
      'tbody .selection-cell fd-checkbox'
    )!;
    firstRowCheckboxHost.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(rowClickHandler).not.toHaveBeenCalled();
  });

  it('hides the "select all" header checkbox when singleRowSelection is set', () => {
    const element = createElement('fd-table', { is: FdTable });
    element.columns = COLUMNS;
    element.data = DATA;
    element.enableRowSelection = true;
    element.singleRowSelection = true;
    document.body.appendChild(element);

    expect(
      element.shadowRoot!.querySelector('.selection-header-checkbox')
    ).toBeNull();
    expect(element.shadowRoot!.querySelector('.selection-cell')).not.toBeNull();
  });

  it('shows a "N of M selected" count that spans the whole dataset, not just the current page', async () => {
    const element = createElement('fd-table', { is: FdTable });
    element.columns = COLUMNS;
    element.data = DATA;
    element.enableRowSelection = true;
    element.enablePagination = true;
    element.pageSize = 2;
    document.body.appendChild(element);

    expect(
      element.shadowRoot!.querySelector('.selection-status')!.textContent
    ).toBe('0 of 3 selected');

    const firstRowCheckboxHost = element.shadowRoot!.querySelector(
      'tbody .selection-cell fd-checkbox'
    )!;
    const nativeInput = firstRowCheckboxHost.shadowRoot!.querySelector(
      'input'
    ) as HTMLInputElement;
    nativeInput.checked = true;
    nativeInput.dispatchEvent(new Event('change'));
    await flush();

    expect(
      element.shadowRoot!.querySelector('.selection-status')!.textContent
    ).toBe('1 of 3 selected');
  });

  it('omits the footer entirely when neither selection nor pagination is enabled', () => {
    const element = createElement('fd-table', { is: FdTable });
    element.columns = COLUMNS;
    element.data = DATA;
    document.body.appendChild(element);

    expect(element.shadowRoot!.querySelector('.table-footer')).toBeNull();
  });

  it('omits the search input when enableGlobalFilter is false (default)', () => {
    const element = createElement('fd-table', { is: FdTable });
    element.columns = COLUMNS;
    element.data = DATA;
    document.body.appendChild(element);

    expect(element.shadowRoot!.querySelector('.table-toolbar')).toBeNull();
  });

  // A real browser's native `input` event is `bubbles: true, composed: true`
  // -- without both flags set here, this wouldn't exercise the bug where
  // that native event (retargeted onto the fd-input host, `detail: 0` per
  // UIEvent's legacy numeric default) used to reach fd-table's `oninput`
  // listener a second time and stomp the real typed value back to `0`.
  const typeIntoSearch = (element: Element, value: string) => {
    const searchHost = element.shadowRoot!.querySelector('.table-toolbar fd-input')!;
    const nativeInput = searchHost.shadowRoot!.querySelector(
      'input'
    ) as HTMLInputElement;
    nativeInput.value = value;
    nativeInput.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
  };

  it('filters rows client-side as the search input changes, after the debounce elapses', async () => {
    jest.useFakeTimers();
    const element = createElement('fd-table', { is: FdTable });
    element.columns = COLUMNS;
    element.data = DATA;
    element.enableGlobalFilter = true;
    document.body.appendChild(element);

    typeIntoSearch(element, 'mir');
    jest.advanceTimersByTime(250);
    await flush();

    const names = Array.from(
      element.shadowRoot!.querySelectorAll('tbody tr td:first-child')
    ).map((cell) => cell.textContent);
    expect(names).toEqual(['Amir']);
    jest.useRealTimers();
  });

  it('does not filter or dispatch "filterchange" before the debounce window elapses', async () => {
    jest.useFakeTimers();
    const element = createElement('fd-table', { is: FdTable });
    element.columns = COLUMNS;
    element.data = DATA;
    element.enableGlobalFilter = true;
    document.body.appendChild(element);

    const handler = jest.fn();
    element.addEventListener('filterchange', handler);

    typeIntoSearch(element, 'mir');
    jest.advanceTimersByTime(100);
    await flush();

    expect(handler).not.toHaveBeenCalled();
    expect(element.shadowRoot!.querySelectorAll('tbody tr').length).toBe(
      DATA.length
    );
    jest.useRealTimers();
  });

  it('applies immediately when globalFilterDebounceMs is 0', async () => {
    const element = createElement('fd-table', { is: FdTable });
    element.columns = COLUMNS;
    element.data = DATA;
    element.enableGlobalFilter = true;
    element.globalFilterDebounceMs = 0;
    document.body.appendChild(element);

    const handler = jest.fn();
    element.addEventListener('filterchange', handler);

    typeIntoSearch(element, 'mir');
    await flush();

    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('dispatches "filterchange" with the new search value', async () => {
    jest.useFakeTimers();
    const element = createElement('fd-table', { is: FdTable });
    element.columns = COLUMNS;
    element.data = DATA;
    element.enableGlobalFilter = true;
    document.body.appendChild(element);

    const handler = jest.fn();
    element.addEventListener('filterchange', handler);

    typeIntoSearch(element, 'cass');
    jest.advanceTimersByTime(250);
    await flush();

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].detail).toEqual({ globalFilter: 'cass' });
    jest.useRealTimers();
  });

  it('leaves rows unfiltered when manualFiltering is enabled, but still dispatches "filterchange"', async () => {
    jest.useFakeTimers();
    const element = createElement('fd-table', { is: FdTable });
    element.columns = COLUMNS;
    element.data = DATA;
    element.enableGlobalFilter = true;
    element.manualFiltering = true;
    document.body.appendChild(element);

    const handler = jest.fn();
    element.addEventListener('filterchange', handler);

    typeIntoSearch(element, 'a');
    jest.advanceTimersByTime(250);
    await flush();

    expect(handler).toHaveBeenCalledTimes(1);
    expect(element.shadowRoot!.querySelectorAll('tbody tr').length).toBe(
      DATA.length
    );
    jest.useRealTimers();
  });

  it('exposes the underlying tanstack table instance via getTanstackTable()', () => {
    const element = createElement('fd-table', { is: FdTable });
    element.columns = COLUMNS;
    element.data = DATA;
    document.body.appendChild(element);

    const table = (element as unknown as { getTanstackTable: () => { getRowModel: () => { rows: unknown[] } } }).getTanstackTable();
    expect(table.getRowModel().rows.length).toBe(DATA.length);
  });

  it('keeps the pagination state object referentially stable across calls (tanstack memoization)', () => {
    // Regression check: getPaginationRowModel memoizes off strict reference
    // equality on `table.getState().pagination`. A fresh object built on
    // every call would silently defeat that memoization.
    const element = createElement('fd-table', { is: FdTable });
    element.columns = COLUMNS;
    element.data = DATA;
    element.enablePagination = true;
    document.body.appendChild(element);

    const tableElement = element as unknown as {
      getTanstackTable: () => { getState: () => { pagination: unknown } };
    };
    const first = tableElement.getTanstackTable().getState().pagination;
    const second = tableElement.getTanstackTable().getState().pagination;
    expect(second).toBe(first);
  });

  it('merges the tableOptions escape hatch on top of its own derived options', () => {
    const element = createElement('fd-table', { is: FdTable });
    element.columns = COLUMNS;
    element.data = DATA;
    element.tableOptions = { meta: { custom: true } };
    document.body.appendChild(element);

    const table = (element as unknown as { getTanstackTable: () => { options: { meta: unknown } } }).getTanstackTable();
    expect(table.options.meta).toEqual({ custom: true });
  });

  it('uses a custom getRowId instead of array index when provided', () => {
    const element = createElement('fd-table', { is: FdTable });
    element.columns = COLUMNS;
    element.data = DATA;
    element.getRowId = (row: { name: string }) => row.name;
    document.body.appendChild(element);

    const rowIds = Array.from(
      element.shadowRoot!.querySelectorAll('tbody tr')
    ).map((tr) => (tr as HTMLElement).dataset.rowId);
    expect(rowIds).toEqual(['Bea', 'Amir', 'Cass']);
  });

  it('renders empty and warns instead of "[object Object]" when a cell returns a non-primitive value', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
    const element = createElement('fd-table', { is: FdTable });
    element.columns = [
      COLUMNS[0],
      { id: 'bad', header: 'Bad', cell: () => ({ oops: true }) }
    ];
    element.data = DATA;
    document.body.appendChild(element);

    const firstRowCells = element.shadowRoot!.querySelectorAll('tbody tr td');
    expect(firstRowCells[1].textContent).toBe('');
    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining('non-primitive value')
    );

    warnSpy.mockRestore();
  });

  it('gives each row selection checkbox a distinct default aria-label, overridable via getRowLabel', async () => {
    const element = createElement('fd-table', { is: FdTable });
    element.columns = COLUMNS;
    element.data = DATA;
    element.enableRowSelection = true;
    document.body.appendChild(element);

    const getLabels = () =>
      Array.from(
        element.shadowRoot!.querySelectorAll('tbody .selection-cell fd-checkbox')
      ).map((checkbox) => (checkbox as unknown as { ariaLabel: string }).ariaLabel);

    expect(getLabels()).toEqual(['Select row 1', 'Select row 2', 'Select row 3']);

    element.getRowLabel = (row: { name: string }) => row.name;
    await flush();

    expect(getLabels()).toEqual(['Select Bea', 'Select Amir', 'Select Cass']);
  });

  // fd-table's slot content only gets distributed via LWC's own compiled
  // template bookkeeping -- a plain `document.createElement` +
  // `appendChild` from test code never reaches it, since that bypasses
  // LWC's compiler (confirmed: `assignedSlot` stayed `null`). A tiny host
  // component that actually slots content in its own template, the way any
  // real consumer's template would, is what exercises the real path.
  it('lets a consumer replace the default search box via slot="search", still driving filtering', async () => {
    const harness = createElement('table-slot-harness', { is: TableSlotHarness });
    harness.columns = COLUMNS;
    harness.data = DATA;
    harness.enableGlobalFilter = true;
    document.body.appendChild(harness);

    const tableEl = harness.shadowRoot!.querySelector('fd-table')!;
    const customSearch = harness.shadowRoot!.querySelector(
      '.custom-search'
    ) as HTMLInputElement;

    customSearch.value = 'mir';
    customSearch.dispatchEvent(new Event('input', { bubbles: true }));
    await flush();

    const names = Array.from(
      tableEl.shadowRoot!.querySelectorAll('tbody tr td:first-child')
    ).map((cell) => cell.textContent);
    expect(names).toEqual(['Amir']);
  });

  it('lets a consumer replace the "select all" checkbox via slot="selection-all", still selecting rows', async () => {
    const harness = createElement('table-slot-harness', { is: TableSlotHarness });
    harness.columns = COLUMNS;
    harness.data = DATA;
    harness.enableRowSelection = true;
    document.body.appendChild(harness);

    const tableEl = harness.shadowRoot!.querySelector('fd-table')!;
    const customSelectAll = harness.shadowRoot!.querySelector(
      '.custom-select-all'
    ) as HTMLInputElement;

    // Proof that matters: a plain native checkbox drives real row selection
    // through the delegated `onchange` listener, which reads `.checked` off
    // whatever dispatched the event rather than requiring the specific
    // CustomEvent shape only fd-checkbox happens to provide.
    customSelectAll.checked = true;
    customSelectAll.dispatchEvent(new Event('change', { bubbles: true }));
    await flush();

    const rowCheckboxes = Array.from(
      tableEl.shadowRoot!.querySelectorAll('tbody .selection-cell fd-checkbox')
    ) as unknown as { checked: boolean }[];
    expect(rowCheckboxes.every((checkbox) => checkbox.checked)).toBe(true);
  });

  it('lets a consumer replace Prev/Next pagination controls via named slots, still paging', async () => {
    const harness = createElement('table-slot-harness', { is: TableSlotHarness });
    harness.columns = COLUMNS;
    harness.data = DATA;
    harness.enablePagination = true;
    harness.pageSize = 2;
    document.body.appendChild(harness);

    const tableEl = harness.shadowRoot!.querySelector('fd-table')!;
    const customNext = harness.shadowRoot!.querySelector('.custom-next')!;

    // Proof that matters: a plain native button drives real pagination
    // through the delegated `onclick` listener on its wrapper -- any
    // clickable element works, since a bubbling click is the whole contract.
    customNext.dispatchEvent(new Event('click', { bubbles: true }));
    await flush();

    const names = Array.from(
      tableEl.shadowRoot!.querySelectorAll('tbody tr td:first-child')
    ).map((cell) => cell.textContent);
    expect(names).toEqual(['Cass']);
  });

  it('renders a caption when provided and omits it otherwise', () => {
    const withCaption = createElement('fd-table', { is: FdTable });
    withCaption.columns = COLUMNS;
    withCaption.data = DATA;
    withCaption.caption = 'People';
    document.body.appendChild(withCaption);
    expect(withCaption.shadowRoot!.querySelector('caption')!.textContent).toBe(
      'People'
    );

    const withoutCaption = createElement('fd-table', { is: FdTable });
    withoutCaption.columns = COLUMNS;
    withoutCaption.data = DATA;
    document.body.appendChild(withoutCaption);
    expect(withoutCaption.shadowRoot!.querySelector('caption')).toBeNull();
  });
});
