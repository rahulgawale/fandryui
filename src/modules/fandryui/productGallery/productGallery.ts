import FdMediaGalleryState from 'fandry/mediaGalleryState';

/* What this layout says itself, kept in one object the way the library's
   components keep theirs (DEFAULT_MEDIA_VIEWER_MESSAGES, ...), so a site
   translates it in one place. The viewer's own words still come from
   `messages`, which the state class passes on. */
export const PRODUCT_GALLERY_TEXT = {
  viewFullScreen: (alt: string) => `${alt} View full screen.`,
  previous: 'Previous picture',
  next: 'Next picture',
  picture: (current: number, total: number) => `Picture ${current} of ${total}`
};

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
    return { tabIndex: 0, ariaLabel: item ? PRODUCT_GALLERY_TEXT.viewFullScreen(item.alt) : '' };
  }

  // aria-disabled, so an arrow keeps focus at the end of the strip.
  get previousProps(): Record<string, unknown> {
    return { tabIndex: 0, ariaLabel: PRODUCT_GALLERY_TEXT.previous, ariaDisabled: this.hasPrevious ? null : 'true' };
  }

  get nextProps(): Record<string, unknown> {
    return { tabIndex: 0, ariaLabel: PRODUCT_GALLERY_TEXT.next, ariaDisabled: this.hasNext ? null : 'true' };
  }

  get thumbs() {
    return this.items.map((item, index) => {
      const current = index === this.currentIndex;
      return {
        key: item.id,
        index,
        src: item.thumbnail || item.src,
        className: current ? 'thumb thumb--current' : 'thumb',
        props: { tabIndex: 0, ariaLabel: PRODUCT_GALLERY_TEXT.picture(index + 1, this.count), ariaCurrent: current ? 'true' : null }
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
