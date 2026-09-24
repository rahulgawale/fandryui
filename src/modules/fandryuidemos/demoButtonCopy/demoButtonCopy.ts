import { LightningElement } from 'lwc';

const LATENCY_MS = 1200;

export default class DemoButtonCopy extends LightningElement {
  savedCount = 0;

  get savedLabel(): string {
    if (this.savedCount === 0) return 'Not saved yet.';
    return this.savedCount === 1 ? 'Saved once.' : `Saved ${this.savedCount} times.`;
  }

  // A save that takes a while, like a real request.
  save = () =>
    new Promise<void>((resolve) => {
      setTimeout(() => {
        this.savedCount += 1;
        resolve();
      }, LATENCY_MS);
    });

  // The stock button fires on every click, so a double click saves twice.
  handlePlainSave() {
    this.save();
  }
}
