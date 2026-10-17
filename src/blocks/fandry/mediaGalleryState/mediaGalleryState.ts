import { api } from 'lwc';
import Base from 'fandry/base';
import type { FdMediaItem } from 'fandry/mediaItem';
import type { FdMediaGridMessages } from 'fandry/mediaGrid';
import type { FdMediaViewerMessages } from 'fandry/mediaViewerState';

/**
 * FdMediaGalleryState is the behavior behind the media-gallery block, with no
 * template of its own: which item is current, whether the viewer is open,
 * and the actions that move between them. fandry-media-gallery is this class
 * plus a grid and a viewer; a consumer who wants other markup (a product
 * page's main picture and thumbnail strip, a carousel) extends this class and
 * writes their own template, wiring its pieces to the same handlers:
 *
 *   <fandry-media-viewer items={items} index={currentIndex} open={viewerOpen}
 *     messages={messages} onchange={handleViewerChange} ontoggle={handleViewerToggle}>
 *
 * Mark the element that opens each item with `data-index`; that is where
 * focus goes when the viewer closes on a different item than it opened on.
 * A template whose openers are elsewhere (fandry-media-gallery's are inside
 * its grid) overrides `focusItem()`.
 *
 * `items` is controlled: this class never changes it. Which item is current
 * is the gallery's own state, like a native control's value: it moves as the
 * user does, and is reported through `change`.
 */
export default class FdMediaGalleryState extends Base {
  @api items: FdMediaItem[] = [];

  /** The current item's position in `items`. Set it to choose where the gallery starts. */
  @api index = 0;

  /**
   * Passed to the grid and the viewer: any of DEFAULT_MEDIA_VIEWER_MESSAGES
   * (fandry/mediaViewerState) and DEFAULT_MEDIA_GRID_MESSAGES
   * (fandry/mediaGrid). One object for both, so the two may never share a
   * key: a test checks it.
   */
  @api messages: Partial<FdMediaViewerMessages & FdMediaGridMessages> = {};

  viewerOpen = false;

  private openedAt = -1;
  private focusPending = false;

  // ---- rendering model

  get count(): number {
    return this.items?.length ?? 0;
  }

  get currentIndex(): number {
    return Math.min(Math.max(Math.trunc(Number(this.index)) || 0, 0), Math.max(this.count - 1, 0));
  }

  get current(): FdMediaItem | undefined {
    return this.items?.[this.currentIndex];
  }

  get hasPrevious(): boolean {
    return this.currentIndex > 0;
  }

  get hasNext(): boolean {
    return this.currentIndex < this.count - 1;
  }

  // ---- actions

  /** Opens the viewer, on `index` or on the current item. */
  @api
  show(index: number = this.currentIndex) {
    if (!this.count) return;
    this.select(index);
    if (this.viewerOpen) return;
    this.viewerOpen = true;
    this.openedAt = this.currentIndex;
    this.dispatchEvent(new CustomEvent('toggle', { detail: true, bubbles: true }));
  }

  @api
  close() {
    if (!this.viewerOpen) return;
    this.viewerOpen = false;
    this.focusPending = this.currentIndex !== this.openedAt;
    this.dispatchEvent(new CustomEvent('toggle', { detail: false, bubbles: true }));
  }

  @api
  next() {
    this.select(this.currentIndex + 1);
  }

  @api
  previous() {
    this.select(this.currentIndex - 1);
  }

  /** Makes `index` the current item without opening the viewer. */
  @api
  goTo(index: number) {
    this.select(index);
  }

  private select(index: number) {
    const target = Number(index);
    if (!Number.isInteger(target) || target < 0 || target >= this.count || target === this.currentIndex) return;
    this.index = target;
    this.dispatchEvent(new CustomEvent('change', { detail: { index: target, item: this.items[target] }, bubbles: true }));
  }

  // ---- handlers for the pieces a template composes

  /** fandry-media-grid's `select`, or any element with `data-index`. */
  handleSelect(event: CustomEvent<{ index: number }> | Event) {
    event.stopPropagation();
    const detail = (event as CustomEvent<{ index: number }>).detail;
    const index = detail && typeof detail.index === 'number'
      ? detail.index
      : Number((event.currentTarget as HTMLElement).dataset.index);
    this.show(index);
  }

  handleViewerChange(event: CustomEvent<{ index: number }>) {
    event.stopPropagation();
    this.select(event.detail.index);
  }

  handleViewerToggle(event: CustomEvent<boolean>) {
    event.stopPropagation();
    if (event.detail) this.show();
    else this.close();
  }

  // ---- focus

  /* The viewer hands focus back to what opened it. When the user moved to
     another item meanwhile, the item they were last looking at gets it. */
  protected focusItem(index: number) {
    (this.template.querySelector(`[data-index="${index}"]`) as HTMLElement | null)?.focus();
  }

  renderedCallback() {
    if (!this.focusPending) return;
    this.focusPending = false;
    this.focusItem(this.currentIndex);
  }
}
