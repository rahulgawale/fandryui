// The media-gallery demo's pictures: photos from Unsplash (free to use under
// the Unsplash License), saved in src/assets/media 1280px wide with a
// 400px thumbnail beside each. Nothing here is part of the block.

import type { FdMediaItem } from 'fandry/mediaItem';
import { delay } from 'fandryui/mockApi';

function photo(name: string | number, alt: string, caption: string, credit: string, width = 1280, height = 960): FdMediaItem {
  return {
    id: `photo-${name}`,
    src: `/assets/media/photo-${name}.jpg`,
    thumbnail: `/assets/media/photo-${name}-400.jpg`,
    width,
    height,
    alt,
    caption: `${caption} · ${credit}`
  };
}

export const LANDSCAPES: FdMediaItem[] = [
  photo('taj-mahal', 'The Taj Mahal at dawn, reflected in the long pool between rows of cypress trees.', 'Taj Mahal, Agra', 'Julian Yu', 1280, 853),
  photo(15, 'A waterfall dropping into a rocky gorge.', 'The falls', 'Paul Jarvis'),
  photo('backwaters', 'A houseboat on a wide green canal lined with coconut palms and rice fields.', 'Alappuzha backwaters, Kerala', 'Abhishek Prasad', 1280, 854),
  photo(10, 'A pine forest above a calm bay, with mountains far off.', 'Above the bay', 'Paul Jarvis'),
  photo('sea-link', 'The Vandre–Worli Sea Link\'s cable-stayed towers at golden hour, seen from a rocky shore.', 'Vandre–Worli Sea Link, Mumbai', 'Sid Saxena', 1280, 959),
  photo(29, 'A snow-covered Himalayan valley below Everest.', 'Khumbu, after snow', 'Go Wild'),
  photo(28, 'A stream running through green forest under a blue sky.', 'Green valley', 'Jerry Adney'),
  photo('hills-fog', 'An orange sunrise over dark hills, with fog filling the valleys between them.', 'Sunrise over the fog', 'Girish Dalvi', 1280, 853),
  photo(54, 'A rocky hilltop under white clouds.', 'Summit', 'Nicholas Swanson'),
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
