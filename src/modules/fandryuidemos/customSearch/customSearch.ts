import FdSearchState from 'fandry/searchState';
import type { FdSearchItem } from 'fandry/searchState';

const DIRECTORY = [
  { label: 'Ada Lovelace', value: 'ada', description: 'Mathematician' },
  { label: 'Alan Turing', value: 'alan', description: 'Computer scientist' },
  { label: 'Grace Hopper', value: 'grace', description: 'Rear admiral' },
  { label: 'Katherine Johnson', value: 'katherine', description: 'Mathematician' },
  { label: 'Margaret Hamilton', value: 'margaret', description: 'Software engineer' }
];

// Stands in for a server: answers after a short delay, already filtered.
function searchDirectory(query: string): Promise<FdSearchItem[]> {
  const needle = query.toLowerCase();
  return new Promise((resolve) => {
    setTimeout(() => resolve(DIRECTORY.filter((person) => person.label.toLowerCase().includes(needle))), 250);
  });
}

/**
 * Demonstrates building on fandry/searchState directly instead of using
 * fandry-combobox: this component brings its own template (a plain list
 * with a live status line) and its own data flow (results come from an async
 * search, not a local array). The query state, active-option tracking, arrow
 * keys and Enter/click handling are all inherited.
 *
 * Three overrides are all it takes: `source` (what to list), `filterItems`
 * (the "server" already filtered, so leave the results alone) and `commit`
 * (what picking one does). `setQuery` is extended to start the search.
 */
export default class CustomSearch extends FdSearchState {
  results: FdSearchItem[] = [];
  picked = '';
  searching = false;

  // Only the newest request's answer may land -- a slow earlier one must not
  // overwrite a later one.
  private requestId = 0;

  protected get source(): FdSearchItem[] {
    return this.results;
  }

  protected filterItems(items: FdSearchItem[]): FdSearchItem[] {
    return items;
  }

  protected setQuery(value: string) {
    super.setQuery(value);
    this.search(value);
  }

  protected commit(item: FdSearchItem) {
    this.picked = item.label;
    this.results = [];
  }

  private async search(query: string) {
    const id = ++this.requestId;

    if (!query.trim()) {
      this.results = [];
      this.searching = false;
      return;
    }

    this.searching = true;
    const results = await searchDirectory(query);

    if (id === this.requestId) {
      this.results = results;
      this.searching = false;
    }
  }

  get status(): string {
    if (this.searching) {
      return 'Searching…';
    }
    return this.query.trim() && !this.results.length ? 'No people found' : '';
  }
}
