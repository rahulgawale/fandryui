import { api, track, LightningElement } from 'lwc';
import Base from 'fd/base';

export interface FdSelectOption {
  label: string;
  value: string;
  disabled?: boolean;
  // Renders in place of the plain-text label, in both the listbox row and
  // (when this is the selected option) the trigger -- via `lwc:is`, since
  // LWC requires `<slot>` names to be static strings, which rules out a
  // per-option named slot for an arbitrary, data-driven option list.
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
  resolvedComponentProps: Record<string, unknown>;
}

const TYPEAHEAD_RESET_MS = 500;

// See fd-checkbox's checkbox.ts for why this list exists: it keeps a
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
  'ariaActivedescendant',
  'ariaActiveDescendantElement',
  'ariaDescribedby',
  'ariaDescribedByElements',
  'ariaRequired',
  'onkeydown'
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

  get hasLabel(): boolean {
    return !!this.label;
  }

  get hasHelpText(): boolean {
    return !!this.helpText;
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

  get resolvedElementProps(): Record<string, unknown> {
    return this.resolveElementProps(this.elementProps, RESERVED_ELEMENT_PROPS, 'fd-select');
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
    const selected = option.value === this.value;
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
        .join(' ')
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

  private activeIdForCurrentValue(): string | null {
    const match = this.flatOptions.find((option) => !option.disabled && option.value === this.value);
    return match ? match.id : this.firstEnabledId();
  }

  private moveActive(delta: number) {
    const flat = this.flatOptions;
    if (!flat.length) {
      return;
    }

    let index = flat.findIndex((option) => option.id === this.activeOptionId);
    if (index === -1) {
      this.activeOptionId = delta > 0 ? this.firstEnabledId() : this.lastEnabledId();
      return;
    }

    for (let step = 0; step < flat.length; step++) {
      index = (index + delta + flat.length) % flat.length;
      if (!flat[index].disabled) {
        this.activeOptionId = flat[index].id;
        return;
      }
    }
  }

  private commitActive() {
    const entry = this.flatOptions.find((option) => option.id === this.activeOptionId);
    if (entry && !entry.disabled) {
      this.selectValue(entry.value);
    } else {
      this.open = false;
      this.activeOptionId = null;
    }
  }

  private selectValue(value: string) {
    const changed = this.value !== value;
    this.value = value;
    this.open = false;
    this.activeOptionId = null;

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

    const flat = this.flatOptions;
    const anchor = this.open
      ? flat.findIndex((option) => option.id === this.activeOptionId)
      : flat.findIndex((option) => option.value === this.value);
    const ordered = [...flat.slice(anchor + 1), ...flat.slice(0, anchor + 1)];
    const match = ordered.find((option) => !option.disabled && option.label.toLowerCase().startsWith(this.typeaheadBuffer));

    if (match) {
      if (this.open) {
        this.activeOptionId = match.id;
      } else {
        this.selectValue(match.value);
      }
    }

    this.typeaheadTimer = setTimeout(() => {
      this.typeaheadBuffer = '';
    }, TYPEAHEAD_RESET_MS);
  }

  handleToggle = (event: CustomEvent<boolean>) => {
    this.open = event.detail;
    this.activeOptionId = this.open ? this.activeIdForCurrentValue() : null;
  };

  handleTriggerKeydown = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (this.open) {
          this.moveActive(1);
        } else {
          this.open = true;
          this.activeOptionId = this.activeIdForCurrentValue();
        }
        break;

      case 'ArrowUp':
        event.preventDefault();
        if (this.open) {
          this.moveActive(-1);
        } else {
          this.open = true;
          this.activeOptionId = this.activeIdForCurrentValue();
        }
        break;

      case 'Home':
        if (this.open) {
          event.preventDefault();
          this.activeOptionId = this.firstEnabledId();
        }
        break;

      case 'End':
        if (this.open) {
          event.preventDefault();
          this.activeOptionId = this.lastEnabledId();
        }
        break;

      case 'Enter':
      case ' ':
        event.preventDefault();
        if (this.open) {
          this.commitActive();
        } else {
          this.open = true;
          this.activeOptionId = this.activeIdForCurrentValue();
        }
        break;

      default:
        if (event.key.length === 1 && /\S/.test(event.key)) {
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
}
