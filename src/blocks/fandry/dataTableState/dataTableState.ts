import { api, track } from 'lwc';
import FdTableState from 'fandry/tableState';
import { exitFinished } from 'fandry/motion';
import type { Cell, ColumnFiltersState, Row, RowData, Updater, VisibilityState } from '@tanstack/table-core';

export interface FdDataTableOption {
  label: string;
  value: string;
}

export type FdDataTableBadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger';

/**
 * Read from a column's `meta`, so a column stays a plain tanstack ColumnDef
 * -- there is no second column format to learn.
 *
 *   {
 *     id: 'status', accessorKey: 'status', header: 'Status',
 *     meta: {
 *       filter: { options: [{ label: 'Active', value: 'active' }] },
 *       editor: { type: 'select', options: [...] },
 *       badges: { active: 'success' }
 *     }
 *   }
 */
export interface FdDataTableColumnMeta {
  /** Adds a select to the toolbar that filters rows to one value of this column. */
  filter?: { options: FdDataTableOption[] };
  /** Makes the column editable while its row is in edit mode. */
  editor?: { type?: 'text' | 'number' | 'select'; options?: FdDataTableOption[] };
  /** Renders the cell's value as a fandry-badge, keyed by value. */
  badges?: Record<string, FdDataTableBadgeVariant>;
}

export interface FdDataTableRowAction {
  value: string;
  label: string;
}

export interface FdDataTableFilter {
  columnId: string;
  label: string;
  value: string;
  options: FdDataTableOption[];
  selectProps: Record<string, unknown>;
}

export interface FdDataTableColumnToggle {
  columnId: string;
  label: string;
  visible: boolean;
  // The last visible column stays on: a table with no columns is not a state
  // anyone wants to be in.
  disabled: boolean;
}

export interface FdDataTableBulkField {
  columnId: string;
  label: string;
  value: string;
  isInputEditor: boolean;
  isSelectEditor: boolean;
  inputType: string;
  options: FdDataTableOption[];
}

export interface FdDataTableCell {
  id: string;
  columnId: string;
  value: string;
  editable: boolean;
  isBadge: boolean;
  badgeVariant: FdDataTableBadgeVariant;
  isPlain: boolean;
  isInputEditor: boolean;
  isSelectEditor: boolean;
  inputType: string;
  draftValue: string;
  options: FdDataTableOption[];
  editorProps: Record<string, unknown>;
}

export interface FdDataTableRow {
  id: string;
  classes: string;
  selected: boolean;
  selectionAriaLabel: string;
  editing: boolean;
  saving: boolean;
  menuOpen: boolean;
  menuTriggerProps: Record<string, unknown>;
  cells: FdDataTableCell[];
}

export interface FdDataTableToast {
  id: number;
  variant: 'info' | 'success' | 'warning' | 'danger';
  message: string;
}

const NO_FILTER = '';

/**
 * FdDataTableState is the behavior behind the data-table block, with no
 * template of its own: it extends FdTableState (headless tanstack state) and
 * adds the parts a real screen needs -- column filters, row actions, inline
 * row editing, an async save/delete workflow with toasts, and the
 * saving/saved/loading states around it. fandry-data-table is this class plus
 * the ready-made markup; a consumer who wants different markup extends this
 * class and writes their own template (see FdTableState for the same seam one
 * level down).
 *
 * Data is controlled: this component never edits `data`. A successful save or
 * delete is reported through `rowsave` / `rowdelete`, and the consumer puts
 * the change into the `data` it passes back in. The `saveRow` / `deleteRow`
 * hooks are where the actual request goes.
 */
export default class FdDataTableState extends FdTableState {
  /**
   * `(row, changes) => Promise<row | void>` -- persist an inline edit.
   * `changes` holds only the columns that differ. Resolve to the saved row
   * (e.g. the server's response) or nothing; reject with an Error to keep the
   * row in edit mode and show `error.message` in a toast. Without a hook the
   * edit is accepted immediately. It is not called when nothing changed
   * (the user just sees an info toast).
   */
  @api saveRow?: (row: RowData, changes: Record<string, unknown>) => Promise<RowData | void>;

