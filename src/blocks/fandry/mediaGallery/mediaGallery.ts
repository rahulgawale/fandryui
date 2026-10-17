import { api } from 'lwc';
import FdMediaGalleryState from 'fandry/mediaGalleryState';

/**
 * The media-gallery block: FdMediaGalleryState (the current item, the
 * viewer's open state, and the actions between them) plus this component's
 * own template, a fandry-media-grid that opens a fandry-media-viewer. See
 * fandry/mediaGalleryState for what it does and for how to extend it with
 * different markup.
 */
export default class FdMediaGallery extends FdMediaGalleryState {
  /** True while the items are being fetched; the grid shows placeholders. A layout of its own shows loading its own way. */
  @api loading = false;
  @api loadingCount = 8;

  // The tiles are inside the grid's shadow root, out of reach of `data-index`.
  protected focusItem(index: number) {
    (this.template.querySelector('fandry-media-grid') as (HTMLElement & { focusItem(i: number): void }) | null)?.focusItem(index);
  }
}
