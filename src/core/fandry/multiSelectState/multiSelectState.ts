import { api, track } from 'lwc';
import Base from 'fandry/base';
import { partList } from 'fandry/parts';
import { resolveElementProps } from 'fandry/elementProps';
import { slotHasContent } from 'fandry/textSlots';
import { fieldInvalid, fieldDescribedBy, withoutAriaInvalid } from 'fandry/fieldError';

export interface FdMultiSelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

/** Text the field shows that isn't markup; see `messages`. */
export interface FdMultiSelectMessages {
  /** The closed field once more than one option is chosen. */
  selected: (count: number) => string;
}

export const DEFAULT_MULTI_SELECT_MESSAGES: FdMultiSelectMessages = {
  selected: (count) => `${count} selected`
};

interface RenderOption {
  id: string;
  value: string;
  label: string;
  ariaSelected: 'true' | 'false';
  ariaDisabled: 'true' | 'false';
  classes: string;
  part: string;
  indicatorPart: string;
}

// See fandry-select's select.ts for why the ARIA names are these.
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
  'onkeydown'
];

/**
 * The behavior of fandry-multi-select, without a template: the open list,
 * the keyboard, and the list of chosen values. Like fandry-select it is a
 * button that opens a listbox, but `value` is a list and `change` reports
 * the list. A site that needs other markup extends this, writes its own
 * template, and keeps the keyboard and the events.
 *
 * The template needs a `.trigger` button, an element with `.listbox` and
 * options carrying `data-option-id` -- see multiSelect.html.
 */
export default class FdMultiSelectState extends Base {
  @api label = '';
  @api helpText = '';
  // Shown under the control, and makes the field invalid -- see fandry/fieldError.
  @api errorText = '';
  @api name = '';
  @api placeholder = '';
  @api options: FdMultiSelectOption[] = [];
  @api disabled = false;
  @api required = false;

  /** Replaces any of DEFAULT_MULTI_SELECT_MESSAGES, e.g. to translate them. */
  @api messages: Partial<FdMultiSelectMessages> = {};

  // Spread onto the trigger <button> via `lwc:spread` -- see checkbox.ts.
  @api elementProps: Record<string, unknown> = { tabIndex: 0 };

  // The values that are chosen. Set from code or by the user, like a native control's.
  @api
  get value(): string[] {
    return this._value;
  }

  set value(value: string[]) {
    this._value = Array.isArray(value) ? value : [];
  }

  private _value: string[] = [];

  @track open = false;
  @track activeOptionId: string | null = null;

  // Set when the keyboard moves the active option, so the next render scrolls it into view.
  private scrollActiveIntoView = false;

  // Where the pointer last was over the open listbox; see handleListboxMouseMove.
  private pointerSeen = false;
  private pointerX = 0;
  private pointerY = 0;

  get hasLabel(): boolean {
    return !!this.label || !!this.textSlots['label'];
  }

  get hasHelpText(): boolean {
    return !!this.helpText || !!this.textSlots['help-text'];
  }

  get hasErrorText(): boolean {
    return !!this.errorText || !!this.textSlots['error-text'];
  }

  get errorTextClasses(): string {
    return this.hasErrorText ? 'error-text' : 'error-text error-text--empty';
  }

  get invalid(): boolean {
    return fieldInvalid(this.hasErrorText, this.elementProps);
  }

  get ariaInvalid(): 'true' | null {
    return this.invalid ? 'true' : null;
  }

  get ariaExpanded(): 'true' | 'false' {
    return this.open ? 'true' : 'false';
  }

  get ariaRequired(): 'true' | 'false' {
    return this.required ? 'true' : 'false';
  }

  get describedBy(): string | null {
    return fieldDescribedBy(this.hasErrorText, this.hasHelpText);
  }

  get resolvedElementProps(): Record<string, unknown> {
    return withoutAriaInvalid(resolveElementProps(this, this.elementProps, RESERVED_ELEMENT_PROPS, 'fandry-multi-select'));
  }

  private get chosen(): FdMultiSelectOption[] {
    return this.options.filter((option) => this._value.includes(option.value));
  }

  // One option shows its label; more show a count, which is text a site translates.
  get summary(): string {
    const chosen = this.chosen;
    if (chosen.length === 0) {
      return this.placeholder;
    }

    return chosen.length === 1
      ? chosen[0].label
      : { ...DEFAULT_MULTI_SELECT_MESSAGES, ...this.messages }.selected(chosen.length);
  }

  get valueClasses(): string {
    return this.chosen.length ? 'value' : 'value value--placeholder';
  }

