import { api, track, LightningElement } from 'lwc';
import FdSearchState from 'fandry/searchState';
import { partList } from 'fandry/parts';
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

// A stable empty list, so "nothing" reads as the same array every time (the
// source cache compares by identity).
const NO_RECORDS: FdLookupRecord[] = [];

// One selected id, and its record once the lookup has one to show. A record
// of `null` is an id the consumer set (`value`) that the lookup can't yet
// name -- it asks (see `resolve`) and shows the raw id meanwhile.
interface Selected {
  id: string;
  record: FdLookupRecord | null;
}

// `value` takes an id, or (in `multiple` mode) an array of them; a lone
// string, an array, and "nothing" all normalise to a list of ids.
function toIds(value: string | string[] | null | undefined): string[] {
  const list = Array.isArray(value) ? value : value ? [value] : [];
  return list.filter((id) => typeof id === 'string' && id !== '');
}

// How long typing must pause before `search` fires. Fixed, not a prop: a
// consumer that wants something different can debounce on their side.
const SEARCH_DEBOUNCE_MS = 250;

/** Text the lookup announces that isn't markup; see `messages`. */
export interface FdLookupMessages {
  /** The spinner's accessible name while a search runs. */
  searching: string;
  /** The clear button's accessible name in single-select mode. */
  clear: (name: string) => string;
  /** A chosen record's remove button, in multi-select mode. */
  remove: (name: string) => string;
}