  /**
   * `(rows, changes) => Promise<row[] | void>` -- persist a multi-record edit:
   * the selected rows and the columns the user filled in (untouched columns
   * are not in `changes`). One call for the whole batch, so it can be atomic.
   * Resolve with the saved rows (matched to the originals by id) or nothing;
   * reject to keep the dialog open and toast `error.message`. Each saved row
   * is then reported through `rowsave`, exactly like a single edit. Without a
   * hook the changes are applied to the rows as they are.
   */
  @api saveRows?: (rows: RowData[], changes: Record<string, unknown>) => Promise<RowData[] | void>;

  /** `(row) => Promise<void>` -- same contract as `saveRow`, for the built-in Delete action. */
  @api deleteRow?: (row: RowData) => Promise<void>;

  /**
   * `edit` and `delete` are built in; any other value is reported through
   * `rowaction` for the consumer to handle.
   */
  @api rowActions: FdDataTableRowAction[] = [
    { value: 'edit', label: 'Edit' },
    { value: 'delete', label: 'Delete' }
  ];

  /**
   * Which columns are hidden, keyed by column id (`{ email: false }`). Set it
   * to start with columns hidden or to restore a saved preference; the block
   * keeps it up to date as the user toggles columns and reports each change
   * through `columnvisibilitychange`, so it can be persisted.
   */
  @api columnVisibility: VisibilityState = {};

  /** Milliseconds a toast stays before dismissing itself. */
  @api toastDuration = 4000;

  @track protected columnFilters: ColumnFiltersState = [];
  @track protected editingRowId: string | null = null;
  @track protected draft: Record<string, string> = {};
  @track protected savingRowIds: Record<string, boolean> = {};
  @track protected savedRowIds: Record<string, boolean> = {};
  @track protected menuRowId: string | null = null;
  @track protected columnsOpen = false;
  @track protected bulkOpen = false;
  @track protected bulkDraft: Record<string, string> = {};
  @track protected bulkSaving = false;
  // Said inside the dialog as well as in a toast: a toast in the corner of the
  // screen is easy to miss while a modal has the user's attention.
  @track protected bulkAlert: { variant: 'info' | 'danger'; message: string } | null = null;
  @track protected deleteCandidate: RowData | null = null;
  @track protected deleting = false;
  @track protected toasts: FdDataTableToast[] = [];

  private toastCounter = 0;
  private focusEditorPending = false;
  private savedFlashRunning = false;

  constructor() {
    super();
    // This block is the opinionated version of the table: it always has a
    // search box, pagination and selection, so those tanstack features are
    // on from the start. (LWC only allows *public* booleans to default to
    // false, and these are inherited from FdTableState.)
    this.enableGlobalFilter = true;
    this.enablePagination = true;
    this.enableRowSelection = true;
    this.getRowId = (row: RowData) => String((row as { id: unknown }).id);
  }

  /** Shows a toast -- for actions the consumer runs itself (e.g. a bulk delete). */
  @api
  showToast(variant: FdDataTableToast['variant'], message: string) {
    this.toastCounter += 1;
    this.toasts = [...this.toasts, { id: this.toastCounter, variant, message }];
  }

  // ---- tanstack wiring

  protected resolveTableInstance() {
    const table = super.resolveTableInstance();
    // Column filters are equality against a select's value, not tanstack's
    // default substring match. `state.columnFilters` keeps a stable array
    // reference between changes, which tanstack's row-model memoization needs.
    //
    // `autoResetPageIndex` is off because it fires whenever `data` is
    // replaced -- and saving a row replaces it, which would throw the user
    // back to page 1 mid-edit. Page resets happen where they belong instead:
    // when search or a filter changes (`resetPage`), and when the current
    // page no longer exists (`renderedCallback`).
    table.setOptions((prev) => ({
      ...prev,
      autoResetPageIndex: false,
      defaultColumn: { filterFn: 'equalsString', ...prev.defaultColumn },
      onColumnVisibilityChange: this.handleColumnVisibilityChange,
      state: {
        ...prev.state,
        columnFilters: this.columnFilters,
        columnVisibility: this.columnVisibility
      }
    }));
    return table;
  }

