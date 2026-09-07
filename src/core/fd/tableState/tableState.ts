import { api, track } from 'lwc';
import Base from 'fd/base';
import {
  createTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel
} from '@tanstack/table-core';
import type {
  Cell,
  ColumnDef,
  Header,
  PaginationState,
  Row,
  RowData,
  RowSelectionState,
  SortingState,
  Table as TanstackTable,
  TableOptions,
  Updater
} from '@tanstack/table-core';

export interface FdTableHeaderCell {
  id: string;
  columnId: string;
  label: string;
  canSort: boolean;
  ariaSort: 'ascending' | 'descending' | 'none';
  sortIndicator: string;
}

export interface FdTableHeaderGroup {
  id: string;
  headers: FdTableHeaderCell[];
}

export interface FdTableCell {
  id: string;
  value: string;
}

export interface FdTableRow {
  id: string;
  cells: FdTableCell[];
  selected: boolean;
  selectionAriaLabel: string;
}

/**
 * FdTableState wraps @tanstack/table-core to provide headless
 * row/column/sorting/pagination/selection/filtering state and behavior --
 * with no template of its own. fd-table extends this with the library's
 * default, ready-made render loop; a consumer who wants different markup
 * (their own <table>, extra columns, richer per-cell content) extends this
 * same class directly and writes their own template, reusing every getter
 * and handler here instead of copying fd-table's internals. See AGENTS.md,
 * "Do not build a black box."
 *
 * A subclass with its own Light DOM template additionally gets scoped
 * slots (`lwc:slot-bind` on a `<slot>` inside `for:each={rows}`) and
 * `lwc:is` available for per-row/per-cell customization -- fd-table's own
 * Shadow DOM template can't offer either (a named `<slot>` can't appear
 * inside a `for:each` at all, and `lwc:slot-bind` requires Light DOM), so
 * this is the actual answer to
 * https://github.com/rahulgawale/fandryui/issues/33 for anyone who needs
 * it, without fd-table itself paying the cost of losing Shadow DOM
 * encapsulation.
 *
 * Methods a subclass is expected to be able to override are `protected`;
 * truly-internal mechanics (the tanstack instance cache, the pagination
 * memoization fix) stay `private`.
 */
export default class FdTableState extends Base {
  @api columns: ColumnDef<RowData, unknown>[] = [];
  @api data: RowData[] = [];
  @api caption = '';
  @api clickableRows = false;

  /**
   * Derives a stable row id from a row's own data (e.g. `row => row.id`)
   * instead of the default array index. Without this, row identity (and
   * therefore selection state) is tied to array *position* -- combine
   * enableRowSelection with any manual* prop (server-driven re-fetch,
   * re-sort, or re-filter) and a selection can silently reattach to
   * whatever row now lands at that position.
   */
  @api getRowId?: (originalRow: RowData, index: number, parent?: Row<RowData>) => string;

  /**
   * Derives an accessible label for a row's selection checkbox from its own
   * data (e.g. `row => row.name`), so screen readers can tell rows apart.
   * Without this, checkboxes fall back to "Select row N" (position-based --
   * still distinct per row, just not as meaningful as real row content).
   */
  @api getRowLabel?: (originalRow: RowData, index: number) => string;

  /**
   * Escape hatch: shallow-merged on top of every tanstack option this
   * component derives from its own @api props (consumer values win). For
   * anything tanstack-core supports that isn't already surfaced as an @api
   * prop -- extra `_features`, column grouping/pinning options, a custom
   * `sortingFns` entry, etc. -- without needing to fork the component.
   */
  @api tableOptions: Partial<TableOptions<RowData>> = {};

  /**
   * While true, `rows` returns an empty array and `loadingRowCount`/
   * `loadingCells` describe a placeholder grid -- fd-table's own template
   * uses these to render fd-skeleton rows; a subclass's own template is
   * free to use `loading` however it wants.
   */
  @api loading = false;
  @api loadingRowCount = 5;

