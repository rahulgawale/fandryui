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
