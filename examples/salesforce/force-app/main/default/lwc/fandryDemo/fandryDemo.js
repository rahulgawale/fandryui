import { LightningElement } from 'lwc';

export default class FandryDemo extends LightningElement {
  status = 'idle';
  name = '';

  columns = [
    { id: 'name', accessorKey: 'name', header: 'Name' },
    { id: 'role', accessorKey: 'role', header: 'Role' }
  ];

  rows = [
    { name: 'Ada Lovelace', role: 'Engineer' },
    { name: 'Grace Hopper', role: 'Engineer' },
    { name: 'Alan Turing', role: 'Researcher' },
    { name: 'Katherine Johnson', role: 'Researcher' }
  ];

  get greetingName() {
    return this.name || 'there';
  }

  handleSave() {
    this.status = 'saved';
  }

  handleInput(event) {
    this.name = event.detail;
  }
}