  private handleColumnVisibilityChange = (updater: Updater<VisibilityState>) => {
    this.columnVisibility = typeof updater === 'function' ? updater(this.columnVisibility) : updater;
    this.dispatchEvent(
      new CustomEvent('columnvisibilitychange', {
        detail: { columnVisibility: this.columnVisibility },
        bubbles: true
      })
    );
  };

  // ---- rendering model

  get dataRows(): FdDataTableRow[] {
    return this.resolveTableInstance()
      .getRowModel()
      .rows.map((row, index) => {
        const editing = row.id === this.editingRowId;
        const saving = !!this.savingRowIds[row.id];
        const label = this.rowLabel(row, index);

        return {
          id: row.id,
          classes: [
            editing ? 'row--editing' : '',
            saving ? 'row--saving' : '',
            this.savedRowIds[row.id] ? 'row--saved' : ''
          ]
            .filter(Boolean)
            .join(' '),
          selected: row.getIsSelected(),
          selectionAriaLabel: this.resolveRowSelectionAriaLabel(row, index),
          editing,
          saving,
          menuOpen: row.id === this.menuRowId,
          // fandry-popover leaves the trigger's ARIA to the consumer (see
          // popover.html), so it is wired onto the fandry-button here.
          menuTriggerProps: {
            tabIndex: 0,
            ariaLabel: `Actions for ${label}`,
            ariaHasPopup: 'menu',
            ariaExpanded: String(row.id === this.menuRowId)
          },
          cells: row
            .getVisibleCells()
            .map((cell) => this.toDataCell(cell, editing, label))
        };
      });
  }

  get filters(): FdDataTableFilter[] {
    return this.resolveTableInstance()
      .getAllLeafColumns()
      .flatMap((column) => {
        const filter = this.metaOf(column.columnDef).filter;
        if (!filter) return [];

        const header = this.headerText(column.columnDef.header, column.id);
        return [
          {
            columnId: column.id,
            label: header,
            value: String(column.getFilterValue() ?? NO_FILTER),
            options: [{ label: `Any ${header.toLowerCase()}`, value: NO_FILTER }, ...filter.options],
            selectProps: { ariaLabel: `Filter by ${header.toLowerCase()}`, tabIndex: 0 }
          }
        ];
      });
  }

  get columnToggles(): FdDataTableColumnToggle[] {
    const table = this.resolveTableInstance();
    const onlyOneVisible = table.getVisibleLeafColumns().length === 1;

    return table
      .getAllLeafColumns()
      .filter((column) => column.getCanHide())
      .map((column) => {
        const visible = column.getIsVisible();
        return {
          columnId: column.id,
          label: this.headerText(column.columnDef.header, column.id),
          visible,
          disabled: visible && onlyOneVisible
        };
      });
  }

  get selectedCount(): number {
    return this.resolveTableInstance().getSelectedRowModel().rows.length;
  }

  private get editableColumns() {
    return this.resolveTableInstance()
      .getVisibleLeafColumns()
      .filter((column) => this.metaOf(column.columnDef).editor);
  }

  get hasSelection(): boolean {
    return this.selectedCount > 0;
  }

  // Only from two rows up: one row is what the row menu's Edit is for.
  get canBulkEdit(): boolean {
    return this.selectedCount >= 2 && this.editableColumns.length > 0;
  }

  get bulkEditLabel(): string {
    return `Edit ${this.selectedCount} selected`;
  }

  get bulkDialogHeading(): string {
    return `Edit ${this.selectedCount} records`;
  }

  get bulkFields(): FdDataTableBulkField[] {
    return this.editableColumns.map((column) => {
      const editor = this.metaOf(column.columnDef).editor!;
      const type = editor.type ?? 'text';
      return {
        columnId: column.id,
        label: this.headerText(column.columnDef.header, column.id),
        value: this.bulkDraft[column.id] ?? '',
        isInputEditor: type !== 'select',
        isSelectEditor: type === 'select',
        inputType: type === 'number' ? 'number' : 'text',
        // A blank is "leave this column alone", so it has to be choosable.
        options: [{ label: 'No change', value: '' }, ...(editor.options ?? [])]
      };
    });
  }

  get hasColumnToggles(): boolean {
    return this.columnToggles.length > 0;
  }

