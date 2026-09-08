import FdTableState from 'fd/tableState';

/**
 * Demonstrates overriding fd-table's default markup: extends FdTableState
 * directly (not fd-table) and renders a CSS Grid instead of a <table>, with
 * a plain button toolbar (aligned to the grid's columns) for sorting
 * instead of clickable <th>s. headerGroup/rows/handleHeaderClick etc. are
 * all inherited from FdTableState; the two getters below just flatten that
 * data into the shape this particular template wants -- a subclass is free
 * to add its own, same as any other class.
 */
export default class CustomTable extends FdTableState {
  get gridStyle(): string {
    return `grid-template-columns: repeat(${this.headerGroup.headers.length}, 1fr);`;
  }

  get flatCells(): Array<{ key: string; value: string }> {
    return this.rows.flatMap((row) =>
      row.cells.map((cell) => ({ key: `${row.id}-${cell.id}`, value: cell.value }))
    );
  }
}