  /**
   * When true, sorting state is still tracked and `sortchange` still fires,
   * but rows are rendered in the order `data` was given -- the consumer is
   * expected to sort `data` itself (e.g. a server-side fetch) instead of
   * relying on the built-in client-side sort.
   */
  @api manualSorting = false;

  /**
   * Opt-in: client-side pagination is off by default so existing tables
   * keep rendering every row. Once enabled, `pageSize` controls how many
   * rows render per page.
   */
  @api enablePagination = false;
  @api pageSize = 10;

  /**
   * When true, `data` is assumed to already be one page's worth of rows
   * (e.g. from a server-side fetch) -- the built-in pagination row model is
   * skipped and previousPage()/nextPage() just move `pageIndex` + fire
   * `pagechange` for the consumer to react to, mirroring `manualSorting`.
   */
  @api manualPagination = false;
  @api pageCount = -1;

  /**
   * Opt-in: adds a checkbox column (with a "select all" checkbox in the
   * header) using tanstack's built-in RowSelection feature rather than the
   * general cell-extensibility escape hatch -- selection is common enough,
   * and well-defined enough, to build as a first-class column instead.
   */
  @api enableRowSelection = false;

  /**
   * LWC requires public boolean properties to default to false, so this is
   * phrased as an opt-out -- multi-row selection (and the "select all"
   * header checkbox) is on by default once `enableRowSelection` is set.
   */
  @api singleRowSelection = false;

  /**
   * Opt-in: filters rows against every column's value via tanstack's
   * built-in GlobalFiltering feature (client-side by default).
   */
  @api enableGlobalFilter = false;
  @api globalFilterPlaceholder = 'Search...';

  /**
   * Milliseconds to wait after the last keystroke before the filter (and
   * `filterchange`) actually apply -- typing itself is never delayed, only
   * when the row model re-filters. 0 applies on every keystroke.
   */
  @api globalFilterDebounceMs = 250;

  /**
   * When true, `data` is assumed to already be filtered (e.g. server-side)
   * -- the built-in filtered row model is skipped and callers of
   * `handleGlobalFilterInput` just track its own value + fire
   * `filterchange`, mirroring manualSorting.
   */
  @api manualFiltering = false;

  @track protected sorting: SortingState = [];
  @track protected pageIndex = 0;
  @track protected rowSelection: RowSelectionState = {};
  @track protected globalFilter = '';

  private tableInstance: TanstackTable<RowData> | null = null;
  private globalFilterDebounceTimer: ReturnType<typeof setTimeout> | null = null;

  // Cached so `pagination: { pageIndex, pageSize }` keeps a stable object
  // reference across calls when neither value actually changed. tanstack's
  // row-model memoization (getPaginationRowModel, etc.) keys off strict
  // reference equality on `table.getState().pagination` -- a fresh object
  // literal here every time would silently defeat that memoization, forcing
  // a full row-model re-slice on every single property read in a render
  // (resolveTableInstance() is called independently by ~10 different
  // getters), not just on an actual page change.
  private cachedPaginationState: PaginationState | null = null;

  private hasWarnedAboutMissingRowId = false;

  disconnectedCallback() {
    if (this.globalFilterDebounceTimer !== null) {
      clearTimeout(this.globalFilterDebounceTimer);
    }
  }

  /**
   * Escape hatch onto the underlying @tanstack/table-core instance, for
   * anything not already surfaced as an @api prop or event -- column
   * pinning/grouping/expanding, imperative calls like
   * `resetRowSelection()`, reading `getState()` directly, etc. Prefer the
   * declarative @api props where one exists; this is for the rest.
   */
  @api
  getTanstackTable(): TanstackTable<RowData> {
    return this.resolveTableInstance();
  }

