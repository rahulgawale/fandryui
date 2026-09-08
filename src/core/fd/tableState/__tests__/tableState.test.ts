import { createElement } from 'lwc';
import CustomTableHarness from './customTableHarness';

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

describe('FdTableState (extended with a completely custom template)', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders rows/headers through a consumer-owned <ul> instead of a <table>', () => {
    const element = createElement('custom-table-harness', {
      is: CustomTableHarness
    });
    element.columns = COLUMNS;
    element.data = DATA;
    document.body.appendChild(element);

    // No table markup at all -- this is the point.
    expect(element.shadowRoot!.querySelector('table')).toBeNull();

    const rows = element.shadowRoot!.querySelectorAll('.custom-row');
    expect(rows.length).toBe(DATA.length);
    expect(rows[0].querySelectorAll('.custom-cell')[0].textContent).toBe('Bea');
  });

  it('still sorts via the inherited handleHeaderClick, with no fd-table involved', async () => {
    const element = createElement('custom-table-harness', {
      is: CustomTableHarness
    });
    element.columns = COLUMNS;
    element.data = DATA;
    document.body.appendChild(element);

    const nameHeader = element.shadowRoot!.querySelector(
      '.custom-header[data-column-id="name"]'
    ) as HTMLElement;
    nameHeader.click();
    await flush();

    const names = Array.from(
      element.shadowRoot!.querySelectorAll('.custom-row')
    ).map((row) => row.querySelectorAll('.custom-cell')[0].textContent);
    expect(names).toEqual(['Amir', 'Bea', 'Cass']);
  });

  it('dispatches the same "sortchange" event fd-table dispatches, unchanged', async () => {
    const element = createElement('custom-table-harness', {
      is: CustomTableHarness
    });
    element.columns = COLUMNS;
    element.data = DATA;
    document.body.appendChild(element);

    const handler = jest.fn();
    element.addEventListener('sortchange', handler);

    const ageHeader = element.shadowRoot!.querySelector(
      '.custom-header[data-column-id="age"]'
    ) as HTMLElement;
    ageHeader.click();
    await flush();

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].detail.sorting).toEqual([
      { id: 'age', desc: true }
    ]);
  });
});
