import { LightningElement } from 'lwc';

export default class DemoPagination extends LightningElement {
  handleNoopClick(event: Event) {
    event.preventDefault();
  }
}
