import { LightningElement } from 'lwc';

export default class DemoCommandTheme extends LightningElement {
  isOpen = false;

  items = [
    { label: 'Stride Runner', value: 'runner', group: 'Products', description: 'Running shoes' },
    { label: 'Trail Pack 22L', value: 'pack', group: 'Products', description: 'Daypack' },
    { label: 'Shipping and returns', value: 'shipping', group: 'Pages' },
    { label: 'Size guide', value: 'sizes', group: 'Pages' }
  ];

  handleOpen() {
    this.isOpen = true;
  }

  handleToggle(event: CustomEvent<boolean>) {
    this.isOpen = event.detail;
  }
}
