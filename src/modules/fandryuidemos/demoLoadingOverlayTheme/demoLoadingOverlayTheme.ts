import { LightningElement } from 'lwc';

const BUSY_MS = 2000;

export default class DemoLoadingOverlayTheme extends LightningElement {
  saving = false;

  handleSave() {
    this.saving = true;
    setTimeout(() => {
      this.saving = false;
    }, BUSY_MS);
  }
}
