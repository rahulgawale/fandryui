import { LightningElement } from 'lwc';

export default class DemoSelectTheme extends LightningElement {
  options = [
    { label: 'Small', value: 's' },
    { label: 'Medium', value: 'm' },
    { label: 'Large', value: 'l' }
  ];
}
