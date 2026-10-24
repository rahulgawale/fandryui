import { LightningElement } from 'lwc';

export default class DemoMultiSelect extends LightningElement {
  toppingOptions = [
    { label: 'Mushrooms', value: 'mushrooms' },
    { label: 'Olives', value: 'olives' },
    { label: 'Peppers', value: 'peppers' },
    { label: 'Anchovies', value: 'anchovies', disabled: true }
  ];

  value = ['olives'];

  handleChange(event: CustomEvent<string[]>) {
    this.value = event.detail;
  }
}
