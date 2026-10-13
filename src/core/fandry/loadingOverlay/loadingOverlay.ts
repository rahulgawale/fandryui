import { api } from 'lwc';
import Base from 'fandry/base';
import { exitFinished } from 'fandry/motion';
import { partList } from 'fandry/parts';

/*
  "This page, or this panel, is busy": a backdrop that blocks the pointer and
  a card with a spinner and a label. Not a dialog: it takes no focus, has
  nothing to close and asks nothing.
*/
export default class LoadingOverlay extends Base {
  /** Covers the nearest positioned ancestor instead of the viewport. */
  @api contained = false;

  private _open = false;

  // Whether the card is in the DOM: true while open, and through the exit
  // animation after `open` goes false (see fandry/motion).
  isMounted = false;

  @api
  get open(): boolean {
    return this._open;
  }

  set open(value: boolean) {
    this._open = value;

    if (value) {
      this.isMounted = true;
    } else if (this.isMounted && this.isWaitingToAppear()) {
      // Closed within the delay: nothing was shown, so nothing fades out.
      this.isMounted = false;
    }
  }

  get overlayClasses(): string {
    return [
      'overlay',
      this.contained && 'overlay--contained',
      this.open && 'overlay--open',
      !this.open && this.isMounted && 'overlay--closing'
    ]
      .filter(Boolean)
      .join(' ');
  }

  // Only while it shows, so a site's ::part(backdrop) styles (a blur, a
  // border) don't draw on the closed region.
  get backdropPart(): string | null {
    return this.isMounted ? partList('backdrop', {}) : null;
  }

  renderedCallback() {
    if (!this.open && this.isMounted) {
      exitFinished(this.template.querySelector('.overlay')).then(() => {
        // Reopened while it was exiting -- the overlay is live again.
        if (!this.open) {
          this.isMounted = false;
        }
      });
    }
  }

  // Whether the entrance is still in its delay (--fd-loading-overlay-delay),
  // or never started.
  private isWaitingToAppear(): boolean {
    const overlay = this.template.querySelector('.overlay');
    if (!overlay || typeof overlay.getAnimations !== 'function') {
      return false;
    }
    return overlay
      .getAnimations()
      .every((animation) => Number(animation.currentTime ?? 0) < Number(animation.effect?.getComputedTiming().delay ?? 0));
  }
}
