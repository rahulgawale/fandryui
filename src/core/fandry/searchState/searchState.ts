import { track, LightningElement } from 'lwc';
import Base from 'fandry/base';

export interface FdSearchItem {
  value: string;
  label: string;
  // Secondary line under the label. Also searched.
  description?: string;
  // Rendered as a heading above the items that share it; items without one
  // are listed first, with no heading.
  group?: string;
  // Extra search terms that aren't shown (e.g. "textarea" for an Input).
  keywords?: string[];
  disabled?: boolean;
  // Renders in place of the plain-text label -- via `lwc:is`, for the same
  // reason as fandry-select's options: LWC requires `<slot>` names to be
  // static, so a per-item named slot isn't available for a data-driven list.
  component?: typeof LightningElement;
  componentProps?: Record<string, unknown>;
}

export interface FdSearchRenderOption {
  id: string;
  value: string;
  label: string;
  description: string;
  hasDescription: boolean;
  disabled: boolean;
  classes: string;
  ariaSelected: 'true' | 'false';
  ariaDisabled: 'true' | 'false';
  component?: typeof LightningElement;
  resolvedComponentProps: Record<string, unknown>;
}

export interface FdSearchRenderGroup {
  key: string;
  label: string;
  hasLabel: boolean;
  options: FdSearchRenderOption[];
}

interface Entry {
  id: string;
  item: FdSearchItem;
}

const WORD_BOUNDARY = /[\s\-_/.]/;

// How well one search term matches one piece of text: a prefix beats a
// word-start beats a plain substring. 0 means no match.
function scoreText(text: string, term: string, weight: number): number {
  const index = text.toLowerCase().indexOf(term);
  if (index === -1) {
    return 0;
  }
  if (index === 0) {
    return weight * 3;
  }
  return WORD_BOUNDARY.test(text[index - 1]) ? weight * 2 : weight;
}

// -1 when any term matches nothing (every term must match somewhere, so
// "date pick" finds "Date Picker" but not "Date Range"). Label hits outweigh
// keyword hits, which outweigh description and group hits.
export function scoreItem(item: FdSearchItem, terms: string[]): number {
  let total = 0;

  for (const term of terms) {
    const best = Math.max(
      scoreText(item.label, term, 10),
      ...(item.keywords ?? []).map((keyword) => scoreText(keyword, term, 6)),
      scoreText(item.description ?? '', term, 3),
      scoreText(item.group ?? '', term, 2)
    );

    if (best === 0) {
      return -1;
    }
    total += best;
  }

  return total;
}

/**
 * FdSearchState is the state and behavior every "type to narrow a list, move
 * with the arrow keys, pick one" component shares -- with no template of its
 * own. fandry-combobox (an anchored listbox under a field) and fandry-command
 * (a modal command palette) extend it and supply only what differs: where
 * the popup lives, and what picking an item does. The popups differ, the
 * search doesn't -- so the popup is *not* in here.
 *
 * A subclass supplies its items via `source`, decides what picking one does
 * via `commit`, and renders `renderGroups` inside its own template. It binds:
 *
 *   input   oninput={handleInput}  onkeydown={handleInputKeydown}
 *   listbox onmousedown={handleListboxMouseDown}
 *   option  onclick={handleOptionClick}  onmouseenter={handleOptionMouseEnter}
 *           data-option-id={option.id}
 *
 * Focus stays in the input the whole time; the "current" option is exposed
 * through `aria-activedescendant` (= `activeDescendant`), never by moving
 * DOM focus. That's why the input and the options must live in the *same*
 * shadow root -- an id reference can't cross a shadow boundary.
 *
 * Filtering is the one seam a subclass will want to replace (a lookup that
 * asks a server instead of narrowing a local list): override `filterItems`.
 * Methods meant to be overridden are `protected`.
 */
export default class FdSearchState extends Base {
  @track query = '';
  @track activeId: string | null = null;

  // Set by keyboard moves only: a hover-driven change must not scroll the
  // list out from under the pointer.
  private scrollActivePending = false;

  /** The full, unfiltered list. */
  protected get source(): FdSearchItem[] {
    return [];
  }

  /** Whether an item is the current value (a combobox); a command has none. */
  protected isSelected(_item: FdSearchItem): boolean {
    return false;
  }

  /** What picking an enabled item does. */
  protected commit(_item: FdSearchItem): void {}

  /**
   * Narrows `items` to what matches `query` and orders them best-first. An
   * empty query keeps everything in its original order.
   */
  protected filterItems(items: FdSearchItem[], query: string): FdSearchItem[] {
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) {
      return items;
    }

