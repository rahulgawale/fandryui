import { LightningElement } from 'lwc';

export default class DemoBreadcrumbItem extends LightningElement {
  handleNoopClick(event: Event) {
    event.preventDefault();
  }
}
