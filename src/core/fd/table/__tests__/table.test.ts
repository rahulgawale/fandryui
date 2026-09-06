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
      element.shadowRoot!.querySelectorAll('.pagination-button')
    ) as HTMLButtonElement[];
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
      '.pagination-button'
    )[1] as HTMLButtonElement;
    nextButton.click();
    await flush();

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].detail).toEqual({
      pageIndex: 1,
      pageSize: 2
    });
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
