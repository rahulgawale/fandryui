import { LightningElement } from 'lwc';
import type { FdMediaItem } from 'fandry/mediaItem';
import { fetchPhotos, PRODUCT_PHOTOS } from './photos';

const USAGE = `<fandry-media-gallery
  items={photos}
  loading={loading}
  onchange={handleChange}
></fandry-media-gallery>`;

const ITEMS_CODE = `photos = [
  {
    id: 'lake',              // unique and stable
    type: 'image',           // the default; video and embeds come later
    src: '/media/lake.jpg',  // the full file, for the viewer
    thumbnail: '/media/lake-400.jpg',
    alt: 'A pine forest above a calm bay.',
    caption: 'Above the bay',
    width: 1280,
    height: 960,
    loading: 'eager'         // only for pictures on screen at page load
  },
  ...
];`;

const CUSTOM_CODE = `// productGallery.js -- your markup, the block's behavior
import FdMediaGalleryState from 'fandry/mediaGalleryState';

export default class ProductGallery extends FdMediaGalleryState {
  handleThumb(event) {
    this.goTo(Number(event.currentTarget.dataset.thumb));
  }
}

<!-- productGallery.html -->
<fandry-button variant="ghost" data-index={currentIndex} onclick={handleSelect}>
  <img src={current.src} alt={current.alt} />
</fandry-button>
<ul>
  <template for:each={thumbs} for:item="thumb">
    <li key={thumb.key}>
      <fandry-button variant="ghost" data-thumb={thumb.index} onclick={handleThumb}>...</fandry-button>
    </li>
  </template>
</ul>
<fandry-media-viewer
  items={items}
  index={currentIndex}
  open={viewerOpen}
  messages={messages}
  onchange={handleViewerChange}
  ontoggle={handleViewerToggle}
></fandry-media-viewer>`;

const ITEM_PROPS = [
  { name: 'id', type: 'string', description: 'Unique and stable: the key each piece renders by.' },
  { name: 'type', type: "'image'", description: 'How the item is drawn. Defaults to `image`, the only type so far; video and embeds will be new values, so items written today keep working.' },
  { name: 'src', type: 'string', description: 'The full-size file, shown in the viewer.' },
  { name: 'alt', type: 'string', description: 'Describes the picture for people who can\'t see it. `\'\'` for a decorative one.' },
  { name: 'thumbnail', type: 'string', description: 'A smaller file for the grid. Without one the grid uses `src` (with `srcset` / `sizes`).' },
  { name: 'srcset · sizes', type: 'string', description: 'As on a native <img>, for the viewer.' },
  { name: 'width · height', type: 'number', description: 'The intrinsic size, so the browser reserves the space before the file arrives.' },
  { name: 'caption', type: 'string', description: 'Shown under the tile and under the picture in the viewer. Leave it out for none.' },
  { name: 'loading', type: "'lazy' | 'eager'", description: 'Defaults to `lazy`. Set `eager` on the pictures that are on screen when the page opens.' }
];

const PROPS = [
  { name: 'items', type: 'item[]', default: '[]', description: 'What the gallery shows (see the item table below). Controlled: the block never changes it.' },
  { name: 'index', type: 'number', default: '0', description: 'The current item. Set it to choose where the gallery starts; the block keeps it current as the user moves and reports each move through `change`.' },
  { name: 'loading', type: 'boolean', default: 'false', description: 'While the items are being fetched: the grid shows placeholders and says it is busy.' },
  { name: 'loading-count', type: 'number', default: '8', description: 'How many placeholders.' },
  { name: 'messages', type: 'object', default: '{}', description: 'What the viewer says (its name, Close, Previous, Next, "3 of 12"), e.g. to translate it: any key of DEFAULT_MEDIA_VIEWER_MESSAGES (fandry/mediaViewer).' },
  { name: 'show(index?) · close()', type: 'methods', default: '—', description: 'Open the viewer (on `index`, or on the current item) and close it.' },
  { name: 'next() · previous() · goTo(index)', type: 'methods', default: '—', description: 'Move the current item, with or without the viewer open.' }
];

const EVENTS = [
  { name: 'change', detail: '{ index, item }', description: 'The current item changed: a tile was chosen, or the user moved in the viewer.' },
  { name: 'toggle', detail: 'boolean', description: 'The viewer opened (`true`) or closed (`false`).' }
];

