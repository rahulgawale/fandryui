import { api, track, LightningElement } from 'lwc';
import Base from 'fandry/base';
import { partList } from 'fandry/parts';
import { resolveElementProps } from 'fandry/elementProps';
import { slotHasContent } from 'fandry/textSlots';

export interface FdSelectOption {
  label: string;
  value: string;
  disabled?: boolean;
  // Renders in place of the plain-text label, in both the listbox row and
  // (when this is the selected option) the trigger -- via `lwc:is`, since
  // LWC requires `<slot>` names to be static strings, which rules out a
  // per-option named slot for an arbitrary, data-driven option list.
  //
  // On Salesforce, a bundle whose template uses `lwc:is` needs the
  // `lightning__dynamicComponent` capability in its .js-meta.xml (and API 55+);
  // `fandry add` writes it.
  component?: typeof LightningElement;
  componentProps?: Record<string, unknown>;
}

export interface FdSelectOptionGroup {
  label: string;
  options: FdSelectOption[];
}

interface FlatOption {
  id: string;
  value: string;
  label: string;
  disabled: boolean;
  component?: typeof LightningElement;
  componentProps?: Record<string, unknown>;
}

interface RenderOption extends FlatOption {
  ariaSelected: 'true' | 'false';
  ariaDisabled: 'true' | 'false';
  classes: string;
  part: string;
  resolvedComponentProps: Record<string, unknown>;
}

const TYPEAHEAD_RESET_MS = 500;

// How far PageUp/PageDown move when the listbox can't be measured.
const PAGE_SIZE_FALLBACK = 10;

// See fandry-checkbox's checkbox.ts for why this list exists: it keeps a
// consumer's `elementProps` from clobbering a property (or ARIA wiring)
// the combobox itself depends on to function.
//
// The ARIA entries need real IDL property names, confirmed against actual
// Chromium (jsdom's ARIAMixin support is empty, so this can't be verified
// via the jest environment) -- getting the casing/shape wrong makes the
// guard silently useless, which is exactly what happened here initially:
// `ariaHaspopup` (wrong casing) should be `ariaHasPopup`, and IDREF-valued
// attributes (aria-controls/aria-activedescendant/aria-describedby) have
// NO plain string property at all -- only newer element-reference
// properties (`ariaControlsElements`, `ariaActiveDescendantElement`,
// `ariaDescribedByElements`, taking Element objects, not id strings). Both
// the (nonexistent today) plain-string guesses and the real
// element-reference names are reserved, defensively.
const RESERVED_ELEMENT_PROPS = [
  'id',
  'type',
  'class',
  'disabled',
  'role',
  'ariaHasPopup',
  'ariaExpanded',
  'ariaControls',
  'ariaControlsElements',
  'ariaActiveDescendant',
  'ariaActiveDescendantElement',
  'ariaDescribedBy',
  'ariaDescribedByElements',
  'ariaRequired',
  'onkeydown',
  'onkeyup',
  'onblur'
];

export default class Select extends Base {
  @api label = '';
  @api helpText = '';
  @api name = '';
  @api value = '';
  @api placeholder = '';
  @api options: FdSelectOption[] = [];
  @api groups: FdSelectOptionGroup[] = [];
  @api disabled = false;
  @api required = false;

  // Spread onto the trigger <button> via `lwc:spread` -- see checkbox.ts for
  // why this can't reach `data-*` attributes, and why that's not solved
  // with a dedicated prop either.
  @api elementProps: Record<string, unknown> = { tabIndex: 0 };

  @track open = false;
  @track activeOptionId: string | null = null;

  private typeaheadBuffer = '';
  private typeaheadTimer: ReturnType<typeof setTimeout> | null = null;

  // Set when the keyboard (or opening) moves the active option, so the next
  // render scrolls it into view. Hovering never scrolls the list.
  private scrollActiveIntoView = false;

  get hasLabel(): boolean {
    return !!this.label || !!this.textSlots['label'];
  }

  get hasHelpText(): boolean {
    return !!this.helpText || !!this.textSlots['help-text'];
  }

  get hasPlaceholder(): boolean {
    return !!this.placeholder;
  }

  get ariaExpanded(): 'true' | 'false' {
    return this.open ? 'true' : 'false';
  }

  get ariaRequired(): 'true' | 'false' {
    return this.required ? 'true' : 'false';
  }