  private getPaginationState(): PaginationState {
    if (
      !this.cachedPaginationState ||
      this.cachedPaginationState.pageIndex !== this.pageIndex ||
      this.cachedPaginationState.pageSize !== this.pageSize
    ) {
      this.cachedPaginationState = {
        pageIndex: this.pageIndex,
        pageSize: this.pageSize
      };
    }
    return this.cachedPaginationState;
  }

  /**
   * enableRowSelection combined with a manual* prop (server-driven data)
   * and no getRowId is a real, silent-failure-prone combination -- row
   * identity defaults to array index, so a selection can reattach to a
   * different row the moment `data` is replaced with a new page/filter
   * result. Warns once (not on every render) rather than failing silently,
   * matching the console.warn already used for non-primitive cell values.
   */
  private warnIfRowSelectionNeedsRowId() {
    if (
      this.hasWarnedAboutMissingRowId ||
      !this.enableRowSelection ||
      this.getRowId ||
      !(this.manualSorting || this.manualPagination || this.manualFiltering)
    ) {
      return;
    }

    this.hasWarnedAboutMissingRowId = true;
    // eslint-disable-next-line no-console
    console.warn(
      'fd-table: enableRowSelection is combined with a manual* prop (server-driven data) but no getRowId was provided. Row identity defaults to array index, so a selection can silently reattach to a different row once `data` is replaced. Supply getRowId to key selection by stable row identity instead.'
    );
  }

  protected resolveTableInstance(): TanstackTable<RowData> {
    this.warnIfRowSelectionNeedsRowId();

    const baseOptions = {
      columns: this.columns,
      data: this.data,
      getRowId: this.getRowId,
      manualSorting: this.manualSorting,
      onSortingChange: this.handleSortingChange,
      manualPagination: this.manualPagination,
      onPaginationChange: this.handlePaginationChange,
      pageCount: this.manualPagination ? this.pageCount : undefined,
      enableRowSelection: this.enableRowSelection,
      enableMultiRowSelection: !this.singleRowSelection,
      onRowSelectionChange: this.handleRowSelectionChange,
      manualFiltering: this.manualFiltering,
      onGlobalFilterChange: this.handleGlobalFilterChange,
      onStateChange: () => {
        /* state is fully controlled via the fields merged in below */
      },
      renderFallbackValue: '',
      ...this.tableOptions
    };

    if (!this.tableInstance) {
      // Unlike everything in baseOptions, the row-model factories below are
      // only ever read by tanstack once -- the first time each row model is
      // actually requested, it caches the result internally and ignores any
      // later reassignment via setOptions -- so they only need to be
      // supplied at construction, not recomputed on every call (they'd
      // otherwise allocate a throwaway closure on every one of the ~10
      // getters that call resolveTableInstance() per render, for no effect).
      //
      // `state` is left unset here so the constructor's own per-feature
      // defaults (columnPinning, columnVisibility, ...) seed `initialState`
      // untouched -- passing a partial `state` at this point would replace
      // that whole object rather than merge into it.
      this.tableInstance = createTable({
        ...baseOptions,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: this.manualSorting ? undefined : getSortedRowModel(),
        getPaginationRowModel:
          this.enablePagination && !this.manualPagination
            ? getPaginationRowModel()
            : undefined,
        getFilteredRowModel:
          this.enableGlobalFilter && !this.manualFiltering
            ? getFilteredRowModel()
            : undefined,
        state: {}
      });
    }

    // Every feature other than sorting/pagination/rowSelection/globalFilter
    // stays at its default; those are controlled by this component, so
    // they're merged on top of `initialState` rather than replacing the
    // full state object.
    this.tableInstance.setOptions((prev) => ({
      ...prev,
      ...baseOptions,
      state: {
        ...this.tableInstance!.initialState,
        sorting: this.sorting,
        pagination: this.getPaginationState(),
        rowSelection: this.rowSelection,
        globalFilter: this.globalFilter,
        ...this.tableOptions.state
      }
    }));

    return this.tableInstance;
  }

