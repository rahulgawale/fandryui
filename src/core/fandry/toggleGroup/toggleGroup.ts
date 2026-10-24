import { api } from 'lwc';
import Base from 'fandry/base';

interface FdToggleButtonElement extends HTMLElement {
  value: string;
  pressed: boolean;
  disabled: boolean;
  elementProps: Record<string, unknown>;
  focus(): void;
}

/* Buttons are composed, not configured: the page writes a
   fandry-toggle-button for each choice and fandry-toggle-group keeps their
   pressed state, roving tabindex and arrow/Home/End focus in step. Each
   button flips itself and says so with `change`; the group turns that into
   one `value`, releasing the others when it is not `multiple`. */
export default class FdToggleGroup extends Base {
  /* The `value` of every pressed button. Like a native control, it updates as
     the user presses buttons and `change` reports it. Without `multiple`, only
     the first entry counts. */
  @api value: string[] = [];

  /** Lets more than one button be pressed. Without it, pressing a button releases the others. */
  @api multiple = false;

  /** Names the group (aria-label). */
  @api ariaLabel = '';

  get label(): string | null {
    return this.ariaLabel || null;
  }

  connectedCallback() {
    this.addEventListener('keydown', this.handleKeydown);
    this.addEventListener('itemchange', this.handleItemChange);
  }

  disconnectedCallback() {
    this.removeEventListener('keydown', this.handleKeydown);
    this.removeEventListener('itemchange', this.handleItemChange);
  }

  renderedCallback() {
    this.sync();
  }

  handleSlotChange = () => {
    this.sync();
  };

  // A button's `disabled` changed in place; internal, so it stops here.
  handleItemChange = (event: Event) => {
    event.stopPropagation();
    this.sync();
  };

  @api
  focus() {
    const items = this.getItems();
    (items.find((item) => item.pressed && !item.disabled) ?? items.find((item) => !item.disabled))?.focus();
  }

  // Direct children only, by what the slot holds, as in tabs.ts.
  private getItems(): FdToggleButtonElement[] {
    const slot = this.template.querySelector('slot') as HTMLSlotElement | null;
    return (slot?.assignedElements() ?? []).filter(
      (el) => el.localName === 'fandry-toggle-button'
    ) as FdToggleButtonElement[];
  }

  // `value` may arrive as a lone string from an attribute.
  private get selection(): string[] {
    const list = Array.isArray(this.value) ? this.value : this.value ? [this.value as unknown as string] : [];
    return this.multiple ? list : list.slice(0, 1);
  }

  private sync() {
    const items = this.getItems();
    const selection = this.selection;
    const pressed = items.filter((item) => selection.includes(item.value));
    const stop = pressed.find((item) => !item.disabled) ?? items.find((item) => !item.disabled);
    items.forEach((item) => {
      item.pressed = pressed.includes(item);
      item.elementProps = { tabIndex: item === stop ? 0 : -1 };
    });
  }

  /* The target, not composedPath(), as in tabs.ts. */
  private currentItem(event: Event): FdToggleButtonElement | undefined {
    const item = (event.target as Element).closest('fandry-toggle-button') as FdToggleButtonElement | null;
    return item && this.getItems().includes(item) ? item : undefined;
  }

  handleChange = (event: Event) => {
    const item = this.currentItem(event);
    if (!item) return;
    // Stops here, so the page hears only the group's change.
    event.stopPropagation();
    const selection = this.selection.filter((v) => v !== item.value);
    this.value = item.pressed ? (this.multiple ? [...selection, item.value] : [item.value]) : selection;
    this.sync();
    this.dispatchEvent(new CustomEvent('change', { detail: { value: this.value }, bubbles: true }));
  };

  // Arrows move focus only; Space and Enter press, as on any button.
  handleKeydown = (event: KeyboardEvent) => {
    const current = this.currentItem(event);
    if (!current) return;

    const items = this.getItems().filter((item) => !item.disabled);
    const index = items.indexOf(current);
    let next: FdToggleButtonElement | undefined;
    if (event.key === 'ArrowRight') next = items[(index + 1) % items.length];
    else if (event.key === 'ArrowLeft') next = items[(index - 1 + items.length) % items.length];
    else if (event.key === 'Home') next = items[0];
    else if (event.key === 'End') next = items[items.length - 1];
    if (!next) return;

    event.preventDefault();
    items.forEach((item) => {
      item.elementProps = { tabIndex: item === next ? 0 : -1 };
    });
    next.focus();
  };
}
