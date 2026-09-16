import { LightningElement } from 'lwc';

export default class DemoTable extends LightningElement {
  tableColumns = [
    { id: 'name', accessorKey: 'name', header: 'Name' },
    { id: 'role', accessorKey: 'role', header: 'Role' },
    { id: 'plan', accessorKey: 'plan', header: 'Plan' }
  ];

  tableData = [
    { name: 'Ada Lovelace', role: 'Engineer', plan: 'Enterprise' },
    { name: 'Grace Hopper', role: 'Engineer', plan: 'Pro' },
    { name: 'Alan Turing', role: 'Researcher', plan: 'Free' },
    { name: 'Margaret Hamilton', role: 'Engineer', plan: 'Enterprise' },
    { name: 'Katherine Johnson', role: 'Researcher', plan: 'Pro' }
  ];
}
