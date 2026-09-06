import { LightningElement } from 'lwc';

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

  tableColumns = [
    { id: 'name', accessorKey: 'name', header: 'Name' },
    { id: 'role', accessorKey: 'role', header: 'Role' },
    { id: 'plan', accessorKey: 'plan', header: 'Plan' }
  ];

  tablePageSize = 3;

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
}
