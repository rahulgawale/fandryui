import { api, track, LightningElement } from 'lwc';
import FdSearchState from 'fandry/searchState';
import type { FdSearchItem } from 'fandry/searchState';
import { exitFinished } from 'fandry/motion';

export interface FdLookupRecord {
  id: string;
  label: string;
  // Secondary line under the label (e.g. "Account • Prospect"). Shown as-is.
  description?: string;
  disabled?: boolean;
  // Renders in place of the label and description -- see fandry-combobox.
  component?: typeof LightningElement;
  componentProps?: Record<string, unknown>;
  // Any other fields (object API name, owner, ...) ride along untouched and
  // come back in `change`'s `record`.
  [field: string]: unknown;
}

// How long typing must pause before `search` fires. Fixed, not a prop: a
// consumer that wants something different can debounce on their side.
const SEARCH_DEBOUNCE_MS = 250;

// See fandry-checkbox's checkbox.ts for why this list exists, and
// fandry-combobox's combobox.ts for the ARIA property-name notes.
const RESERVED_ELEMENT_PROPS = [
  'id',
  'type',
  'value',
  'class',
  'disabled',
  'required',
  'role',
  'autocomplete',
  'ariaAutoComplete',
  'ariaHasPopup',
  'ariaExpanded',
  'ariaControls',
  'ariaControlsElements',
  'ariaActivedescendant',
  'ariaActiveDescendantElement',
  'ariaDescribedby',
  'ariaDescribedByElements',
  'ariaRequired',
  'oninput',
  'onclick',
  'onblur',
  'onkeydown'
];

/**
 * Picks a record: "Which record do you want?" The user types, the lookup
 * asks the consumer for matches, and the choice is shown in the field. One
 * record by default (shown as the field's value, with a clear button); with
 * `multiple`, any number (shown as removable chips, with a "Clear all").
 *
 * It fetches nothing itself and imports no platform API -- a Salesforce
 * consumer runs the query (Apex, GraphQL, UI API) and hands the records
 * back, so the same lookup works in an org and in a plain LWR app:
 *
 *   <fandry-lookup label="Account" results={results} loading={loading}
 *     record={account} onsearch={handleSearch} onchange={handleChange}>
 *   </fandry-lookup>
 *
 *   handleSearch(event) { this.loading = true; find(event.detail.query).then(...) }
 *   handleChange(event) { this.account = event.detail.record; }
 *
 * With `multiple`, bind `records` instead of `record`; `change` then carries
 * `{ values, records }`.
 *
 * `search` fires when the list opens (with the current text, so a consumer
 * can offer recent records for an empty query), again after typing pauses,
 * and, with `multiple`, after each pick. Results are shown exactly as given
 * -- the lookup never filters them, since the consumer's query already did
 * (it only hides records that are already selected).
 *
 * Search, ranking-free listing and keyboard behavior come from
 * fandry/searchState; the anchored panel mirrors fandry-combobox's.
 */
export default class FdLookup extends FdSearchState {
  @api label = '';
  @api helpText = '';
  @api name = '';
  @api placeholder = '';
  @api disabled = false;
  @api required = false;

  /** Matches for the current search, supplied by the consumer. */
  @api results: FdLookupRecord[] = [];

  /** Shows a searching indicator while the consumer's query is in flight. */
  @api loading = false;

  /**
   * Allows any number of records, shown as chips, instead of one. A binary
   * behavior (it changes what picking *does*, not just how it looks) --
   * the same as the native `multiple` attribute.
   */
  @api multiple = false;

  /** Single mode: the selected record; updated when the user picks or clears. */
  @api record: FdLookupRecord | null = null;

  /** Multiple mode: the selected records; updated on every pick and removal. */
  @api records: FdLookupRecord[] = [];

  /** Single mode: id of the selected record ('' when none). Set `record` to change it. */
  @api
  get value(): string {
    return !this.multiple && this.record ? this.record.id : '';
  }

  // Spread onto the native <input> via `lwc:spread` -- see checkbox.ts.
  @api elementProps: Record<string, unknown> = {};

  @track open = false;

  // Whether the panel is in the DOM: true while open, and stays true through
  // the exit animation after `open` goes false (see fandry/motion).
  @track isMounted = false;

  private searchTimer: ReturnType<typeof setTimeout> | null = null;

