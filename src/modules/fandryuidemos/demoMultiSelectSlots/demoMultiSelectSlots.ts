import { LightningElement } from 'lwc';

export default class DemoMultiSelectSlots extends LightningElement {
  toppingOptions = [
    { label: 'Mushrooms', value: 'mushrooms' },
    { label: 'Olives', value: 'olives' },
    { label: 'Peppers', value: 'peppers' }
  ];

  value = ['olives'];

  get empty(): boolean {
    return this.value.length === 0;
  }

  handleChange(event: CustomEvent<string[]>) {
    this.value = event.detail;
  }
}
