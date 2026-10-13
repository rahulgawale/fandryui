import { LightningElement } from 'lwc';

const BUSY_MS = 2000;

export default class DemoLoadingOverlay extends LightningElement {
  refreshing = false;
  generating = false;

  handleRefresh() {
    this.refreshing = true;
    setTimeout(() => {
      this.refreshing = false;
    }, BUSY_MS);
  }

  handleGenerate() {
    this.generating = true;
    setTimeout(() => {
      this.generating = false;
    }, BUSY_MS);
  }
}