  // True from the keystroke until `search` fires: the consumer hasn't been
  // asked yet, so nothing on screen answers the current text -- "No records
  // found" would be a claim about a search that hasn't happened.
  @track searchPending = false;

  // Where focus goes after the next render: picking swaps the input for the
  // pill (its clear button is the one control left), clearing swaps it back.
  private focusTarget: 'input' | 'clear' | null = null;

  // `results` mapped to search items, reused until `results` (or, in multiple
  // mode, the selection) changes -- a fresh array every read would defeat
  // FdSearchState's entries cache.
  private sourceCache: {
    results: FdLookupRecord[] | null;
    records: FdLookupRecord[] | null;
    items: FdSearchItem[];
  } = { results: null, records: null, items: [] };

  protected get source(): FdSearchItem[] {
    const cache = this.sourceCache;
    const selection = this.multiple ? this.records : null;

    if (cache.results !== this.results || cache.records !== selection) {
      cache.results = this.results;
      cache.records = selection;

      // Already-chosen records aren't offered again.
      const chosen = new Set((selection ?? []).map((record) => record.id));
      cache.items = this.results
        .filter((record) => !chosen.has(record.id))
        .map((record) => ({ ...record, value: record.id }));
    }
    return cache.items;
  }

  // The consumer's query already narrowed these; narrowing them again by the
  // typed text would hide matches on fields the label doesn't contain.
  protected filterItems(items: FdSearchItem[]): FdSearchItem[] {
    return items;
  }

  protected commit(item: FdSearchItem) {
    const chosen = this.results.find((record) => record.id === item.value);
    if (!chosen) {
      return;
    }

    this.setQuery('');

    if (this.multiple) {
      this.records = [...this.records, chosen];
      this.dispatchChange();
      // Stays open and focused for the next pick; the consumer refreshes the
      // list (an empty query again, so recents, minus what's now chosen).
      this.dispatchSearch();
      return;
    }

    this.record = chosen;
    this.closeList();
    this.focusTarget = 'clear';
    this.dispatchChange();
  }

  get hasLabel(): boolean {
    return !!this.label;
  }

  get hasHelpText(): boolean {
    return !!this.helpText;
  }

  // Single mode with a record chosen: the field shows it as its value and
  // the input goes away. Everywhere else the input is there.
  get showSelected(): boolean {
    return !this.multiple && !!this.record;
  }

  get showInput(): boolean {
    return !this.showSelected;
  }

  get hasChips(): boolean {
    return this.multiple && this.records.length > 0;
  }

  get chips(): Array<{ id: string; label: string; removeLabel: string }> {
    return this.records.map((record) => ({
      id: record.id,
      label: record.label,
      removeLabel: `Remove ${record.label}`
    }));
  }

  get clearLabel(): string {
    return this.record ? `Clear ${this.record.label}` : '';
  }

  get ariaMultiselectable(): 'true' | 'false' {
    return this.multiple ? 'true' : 'false';
  }

  private get hasQuery(): boolean {
    return this.query.trim() !== '';
  }

  // Nothing to show for an empty query with no records to offer: no panel,
  // not an empty box.
  private get hasPanelContent(): boolean {
    return this.searching || this.hasResults || this.hasQuery;
  }

  // Waiting on an answer: the debounce hasn't fired, or the consumer's query
  // is in flight.
  get searching(): boolean {
    return this.loading || this.searchPending;
  }

  get showPanel(): boolean {
    return this.isMounted && this.hasPanelContent && this.showInput;
  }

  get showEmpty(): boolean {
    return !this.searching && !this.hasResults && this.hasQuery;
  }

  get ariaExpanded(): 'true' | 'false' {
    return this.open && this.hasPanelContent ? 'true' : 'false';
  }

  get ariaRequired(): 'true' | 'false' {
    return this.required ? 'true' : 'false';
  }

  get ariaBusy(): 'true' | 'false' {
    return this.searching ? 'true' : 'false';
  }

  get openActiveDescendant(): string | null {
    return this.open ? this.activeDescendant : null;
  }

  get panelClasses(): string {
    return ['panel', this.open ? '' : 'panel--closing'].filter(Boolean).join(' ');
  }

  // A closing panel is on its way out: keep it from taking clicks while it
  // fades. `''` (attribute present) / `undefined` (removed).
  get panelInert(): string | undefined {
    return this.open ? undefined : '';
  }

