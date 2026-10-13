import { LightningElement } from 'lwc';

const BUSY_MS = 2000;

export default class DemoLoadingOverlay extends LightningElement {
  generating = false;

  handleGenerate() {
    this.generating = true;
    setTimeout(() => {
      this.generating = false;
    }, BUSY_MS);
  }
}
