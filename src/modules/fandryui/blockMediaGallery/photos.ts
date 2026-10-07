// The media-gallery demo's pictures: photos from Unsplash (free to use under
// the Unsplash License), saved in src/assets/media at 1280 x 960 with a
// 400px-wide thumbnail beside each. Nothing here is part of the block.

import type { FdMediaItem } from 'fandry/mediaItem';
import { delay } from 'fandryui/mockApi';

function photo(id: number, alt: string, caption: string, credit: string): FdMediaItem {
  return {
    id: `photo-${id}`,
    type: 'image',
    src: `/assets/media/photo-${id}.jpg`,
    thumbnail: `/assets/media/photo-${id}-400.jpg`,
    width: 1280,
    height: 960,
    alt,
    caption: `${caption} · ${credit}`
  };
}

export const LANDSCAPES: FdMediaItem[] = [
  photo(10, 'A pine forest above a calm bay, with mountains far off.', 'Above the bay', 'Paul Jarvis'),
  photo(15, 'A waterfall dropping into a rocky gorge.', 'The falls', 'Paul Jarvis'),
  photo(16, 'A rocky shore on a blue sound under a clear sky.', 'Low tide', 'Paul Jarvis'),
  photo(17, 'A gravel path between grass and tall pines.', 'The long path', 'Paul Jarvis'),
  photo(28, 'A stream running through green forest under a blue sky.', 'Green valley', 'Jerry Adney'),
  photo(29, 'A snow-covered Himalayan valley below Everest.', 'Khumbu, after snow', 'Go Wild'),
  photo(54, 'A rocky hilltop under white clouds.', 'Summit', 'Nicholas Swanson'),
  photo(57, 'An empty street of brick buildings with fire escapes.', 'Early street', 'Nicholas Swanson'),
  photo(58, 'A lighthouse on a rocky headland, in black and white.', 'The lighthouse', 'Tony Naccarato'),
  photo(106, 'Pink blossoms against a pale sky.', 'Blossom', 'Arvee Marie'),
  photo(152, 'Purple petunias in bloom.', 'Petunias', 'Steven Spassov'),
  photo(200, 'A highland cow on a sandy hillside.', 'Highlander', 'Elias Carlsson')
];

/* The first row is on screen when the page opens, so it doesn't wait. */
LANDSCAPES.slice(0, 4).forEach((item) => (item.loading = 'eager'));

export const PRODUCT_PHOTOS: FdMediaItem[] = [
  photo(425, 'Roasted coffee beans, close up.', 'Whole beans, medium roast', 'Daniel Ruswick'),
  photo(431, 'A latte with leaf art on a wooden counter.', 'As a latte', 'Carli Jean'),
  photo(63, 'A cup of coffee with milk on a red table, from above.', 'As a flat white', 'Justin Leibow'),
  photo(30, 'A red printed mug on a sunny table.', 'The house mug', 'Shyamanta Baruah'),
  photo(42, 'A cup on a long wooden table in a bright café.', 'At the roastery café', 'Luke Chesser')
];

/** A pretend request, so the page shows the grid's placeholders. */
export function fetchPhotos(latencyMs = 1200): Promise<FdMediaItem[]> {
  return delay(latencyMs).then(() => LANDSCAPES);
}