  get resolvedElementProps(): Record<string, unknown> {
    return this.resolveElementProps(this.elementProps, RESERVED_ELEMENT_PROPS, 'fandry-lookup');
  }

  disconnectedCallback() {
    this.clearSearchTimer();
  }

  renderedCallback() {
    super.renderedCallback();

    if (this.focusTarget) {
      const selector = this.focusTarget === 'clear' ? '.clear' : '.input';
      this.focusTarget = null;
      (this.template.querySelector(selector) as HTMLElement | null)?.focus();
    }

    if (this.open || !this.isMounted) {
      return;
    }

    const panel = this.template.querySelector('.panel');
    exitFinished(panel).then(() => {
      // Reopened while it was exiting -- the panel is live again.
      if (!this.open) {
        this.isMounted = false;
      }
    });
  }

  private dispatchChange() {
    const detail = this.multiple
      ? { values: this.records.map((record) => record.id), records: this.records }
      : { value: this.value, record: this.record };

    this.dispatchEvent(new CustomEvent('change', { detail, bubbles: true }));
  }

  private dispatchSearch() {
    this.clearSearchTimer();
    this.searchPending = false;
    this.dispatchEvent(
      new CustomEvent('search', {
        detail: { query: this.query },
        bubbles: true
      })
    );
  }

  private scheduleSearch() {
    this.clearSearchTimer();
    this.searchPending = true;
    this.searchTimer = setTimeout(() => this.dispatchSearch(), SEARCH_DEBOUNCE_MS);
  }

  // Stops the timer only. `searchPending` is left alone on purpose: see
  // closeList.
  private clearSearchTimer() {
    if (this.searchTimer) {
      clearTimeout(this.searchTimer);
      this.searchTimer = null;
    }
  }

  private openList() {
    if (this.disabled || this.open) {
      return false;
    }

    this.open = true;
    this.isMounted = true;
    return true;
  }

  private closeList() {
    this.open = false;
    // A search still waiting on the debounce is moot once the list is gone.
    // But `searchPending` is left as it was: the panel is still fading out,
    // and flipping it here would change what it says mid-fade ("Searching…"
    // to "No records found"). Every way of opening again either fires the
    // search (which clears it) or schedules a new one (which sets it).
    this.clearSearchTimer();
  }

  handleInput(event: Event) {
    super.handleInput(event);
    this.openList();
    this.scheduleSearch();
  }

  handleInputClick() {
    // Asks for matches straight away (no debounce) so an empty query can
    // offer recent records.
    if (this.openList()) {
      this.dispatchSearch();
    }
  }

  // Clicking outside, tabbing away and switching windows all blur the input,
  // so this is the whole "dismiss" story -- see fandry-combobox.
  handleInputBlur() {
    this.closeList();
  }

  handleInputKeydown(event: KeyboardEvent) {
    // Backspace in an empty field takes the last chip back.
    if (event.key === 'Backspace' && this.hasChips && !this.query) {
      this.records = this.records.slice(0, -1);
      this.dispatchChange();
      return;
    }

    if (event.key === 'Escape' && this.open) {
      event.preventDefault();
      // The list is dismissed first; an enclosing dialog's own Escape
      // listener must not also fire for the same keypress.
      event.stopPropagation();
      this.closeList();
      return;
    }

    if (!this.open) {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        if (this.openList()) {
          this.dispatchSearch();
        }
      }
      return;
    }

    super.handleInputKeydown(event);
  }

  handleClear() {
    this.record = null;
    this.setQuery('');
    this.focusTarget = 'input';
    this.dispatchChange();
  }

  handleRemove(event: MouseEvent) {
    const id = (event.currentTarget as HTMLElement).dataset.recordId;
    this.records = this.records.filter((record) => record.id !== id);
    this.focusTarget = 'input';
    this.dispatchChange();
  }

  handleClearAll() {
    this.records = [];
    this.setQuery('');
    this.focusTarget = 'input';
    this.dispatchChange();
  }

  // The field is bigger than its input once chips fill it: a click on the
  // empty space (not a chip or button) should still land in the input.
  handleFieldClick(event: MouseEvent) {
    // Nothing to focus or open when the field is showing a chosen record
    // instead of the input.
    if (this.disabled || this.showSelected || (event.target as HTMLElement).closest('button, input, .pill')) {
      return;
    }

    (this.template.querySelector('.input') as HTMLElement | null)?.focus();
    this.handleInputClick();
  }
}