  get columnsTriggerProps(): Record<string, unknown> {
    return { tabIndex: 0, ariaHasPopup: 'true', ariaExpanded: String(this.columnsOpen) };
  }

  get searchProps(): Record<string, unknown> {
    return { ariaLabel: this.globalFilterPlaceholder };
  }

  get hasActiveFilters(): boolean {
    return this.columnFilters.length > 0 || this.globalFilter !== '';
  }

  get hasRowActions(): boolean {
    return this.rowActions.length > 0;
  }

  get actionsColumnCount(): number {
    return this.columnCount + (this.hasRowActions ? 1 : 0);
  }

  get anySaving(): boolean {
    return Object.keys(this.savingRowIds).length > 0;
  }

  get hasToasts(): boolean {
    return this.toasts.length > 0;
  }

  get deleteDialogOpen(): boolean {
    return this.deleteCandidate !== null;
  }

  get deleteDialogLabel(): string {
    return this.deleteCandidate ? `Delete ${this.labelOf(this.deleteCandidate)}` : 'Delete';
  }

  get deleteDialogQuestion(): string {
    return this.deleteCandidate ? `Delete ${this.labelOf(this.deleteCandidate)}?` : '';
  }

  private metaOf(columnDef: { meta?: unknown }): FdDataTableColumnMeta {
    return (columnDef.meta as FdDataTableColumnMeta | undefined) ?? {};
  }

  private headerText(header: unknown, fallback: string): string {
    return typeof header === 'string' ? header : fallback;
  }

  private rowLabel(row: Row<RowData>, index: number): string {
    return (typeof this.getRowLabel === 'function' && this.getRowLabel(row.original, index)) || `row ${index + 1}`;
  }

  private labelOf(original: RowData): string {
    return (typeof this.getRowLabel === 'function' && this.getRowLabel(original, 0)) || 'this row';
  }

  private toDataCell(cell: Cell<RowData, unknown>, editing: boolean, rowLabel: string): FdDataTableCell {
    const meta = this.metaOf(cell.column.columnDef);
    const value = this.toCellValue(cell);
    const editor = meta.editor;
    const editable = editing && !!editor;
    const editorType = editor?.type ?? 'text';
    const badgeVariant = meta.badges?.[value];
    const header = this.headerText(cell.column.columnDef.header, cell.column.id);

    return {
      id: cell.id,
      columnId: cell.column.id,
      value,
      editable,
      isBadge: !editable && !!badgeVariant,
      badgeVariant: badgeVariant ?? 'default',
      isPlain: !editable && !badgeVariant,
      isInputEditor: editable && editorType !== 'select',
      isSelectEditor: editable && editorType === 'select',
      inputType: editorType === 'number' ? 'number' : 'text',
      draftValue: this.draft[cell.column.id] ?? String(cell.getValue() ?? ''),
      options: editor?.options ?? [],
      // fandry-input/-select spread this onto their native control. `disabled`
      // is a real prop on both, so it is bound separately in the template.
      editorProps: { ariaLabel: `${header} for ${rowLabel}`, tabIndex: 0 }
    };
  }

  // ---- column visibility

  handleColumnsToggle(event: CustomEvent<boolean>) {
    event.stopPropagation();
    this.columnsOpen = event.detail;
  }

  handleColumnToggle(event: CustomEvent<boolean>) {
    event.stopPropagation();
    const columnId = (event.currentTarget as HTMLElement).dataset.columnId;
    if (columnId) this.resolveTableInstance().getColumn(columnId)?.toggleVisibility(!!event.detail);
  }

  // ---- filters

  handleFilterChange(event: CustomEvent<string>) {
    event.stopPropagation();
    const columnId = (event.currentTarget as HTMLElement).dataset.columnId;
    if (!columnId) return;

    const value = event.detail;
    this.columnFilters = [
      ...this.columnFilters.filter((filter) => filter.id !== columnId),
      ...(value === NO_FILTER ? [] : [{ id: columnId, value }])
    ];
    this.resetPage();
    this.emitFilterChange();
  }

  handleClearFilters() {
    this.columnFilters = [];
    this.applyGlobalFilter('');
  }

