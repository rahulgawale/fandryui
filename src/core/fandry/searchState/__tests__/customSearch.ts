import { api } from 'lwc';
import FdSearchState from '../searchState';
import type { FdSearchItem } from '../searchState';

// What a consumer does to get different markup: extend the core, supply the
// items and what picking one does, write their own template.
export default class CustomSearch extends FdSearchState {
  @api people: FdSearchItem[] = [];
  picked = '';
  private calls = 0;

  @api
  get filterCalls() {
    return this.calls;
  }

  protected get source() {
    return this.people;
  }

  protected filterItems(items: FdSearchItem[], query: string) {
    this.calls++;
    return super.filterItems(items, query);
  }

  protected commit(item: FdSearchItem) {
    this.picked = item.value;
    this.dispatchEvent(new CustomEvent('pick', { detail: item.value }));
  }
}
