import { LightningElement } from 'lwc';

export default class DemoDialog extends LightningElement {
  isOpen = false;

  handleOpen() {
    this.isOpen = true;
  }

  handleClose() {
    this.isOpen = false;
  }

  handleToggle(event: CustomEvent<boolean>) {
    this.isOpen = event.detail;
  }
}
