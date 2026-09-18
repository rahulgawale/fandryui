import { LightningElement } from 'lwc';

export default class DemoSidebarItem extends LightningElement {
  handleNoopClick(event: Event) {
    event.preventDefault();
  }
}
