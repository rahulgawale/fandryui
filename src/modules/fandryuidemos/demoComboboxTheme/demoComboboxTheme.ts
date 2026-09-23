import { LightningElement } from 'lwc';

export default class DemoComboboxTheme extends LightningElement {
  value = 'running';

  options = [
    { label: 'Running', value: 'running', group: 'Shoes', description: 'Road and track' },
    { label: 'Trail', value: 'trail', group: 'Shoes', description: 'Off-road grip' },
    { label: 'Daypacks', value: 'daypacks', group: 'Bags' },
    { label: 'Totes', value: 'totes', group: 'Bags' }
  ];

  handleChange(event: CustomEvent<string>) {
    this.value = event.detail;
  }
}