  // Only while there is help text: an empty description is still announced
  // as one by some screen readers.
  get describedBy(): string | null {
    return this.hasHelpText ? 'help-text' : null;
  }

  get resolvedElementProps(): Record<string, unknown> {
    return resolveElementProps(this, this.elementProps, RESERVED_ELEMENT_PROPS, 'fandry-select');
  }

  // Flattened in render order (placeholder, then flat options, then group
  // options) so keyboard navigation and typeahead can walk a single list --
  // ids match the ones the template assigns via decorateOption below.
  private get flatOptions(): FlatOption[] {
    const flat: FlatOption[] = [];

    if (this.hasPlaceholder) {
      flat.push({ id: 'option-placeholder', value: '', label: this.placeholder, disabled: true });
    }

    this.options.forEach((option, index) => {
      flat.push({
        id: `option-${index}`,
        value: option.value,
        label: option.label,
        disabled: !!option.disabled,
        component: option.component,
        componentProps: option.componentProps
      });
    });

    this.groups.forEach((group, groupIndex) => {
      group.options.forEach((option, optionIndex) => {
        flat.push({
          id: `option-${groupIndex}-${optionIndex}`,
          value: option.value,
          label: option.label,
          disabled: !!option.disabled,
          component: option.component,
          componentProps: option.componentProps
        });
      });
    });

    return flat;
  }

  private get selectedEntry(): FlatOption | undefined {
    return this.flatOptions.find((entry) => entry.id !== 'option-placeholder' && entry.value === this.value);
  }

  get selectedLabel(): string {
    return this.selectedEntry ? this.selectedEntry.label : this.placeholder;
  }

  get valueClasses(): string {
    return this.selectedEntry ? 'value' : 'value value--placeholder';
  }

  // Drives the trigger's own `lwc:is` so the selected option's custom
  // component (if any) mirrors into the collapsed trigger too, not just the
  // listbox row.
  get selectedComponent(): (typeof LightningElement) | undefined {
    return this.selectedEntry?.component;
  }

  get selectedComponentProps(): Record<string, unknown> {
    return this.selectedEntry?.componentProps ?? {};
  }

  private decorateOption(option: FdSelectOption, id: string): RenderOption {
    const disabled = !!option.disabled;
    // Like selectedEntry, the placeholder is never the chosen option, even while value is ''.
    const selected = id !== 'option-placeholder' && option.value === this.value;
    const active = id === this.activeOptionId;

    return {
      id,
      value: option.value,
      label: option.label,
      disabled,
      component: option.component,
      ariaSelected: selected ? 'true' : 'false',
      ariaDisabled: disabled ? 'true' : 'false',
      resolvedComponentProps: option.componentProps ?? {},
      classes: [
        'option',
        selected ? 'option--selected' : '',
        active ? 'option--active' : '',
        disabled ? 'option--disabled' : ''
      ]
        .filter(Boolean)
        .join(' '),
      part: partList('option', { selected, active, disabled })
    };
  }

  get renderPlaceholder(): RenderOption | null {
    return this.hasPlaceholder
      ? this.decorateOption({ label: this.placeholder, value: '', disabled: true }, 'option-placeholder')
      : null;
  }

  get renderOptions(): RenderOption[] {
    return this.options.map((option, index) => this.decorateOption(option, `option-${index}`));
  }

  get renderGroups(): Array<{ label: string; options: RenderOption[] }> {
    return this.groups.map((group, groupIndex) => ({
      label: group.label,
      options: group.options.map((option, optionIndex) =>
        this.decorateOption(option, `option-${groupIndex}-${optionIndex}`)
      )
    }));
  }

  private firstEnabledId(): string | null {
    const entry = this.flatOptions.find((option) => !option.disabled);
    return entry ? entry.id : null;
  }

  private lastEnabledId(): string | null {
    const entries = this.flatOptions.filter((option) => !option.disabled);
    return entries.length ? entries[entries.length - 1].id : null;
  }

  private get enabledOptions(): FlatOption[] {
    return this.flatOptions.filter((option) => !option.disabled);
  }

  /* Opens on the selected option. With nothing selected ArrowUp starts
     from the last option, everything else from the first. */
  private show(fallback: 'first' | 'last' = 'first') {
    const selected = this.enabledOptions.find((option) => option.value === this.value);
    this.open = true;
    this.setActive(selected?.id ?? (fallback === 'last' ? this.lastEnabledId() : this.firstEnabledId()));
  }

