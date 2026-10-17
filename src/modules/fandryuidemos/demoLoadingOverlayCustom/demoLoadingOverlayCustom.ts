import { LightningElement } from 'lwc';

const STEP_MS = 300;

export default class DemoLoadingOverlayCustom extends LightningElement {
  importing = false;
  percent = 0;
  result = '';
  private timer: ReturnType<typeof setInterval> | undefined;

  async handleImport() {
    this.importing = true;
    this.percent = 0;
    this.result = '';
    this.timer = setInterval(() => {
      this.percent += 10;
      if (this.percent >= 100) {
        this.finish('Imported 240 contacts.');
      }
    }, STEP_MS);
    // Keys are blocked outside the overlay, so focus goes to its action.
    await Promise.resolve();
    (this.template.querySelector('fandry-loading-overlay fandry-button') as HTMLElement | null)?.focus();
  }

  handleCancel() {
    this.finish('Import cancelled.');
  }

  disconnectedCallback() {
    clearInterval(this.timer);
  }

  private finish(result: string) {
    clearInterval(this.timer);
    this.importing = false;
    this.result = result;
  }
}