  private handleSortingChange = (updater: Updater<SortingState>) => {
    this.sorting =
      typeof updater === 'function' ? updater(this.sorting) : updater;

    this.dispatchEvent(
      new CustomEvent('sortchange', {
        detail: { sorting: this.sorting },
        bubbles: true,
        composed: true
      })
    );
  };

  private handlePaginationChange = (updater: Updater<PaginationState>) => {
    const current = { pageIndex: this.pageIndex, pageSize: this.pageSize };
    const next = typeof updater === 'function' ? updater(current) : updater;
    this.pageIndex = next.pageIndex;
    // `pageSize` is an @api prop (a consumer sets it directly, same as
    // `columns`/`data`), but it's also part of tanstack's own pagination
    // state -- reassigning it here too (the same pattern fd-checkbox/
    // fd-input already use for their own @api `checked`/`value`) is what
    // makes the documented getTanstackTable().setPageSize() escape hatch
    // actually take effect, instead of silently updating pageIndex against
    // a pageSize that never changed.
    this.pageSize = next.pageSize;

    this.dispatchEvent(
      new CustomEvent('pagechange', {
        detail: { pageIndex: this.pageIndex, pageSize: this.pageSize },
        bubbles: true,
        composed: true
      })
    );
  };

  private handleRowSelectionChange = (updater: Updater<RowSelectionState>) => {
    this.rowSelection =
      typeof updater === 'function' ? updater(this.rowSelection) : updater;

    this.dispatchEvent(
      new CustomEvent('rowselectionchange', {
        detail: {
          rowSelection: this.rowSelection,
          rows: this.resolveTableInstance()
            .getSelectedRowModel()
            .rows.map((row) => row.original)
        },
        bubbles: true,
        composed: true
      })
    );
  };

  // fd-table has no column-grouping feature, so tanstack's getHeaderGroups()
  // always resolves to exactly one group -- exposed singular to match, and
  // because a named <slot> (used by fd-table's own template for the "select
  // all" header cell) isn't allowed inside a `for:each` iterator, which a
  // plural getter would need.
  get headerGroup(): FdTableHeaderGroup {
    const [group] = this.resolveTableInstance().getHeaderGroups();
    return {
      id: group.id,
      headers: group.headers.map((header) => this.toHeaderCell(header))
    };
  }

  get rows(): FdTableRow[] {
    return this.resolveTableInstance()
      .getRowModel()
      .rows.map((row, index) => ({
        id: row.id,
        cells: row.getVisibleCells().map((cell) => ({
          id: cell.id,
          value: this.toCellValue(cell)
        })),
        selected: row.getIsSelected(),
        selectionAriaLabel: this.resolveRowSelectionAriaLabel(row, index)
      }));
  }

  get hasRows(): boolean {
    return this.resolveTableInstance().getRowModel().rows.length > 0;
  }

  get hasCaption(): boolean {
    return !!this.caption;
  }

  get tableClasses(): string {
    return ['table', this.clickableRows ? 'table--clickable' : '']
      .filter(Boolean)
      .join(' ');
  }

  get columnCount(): number {
    const leafColumnCount = this.resolveTableInstance().getAllLeafColumns().length;
    return Math.max(leafColumnCount + (this.enableRowSelection ? 1 : 0), 1);
  }

  get allRowsSelected(): boolean {
    // Page-scoped (getIsAllPageRowsSelected), not getIsAllRowsSelected --
    // the latter operates on every row across every page (via
    // getPreGroupedRowModel, which sits before pagination in tanstack's
    // pipeline), so the header checkbox would silently select/reflect rows
    // that were never rendered. This is also shadcn's own canonical
    // data-table pattern.
    return this.resolveTableInstance().getIsAllPageRowsSelected();
  }

  get someRowsSelected(): boolean {
    return this.resolveTableInstance().getIsSomePageRowsSelected();
  }

  get enableMultiRowSelection(): boolean {
    return !this.singleRowSelection;
  }

