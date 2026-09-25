import { LightningElement } from 'lwc';

const LATENCY_MS = 1200;

// A save that takes a while, like a real request.
const save = () => new Promise<void>((resolve) => setTimeout(resolve, LATENCY_MS));

export default class DemoButtonLoading extends LightningElement {
  saving = false;
  savedCount = 0;

  // The text says what's happening; the spinner beside it is decoration.
  get saveLabel(): string {
    return this.saving ? 'Saving…' : 'Save';
  }

  get savedLabel(): string {
    if (this.savedCount === 0) return 'Not saved yet.';
    return this.savedCount === 1 ? 'Saved once.' : `Saved ${this.savedCount} times.`;
  }

  /* The button is disabled while saving, so the second click of a double
     click never fires; the guard covers anything in between. */
  async handleSave() {
    if (this.saving) return;
    this.saving = true;
    try {
      await save();
      this.savedCount += 1;
    } finally {
      this.saving = false;
    }
  }
}