const TOKENS = [
  { name: '--fd-media-columns', default: '4', description: 'The most tiles in a row.' },
  { name: '--fd-media-min-width', default: '8rem', description: 'The narrowest a tile gets. A narrower box gets fewer columns, so the grid fits wherever it is put, with no breakpoints.' },
  { name: '--fd-media-aspect-ratio', default: '1 / 1', description: 'The shape every tile is cut to.' },
  { name: '--fd-media-fit', default: 'cover', description: '`cover` fills the tile and crops; `contain` shows the whole picture.' },
  { name: '--fd-space-3', default: '0.75rem', description: 'The gap between tiles (the shared spacing token, set on the gallery to change only its own). Or style `::part(base) { gap }`.' },
  { name: '--fd-bg · --fd-text', default: 'the page\'s', description: 'The viewer\'s surface and its text. Set them on the gallery for a dark viewer.' }
];

const PARTS = [
  { name: 'base', description: 'The grid (a <ul>).' },
  { name: 'item · button · frame · image · caption', description: 'One tile, its fandry-button\'s <button>, the box the picture is cut to, the picture, its caption.' },
  { name: 'placeholder', description: 'A tile\'s placeholder while loading.' },
  { name: 'viewer · backdrop · panel', description: 'The viewer, and the fandry-dialog it is drawn in.' },
  { name: 'toolbar · indicator · close-button', description: 'The bar at the top, the "3 of 12", the close button.' },
  { name: 'stage · viewer-image · viewer-caption', description: 'Where the pictures slide, the current picture, its caption.' },
  { name: 'previous · next', description: 'The arrows (with `disabled` at the first and last item).' }
];

const COLUMN_OPTIONS = ['2', '3', '4', '5', '6'].map((value) => ({ label: value, value }));
const RATIO_OPTIONS = [
  { label: 'Square (1 / 1)', value: '1 / 1' },
  { label: 'Landscape (4 / 3)', value: '4 / 3' },
  { label: 'Portrait (3 / 4)', value: '3 / 4' },
  { label: 'Wide (16 / 9)', value: '16 / 9' }
];
const FIT_OPTIONS = [
  { label: 'cover', value: 'cover' },
  { label: 'contain', value: 'contain' }
];
const GAP_OPTIONS = [
  { label: 'Tight (0.25rem)', value: '0.25rem' },
  { label: 'Default (0.75rem)', value: '0.75rem' },
  { label: 'Roomy (1.5rem)', value: '1.5rem' }
];

const BUILT_FROM = ['dialog', 'button', 'skeleton'];

export default class BlockMediaGallery extends LightningElement {
  usageCode = USAGE;
  itemsCode = ITEMS_CODE;
  customCode = CUSTOM_CODE;
  itemProps = ITEM_PROPS;
  props = PROPS;
  events = EVENTS;
  tokens = TOKENS;
  parts = PARTS;
  builtFrom = BUILT_FROM;
  columnOptions = COLUMN_OPTIONS;
  ratioOptions = RATIO_OPTIONS;
  fitOptions = FIT_OPTIONS;
  gapOptions = GAP_OPTIONS;

  installNpm = `npm install fandryui

<!-- nothing to copy: your bundler ships only what you use -->
<fandry-media-gallery></fandry-media-gallery>`;
  installSfdx = `npx fandry add media-gallery
# adds the block and everything it is built from
# to your package directory, as source you own`;

  photos: FdMediaItem[] = [];
  loading = true;
  productPhotos = PRODUCT_PHOTOS;

  columns = '4';
  ratio = '1 / 1';
  fit = 'cover';
  gap = '0.75rem';
  current = 'None yet';

  connectedCallback() {
    this.load();
  }

  get galleryStyle(): string {
    return `--fd-media-columns: ${this.columns}; --fd-media-aspect-ratio: ${this.ratio}; --fd-media-fit: ${this.fit}; --fd-space-3: ${this.gap};`;
  }

  get themeCode(): string {
    return `fandry-media-gallery {
  --fd-media-columns: ${this.columns};
  --fd-media-aspect-ratio: ${this.ratio};
  --fd-media-fit: ${this.fit};
  --fd-space-3: ${this.gap}; /* the gap */
}`;
  }

  async load() {
    this.loading = true;
    this.photos = [];
    this.photos = await fetchPhotos();
    this.loading = false;
  }

  handleReload() {
    this.load();
  }

  handleColumns(event: CustomEvent<string>) {
    this.columns = event.detail;
  }

  handleRatio(event: CustomEvent<string>) {
    this.ratio = event.detail;
  }

  handleFit(event: CustomEvent<string>) {
    this.fit = event.detail;
  }

  handleGap(event: CustomEvent<string>) {
    this.gap = event.detail;
  }

  handleChange(event: CustomEvent<{ index: number; item: FdMediaItem }>) {
    this.current = `${event.detail.index + 1}: ${event.detail.item.caption}`;
  }
}
