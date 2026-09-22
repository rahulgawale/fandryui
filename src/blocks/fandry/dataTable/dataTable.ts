import FdDataTableState from 'fandry/dataTableState';

/**
 * The data-table block: FdDataTableState (search, column filters, pagination,
 * selection, row actions, inline edit, save/delete hooks with toasts) plus
 * this component's own Shadow DOM template. No logic of its own -- see
 * fandry/dataTableState for what it does and for how to extend it with
 * different markup.
 */
export default class FdDataTable extends FdDataTableState {}