  private hide() {
    this.open = false;
    this.activeOptionId = null;
  }

  private setActive(id: string | null) {
    // Only a change renders again; a flag left set would scroll on some later, unrelated render.
    this.scrollActiveIntoView = id !== this.activeOptionId;
    this.activeOptionId = id;
  }

  // Stops at the first and last option rather than wrapping, like a native select.
  private moveActive(delta: number) {
    const enabled = this.enabledOptions;
    if (!enabled.length) {
      return;
    }

    const index = enabled.findIndex((option) => option.id === this.activeOptionId);
    if (index === -1) {
      this.setActive(delta > 0 ? this.firstEnabledId() : this.lastEnabledId());
      return;
    }

    this.setActive(enabled[Math.min(Math.max(index + delta, 0), enabled.length - 1)].id);
  }

  // How many options fit in the listbox: one PageUp/PageDown.
  private get pageSize(): number {
    const listbox = this.template.querySelector('.listbox') as HTMLElement | null;
    const option = this.template.querySelector('.option') as HTMLElement | null;
    if (!listbox?.clientHeight || !option?.offsetHeight) {
      return PAGE_SIZE_FALLBACK;
    }

    return Math.max(1, Math.floor(listbox.clientHeight / option.offsetHeight) - 1);
  }

  // ArrowLeft/ArrowRight on a closed select: the previous or next option, without opening.
  private stepValue(delta: number) {
    const enabled = this.enabledOptions;
    if (!enabled.length) {
      return;
    }

    const index = enabled.findIndex((option) => option.value === this.value);
    const next = index === -1 ? (delta > 0 ? 0 : enabled.length - 1) : Math.min(Math.max(index + delta, 0), enabled.length - 1);
    this.selectValue(enabled[next].value);
  }

  private commitActive() {
    const entry = this.flatOptions.find((option) => option.id === this.activeOptionId);
    if (entry && !entry.disabled) {
      this.selectValue(entry.value);
    } else {
      this.hide();
    }
  }

  private selectValue(value: string) {
    const changed = this.value !== value;
    this.value = value;
    this.hide();

    if (changed) {
      this.dispatchEvent(
        new CustomEvent('change', {
          detail: this.value,
          bubbles: true
        })
      );
    }
  }

  private typeahead(char: string) {
    if (this.typeaheadTimer) {
      clearTimeout(this.typeaheadTimer);
    }

    this.typeaheadBuffer += char.toLowerCase();

    /* One letter pressed again and again steps through the options that
       start with it. Anything longer is a word being typed, so the option
       it already found stays while it still matches. */
    const search = this.typeaheadBuffer;
    const repeated = [...search].every((letter) => letter === search[0]);
    const term = repeated ? search[0] : search;

    const flat = this.flatOptions;
    const anchor = this.open
      ? flat.findIndex((option) => option.id === this.activeOptionId)
      : flat.findIndex((option) => option.value === this.value);
    const from = repeated ? anchor + 1 : Math.max(anchor, 0);
    const ordered = [...flat.slice(from), ...flat.slice(0, from)];
    const match = ordered.find((option) => !option.disabled && option.label.toLowerCase().startsWith(term));

    if (match) {
      if (this.open) {
        this.setActive(match.id);
      } else {
        this.selectValue(match.value);
      }
    }

    this.typeaheadTimer = setTimeout(() => {
      this.typeaheadBuffer = '';
    }, TYPEAHEAD_RESET_MS);
  }

  // The host isn't itself focusable, only the trigger button in its shadow
  // tree is -- same fix as fandry-input's focus().
  @api
  focus() {
    (this.template.querySelector('.trigger') as HTMLElement | null)?.focus();
  }

  renderedCallback() {
    if (!this.scrollActiveIntoView) {
      return;
    }

    this.scrollActiveIntoView = false;
    const id = this.activeOptionId;

    /* A frame later: when this is the render that opens the listbox, the
       popover has not put it on screen yet. */
    requestAnimationFrame(() => {
      const option = id ? this.template.querySelector(`[data-option-id="${id}"]`) : null;
      option?.scrollIntoView?.({ block: 'nearest' });
    });
  }

  disconnectedCallback() {
    if (this.typeaheadTimer) {
      clearTimeout(this.typeaheadTimer);
    }
  }

