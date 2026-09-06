import { api, track } from 'lwc';
import Base from 'fd/base';
import {
  createTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel
} from '@tanstack/table-core';
import type {
  Cell,
  ColumnDef,
  Header,
  PaginationState,
  RowData,
  SortingState,
  Table as TanstackTable,
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
}

/**
 * FdTable wraps @tanstack/table-core to provide headless row/column
 * management (core row model + sorting). Rendering stays native LWC --
 * columns only supply plain values (string/number) via `cell`, not markup --
 * so cell markup composition is left to the consumer via row data shaping
 * rather than a renderer-function escape hatch LWC templates can't execute.
 */
export default class FdTable extends Base {
  @api columns: ColumnDef<RowData, unknown>[] = [];
  @api data: RowData[] = [];
  @api caption = '';
  @api clickableRows = false;

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
   * rows render per page and Prev/Next controls appear below the table.
   */
  @api enablePagination = false;
  @api pageSize = 10;

  /**
   * When true, `data` is assumed to already be one page's worth of rows
   * (e.g. from a server-side fetch) -- the built-in pagination row model is
   * skipped and Prev/Next just move `pageIndex` + fire `pagechange` for the
   * consumer to react to, mirroring `manualSorting`.
   */
  @api manualPagination = false;
  @api pageCount = -1;

  @track private sorting: SortingState = [];
  @track private pageIndex = 0;

  private tableInstance: TanstackTable<RowData> | null = null;

  private getTableInstance(): TanstackTable<RowData> {
    const baseOptions = {
      columns: this.columns,
      data: this.data,
      manualSorting: this.manualSorting,
      onSortingChange: this.handleSortingChange,
      manualPagination: this.manualPagination,
      onPaginationChange: this.handlePaginationChange,
      pageCount: this.manualPagination ? this.pageCount : undefined,
      onStateChange: () => {
        /* state is fully controlled via the fields merged in below */
      },
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: this.manualSorting ? undefined : getSortedRowModel(),
      getPaginationRowModel:
        this.enablePagination && !this.manualPagination
          ? getPaginationRowModel()
          : undefined,
      renderFallbackValue: ''
    };

    if (!this.tableInstance) {
      // `state` is left unset here so the constructor's own per-feature
      // defaults (columnPinning, columnVisibility, ...) seed `initialState`
      // untouched -- passing a partial `state` at this point would replace
      // that whole object rather than merge into it.
      this.tableInstance = createTable({ ...baseOptions, state: {} });
    }

    // Every feature other than sorting/pagination stays at its default;
    // those two are controlled by this component, so they're merged on top
    // of `initialState` rather than replacing the full state object.
    this.tableInstance.setOptions((prev) => ({
      ...prev,
      ...baseOptions,
      state: {
        ...this.tableInstance!.initialState,
        sorting: this.sorting,
        pagination: { pageIndex: this.pageIndex, pageSize: this.pageSize }
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

    this.dispatchEvent(
      new CustomEvent('pagechange', {
        detail: { pageIndex: this.pageIndex, pageSize: this.pageSize },
        bubbles: true,
        composed: true
      })
    );
  };

  get headerGroups(): FdTableHeaderGroup[] {
    return this.getTableInstance()
      .getHeaderGroups()
      .map((headerGroup) => ({
        id: headerGroup.id,
        headers: headerGroup.headers.map((header) => this.toHeaderCell(header))
      }));
  }

  get rows(): FdTableRow[] {
    return this.getTableInstance()
      .getRowModel()
      .rows.map((row) => ({
        id: row.id,
        cells: row.getVisibleCells().map((cell) => ({
          id: cell.id,
          value: this.toCellValue(cell)
        }))
      }));
  }

  get hasRows(): boolean {
    return this.getTableInstance().getRowModel().rows.length > 0;
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
    return Math.max(this.getTableInstance().getAllLeafColumns().length, 1);
  }

  get previousPageDisabled(): boolean {
    return !this.getTableInstance().getCanPreviousPage();
  }

  get nextPageDisabled(): boolean {
    return !this.getTableInstance().getCanNextPage();
  }

  get pageStatus(): string {
    const pageCount = this.getTableInstance().getPageCount();
    const currentPage = this.pageIndex + 1;
    return pageCount >= 0 ? `Page ${currentPage} of ${pageCount}` : `Page ${currentPage}`;
  }

  private toHeaderCell(header: Header<RowData, unknown>): FdTableHeaderCell {
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

  private resolveHeaderLabel(header: Header<RowData, unknown>): string {
    const headerDef = header.column.columnDef.header;
    if (typeof headerDef === 'function') {
      const result = headerDef(header.getContext());
      return result == null ? '' : String(result);
    }
    return headerDef == null ? '' : String(headerDef);
  }

  private toCellValue(cell: Cell<RowData, unknown>): string {
    const cellDef = cell.column.columnDef.cell;
    const result =
      typeof cellDef === 'function' ? cellDef(cell.getContext()) : cell.getValue();
    return result == null ? '' : String(result);
  }

  handleHeaderClick(event: Event) {
    const columnId = (event.currentTarget as HTMLElement).dataset.columnId;
    if (!columnId) return;

    const column = this.getTableInstance().getColumn(columnId);
    column?.toggleSorting();
  }

  handleRowClick(event: Event) {
    if (!this.clickableRows) return;

    const rowId = (event.currentTarget as HTMLElement).dataset.rowId;
    if (rowId == null) return;

    const row = this.getTableInstance().getRow(rowId, true);

    this.dispatchEvent(
      new CustomEvent('rowclick', {
        detail: { id: row.id, row: row.original },
        bubbles: true,
        composed: true
      })
    );
  }

  handlePreviousPage() {
    this.getTableInstance().previousPage();
  }

  handleNextPage() {
    this.getTableInstance().nextPage();
  }
}
