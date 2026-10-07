/**
 * The data the media-gallery block shows: one entry per photo (and, later,
 * per video or embed). It is the only thing fandry-media-grid and
 * fandry-media-viewer share, so either can change without the other.
 *
 * `type` says how an item is drawn. Only `image` is built in today; a new
 * type is a new branch in the grid's and the viewer's templates (see
 * `isImage` below), so items written now keep working when one is added.
 */
export type FdMediaType = 'image';

export interface FdMediaItem {
  /** Stable and unique within the list: the key the templates render by. */
  id: string;
  /** Defaults to `image`. */
  type?: FdMediaType;
  /** The full-size file, shown in the viewer. */
  src: string;
  /** Describes the picture for people who can't see it. `''` for a decorative one. */
  alt: string;
  /** A smaller file for the grid. Without one the grid uses `src`. */
  thumbnail?: string;
  /** For the viewer's image, as on a native <img>. */
  srcset?: string;
  sizes?: string;
  /** The intrinsic size, so the browser reserves the space before the file arrives. */
  width?: number;
  height?: number;
  caption?: string;
  /** `eager` for a picture that is on screen when the page opens; the rest wait until they are scrolled to. */
  loading?: 'lazy' | 'eager';
}

export function mediaType(item: FdMediaItem): FdMediaType {
  return item.type ?? 'image';
}

export function isImage(item: FdMediaItem): boolean {
  return mediaType(item) === 'image';
}
