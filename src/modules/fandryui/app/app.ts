import { LightningElement } from 'lwc';
import PlanOption from 'fandryui/planOption';
import ToastBody from 'fandryui/toastBody';

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

  // Property-bound via `for:each` below (rather than hardcoded <fandry-menu-item>
  // tags) to exercise the same array-bound-data path a `for:each` select
  // option list uses -- fandry-menu-item notifies fandry-menu when a bound item's
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

  // fandry-popover's own template deliberately sets no aria-haspopup/expanded
  // on the trigger ("that ARIA belongs on the consumer's own slotted
  // trigger element" -- see popover.html) -- same reasoning applies one
  // level up for fandry-menu, so this app wires it directly onto its fandry-button
  // trigger via elementProps.
  get menuTriggerProps() {
    // Overriding fandry-button's own elementProps replaces its default
    // entirely -- tabIndex has to be repeated here to keep its Safari
    // tab-order fix (see fandry-button's button.ts).
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
    console.log('fandry-table rowclick', event.detail);
  }

  handleTablePageChange(event) {
    // eslint-disable-next-line no-console
    console.log('fandry-table pagechange', event.detail);
  }

  handleTableLoadingToggle(event) {
    this.tableLoading = event.detail;
  }

  handleTableRowSelectionChange(event) {
    // eslint-disable-next-line no-console
    console.log('fandry-table rowselectionchange', event.detail);
  }

  toastIdCounter = 0;
  toasts = [];

  addToast(variant, message) {
    this.toastIdCounter += 1;
    this.toasts = [...this.toasts, { id: this.toastIdCounter, variant, message }];
  }

  handleAddInfoToast() {
    this.addToast('info', 'Heads up: your session refreshes in 5 minutes.');
  }

  handleAddSuccessToast() {
    this.addToast('success', 'Changes saved.');
  }

  handleAddWarningToast() {
    this.addToast('warning', 'Your plan is approaching its usage limit.');
  }

  handleAddDangerToast() {
    this.addToast('danger', 'Failed to save changes.');
  }

  // Unlike the four toasts above (plain `message` strings, escaped by
  // `{toast.message}`), this one carries `component`/`componentProps`
  // instead -- app.html branches on `toast.component` and, when present,
  // renders it via `lwc:is`/`lwc:spread` rather than the plain-text
  // fallback. Same per-item composition `planOptionsWithIcons` above
  // already uses for fandry-select: a `for:each`-driven queue can only bind
  // plain text per item directly, so richer content (here, toastBody's
  // title/detail/action) has to come from a real component instead.
  handleAddRichToast() {
    this.toastIdCounter += 1;
    this.toasts = [
      ...this.toasts,
      {
        id: this.toastIdCounter,
        variant: 'info',
        component: ToastBody,
        componentProps: {
          title: 'New comment',
          detail: 'Ada Lovelace replied to your thread.',
          actionLabel: 'View'
        }
      }
    ];
  }

  handleToastAction() {
    // eslint-disable-next-line no-console
    console.log('toastBody action clicked');
  }

  // fandry-toast fires `dismiss` once its own auto-dismiss timer (or an
  // external dismiss() call) finishes its exit animation -- removing the
  // dismissed entry from this list is this app's job, not fandry-toast's; see
  // the Toast Example section's comment in app.html.
  removeToastById(list, event) {
    const id = Number(event.target.dataset.id);
    return list.filter((toast) => toast.id !== id);
  }

  handleToastDismiss(event) {
    this.toasts = this.removeToastById(this.toasts, event);
  }

  panelToastIdCounter = 0;
  panelToasts = [];

  handleAddPanelToast() {
    this.panelToastIdCounter += 1;
    this.panelToasts = [
      ...this.panelToasts,
      { id: this.panelToastIdCounter, variant: 'success', message: 'Saved within this panel.' }
    ];
  }

  handlePanelToastDismiss(event) {
    this.panelToasts = this.removeToastById(this.panelToasts, event);
  }
}
