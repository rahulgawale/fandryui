import { api } from 'lwc';
import Base from 'fandry/base';

interface FdTabElement extends HTMLElement {
  value: string;
  selected: boolean;
  disabled: boolean;
  elementProps: Record<string, unknown>;
  focus(): void;
}

interface FdTabPanelElement extends HTMLElement {
  value: string;
  selected: boolean;
}

/* Tabs and panels are composed, not configured: the page writes a
   fandry-tab (slot="tab") and a fandry-tab-panel for each section, and
   fandry-tabs only keeps the two in step and owns the WAI-ARIA keyboard
   contract (roving tabindex, arrows, Home, End; a focused tab is selected). */
export default class FdTabs extends Base {
  /* The selected tab's `value`. Like a native control, it updates as the user
     picks a tab and `change` reports it. Unset, or matching no tab, the
     first enabled tab is selected. */
  @api value = '';

  /** Names the tab list (aria-label). */
  @api ariaLabel = '';

  get label(): string | null {
    return this.ariaLabel || null;
  }

  connectedCallback() {
    this.addEventListener('click', this.handleClick);
    this.addEventListener('keydown', this.handleKeydown);
    this.addEventListener('itemchange', this.handleItemChange);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.handleClick);
    this.removeEventListener('keydown', this.handleKeydown);
    this.removeEventListener('itemchange', this.handleItemChange);
  }

  renderedCallback() {
    this.sync();
  }

  handleSlotChange = () => {
    this.sync();
  };

  // A tab's `disabled` changed in place; internal, so it stops here.
  handleItemChange = (event: Event) => {
    event.stopPropagation();
    this.sync();
  };

  @api
  focus() {
    this.selectedTab()?.focus();
  }

  /* What each slot holds, not a querySelectorAll: a fandry-tabs inside a
     panel then never sees the inner tabs as its own. */
  private assigned<T extends HTMLElement>(slotName: string, tag: string): T[] {
    const slot = this.template.querySelector(slotName ? `slot[name="${slotName}"]` : 'slot:not([name])') as HTMLSlotElement | null;
    return (slot?.assignedElements() ?? []).filter((el) => el.localName === tag) as T[];
  }

  private getTabs(): FdTabElement[] {
    return this.assigned<FdTabElement>('tab', 'fandry-tab');
  }

  private getPanels(): FdTabPanelElement[] {
    return this.assigned<FdTabPanelElement>('', 'fandry-tab-panel');
  }

  private selectedTab(): FdTabElement | undefined {
    const tabs = this.getTabs();
    return tabs.find((tab) => tab.value === this.value) ?? tabs.find((tab) => !tab.disabled);
  }

  // Shows the selected tab's panel and leaves only that tab a Tab stop.
  private sync() {
    const selected = this.selectedTab();
    this.getTabs().forEach((tab) => {
      tab.selected = tab === selected;
      tab.elementProps = { tabIndex: tab === selected ? 0 : -1 };
    });
    this.getPanels().forEach((panel) => {
      panel.selected = !!selected && panel.value === selected.value;
    });
  }

  /* False when the tab was not selected: disabled, already selected, or a
     `beforechange` listener cancelled it. */
  private select(tab: FdTabElement): boolean {
    const current = this.selectedTab();
    if (tab.disabled || tab === current) return false;

    const proceed = this.dispatchEvent(
      new CustomEvent('beforechange', {
        detail: { value: tab.value, previousValue: current?.value ?? '' },
        bubbles: true,
        cancelable: true
      })
    );
    if (!proceed) return false;

    this.value = tab.value;
    this.sync();
    this.dispatchEvent(new CustomEvent('change', { detail: { value: tab.value }, bubbles: true }));
    return true;
  }

  /* The target, not composedPath(), for the reason in menu.ts's currentItem. */
  private currentTab(event: Event): FdTabElement | undefined {
    const tab = (event.target as Element).closest('fandry-tab') as FdTabElement | null;
    return tab && this.getTabs().includes(tab) ? tab : undefined;
  }

  handleClick = (event: MouseEvent) => {
    const tab = this.currentTab(event);
    if (tab) this.select(tab);
  };

  handleKeydown = (event: KeyboardEvent) => {
    const current = this.currentTab(event);
    if (!current) return;

    const tabs = this.getTabs().filter((tab) => !tab.disabled);
    const index = tabs.indexOf(current);
    let next: FdTabElement | undefined;
    if (event.key === 'ArrowRight') next = tabs[(index + 1) % tabs.length];
    else if (event.key === 'ArrowLeft') next = tabs[(index - 1 + tabs.length) % tabs.length];
    else if (event.key === 'Home') next = tabs[0];
    else if (event.key === 'End') next = tabs[tabs.length - 1];
    if (!next) return;

    event.preventDefault();
    if (this.select(next)) next.focus();
  };
}
