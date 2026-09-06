import { createElement } from 'lwc';
import FdTable from '../table';

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

  it('filters rows client-side as the search input changes', async () => {
    const element = createElement('fd-table', { is: FdTable });
    element.columns = COLUMNS;
    element.data = DATA;
    element.enableGlobalFilter = true;
    document.body.appendChild(element);

    const searchHost = element.shadowRoot!.querySelector('.table-toolbar fd-input')!;
    const nativeInput = searchHost.shadowRoot!.querySelector(
      'input'
    ) as HTMLInputElement;
    nativeInput.value = 'mir';
    nativeInput.dispatchEvent(new Event('input'));
    await flush();

    const names = Array.from(
      element.shadowRoot!.querySelectorAll('tbody tr td:first-child')
    ).map((cell) => cell.textContent);
    expect(names).toEqual(['Amir']);
  });

  it('dispatches "filterchange" with the new search value', async () => {
    const element = createElement('fd-table', { is: FdTable });
    element.columns = COLUMNS;
    element.data = DATA;
    element.enableGlobalFilter = true;
    document.body.appendChild(element);

    const handler = jest.fn();
    element.addEventListener('filterchange', handler);

    const searchHost = element.shadowRoot!.querySelector('.table-toolbar fd-input')!;
    const nativeInput = searchHost.shadowRoot!.querySelector(
      'input'
    ) as HTMLInputElement;
    nativeInput.value = 'cass';
    nativeInput.dispatchEvent(new Event('input'));
    await flush();

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].detail).toEqual({ globalFilter: 'cass' });
  });

  it('leaves rows unfiltered when manualFiltering is enabled, but still dispatches "filterchange"', async () => {
    const element = createElement('fd-table', { is: FdTable });
    element.columns = COLUMNS;
    element.data = DATA;
    element.enableGlobalFilter = true;
    element.manualFiltering = true;
    document.body.appendChild(element);

    const handler = jest.fn();
    element.addEventListener('filterchange', handler);

    const searchHost = element.shadowRoot!.querySelector('.table-toolbar fd-input')!;
    const nativeInput = searchHost.shadowRoot!.querySelector(
      'input'
    ) as HTMLInputElement;
    nativeInput.value = 'a';
    nativeInput.dispatchEvent(new Event('input'));
    await flush();

    expect(handler).toHaveBeenCalledTimes(1);
    expect(element.shadowRoot!.querySelectorAll('tbody tr').length).toBe(
      DATA.length
    );
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
