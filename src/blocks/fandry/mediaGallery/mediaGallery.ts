import FdMediaGalleryState from 'fandry/mediaGalleryState';

/**
 * The media-gallery block: FdMediaGalleryState (the current item, the
 * viewer's open state, and the actions between them) plus this component's
 * own template, a fandry-media-grid that opens a fandry-media-viewer. No
 * logic of its own -- see fandry/mediaGalleryState for what it does and for
 * how to extend it with different markup.
 */
export default class FdMediaGallery extends FdMediaGalleryState {}