  get renderOptions(): RenderOption[] {
    return this.options.map((option, index) => {
      const selected = this._value.includes(option.value);
      const disabled = !!option.disabled;
      const active = `option-${index}` === this.activeOptionId;

      return {
        id: `option-${index}`,
        value: option.value,
        label: option.label,
        ariaSelected: selected ? 'true' : 'false',
        ariaDisabled: disabled ? 'true' : 'false',
        classes: [
          'option',
          selected ? 'option--selected' : '',
          active ? 'option--active' : '',
          disabled ? 'option--disabled' : ''
        ]
          .filter(Boolean)
          .join(' '),
        part: partList('option', { selected, active, disabled }),
        indicatorPart: partList('indicator', { selected })
      };
    });
  }

  private get enabledIds(): string[] {
    return this.options.flatMap((option, index) => (option.disabled ? [] : [`option-${index}`]));
  }

  private optionFor(id: string | null): FdMultiSelectOption | undefined {
    return id ? this.options[Number(id.replace('option-', ''))] : undefined;
  }

  private show(fallback: 'first' | 'last' = 'first') {
    const ids = this.enabledIds;
    const firstChosen = ids.find((id) => this._value.includes(this.optionFor(id)!.value));
    this.open = true;
    this.setActive(firstChosen ?? (fallback === 'last' ? ids[ids.length - 1] : ids[0]) ?? null);
  }

  private hide() {
    this.open = false;
    this.activeOptionId = null;
    this.scrollActiveIntoView = false;
    this.pointerSeen = false;
  }

  private setActive(id: string | null) {
    if (id !== this.activeOptionId) {
      this.scrollActiveIntoView = true;
    }
    this.activeOptionId = id;
  }

  // Stops at the first and last option rather than wrapping, like a native select.
  private moveActive(delta: number) {
    const ids = this.enabledIds;
    if (!ids.length) {
      return;
    }

    const index = ids.indexOf(this.activeOptionId ?? '');
    if (index === -1) {
      this.setActive(delta > 0 ? ids[0] : ids[ids.length - 1]);
      return;
    }

    this.setActive(ids[Math.min(Math.max(index + delta, 0), ids.length - 1)]);
  }

  private toggle(option: FdMultiSelectOption | undefined) {
    if (!option || option.disabled) {
      return;
    }

    // Keeps the options' order, whatever order they were picked in.
    const chosen = new Set(this._value);
    if (!chosen.delete(option.value)) {
      chosen.add(option.value);
    }
    this._value = this.options.map((o) => o.value).filter((value) => chosen.has(value));

    this.dispatchEvent(new CustomEvent('change', { detail: this._value, bubbles: true }));
  }

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

    // A frame later: when this is the render that opens the listbox, the popover has not shown it yet.
    requestAnimationFrame(() => {
      const option = id ? this.template.querySelector(`[data-option-id="${id}"]`) : null;
      option?.scrollIntoView?.({ block: 'nearest' });
    });
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

  /* A label's click presses its button, which would open the list.
     Clicking a label only moves focus to its field. */
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

  // Focus leaving the trigger (Tab, another window) closes the list; what is chosen stays.
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

      case 'Home':
      case 'End':
        if (this.open) {
          event.preventDefault();
          const ids = this.enabledIds;
          this.setActive(event.key === 'Home' ? ids[0] : ids[ids.length - 1]);
        }
        break;

      // Open: toggles the active option and stays open. Closed: opens.
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (this.open) {
          this.toggle(this.optionFor(this.activeOptionId));
        } else {
          this.show();
        }
        break;

      // Closes only the list, not a dialog the field sits in as well.
      case 'Escape':
        if (this.open) {
          event.preventDefault();
          event.stopPropagation();
          this.hide();
        }
        break;
    }
  };

  // Keeps focus on the trigger: a mousedown on a non-focusable option would blur it.
  handleListboxMouseDown(event: MouseEvent) {
    event.preventDefault();
  }

  handleOptionClick = (event: MouseEvent) => {
    const target = event.currentTarget as HTMLElement;
    this.setActive(target.dataset.optionId ?? null);
    this.scrollActiveIntoView = false;
    this.toggle(this.optionFor(target.dataset.optionId ?? null));
  };

  // The pointer makes an option active only by moving: see fandry-select.
  handleListboxMouseMove(event: MouseEvent) {
    const moved = this.pointerSeen && (event.clientX !== this.pointerX || event.clientY !== this.pointerY);
    this.pointerSeen = true;
    this.pointerX = event.clientX;
    this.pointerY = event.clientY;
    if (!moved) {
      return;
    }

    const option = (event.target as Element).closest('[role="option"]') as HTMLElement | null;
    if (option && option.getAttribute('aria-disabled') !== 'true') {
      this.activeOptionId = option.dataset.optionId ?? null;
    }
  }

  get controlPart(): string {
    return partList('control', { disabled: this.disabled, invalid: this.invalid });
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
