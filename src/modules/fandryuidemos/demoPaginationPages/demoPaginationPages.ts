import { LightningElement } from 'lwc';

export default class DemoPaginationPages extends LightningElement {
  pageIndex = 0;
  pageCount = 5;

  handlePageChange(event: CustomEvent<{ pageIndex: number }>) {
    this.pageIndex = event.detail.pageIndex;
  }
}
