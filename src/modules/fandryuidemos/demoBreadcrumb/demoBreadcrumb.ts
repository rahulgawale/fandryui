import { LightningElement } from 'lwc';

export default class DemoBreadcrumb extends LightningElement {
  handleNoopClick(event: Event) {
    event.preventDefault();
  }
}
