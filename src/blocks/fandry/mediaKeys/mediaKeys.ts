import Base from 'fandry/base';

/**
 * The media-gallery block's list of keyboard controls: the fallback of
 * fandry-media-viewer's (and fandry-media-gallery's) `keys` slot. Each text
 * is a slot with the English as its fallback, so a site translates it by
 * slotting this component with its slots filled:
 *
 *   <fandry-media-keys slot="keys">
 *     <span slot="title">Tastenkürzel</span>
 *     <span slot="close">Schließen</span>
 *     <span slot="key-escape">Esc</span>
 *   </fandry-media-keys>
 *
 * Slots: title, previous-next, first-last, zoom, reset-zoom, pan, page,
 * toggle, close, and the keys named with words: key-home, key-end,
 * key-page-up, key-page-down, key-escape.
 */
export default class FdMediaKeys extends Base {}