  protected applyGlobalFilter(value: string) {
    super.applyGlobalFilter(value);
    this.resetPage();
  }

  // A narrower result set can leave the current page past the end.
  private resetPage() {
    if (this.pageIndex !== 0) this.resolveTableInstance().setPageIndex(0);
  }

  private emitFilterChange() {
    this.dispatchEvent(
      new CustomEvent('filterchange', {
        detail: { globalFilter: this.globalFilter, columnFilters: this.columnFilters },
        bubbles: true
      })
    );
  }

  // ---- row actions

  handleMenuToggle(event: CustomEvent<boolean>) {
    event.stopPropagation();
    const rowId = (event.currentTarget as HTMLElement).dataset.rowId ?? null;
    if (event.detail) {
      this.menuRowId = rowId;
    } else if (this.menuRowId === rowId) {
      this.menuRowId = null;
    }
  }

  handleMenuSelect(event: CustomEvent<{ value: string }>) {
    event.stopPropagation();
    const rowId = (event.currentTarget as HTMLElement).dataset.rowId;
    this.menuRowId = null;
    if (rowId == null) return;

    const row = this.resolveTableInstance().getRow(rowId, true);
    const action = event.detail.value;

    if (action === 'edit') {
      this.startEditing(rowId);
    } else if (action === 'delete') {
      this.deleteCandidate = row.original;
    } else {
      this.dispatchEvent(
        new CustomEvent('rowaction', {
          detail: { action, id: row.id, row: row.original },
          bubbles: true
        })
      );
    }
  }

  // ---- inline edit

  protected startEditing(rowId: string) {
    // One edit at a time, and never while a save is in flight -- switching
    // rows then would leave the save's outcome with nowhere to land.
    if (this.anySaving || rowId === this.editingRowId) return;

    // A different row is already mid-edit: switching to this one would
    // silently drop that row's unsaved draft. Tell the user instead of
    // discarding it for them.
    if (this.editingRowId !== null) {
      this.showToast('info', this.editInProgressMessage());
      return;
    }

    const row = this.resolveTableInstance().getRow(rowId, true);
    const draft: Record<string, string> = {};
    for (const cell of row.getVisibleCells()) {
      if (this.metaOf(cell.column.columnDef).editor) {
        draft[cell.column.id] = String(cell.getValue() ?? '');
      }
    }

    this.draft = draft;
    this.editingRowId = rowId;
    this.focusEditorPending = true;
  }

  handleCellDoubleClick(event: Event) {
    const rowId = (event.currentTarget as HTMLElement).dataset.rowId;
    if (rowId != null) this.startEditing(rowId);
  }

  handleDraftChange(event: CustomEvent<string>) {
    event.stopPropagation();
    const columnId = (event.currentTarget as HTMLElement).dataset.columnId;
    if (columnId) this.draft = { ...this.draft, [columnId]: String(event.detail ?? '') };
  }

  handleEditorKeydown(event: KeyboardEvent) {
    // Only from a text field: a select's own trigger uses Enter/Escape to
    // open, choose and close its listbox.
    if ((event.target as HTMLElement).tagName !== 'FANDRY-INPUT') return;

    if (event.key === 'Enter') {
      event.preventDefault();
      this.handleSave();
    } else if (event.key === 'Escape') {
      event.preventDefault();
      this.handleCancel();
    }
  }

  handleCancel() {
    if (this.anySaving) return;
    this.editingRowId = null;
    this.draft = {};
  }

  handleSave() {
    if (this.editingRowId == null || this.anySaving) return;
    void this.commitEdit(this.editingRowId);
  }

  // Only the columns that actually changed, coerced to what the column holds.
  private changesFor(row: Row<RowData>): Record<string, unknown> {
    const changes: Record<string, unknown> = {};
    for (const cell of row.getVisibleCells()) {
      const editor = this.metaOf(cell.column.columnDef).editor;
      const next = this.draft[cell.column.id];
      if (!editor || next === undefined || next === String(cell.getValue() ?? '')) continue;
      changes[cell.column.id] = editor.type === 'number' ? Number(next) : next;
    }
    return changes;
  }

