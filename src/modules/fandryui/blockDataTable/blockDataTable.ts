import { LightningElement } from 'lwc';
import { benchmarkOptionsFromUrl, createMockApi, ROLE_OPTIONS, STATUS_OPTIONS } from './mockApi';
import type { Person } from './mockApi';

const USAGE = `<fandry-data-table
  columns={columns}
  data={rows}
  loading={loading}
  page-size="8"
  save-row={saveRow}
  save-rows={saveRows}
  delete-row={deleteRow}
  onrowsave={handleRowSave}
  onrowdelete={handleRowDelete}
></fandry-data-table>`;

const COLUMNS_CODE = `columns = [
  { id: 'name', accessorKey: 'name', header: 'Name',
    meta: { editor: { type: 'text' } } },
  { id: 'role', accessorKey: 'role', header: 'Role',
    meta: {
      filter: { options: ROLE_OPTIONS },
      editor: { type: 'select', options: ROLE_OPTIONS }
    } },
  { id: 'status', accessorKey: 'status', header: 'Status',
    meta: {
      filter: { options: STATUS_OPTIONS },
      editor: { type: 'select', options: STATUS_OPTIONS },
      badges: { active: 'success', pending: 'warning', suspended: 'danger' }
    } }
];`;

const HOOKS_CODE = `// The hook is where the request goes. Resolve with the saved row, or throw
// to keep the row in edit mode and show the message in a toast.
saveRow = (row, changes) => api.update(row.id, changes);
saveRows = (rows, changes) => api.updateMany(rows.map((r) => r.id), changes);
deleteRow = (row) => api.remove([row.id]);

// The block never edits \`data\` itself -- put the result back. A multi-record
// edit fires rowsave once per saved row, so this one handler covers both.
handleRowSave(event) {
  const { row } = event.detail;
  this.rows = this.rows.map((r) => (r.id === row.id ? row : r));
}
handleRowDelete(event) {
  this.rows = this.rows.filter((r) => r.id !== event.detail.id);
}`;

const PROPS = [
  { name: 'columns', type: 'ColumnDef[]', default: '[]', description: 'Plain tanstack column definitions. Filters, editors and badges are read from each column\'s `meta`.' },
  { name: 'data', type: 'object[]', default: '[]', description: 'The rows. Controlled: the block never changes it.' },
  { name: 'get-row-id', type: 'function', default: 'row => String(row.id)', description: 'Stable row identity, used by selection and editing.' },
  { name: 'get-row-label', type: 'function', default: '—', description: 'A readable name for a row (row => row.name), used in toasts, the delete prompt and aria-labels.' },
  { name: 'loading', type: 'boolean', default: 'false', description: 'Renders skeleton rows in place of the data.' },
  { name: 'save-row', type: '(row, changes) => Promise', default: '—', description: 'Persists an inline edit. `changes` holds only the changed columns. Reject to keep the row editing and toast the error.' },
  { name: 'save-rows', type: '(rows, changes) => Promise', default: '—', description: 'Persists a multi-record edit as one batch (select two or more rows, then Edit selected). `changes` holds only the fields the user filled in. Resolve with the saved rows or nothing; reject to keep the dialog open and toast the error.' },
  { name: 'delete-row', type: '(row) => Promise', default: '—', description: 'Same contract, for the built-in Delete action (after the confirmation).' },
  { name: 'row-actions', type: '{ value, label }[]', default: 'Edit, Delete', description: 'The row menu. `edit` and `delete` are built in; any other value fires `rowaction`. An empty list removes the column.' },
  { name: 'column-visibility', type: '{ [columnId]: boolean }', default: '{}', description: 'Which columns are hidden (`{ email: false }`). Set it to start hidden or to restore a saved choice; the block keeps it current as the user toggles columns.' },
  { name: 'page-size', type: 'number', default: '10', description: 'Rows per page.' },
  { name: 'toast-duration', type: 'number', default: '4000', description: 'Milliseconds before a toast dismisses itself.' },
  { name: 'showToast(variant, message)', type: 'method', default: '—', description: 'Shows a toast, for actions you run yourself (a bulk delete, say).' }
];

const EVENTS = [
  { name: 'rowsave', detail: '{ id, row, changes }', description: 'A save succeeded. Put `row` into your data. A multi-record edit fires it once per saved row.' },
  { name: 'rowdelete', detail: '{ id, row }', description: 'A delete succeeded. Take the row out of your data.' },
  { name: 'rowaction', detail: '{ action, id, row }', description: 'A custom row-menu action was chosen.' },
  { name: 'rowselectionchange', detail: '{ rowSelection, rows }', description: 'The selection changed (inherited from fandry-table).' },
  { name: 'columnvisibilitychange', detail: '{ columnVisibility }', description: 'A column was shown or hidden. Save it if you want it remembered.' },
  { name: 'filterchange', detail: '{ globalFilter, columnFilters }', description: 'Search or a filter changed.' },
  { name: 'sortchange · pagechange', detail: '', description: 'Inherited from fandry-table.' }
];

const SLOTS = [
  { name: 'toolbar', description: 'Controls at the end of the toolbar -- Refresh, Add, bulk actions.' },
  { name: 'search', description: 'Replaces the search box. Dispatch a bubbling `input` event with `.value`.' },
  { name: 'empty', description: 'What shows when nothing matches.' },
  { name: 'pagination', description: 'Replaces the pagination control.' },
  { name: 'selection-all', description: 'Replaces the select-all checkbox.' }
];

