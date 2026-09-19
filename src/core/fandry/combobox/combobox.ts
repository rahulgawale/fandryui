import { api, track } from 'lwc';
import FdSearchState from 'fandry/searchState';
import type { FdSearchItem } from 'fandry/searchState';
import { exitFinished } from 'fandry/motion';

export type FdComboboxOption = FdSearchItem;

// A stable empty list (the source cache compares by identity).
const NO_OPTIONS: FdSearchItem[] = [];

// See fandry-checkbox's checkbox.ts for why this list exists: it keeps a
// consumer's `elementProps` from clobbering a property (or ARIA wiring) the
// combobox itself depends on. The ARIA entries use real IDL property names
// (see select.ts's fuller note on why the casing matters and why the
// IDREF-valued ones only exist as element-reference properties).
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
 * A searchable select: type to narrow the options, pick one, get a `value`.
 * The search, ranking and keyboard behavior live in fandry/searchState; this
 * adds the field, the anchored listbox under it, and the selected value.
 *
 * The listbox is this component's own panel rather than a slotted
 * fandry-popover: a popover toggles on any click inside its trigger, but the
 * trigger here is a text field that is clicked into to type, and closing the
 * list on the second click would fight that.
 */
export default class FdCombobox extends FdSearchState {
  @api label = '';
  @api helpText = '';
  @api name = '';
  @api value = '';
  @api placeholder = '';
  @api options: FdComboboxOption[] = [];
  @api disabled = false;
  @api required = false;

  // Spread onto the native <input> via `lwc:spread` -- see checkbox.ts for
  // why this can't reach `data-*` attributes. No tabIndex default: Safari
  // already tabs to plain text fields (see fandry-input).
  @api elementProps: Record<string, unknown> = {};

  @track open = false;

  // Whether the panel is in the DOM: true while open, and stays true through
  // the exit animation after `open` goes false (see fandry/motion).
  @track isMounted = false;

  // While false the field shows the selected option's label; once the user
  // types it shows what they typed. Reset on every close, so an abandoned
  // search never replaces the value.
  @track isTyping = false;

  // `options` bound to data that hasn't arrived yet (`undefined`) is an empty
  // list, not a render error.
  protected get source(): FdSearchItem[] {
    return this.options ?? NO_OPTIONS;
  }

  protected isSelected(item: FdSearchItem): boolean {
    return item.value === this.value;
  }

  protected commit(item: FdSearchItem) {
    const changed = this.value !== item.value;
    this.value = item.value;
    this.closeList();

    if (changed) {
      this.dispatchEvent(
        new CustomEvent('change', {
          detail: this.value,
          bubbles: true
        })
      );
    }
  }

  get hasLabel(): boolean {
    return !!this.label;
  }

  get hasHelpText(): boolean {
    return !!this.helpText;
  }

  get selectedLabel(): string {
    const selected = this.source.find((option) => option.value === this.value);
    return selected ? selected.label : '';
  }

  get displayValue(): string {
    return this.isTyping ? this.query : this.selectedLabel;
  }

  get ariaExpanded(): 'true' | 'false' {
    return this.open ? 'true' : 'false';
  }

  get ariaRequired(): 'true' | 'false' {
    return this.required ? 'true' : 'false';
  }

  get openActiveDescendant(): string | null {
    return this.open ? this.activeDescendant : null;
  }

  get panelClasses(): string {
    return ['panel', this.open ? '' : 'panel--closing'].filter(Boolean).join(' ');
  }

  // A closing panel is on its way out: keep it from taking clicks while it
  // fades. `''` (attribute present) / `undefined` (removed): `inert` is a
  // boolean attribute.
  get panelInert(): string | undefined {
    return this.open ? undefined : '';
  }

  get resolvedElementProps(): Record<string, unknown> {
    return this.resolveElementProps(this.elementProps, RESERVED_ELEMENT_PROPS, 'fandry-combobox');
  }

  renderedCallback() {
    super.renderedCallback();

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

  private openList() {
    if (this.disabled || this.open) {
      return;
    }

    this.open = true;
    this.isMounted = true;

    // Opening without typing shows every option, with the current value
    // active; opening *by* typing keeps the query that opened it.
    if (!this.isTyping) {
      this.setQuery('');
      this.activateSelected();
    }
  }

  private closeList() {
    this.open = false;
    this.isTyping = false;
  }

  handleInput(event: Event) {
    super.handleInput(event);
    this.isTyping = true;
    this.openList();
  }

  handleInputClick(event: MouseEvent) {
    if (this.open) {
      return;
    }

    this.openList();
    // So typing replaces the shown label instead of appending to it.
    (event.currentTarget as HTMLInputElement).select();
  }

  // Clicking outside, tabbing away and switching windows all blur the input,
  // so this one handler is the whole "dismiss" story -- no document-level
  // click listener needed. (Clicks on an option never blur it: see
  // handleListboxMouseDown.)
  handleInputBlur() {
    this.closeList();
  }

  handleInputKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.open) {
      event.preventDefault();
      // The list is dismissed first; an enclosing dialog's own Escape
      // listener (on document) must not also fire for the same keypress.
      event.stopPropagation();
      this.closeList();
      return;
    }

    if (!this.open) {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        this.openList();
      }
      // Enter on a closed field is left to the browser (e.g. submitting an
      // enclosing form).
      return;
    }

    super.handleInputKeydown(event);
  }
}
