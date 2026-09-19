import { LightningElement } from 'lwc';

export default class App extends LightningElement {
  status = 'idle';
  fruit = 'apple';
  options = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' }
  ];

  handleSave() {
    this.status = 'saved';
  }

  handleChange(event) {
    this.fruit = event.detail;
  }
}
