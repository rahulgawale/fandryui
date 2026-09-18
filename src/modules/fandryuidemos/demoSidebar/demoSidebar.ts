import { LightningElement } from 'lwc';

export default class DemoSidebar extends LightningElement {
  handleNoopClick(event: Event) {
    event.preventDefault();
  }
}
