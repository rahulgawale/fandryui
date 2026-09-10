import { LightningElement } from 'lwc';
import PlanOption from 'fandryui/planOption';

export default class HelloWorldApp extends LightningElement {
  planOptions = [{ label: 'Free', value: 'free' }];

  planOptionGroups = [
    {
      label: 'Paid plans',
      options: [
        { label: 'Pro', value: 'pro' },
        { label: 'Enterprise', value: 'enterprise', disabled: true }
      ]
    }
  ];

  // Demonstrates swapping an option's rendering for a custom component via
  // `lwc:is` (LWC requires <slot> names to be static, so a per-option named
  // slot isn't possible for a data-driven options array).
  planOptionsWithIcons = [
    { label: 'Free', value: 'free', component: PlanOption, componentProps: { icon: '🌱', label: 'Free' } },
    { label: 'Pro', value: 'pro', component: PlanOption, componentProps: { icon: '💎', label: 'Pro' } },
    {
      label: 'Enterprise',
      value: 'enterprise',
      component: PlanOption,
      componentProps: { icon: '🏢', label: 'Enterprise' }
    }
  ];

  tableColumns = [
    { id: 'name', accessorKey: 'name', header: 'Name' },
    { id: 'role', accessorKey: 'role', header: 'Role' },
    { id: 'plan', accessorKey: 'plan', header: 'Plan' }
  ];

  menuOpen = false;
  lastMenuSelection = '';

  // Property-bound via `for:each` below (rather than hardcoded <fd-menu-item>
  // tags) to exercise the same array-bound-data path a `for:each` select
  // option list uses -- fd-menu-item notifies fd-menu when a bound item's
  // `disabled` flips in place (see menuItem.ts/menu.ts), which the toggle
  // below exists to demonstrate.
  menuActions = [
    { value: 'edit', label: 'Edit', disabled: false },
    { value: 'duplicate', label: 'Duplicate', disabled: false },
    { value: 'delete', label: 'Delete', disabled: true }
  ];

  handleToggleDuplicateDisabled(event) {
    const disabled = event.detail;
    this.menuActions = this.menuActions.map((action) =>
      action.value === 'duplicate' ? { ...action, disabled } : action
    );
  }

  // fd-popover's own template deliberately sets no aria-haspopup/expanded
  // on the trigger ("that ARIA belongs on the consumer's own slotted
  // trigger element" -- see popover.html) -- same reasoning applies one
  // level up for fd-menu, so this app wires it directly onto its fd-button
  // trigger via elementProps.
  get menuTriggerProps() {
    // Overriding fd-button's own elementProps replaces its default
    // entirely -- tabIndex has to be repeated here to keep its Safari
    // tab-order fix (see fd-button's button.ts).
    return { tabIndex: 0, ariaHasPopup: 'menu', ariaExpanded: this.menuOpen };
  }

  handleMenuToggle(event) {
    this.menuOpen = event.detail;
  }

  handleMenuSelect(event) {
    this.lastMenuSelection = event.detail.value;
    this.menuOpen = false;
  }

  tablePageSize = 3;
  tableLoading = false;

  tableData = [
    { name: 'Ada Lovelace', role: 'Engineer', plan: 'Enterprise' },
    { name: 'Grace Hopper', role: 'Engineer', plan: 'Pro' },
    { name: 'Alan Turing', role: 'Researcher', plan: 'Free' },
    { name: 'Margaret Hamilton', role: 'Engineer', plan: 'Enterprise' },
    { name: 'Katherine Johnson', role: 'Researcher', plan: 'Pro' },
    { name: 'Radia Perlman', role: 'Engineer', plan: 'Free' },
    { name: 'Barbara Liskov', role: 'Researcher', plan: 'Enterprise' }
  ];

  handleTableRowClick(event) {
    // eslint-disable-next-line no-console
    console.log('fd-table rowclick', event.detail);
  }

  handleTablePageChange(event) {
    // eslint-disable-next-line no-console
    console.log('fd-table pagechange', event.detail);
  }

  handleTableLoadingToggle(event) {
    this.tableLoading = event.detail;
  }

  handleTableRowSelectionChange(event) {
    // eslint-disable-next-line no-console
    console.log('fd-table rowselectionchange', event.detail);
  }
}
