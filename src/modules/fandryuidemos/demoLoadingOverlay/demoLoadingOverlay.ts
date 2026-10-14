import { LightningElement } from 'lwc';

const BUSY_MS = 2000;

export default class DemoLoadingOverlay extends LightningElement {
  converting = false;

  handleConvert() {
    this.converting = true;
    setTimeout(() => {
      this.converting = false;
    }, BUSY_MS);
  }
}
