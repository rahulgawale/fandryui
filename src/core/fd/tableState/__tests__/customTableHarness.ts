import FdTableState from '../tableState';

/**
 * Proof that a consumer can extend FdTableState directly and get sorting/
 * pagination/selection/filtering for free while writing entirely their own
 * markup -- no fd-table, no inheriting its template, none of its classes.
 * This is deliberately a DIFFERENT shape than fd-table's own table.html
 * (a plain list instead of a <table>, no selection/pagination chrome) to
 * prove the state doesn't assume any particular rendering.
 */
export default class CustomTableHarness extends FdTableState {}