    return items
      .map((item, index) => ({ item, index, score: scoreItem(item, terms) }))
      .filter((scored) => scored.score >= 0)
      .sort((a, b) => b.score - a.score || a.index - b.index)
      .map((scored) => scored.item);
  }

  protected setQuery(value: string) {
    this.query = value;
    // A new query starts from the top result again.
    this.activeId = null;
  }

  // Matches are gathered under their group (in order of first appearance,
  // so the group holding the best match comes first), and ids are assigned
  // in that final order -- so arrow-key order is exactly render order.
  private get entries(): Entry[] {
    const filtered = this.filterItems(this.source, this.query);
    const ungrouped = filtered.filter((item) => !item.group);
    const groupNames = Array.from(new Set(filtered.filter((item) => item.group).map((item) => item.group)));

    const ordered = [
      ...ungrouped,
      ...groupNames.flatMap((name) => filtered.filter((item) => item.group === name))
    ];

    return ordered.map((item, index) => ({ id: `option-${index}`, item }));
  }

  private get enabledEntries(): Entry[] {
    return this.entries.filter((entry) => !entry.item.disabled);
  }

  // The stored id can go stale (the query narrowed it away, the source
  // changed under it) -- fall back to the first enabled result instead of
  // pointing at nothing.
  private get resolvedActiveId(): string | null {
    const enabled = this.enabledEntries;
    if (this.activeId && enabled.some((entry) => entry.id === this.activeId)) {
      return this.activeId;
    }
    return enabled.length ? enabled[0].id : null;
  }

  get activeDescendant(): string | null {
    return this.resolvedActiveId;
  }

  get hasResults(): boolean {
    return this.entries.length > 0;
  }

  get renderGroups(): FdSearchRenderGroup[] {
    const activeId = this.resolvedActiveId;
    const groups: FdSearchRenderGroup[] = [];

    for (const entry of this.entries) {
      const label = entry.item.group ?? '';
      let group = groups.find((candidate) => candidate.label === label);
      if (!group) {
        group = { key: `group-${groups.length}`, label, hasLabel: !!label, options: [] };
        groups.push(group);
      }
      group.options.push(this.decorate(entry, activeId));
    }

    return groups;
  }

  private decorate(entry: Entry, activeId: string | null): FdSearchRenderOption {
    const { item, id } = entry;
    const disabled = !!item.disabled;
    const selected = this.isSelected(item);

    return {
      id,
      value: item.value,
      label: item.label,
      description: item.description ?? '',
      hasDescription: !!item.description,
      disabled,
      ariaSelected: selected ? 'true' : 'false',
      ariaDisabled: disabled ? 'true' : 'false',
      component: item.component,
      resolvedComponentProps: item.componentProps ?? {},
      classes: [
        'option',
        selected ? 'option--selected' : '',
        id === activeId ? 'option--active' : '',
        disabled ? 'option--disabled' : ''
      ]
        .filter(Boolean)
        .join(' ')
    };
  }

  /**
   * Points the active option at the current value (a combobox opening on its
   * selection), scrolling it into view once rendered. Falls back to the
   * first result when nothing is selected.
   */
  protected activateSelected() {
    const selected = this.enabledEntries.find((entry) => this.isSelected(entry.item));

    this.activeId = selected ? selected.id : null;
    this.scrollActivePending = !!selected;
  }

  private moveActive(delta: number) {
    const enabled = this.enabledEntries;
    if (!enabled.length) {
      return;
    }

    const current = enabled.findIndex((entry) => entry.id === this.resolvedActiveId);
    const next = (current + delta + enabled.length) % enabled.length;

    this.activeId = enabled[next].id;
    this.scrollActivePending = true;
  }

  renderedCallback() {
    if (!this.scrollActivePending) {
      return;
    }
    this.scrollActivePending = false;

    const active = this.template.querySelector('.option--active') as HTMLElement | null;
    // Not in every environment (jsdom has no layout, so no scrollIntoView).
    if (typeof active?.scrollIntoView === 'function') {
      active.scrollIntoView({ block: 'nearest' });
    }
  }

  handleInput(event: Event) {
    // The native `input` event is `composed`; it must not reach a consumer's
    // own `oninput` as a second, valueless event -- see fandry-input.
    event.stopPropagation();
    this.setQuery((event.target as HTMLInputElement).value);
  }

  handleInputKeydown(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.moveActive(1);
        break;

      case 'ArrowUp':
        event.preventDefault();
        this.moveActive(-1);
        break;

      case 'Enter': {
        // Also keeps Enter from submitting an enclosing <form>.
        event.preventDefault();
        const entry = this.enabledEntries.find((candidate) => candidate.id === this.resolvedActiveId);
        if (entry) {
          this.commit(entry.item);
        }
        break;
      }

      // Home/End are deliberately left alone: in a text field they move the
      // caret, which matters more than jumping through the results.
      default:
    }
  }

  handleListboxMouseDown(event: MouseEvent) {
    // Keeps focus in the input -- a mousedown on a non-focusable option
    // would otherwise blur it before the click below ever runs.
    event.preventDefault();
  }

  handleOptionClick(event: MouseEvent) {
    const optionId = (event.currentTarget as HTMLElement).dataset.optionId;
    const entry = this.entries.find((candidate) => candidate.id === optionId);

    if (entry && !entry.item.disabled) {
      this.commit(entry.item);
    }
  }

  handleOptionMouseEnter(event: MouseEvent) {
    const optionId = (event.currentTarget as HTMLElement).dataset.optionId;
    const entry = this.entries.find((candidate) => candidate.id === optionId);

    if (entry && !entry.item.disabled) {
      this.activeId = entry.id;
    }
  }
}