  get loadingRows(): number[] {
    return Array.from({ length: Math.max(this.loadingRowCount, 0) }, (_, index) => index);
  }

  get loadingCells(): number[] {
    const leafColumnCount = this.resolveTableInstance().getAllLeafColumns().length;
    return Array.from({ length: leafColumnCount }, (_, index) => index);
  }

  get previousPageDisabled(): boolean {
    return !this.resolveTableInstance().getCanPreviousPage();
  }

  get nextPageDisabled(): boolean {
    return !this.resolveTableInstance().getCanNextPage();
  }

  get pageStatus(): string {
    const pageCount = this.resolveTableInstance().getPageCount();
    const currentPage = this.pageIndex + 1;
    return pageCount >= 0 ? `Page ${currentPage} of ${pageCount}` : `Page ${currentPage}`;
  }

  get hasFooter(): boolean {
    return this.enableRowSelection || this.enablePagination;
  }

  get selectionStatus(): string {
    if (!this.enableRowSelection) return '';

    const table = this.resolveTableInstance();
    const selectedCount = table.getSelectedRowModel().rows.length;
    // Selection spans the whole dataset (not just the current page), so the
    // total it's measured against has to be the same -- getCoreRowModel is
    // the full, unpaginated/unsorted row set.
    const totalCount = table.getCoreRowModel().rows.length;
    return `${selectedCount} of ${totalCount} selected`;
  }

  protected toHeaderCell(header: Header<RowData, unknown>): FdTableHeaderCell {
    const column = header.column;
    const isSorted = header.isPlaceholder ? false : column.getIsSorted();

    return {
      id: header.id,
      columnId: column.id,
      label: header.isPlaceholder ? '' : this.resolveHeaderLabel(header),
      canSort: !header.isPlaceholder && column.getCanSort(),
      ariaSort:
        isSorted === 'asc'
          ? 'ascending'
          : isSorted === 'desc'
            ? 'descending'
            : 'none',
      sortIndicator: isSorted === 'asc' ? '▲' : isSorted === 'desc' ? '▼' : ''
    };
  }

  protected resolveRowSelectionAriaLabel(row: Row<RowData>, displayIndex: number): string {
    if (typeof this.getRowLabel === 'function') {
      const label = this.getRowLabel(row.original, displayIndex);
      if (label) return `Select ${label}`;
    }
    return `Select row ${displayIndex + 1}`;
  }

  protected resolveHeaderLabel(header: Header<RowData, unknown>): string {
    const headerDef = header.column.columnDef.header;
    if (typeof headerDef === 'function') {
      return this.toDisplayValue(headerDef(header.getContext()), `column "${header.column.id}"'s header`);
    }
    return this.toDisplayValue(headerDef, `column "${header.column.id}"'s header`);
  }

  /**
   * Renders a column's `cell` as a plain string -- fd-table's own default
   * template only ever displays plain text, per
   * https://github.com/rahulgawale/fandryui/issues/33. A subclass with its
   * own Light DOM template isn't limited to that: `rows`/`headerGroup`
   * expose the underlying data either way, and a Light DOM template can use
   * `lwc:slot-bind` (scoped slots -- lets the consumer's own markup render
   * each row/cell, parameterized by that row/cell's data) or `lwc:is` (lets
   * a column pick which component to render) per cell. This override point
   * is what makes either approach possible without forking resolveTableInstance.
   */
  protected toCellValue(cell: Cell<RowData, unknown>): string {
    const cellDef = cell.column.columnDef.cell;
    const result =
      typeof cellDef === 'function' ? cellDef(cell.getContext()) : cell.getValue();
    return this.toDisplayValue(result, `column "${cell.column.id}"'s cell`);
  }

