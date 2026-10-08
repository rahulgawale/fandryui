import { api } from 'lwc';
import Base from 'fandry/base';
import { isImage } from 'fandry/mediaItem';
import type { FdMediaItem } from 'fandry/mediaItem';

/** Everything the grid says; see `messages`. */
export interface FdMediaGridMessages {
  /**
   * The name of a tile's button when its picture has no alt text (a
   * decorative one) and no caption: the button would otherwise have none.
   */
  open: (current: number, total: number) => string;
}

export const DEFAULT_MEDIA_GRID_MESSAGES: FdMediaGridMessages = {
  open: (current, total) => `Open picture ${current} of ${total}`
};

interface FdMediaTile {
  key: string;
  index: number;
  isImage: boolean;
  src: string;
  srcset: string | undefined;
  sizes: string | undefined;
  alt: string;
  caption: string;
  hasCaption: boolean;
  loading: 'lazy' | 'eager';
  frameClass: string;
  buttonProps: Record<string, unknown>;
}

/**
 * The media-gallery block's grid: tiles that fit the box they are in, each
 * cut to one shape, with a pulsing placeholder until its picture arrives.
 * It knows nothing of a viewer. On its own it shows the pictures; with
 * `interactive` each tile is a fandry-button and choosing one reports
 * `select`, which is how fandry-media-gallery opens its viewer.
 *
 * Its size and shape are tokens: --fd-media-columns, --fd-media-min-width,
 * --fd-media-aspect-ratio and --fd-media-fit.
 */
export default class FdMediaGrid extends Base {
  @api items: FdMediaItem[] = [];

  /** Shows `loadingCount` placeholders in place of the items, while they are fetched. */
  @api loading = false;
  @api loadingCount = 8;

  /** Each tile is a button that reports `select`. Without it, the tiles are pictures. */
  @api interactive = false;

  /** Replaces any of DEFAULT_MEDIA_GRID_MESSAGES, e.g. to translate them. */
  @api messages: Partial<FdMediaGridMessages> = {};

  // The ids whose picture has arrived (or failed): their placeholder stops.
  private loaded: Record<string, boolean> = {};

  get text(): FdMediaGridMessages {
    return { ...DEFAULT_MEDIA_GRID_MESSAGES, ...this.messages };
  }

  get tiles(): FdMediaTile[] {
    const total = this.items?.length ?? 0;
    return (this.items ?? []).map((item, index) => {
      // Without a thumbnail the grid takes the full file, so the browser
      // may as well pick the right size of it.
      const thumbnail = item.thumbnail;
      return {
        key: item.id,
        index,
        isImage: isImage(item),
        src: thumbnail || item.src,
        srcset: thumbnail ? undefined : item.srcset,
        sizes: thumbnail ? undefined : item.sizes,
        alt: item.alt ?? '',
        caption: item.caption ?? '',
        hasCaption: !!item.caption,
        loading: item.loading ?? 'lazy',
        frameClass: this.loaded[item.id] ? 'frame frame--loaded' : 'frame',
        // A picture's alt text names its button; without one, the caption or `messages.open` does.
        buttonProps: {
          tabIndex: 0,
          ariaLabel: item.alt ? null : item.caption || this.text.open(index + 1, total)
        }
      };
    });
  }

  get placeholders(): number[] {
    return Array.from({ length: Math.max(this.loadingCount, 0) }, (_, index) => index);
  }

  get ariaBusy(): string | undefined {
    return this.loading ? 'true' : undefined;
  }

  /** Moves focus to a tile's button, e.g. back to the picture a viewer was closed on. */
  @api
  focusItem(index: number) {
    const button = this.template.querySelector(`fandry-button[data-index="${Number(index)}"]`) as HTMLElement | null;
    button?.focus();
  }

  handleSelect(event: Event) {
    const index = Number((event.currentTarget as HTMLElement).dataset.index);
    const item = this.items[index];
    if (!item) return;
    this.dispatchEvent(new CustomEvent('select', { detail: { index, item }, bubbles: true }));
  }

  handleLoad(event: Event) {
    this.markLoaded((event.currentTarget as HTMLElement).dataset.id);
  }

  private markLoaded(id: string | undefined) {
    if (!id || this.loaded[id]) return;
    this.loaded = { ...this.loaded, [id]: true };
  }

  renderedCallback() {
    // A picture already in the cache can finish before its load listener
    // runs; it has no reason to keep pulsing.
    this.template.querySelectorAll('img[data-id]').forEach((img) => {
      const image = img as HTMLImageElement;
      if (image.complete && image.naturalWidth) this.markLoaded(image.dataset.id);
    });
  }
}