  private async commitEdit(rowId: string) {
    const row = this.resolveTableInstance().getRow(rowId, true);
    const changes = this.changesFor(row);
    const label = this.labelOf(row.original);

    // Nothing to send, so no request -- but never a silent exit: the user
    // pressed Save and should hear what happened.
    if (!Object.keys(changes).length) {
      this.handleCancel();
      this.showToast('info', this.noChangesMessage(label));
      return;
    }

    this.savingRowIds = { ...this.savingRowIds, [rowId]: true };
    try {
      const saved = this.saveRow ? await this.saveRow(row.original, changes) : undefined;
      const result = saved ?? { ...(row.original as object), ...changes };

      this.editingRowId = null;
      this.draft = {};
      this.markSaved([rowId]);
      this.dispatchEvent(
        new CustomEvent('rowsave', { detail: { id: rowId, row: result, changes }, bubbles: true })
      );
      // Named after the saved row, so a rename reads as the new name.
      this.showToast('success', this.saveSuccessMessage(this.labelOf(result)));
    } catch (error) {
      this.showToast('danger', this.saveFailureMessage(label, error));
    } finally {
      const { [rowId]: _done, ...rest } = this.savingRowIds;
      this.savingRowIds = rest;
    }
  }

  // The "saved" flash is a CSS animation on the row; this only decides when
  // to drop the class again, once that animation has finished.
  private markSaved(rowIds: string[]) {
    this.savedRowIds = Object.fromEntries(rowIds.map((id) => [id, true]));
    this.savedFlashRunning = true;
  }

  // ---- selection

  // Selection spans every page, but the header checkbox only reaches the
  // current one -- this is the way to drop all of it at once.
  handleClearSelection() {
    this.resolveTableInstance().resetRowSelection(true);
  }

  // ---- multi-record edit

  handleBulkOpen() {
    this.bulkDraft = {};
    this.bulkAlert = null;
    this.bulkOpen = true;
  }

  handleBulkFieldChange(event: CustomEvent<string>) {
    event.stopPropagation();
    const columnId = (event.currentTarget as HTMLElement).dataset.columnId;
    if (columnId) this.bulkDraft = { ...this.bulkDraft, [columnId]: String(event.detail ?? '') };
    this.bulkAlert = null;
  }

  handleBulkCancel() {
    if (!this.bulkSaving) this.bulkOpen = false;
  }

  handleBulkDialogToggle(event: CustomEvent<boolean>) {
    event.stopPropagation();
    if (!event.detail) this.handleBulkCancel();
  }

  handleBulkKeydown(event: KeyboardEvent) {
    // Enter in a text field submits, as it does in a row.
    if (event.key === 'Enter' && (event.target as HTMLElement).tagName === 'FANDRY-INPUT') {
      event.preventDefault();
      void this.handleBulkSave();
    }
  }

  // A blank field means "leave it as it is"; only what was filled in applies.
  private bulkChanges(): Record<string, unknown> {
    const changes: Record<string, unknown> = {};
    for (const column of this.editableColumns) {
      const value = this.bulkDraft[column.id];
      if (value === undefined || value === '') continue;
      changes[column.id] = this.metaOf(column.columnDef).editor!.type === 'number' ? Number(value) : value;
    }
    return changes;
  }

  async handleBulkSave() {
    if (this.bulkSaving) return;

    const table = this.resolveTableInstance();
    const rows = table.getSelectedRowModel().rows;
    const changes = this.bulkChanges();

    // Nothing to send. The dialog stays open: closing it would look like a
    // save that did nothing.
    if (!Object.keys(changes).length) {
      this.bulkAlert = { variant: 'info', message: this.bulkNoChangesMessage() };
      return;
    }

    const ids = rows.map((row) => row.id);
    const originals = rows.map((row) => row.original);
    this.bulkSaving = true;
    this.bulkAlert = null;
    this.savingRowIds = { ...this.savingRowIds, ...Object.fromEntries(ids.map((id) => [id, true])) };

    try {
      const saved = this.saveRows ? await this.saveRows(originals, changes) : undefined;
      const savedById = new Map<string, RowData>(
        (Array.isArray(saved) ? saved : []).map((row) => [this.getRowId!(row, 0), row])
      );
      const results = rows.map((row) => savedById.get(row.id) ?? { ...(row.original as object), ...changes });

      this.bulkOpen = false;
      this.bulkDraft = {};
      this.markSaved(ids);
      table.resetRowSelection();
      results.forEach((result, index) => {
        this.dispatchEvent(
          new CustomEvent('rowsave', { detail: { id: ids[index], row: result, changes }, bubbles: true })
        );
      });
      this.showToast('success', this.bulkSaveSuccessMessage(results.length));
    } catch (error) {
      const message = this.bulkSaveFailureMessage(ids.length, error);
      this.bulkAlert = { variant: 'danger', message };
      this.showToast('danger', message);
    } finally {
      const remaining = { ...this.savingRowIds };
      ids.forEach((id) => delete remaining[id]);
      this.savingRowIds = remaining;
      this.bulkSaving = false;
    }
  }