  /**
   * fd-table only renders primitives -- richer per-cell markup is tracked
   * in https://github.com/rahulgawale/fandryui/issues/33, not solved here.
   * A non-primitive return used to be silently `String()`-coerced into
   * "[object Object]"; this renders nothing instead and warns in the
   * console so the gap is discoverable during development rather than
   * showing up as confusing text in the table.
   */
  protected toDisplayValue(result: unknown, source: string): string {
    if (result == null) return '';

    const type = typeof result;
    if (type === 'string' || type === 'number' || type === 'boolean') {
      return String(result);
    }

    // eslint-disable-next-line no-console
    console.warn(
      `fd-table: ${source} returned a non-primitive value (${type}), which fd-table cannot render. See issue #33 for richer cell content support.`
    );
    return '';
  }

  handleHeaderClick(event: Event) {
    const columnId = (event.currentTarget as HTMLElement).dataset.columnId;
    if (!columnId) return;

    const column = this.resolveTableInstance().getColumn(columnId);
    column?.toggleSorting();
  }

  handleRowClick(event: Event) {
    if (!this.clickableRows) return;

    const rowId = (event.currentTarget as HTMLElement).dataset.rowId;
    if (rowId == null) return;

    const row = this.resolveTableInstance().getRow(rowId, true);

    this.dispatchEvent(
      new CustomEvent('rowclick', {
        detail: { id: row.id, row: row.original },
        bubbles: true,
        composed: true
      })
    );
  }

  handlePreviousPage() {
    this.resolveTableInstance().previousPage();
  }

  handleNextPage() {
    this.resolveTableInstance().nextPage();
  }

  handleSelectionCellClick(event: Event) {
    // The selection <td> lives inside a <tr> that may also carry
    // `handleRowClick` (clickableRows) -- without this, clicking the
    // checkbox would also fire a `rowclick`.
    event.stopPropagation();
  }

  handleToggleRowSelected(event: Event) {
    event.stopPropagation();

    // Reads `.checked` off whatever dispatched the event rather than
    // `event.detail`, so slot="selection-all"/the per-row checkbox work
    // with either fd-checkbox or a plain native <input type="checkbox"> a
    // consumer swaps in -- both expose `.checked`, only fd-checkbox also
    // happens to dispatch a CustomEvent with a boolean detail.
    const target = event.target as HTMLInputElement;
    const rowId = target.dataset.rowId;
    if (rowId == null) return;

    this.resolveTableInstance().getRow(rowId, true).toggleSelected(target.checked);
  }

  handleToggleAllRowsSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    this.resolveTableInstance().toggleAllPageRowsSelected(target.checked);
  }

  handleGlobalFilterInput(event: Event) {
    // Same reasoning as the checkbox handlers above: reads `.value` off the
    // target so slot="search" works with fd-input or a plain native
    // <input> a consumer swaps in.
    const value = (event.target as HTMLInputElement).value;

    if (this.globalFilterDebounceTimer !== null) {
      clearTimeout(this.globalFilterDebounceTimer);
      this.globalFilterDebounceTimer = null;
    }

    if (this.globalFilterDebounceMs <= 0) {
      this.applyGlobalFilter(value);
      return;
    }

    this.globalFilterDebounceTimer = setTimeout(() => {
      this.globalFilterDebounceTimer = null;
      this.applyGlobalFilter(value);
    }, this.globalFilterDebounceMs);
  }

  // Registered as onGlobalFilterChange so tanstack's own
  // setGlobalFilter()/resetGlobalFilter() (reachable via the documented
  // getTanstackTable() escape hatch) actually take effect, not just the
  // debounced input handler above -- without this, those calls would
  // silently no-op through tanstack's default onGlobalFilterChange, which
  // routes into the onStateChange no-op below.
  private handleGlobalFilterChange = (updater: Updater<string>) => {
    const next = typeof updater === 'function' ? updater(this.globalFilter) : updater;
    this.applyGlobalFilter(next);
  };

  protected applyGlobalFilter(value: string) {
    this.globalFilter = value;

    this.dispatchEvent(
      new CustomEvent('filterchange', {
        detail: { globalFilter: this.globalFilter },
        bubbles: true,
        composed: true
      })
    );
  }
}