const BUILT_FROM = [
  'table', 'input', 'select', 'checkbox', 'button', 'badge', 'popover', 'menu',
  'dialog', 'toast', 'skeleton', 'spinner', 'pagination'
];

export default class BlockDataTable extends LightningElement {
  usageCode = USAGE;
  columnsCode = COLUMNS_CODE;
  hooksCode = HOOKS_CODE;
  props = PROPS;
  events = EVENTS;
  slots = SLOTS;
  builtFrom = BUILT_FROM;

  installNpm = `npm install fandryui

<!-- nothing to copy: your bundler ships only what you use -->
<fandry-data-table></fandry-data-table>`;
  installSfdx = `npx fandry add data-table
# adds the block and everything it is built from
# to your package directory, as source you own`;

  columns = [
    { id: 'name', accessorKey: 'name', header: 'Name', meta: { editor: { type: 'text' } } },
    { id: 'email', accessorKey: 'email', header: 'Email', meta: { editor: { type: 'text' } } },
    {
      id: 'role',
      accessorKey: 'role',
      header: 'Role',
      meta: { filter: { options: ROLE_OPTIONS }, editor: { type: 'select', options: ROLE_OPTIONS } }
    },
    {
      id: 'status',
      accessorKey: 'status',
      header: 'Status',
      meta: {
        filter: { options: STATUS_OPTIONS },
        editor: { type: 'select', options: STATUS_OPTIONS },
        badges: { active: 'success', pending: 'warning', suspended: 'danger' }
      }
    }
  ];

  rows: Person[] = [];
  loading = true;
  selectedRows: Person[] = [];
  simulateErrors = false;

  private benchmark = benchmarkOptionsFromUrl();

  /*
   * The benchmark's `?latency=0` only sets where the switch starts; turning it
   * back on uses the normal latency, so the skeleton and Refresh stay visible.
   */
  simulateLatency = this.benchmark.latencyMs !== 0;

  private api = createMockApi({
    rowCount: this.benchmark.rowCount,
    latencyMs: this.benchmark.latencyMs || undefined,
    shouldFail: () => this.simulateErrors,
    shouldDelay: () => this.simulateLatency
  });

  // The same URL the benchmark (scripts/bench-data-table.mjs) drives.
  get isBenchmark(): boolean {
    return this.benchmark.rowCount !== undefined;
  }

  get scaleLinkHref(): string {
    return this.isBenchmark ? '/blocks/data-table' : '/blocks/data-table?rows=10000&latency=0&pageSize=50';
  }

  get scaleLinkLabel(): string {
    return this.isBenchmark ? 'Back to the 24-row demo.' : 'Try it with 10,000 rows (the benchmark view).';
  }

  get pageSize(): number {
    return this.benchmark.pageSize ?? 8;
  }

  connectedCallback() {
    void this.load();
  }

  get table() {
    return this.template.querySelector('fandry-data-table') as
      | (HTMLElement & { showToast(variant: string, message: string): void; getTanstackTable(): any })
      | null;
  }

  get noSelection(): boolean {
    return this.selectedRows.length === 0;
  }

  get bulkDeleteLabel(): string {
    return this.noSelection ? 'Delete selected' : `Delete ${this.selectedRows.length} selected`;
  }

  getRowLabel = (row: Person) => row.name;

  async load() {
    this.loading = true;
    try {
      this.rows = await this.api.list();
    } catch (error) {
      // Keep what is on screen; the table only reports the failure.
      this.table?.showToast('danger', `Couldn't refresh: ${(error as Error).message}`);
    } finally {
      this.loading = false;
    }
  }

  // ---- hooks handed to the block

  saveRow = (row: Person, changes: Partial<Person>) => this.api.update(row.id, changes);

  saveRows = (rows: Person[], changes: Partial<Person>) => this.api.updateMany(rows.map((row) => row.id), changes);

  deleteRow = (row: Person) => this.api.remove([row.id]);

  handleRowSave(event: CustomEvent<{ row: Person }>) {
    const { row } = event.detail;
    this.rows = this.rows.map((existing) => (existing.id === row.id ? row : existing));
  }

  handleRowDelete(event: CustomEvent<{ id: string }>) {
    this.rows = this.rows.filter((row) => String(row.id) !== event.detail.id);
  }

  handleSelectionChange(event: CustomEvent<{ rows: Person[] }>) {
    this.selectedRows = event.detail.rows;
  }

  // ---- toolbar controls (slot="toolbar")

  handleRefresh() {
    void this.load();
  }

  async handleBulkDelete() {
    const doomed = this.selectedRows;
    if (!doomed.length) return;

    try {
      await this.api.remove(doomed.map((row) => row.id));
      const ids = new Set(doomed.map((row) => row.id));
      this.rows = this.rows.filter((row) => !ids.has(row.id));
      this.table?.getTanstackTable().resetRowSelection();
      this.table?.showToast('success', `Deleted ${doomed.length} ${doomed.length === 1 ? 'person' : 'people'}.`);
    } catch (error) {
      this.table?.showToast('danger', `Couldn't delete: ${(error as Error).message}`);
    }
  }

  handleSimulateErrorsChange(event: CustomEvent<boolean>) {
    this.simulateErrors = !!event.detail;
  }

  handleSimulateLatencyChange(event: CustomEvent<boolean>) {
    this.simulateLatency = !!event.detail;
  }
}
