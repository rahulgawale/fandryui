import { LightningElement } from 'lwc';

const BUSY_MS = 2000;

export default class DemoLoadingOverlayContained extends LightningElement {
  refreshing = false;

  handleRefresh() {
    this.refreshing = true;
    setTimeout(() => {
      this.refreshing = false;
    }, BUSY_MS);
  }
}