  // ---- delete

  handleDeleteCancel() {
    if (!this.deleting) this.deleteCandidate = null;
  }

  handleDeleteDialogToggle(event: CustomEvent<boolean>) {
    event.stopPropagation();
    if (!event.detail) this.handleDeleteCancel();
  }

  async handleDeleteConfirm() {
    const original = this.deleteCandidate;
    if (!original || this.deleting) return;

    const label = this.labelOf(original);
    this.deleting = true;
    try {
      if (this.deleteRow) await this.deleteRow(original);

      const id = this.getRowId!(original, 0);
      if (this.rowSelection[id]) {
        this.resolveTableInstance().setRowSelection((old) => {
          const { [id]: _removed, ...rest } = old;
          return rest;
        });
      }
      this.deleteCandidate = null;
      this.dispatchEvent(new CustomEvent('rowdelete', { detail: { id, row: original }, bubbles: true }));
      this.showToast('success', this.deleteSuccessMessage(label));
    } catch (error) {
      this.deleteCandidate = null;
      this.showToast('danger', this.deleteFailureMessage(label, error));
    } finally {
      this.deleting = false;
    }
  }

  // ---- toasts

  handleToastDismiss(event: Event) {
    const id = Number((event.currentTarget as HTMLElement).dataset.id);
    this.toasts = this.toasts.filter((toast) => toast.id !== id);
  }

  // Overridable copy, so a subclass can translate or reword without
  // touching the workflow.
  protected saveSuccessMessage(label: string): string {
    return `Saved ${label}.`;
  }

  protected noChangesMessage(label: string): string {
    return `No changes to save for ${label}.`;
  }

  protected editInProgressMessage(): string {
    return 'Save or cancel the current edit before editing another row.';
  }

  protected bulkNoChangesMessage(): string {
    return 'Fill in at least one field to apply, or cancel.';
  }

  protected bulkSaveSuccessMessage(count: number): string {
    return `Saved ${count} records.`;
  }

  protected bulkSaveFailureMessage(count: number, error: unknown): string {
    return `Couldn't save ${count} records: ${this.errorText(error)}`;
  }

  protected saveFailureMessage(label: string, error: unknown): string {
    return `Couldn't save ${label}: ${this.errorText(error)}`;
  }

  protected deleteSuccessMessage(label: string): string {
    return `Deleted ${label}.`;
  }

  protected deleteFailureMessage(label: string, error: unknown): string {
    return `Couldn't delete ${label}: ${this.errorText(error)}`;
  }

  private errorText(error: unknown): string {
    return error instanceof Error && error.message ? error.message : 'Something went wrong.';
  }

  // ---- lifecycle

  renderedCallback() {
    // Deleting the last row of the last page leaves the current page empty.
    const pageCount = this.totalPages;
    if (pageCount > 0 && this.pageIndex >= pageCount) {
      this.resolveTableInstance().setPageIndex(pageCount - 1);
    }

    if (this.focusEditorPending) {
      this.focusEditorPending = false;
      (this.template.querySelector('.editor') as HTMLElement | null)?.focus();
    }

    if (this.savedFlashRunning) {
      this.savedFlashRunning = false;
      const row = this.template.querySelector('tr.row--saved');
      exitFinished(row).then(() => {
        this.savedRowIds = {};
      });
    }
  }
}
