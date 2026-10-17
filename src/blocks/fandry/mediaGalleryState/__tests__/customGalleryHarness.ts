import FdMediaGalleryState from 'fandry/mediaGalleryState';

/**
 * A layout of its own on FdMediaGalleryState, the way a site's product
 * gallery is: one fandry-button for the current item, marked with
 * `data-index`, and the block's viewer. Compiled by LWC so its template is
 * real, which a test can't fake with appendChild.
 */
export default class CustomGalleryHarness extends FdMediaGalleryState {}
