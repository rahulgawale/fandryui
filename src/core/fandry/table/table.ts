import FdTableState from 'fandry/tableState';

/**
 * The library's default, ready-made fandry-table: FdTableState (headless
 * tanstack state/behavior) plus this component's own Shadow DOM template
 * (table.html/table.css). No logic of its own -- see fandry/tableState for
 * everything this actually does, and for how to build a table with
 * different markup or richer per-cell content instead of using this
 * default.
 */
export default class FdTable extends FdTableState {}