export const DEFAULT_LOOKUP_MESSAGES: FdLookupMessages = {
  searching: 'Searching',
  clear: (name) => `Clear ${name}`,
  remove: (name) => `Remove ${name}`
};

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
 * `value` (an id, or an array of ids with `multiple`) renders existing data
 * without records in hand. The lookup names each id from `record`/`records`
 * or from `results`; for any it can't, it fires `resolve` with those ids, you
 * look them up and set `record`/`records` -- and the raw id shows until you
 * do, so nothing is ever blank or lost.
 *
 * `search` fires when the list opens (on click or ArrowDown -- not on a bare
 * Tab into the field -- with the current text, so a consumer
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

  /**
   * Replaces any of DEFAULT_LOOKUP_MESSAGES, e.g. to translate them. The
   * visible "Clear all" and "Searching…" are the `clear-all` and `searching`
   * slots.
   */
  @api messages: Partial<FdLookupMessages> = {};

  private get text(): FdLookupMessages {
    return { ...DEFAULT_LOOKUP_MESSAGES, ...this.messages };
  }

  get searchingLabel(): string {
    return this.text.searching;
  }
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

  // The one source of truth for what's selected. `value`, `record` and
  // `records` are three ways in and out of it. Until `value` is set,
  // `record`/`records` decide *which* ids are selected. Once it has been, it
  // does, and `record`/`records` only supply names for those ids -- so
  // `value={ids} records={theOnesIAlreadyHaveNamesFor}` keeps every id.
  @track selection: Selected[] = [];
  private valueDriven = false;

  // Ids already announced through `resolve`, so a re-render doesn't ask
  // again. A plain object (its property mutated, never reassigned) because
  // this isn't rendered state.
  private requested = { ids: [] as string[] };

  /**
   * The selected id ('' when none), or with `multiple` an array of ids.
   * Settable, to render existing data; updated when the user picks or clears.
   */
  @api
  get value(): string | string[] {
    const ids = this.selectedEntries.map((entry) => entry.id);
    return this.multiple ? ids : (ids[0] ?? '');
  }

  set value(next: string | string[] | null | undefined) {
    if (next !== undefined) {
      this.valueDriven = true;
    }

    // Ids the consumer echoes back after `change` keep their records: each is
    // looked up in the current selection first.
    const ids = toIds(next);
    this.selection = ids.map((id) => ({ id, record: this.knownRecord(id) }));
  }

  /** Single mode: the selected record, once it has one to show. */
  @api
  get record(): FdLookupRecord | null {
    return !this.multiple ? (this.selectedEntries[0]?.record ?? null) : null;
  }

  set record(next: FdLookupRecord | null | undefined) {
    if (this.valueDriven) {
      this.learn(next ? [next] : NO_RECORDS);
      return;
    }

    this.selection = next ? [{ id: next.id, record: next }] : [];
  }

  /** Multiple mode: the selected records that have one to show. */
  @api
  get records(): FdLookupRecord[] {
    return this.selectedEntries.flatMap((entry) => (entry.record ? [entry.record] : []));
  }

  set records(next: FdLookupRecord[] | null | undefined) {
    if (this.valueDriven) {
      this.learn(next ?? NO_RECORDS);
      return;
    }

    this.selection = (next ?? NO_RECORDS).map((record) => ({ id: record.id, record }));
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
    selection: Selected[] | null;
    items: FdSearchItem[];
  } = { results: null, selection: null, items: [] };

  // A consumer binding `results` or `records` to data that hasn't arrived yet
  // (a wire adapter starts out `undefined`) must get an empty lookup, not a
  // render error.
  private get resultList(): FdLookupRecord[] {
    return this.results ?? NO_RECORDS;
  }

  // Names the ids already selected from `records`, leaving the selection's
  // membership and order alone. Records for ids that aren't selected are
  // ignored: `value` said what's selected.
  private learn(records: FdLookupRecord[]) {
    const byId = new Map(records.map((record) => [record.id, record]));
    const named = this.selection.map((entry) => {
      const record = byId.get(entry.id);
      return record && record !== entry.record ? { id: entry.id, record } : entry;
    });

    if (named.some((entry, index) => entry !== this.selection[index])) {
      this.selection = named;
    }
  }

  // The record for an id, from what's already selected or from the results.
  private knownRecord(id: string): FdLookupRecord | null {
    return (
      this.selection.find((entry) => entry.id === id)?.record ??
      this.resultList.find((record) => record.id === id) ??
      null
    );
  }

  // What the field shows: the selection (one entry in single mode), with any
  // id that has no record yet looked up in `results` as they arrive.
  private get selectedEntries(): Selected[] {
    const shown = this.multiple ? this.selection : this.selection.slice(0, 1);
    return shown.map((entry) =>
      entry.record ? entry : { id: entry.id, record: this.resultList.find((record) => record.id === entry.id) ?? null }
    );
  }

  protected get source(): FdSearchItem[] {
    const cache = this.sourceCache;
    const results = this.resultList;
    const selection = this.multiple ? this.selection : null;

    if (cache.results !== results || cache.selection !== selection) {
      cache.results = results;
      cache.selection = selection;

      // Already-chosen records aren't offered again.
      const chosen = new Set((selection ?? []).map((entry) => entry.id));
      cache.items = results
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
    const chosen = this.resultList.find((record) => record.id === item.value);
    if (!chosen) {
      return;
    }

    this.setQuery('');

    if (this.multiple) {
      this.selection = [...this.selection, { id: chosen.id, record: chosen }];
      this.dispatchChange();
      // Stays open and focused for the next pick; the consumer refreshes the
      // list (an empty query again, so recents, minus what's now chosen).
      this.dispatchSearch();
      return;
    }

    this.selection = [{ id: chosen.id, record: chosen }];
    this.closeList();
    this.focusTarget = 'clear';
    this.dispatchChange();
  }

  get hasLabel(): boolean {
    return !!this.label || !!this.textSlots['label'];
  }

  get hasHelpText(): boolean {
    return !!this.helpText || !!this.textSlots['help-text'];
  }

  // Single mode with a record chosen: the field shows it as its value and
  // the input goes away. Everywhere else the input is there.
  get showSelected(): boolean {
    return !this.multiple && this.selectedEntries.length > 0;
  }

  get showInput(): boolean {
    return !this.showSelected;
  }

  get hasChips(): boolean {
    return this.multiple && this.selection.length > 0;
  }

  // An id with no record yet shows as itself, muted: something true and
  // removable, rather than a blank or a forever-"Loading…".
  private labelOf(entry: Selected): string {
    return entry.record ? entry.record.label : entry.id;
  }

  get chips(): Array<{ id: string; label: string; labelClasses: string; removeLabel: string }> {
    return this.selectedEntries.map((entry) => ({
      id: entry.id,
      label: this.labelOf(entry),
      labelClasses: entry.record ? 'pill-label' : 'pill-label pill-label--unresolved',
      removeLabel: this.text.remove(this.labelOf(entry))
    }));
  }

  get selectedLabel(): string {
    const entry = this.selectedEntries[0];
    return entry ? this.labelOf(entry) : '';
  }

  get selectedLabelClasses(): string {
    return this.selectedEntries[0]?.record ? 'selected-label' : 'selected-label selected-label--unresolved';
  }

  get clearLabel(): string {
    return this.showSelected ? this.text.clear(this.selectedLabel) : '';
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

  // Asks the consumer for records behind ids it can't name. Done after
  // render, not in the setters: a setter runs while the *parent* renders, and
  // an event handler there would be changing the parent's state mid-render.
  private requestMissing() {
    const missing = this.selectedEntries.filter((entry) => !entry.record).map((entry) => entry.id);

    // Forget ids that resolved or were removed, so setting one again later asks again.
    this.requested.ids = this.requested.ids.filter((id) => missing.includes(id));

    const fresh = missing.filter((id) => !this.requested.ids.includes(id));
    if (fresh.length) {
      this.requested.ids = [...this.requested.ids, ...fresh];
      this.dispatchEvent(new CustomEvent('resolve', { detail: { values: fresh }, bubbles: true }));
    }
  }

  renderedCallback() {
    super.renderedCallback();
    this.requestMissing();

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
    const entries = this.selectedEntries;
    const detail = this.multiple
      ? { values: entries.map((entry) => entry.id), records: this.records }
      : { value: entries[0]?.id ?? '', record: entries[0]?.record ?? null };

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
      this.selection = this.selection.slice(0, -1);
      this.dispatchChange();
      return;
    }

    if (event.key === 'Escape' && this.open) {
      // The list is dismissed first; an enclosing dialog's own Escape
      // listener must not also fire for the same keypress -- but only when
      // there was a panel to dismiss. `open` with nothing to show (an empty
      // query and no recents) would otherwise eat an Escape that visibly did
      // nothing.
      if (this.showPanel) {
        event.preventDefault();
        event.stopPropagation();
      }
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
    this.selection = [];
    this.setQuery('');
    this.focusTarget = 'input';
    this.dispatchChange();
  }

  handleRemove(event: MouseEvent) {
    const id = (event.currentTarget as HTMLElement).dataset.recordId;
    this.selection = this.selection.filter((entry) => entry.id !== id);
    this.focusTarget = 'input';
    this.dispatchChange();
  }

  handleClearAll() {
    this.selection = [];
    this.setQuery('');
    this.focusTarget = 'input';
    this.dispatchChange();
  }

  // Pressing the field's padding (not a control) would blur the input --
  // closing the list, which the click below then reopens, firing another
  // `search`. Keep focus where it is; the click handler focuses the input if
  // it wasn't already.
  handleFieldMouseDown(event: MouseEvent) {
    if (!(event.target as HTMLElement).closest('button, input')) {
      event.preventDefault();
    }
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

  get controlPart(): string {
    return partList('control', { disabled: this.disabled });
  }

  /* Which text slots have content, so a label or help text a page slots in
     shows even without the matching prop. The wrapper stays in the DOM
     (hidden while empty), so its slot is always there to be filled. */
  @track textSlots: Record<string, boolean> = {};

  handleTextSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    const filled = slot.assignedNodes().some((node) => node.nodeType === 1 || !!node.textContent?.trim());
    this.textSlots = { ...this.textSlots, [slot.name || 'default']: filled };
  }

  get labelHidden(): boolean {
    return !this.hasLabel;
  }

  get helpTextHidden(): boolean {
    return !this.hasHelpText;
  }
}
