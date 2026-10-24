import { LightningElement } from 'lwc';

export default class DemoMultiSelectTheme extends LightningElement {
  options = [
    { label: 'Small', value: 's' },
    { label: 'Medium', value: 'm' },
    { label: 'Large', value: 'l' }
  ];

  value = ['m'];
}
