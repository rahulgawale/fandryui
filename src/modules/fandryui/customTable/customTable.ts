import FdTableState from 'fd/tableState';

/**
 * Demonstrates overriding fd-table's default markup: extends FdTableState
 * directly (not fd-table) and renders a card grid instead of a <table>,
 * with a plain button toolbar for sorting instead of clickable <th>s. No
 * new logic of its own -- headerGroup/rows/handleHeaderClick etc. are all
 * inherited from FdTableState; only customTable.html/customTable.css
 * differ from fd-table's own.
 */
export default class CustomTable extends FdTableState {}