  handleToggle = (event: CustomEvent<boolean>) => {
    if (!event.detail) {
      this.hide();
      return;
    }

    this.show();
    // Safari doesn't focus a button it clicks, and the keyboard is handled on the trigger.
    this.focus();
  };

  /* A label's click presses its button, which would open the listbox.
     Clicking a label only moves focus to its field. A link or button
     inside a slotted label keeps working, a fandry-link or fandry-button
     too: theirs is found on the path, inside their own shadow root. */
  handleLabelClick(event: MouseEvent) {
    const path = event.composedPath();
    const inLabel = path.slice(0, path.indexOf(event.currentTarget as EventTarget));
    if (inLabel.some((node) => node instanceof HTMLAnchorElement || node instanceof HTMLButtonElement)) {
      return;
    }

    event.preventDefault();
    if (!this.disabled) {
      this.focus();
    }
  }

  // Focus leaving the trigger (Tab, another window) closes the listbox without choosing.
  handleTriggerBlur() {
    if (this.open) {
      this.hide();
    }
  }

  // Some browsers press a button on Space's keyup even after its keydown was handled.
  handleTriggerKeyup(event: KeyboardEvent) {
    if (event.key === ' ') {
      event.preventDefault();
    }
  }

  handleTriggerKeydown = (event: KeyboardEvent) => {
    // Space is a letter while a search is being typed ("new york").
    if (event.key === ' ' && this.typeaheadBuffer) {
      event.preventDefault();
      this.typeahead(' ');
      return;
    }

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (this.open) {
          this.moveActive(1);
        } else {
          this.show('first');
        }
        break;

      case 'ArrowUp':
        event.preventDefault();
        if (this.open) {
          this.moveActive(-1);
        } else {
          this.show('last');
        }
        break;

      case 'ArrowLeft':
      case 'ArrowRight':
        if (!this.open) {
          event.preventDefault();
          this.stepValue(event.key === 'ArrowRight' ? 1 : -1);
        }
        break;

      case 'Home':
        if (this.open) {
          event.preventDefault();
          this.setActive(this.firstEnabledId());
        }
        break;

      case 'End':
        if (this.open) {
          event.preventDefault();
          this.setActive(this.lastEnabledId());
        }
        break;

      case 'PageUp':
      case 'PageDown':
        if (this.open) {
          event.preventDefault();
          this.moveActive(event.key === 'PageDown' ? this.pageSize : -this.pageSize);
        }
        break;

      case 'Enter':
      case ' ':
        event.preventDefault();
        if (this.open) {
          this.commitActive();
        } else {
          this.show();
        }
        break;

      /* Closed here, and kept from going further, so Escape closes only
         the listbox and not a dialog the select sits in as well. */
      case 'Escape':
        if (this.open) {
          event.preventDefault();
          event.stopPropagation();
          this.hide();
        }
        break;

      default:
        // Ctrl/Cmd/Alt + a letter is a shortcut, not a search.
        if (event.key.length === 1 && /\S/.test(event.key) && !event.ctrlKey && !event.metaKey && !event.altKey) {
          this.typeahead(event.key);
        }
    }
  };

  handleListboxMouseDown(event: MouseEvent) {
    // Keeps focus on the trigger button -- a mousedown on a non-focusable
    // option div would otherwise blur the trigger before the click handler
    // below ever runs.
    event.preventDefault();
  }

  handleOptionClick = (event: MouseEvent) => {
    const target = event.currentTarget as HTMLElement;
    if (target.getAttribute('aria-disabled') === 'true') {
      return;
    }

    this.selectValue(target.dataset.value ?? '');
  };

  handleOptionMouseEnter = (event: MouseEvent) => {
    const target = event.currentTarget as HTMLElement;
    if (target.getAttribute('aria-disabled') === 'true') {
      return;
    }

    this.activeOptionId = target.dataset.optionId ?? null;
  };

  get controlPart(): string {
    return partList('control', { disabled: this.disabled });
  }

  // Which text slots have content -- see fandry/textSlots.
  textSlots: Record<string, boolean> = {};

  handleTextSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    this.textSlots = { ...this.textSlots, [slot.name || 'default']: slotHasContent(slot) };
  }

  get labelHidden(): boolean {
    return !this.hasLabel;
  }

  get helpTextHidden(): boolean {
    return !this.hasHelpText;
  }
}
