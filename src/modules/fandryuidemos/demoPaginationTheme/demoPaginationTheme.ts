import { LightningElement } from 'lwc';

export default class DemoPaginationTheme extends LightningElement {
  pageIndex = 1;

  handlePageChange(event: CustomEvent<{ pageIndex: number }>) {
    this.pageIndex = event.detail.pageIndex;
  }

  handleNoopClick(event: Event) {
    event.preventDefault();
  }
}
