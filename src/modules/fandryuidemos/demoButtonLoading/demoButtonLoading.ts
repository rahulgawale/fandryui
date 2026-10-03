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

  /* aria-disabled, not disabled: a disabled button drops focus to the page
     the moment it's clicked, so a keyboard user loses their place and the
     new label is never read. aria-disabled keeps it focused and still says
     it can't be used; handleSave ignores the clicks. tabIndex is
     fandry-button's own default, which elementProps replaces. */
  get saveButtonProps(): Record<string, unknown> {
    return { tabIndex: 0, ariaDisabled: this.saving ? 'true' : null };
  }

  get savedLabel(): string {
    if (this.savedCount === 0) return 'Not saved yet.';
    return this.savedCount === 1 ? 'Saved once.' : `Saved ${this.savedCount} times.`;
  }

  // While saving, the button stays clickable; this guard is what ignores it.
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
