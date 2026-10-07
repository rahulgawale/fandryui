import FdMediaGalleryState from 'fandry/mediaGalleryState';

/**
 * The media-gallery block's "make it yours" example: a product page's main
 * picture with a strip of thumbnails, the layout a D2C store wants instead of
 * a grid. It writes only markup. Which picture is current, the viewer's open
 * state, focus coming back after the viewer closes and the change / toggle
 * events all come from FdMediaGalleryState, and the full-screen viewer (with
 * swipe and pinch to zoom) is the block's own fandry-media-viewer.
 */
export default class ProductGallery extends FdMediaGalleryState {
  get main() {
    const item = this.current;
    return {
      src: item?.src ?? '',
      alt: item?.alt ?? '',
      width: item?.width,
      height: item?.height,
      // The picture's own alt names the button; this says what it does.
      label: item ? `${item.alt} View full screen.` : ''
    };
  }

  get thumbs() {
    return this.items.map((item, index) => {
      const current = index === this.currentIndex;
      return {
        key: item.id,
        index,
        src: item.thumbnail || item.src,
        label: `Picture ${index + 1} of ${this.count}`,
        ariaCurrent: current ? 'true' : undefined,
        className: current ? 'thumb thumb--current' : 'thumb'
      };
    });
  }

  // aria-disabled, so an arrow keeps focus at the end of the strip.
  get previousDisabled(): string | undefined {
    return this.hasPrevious ? undefined : 'true';
  }

  get nextDisabled(): string | undefined {
    return this.hasNext ? undefined : 'true';
  }

  handleThumb(event: Event) {
    this.goTo(Number((event.currentTarget as HTMLElement).dataset.thumb));
  }

  handlePrevious() {
    this.previous();
  }

  handleNext() {
    this.next();
  }
}
