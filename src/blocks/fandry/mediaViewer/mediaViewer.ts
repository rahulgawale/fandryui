import FdMediaViewerState from 'fandry/mediaViewerState';
import type { FdMediaSlide } from 'fandry/mediaViewerState';

interface FdMediaSlideView extends FdMediaSlide {
  className: string;
  mediaClass: string;
}

/**
 * The media-gallery block's viewer: FdMediaViewerState (the item shown, the
 * keyboard, swipe and zoom) plus this component's own template, full screen
 * in a fandry-dialog. It knows nothing of a grid, and works on its own:
 *
 *   <fandry-media-viewer items={photos} open={viewing} onchange={...} ontoggle={...}>
 *
 * Only the markup and its classes are here; see fandry/mediaViewerState for
 * what it does and for how to extend it with different markup.
 */
export default class FdMediaViewer extends FdMediaViewerState {
  /* aria-disabled, not disabled: Next pressed on the last-but-one item must
     keep focus when it stops being usable, or a keyboard user is dropped on
     the page. */
  get closeProps(): Record<string, unknown> {
    return { tabIndex: 0, ariaLabel: this.text.close };
  }

  get keysProps(): Record<string, unknown> {
    return { tabIndex: 0, ariaLabel: this.text.keys, ariaExpanded: String(this.keysOpen) };
  }

  get previousProps(): Record<string, unknown> {
    return { tabIndex: 0, ariaLabel: this.text.previous, ariaDisabled: this.hasPrevious ? null : 'true' };
  }

  get nextProps(): Record<string, unknown> {
    return { tabIndex: 0, ariaLabel: this.text.next, ariaDisabled: this.hasNext ? null : 'true' };
  }

  get trackClass(): string {
    // Two names for one animation: changing the name is what restarts it.
    if (!this.settling) return 'track';
    return `track track--settle-${this.settleRun % 2 ? 'a' : 'b'}`;
  }

  get slideViews(): FdMediaSlideView[] {
    const zoomed = this.zoomed;
    return this.slides.map((slide) => ({
      ...slide,
      className: `slide slide--${slide.position}`,
      mediaClass: slide.isCurrent && zoomed ? 'media media--zoomed' : 'media'
    }));
  }
}
