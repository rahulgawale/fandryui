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
    return { src: item?.src ?? '', width: item?.width, height: item?.height };
  }

  /* fandry-button takes its native attributes through elementProps; tabIndex
     is its own default, which elementProps replaces. The main button's
     label is the picture's alt plus what pressing it does. */
  get mainProps(): Record<string, unknown> {
    const item = this.current;
    return { tabIndex: 0, ariaLabel: item ? `${item.alt} View full screen.` : '' };
  }

  // aria-disabled, so an arrow keeps focus at the end of the strip.
  get previousProps(): Record<string, unknown> {
    return { tabIndex: 0, ariaLabel: 'Previous picture', ariaDisabled: this.hasPrevious ? null : 'true' };
  }

  get nextProps(): Record<string, unknown> {
    return { tabIndex: 0, ariaLabel: 'Next picture', ariaDisabled: this.hasNext ? null : 'true' };
  }

  get thumbs() {
    return this.items.map((item, index) => {
      const current = index === this.currentIndex;
      return {
        key: item.id,
        index,
        src: item.thumbnail || item.src,
        className: current ? 'thumb thumb--current' : 'thumb',
        props: { tabIndex: 0, ariaLabel: `Picture ${index + 1} of ${this.count}`, ariaCurrent: current ? 'true' : null }
      };
    });
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
