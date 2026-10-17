import { createElement } from 'lwc';
import FdMediaGallery from '../mediaGallery';
import { DEFAULT_MEDIA_GRID_MESSAGES } from 'fandry/mediaGrid';
import { DEFAULT_MEDIA_VIEWER_MESSAGES } from 'fandry/mediaViewerState';

const ITEMS = [
  { id: 'a', src: '/a.jpg', thumbnail: '/a-sm.jpg', alt: 'A lake', caption: 'The lake' },
  { id: 'b', src: '/b.jpg', alt: 'A road', srcset: '/b-400.jpg 400w, /b.jpg 1280w', sizes: '50vw' },
  { id: 'c', src: '/c.jpg', alt: 'A peak', loading: 'eager' as const }
];

const settle = async () => {
  for (let i = 0; i < 4; i++) await Promise.resolve();
};

type Host = HTMLElement & Record<string, any>;

function mount<T>(tag: string, ctor: T, props: Record<string, unknown> = {}): Host {
  const element = createElement(tag, { is: ctor as any });
  Object.assign(element, { items: ITEMS, ...props });
  document.body.appendChild(element);
  return element as Host;
}

const root = (el: Element) => el.shadowRoot!;
const gridOf = (gallery: Host) => root(gallery).querySelector('fandry-media-grid') as Host;
const viewerOf = (gallery: Host) => root(gallery).querySelector('fandry-media-viewer') as Host;
const dialogOf = (viewer: Host) => root(viewer).querySelector('fandry-dialog') as Host;
// Each tile is a fandry-button; clicking one means clicking its native <button>.
const tileHosts = (grid: Host) => Array.from(root(grid).querySelectorAll('fandry-button.tile-button')) as Host[];
const tiles = (grid: Host) => tileHosts(grid).map((host) => root(host).querySelector('button') as HTMLButtonElement);
const currentImage = (viewer: Host) => root(viewer).querySelector('.slide--current img') as HTMLImageElement | null;
const navButton = (viewer: Host, which: 'previous' | 'next' | 'close' | 'keys') =>
  root(viewer).querySelector(which === 'close' ? '.close' : which === 'keys' ? '.keys-button' : `.nav--${which}`) as Host;
const nativeButton = (button: Host) => root(button).querySelector('button') as HTMLButtonElement;
const key = (viewer: Host, name: string) =>
  dialogOf(viewer).dispatchEvent(new KeyboardEvent('keydown', { key: name, bubbles: true, composed: true }));

afterEach(() => {
  while (document.body.firstChild) document.body.removeChild(document.body.firstChild);
  document.body.style.overflow = '';
});

describe('fandry-media-gallery', () => {
  it('opens the viewer on the tile chosen, and reports change and toggle', async () => {
    const gallery = mount('fandry-media-gallery', FdMediaGallery);
    const onChange = jest.fn();
    const onToggle = jest.fn();
    gallery.addEventListener('change', onChange);
    gallery.addEventListener('toggle', onToggle);
    await settle();
    tiles(gridOf(gallery))[2].click();
    await settle();
    expect(viewerOf(gallery).open).toBe(true);
    expect(currentImage(viewerOf(gallery))!.getAttribute('src')).toBe('/c.jpg');
    expect(gallery.index).toBe(2);
    expect(onChange.mock.calls[0][0].detail).toEqual({ index: 2, item: ITEMS[2] });
    expect(onToggle.mock.calls[0][0].detail).toBe(true);
  });

  it('follows the viewer as it moves, and closes with it', async () => {
    const gallery = mount('fandry-media-gallery', FdMediaGallery);
    const onToggle = jest.fn();
    gallery.addEventListener('toggle', onToggle);
    await settle();
    tiles(gridOf(gallery))[0].click();
    await settle();
    key(viewerOf(gallery), 'ArrowRight');
    await settle();
    expect(gallery.index).toBe(1);
    nativeButton(navButton(viewerOf(gallery), 'close')).click();
    await settle();
    expect(viewerOf(gallery).open).toBe(false);
    expect(onToggle.mock.calls.map(([event]) => event.detail)).toEqual([true, false]);
  });

  it('hands focus to the tile of the item the viewer closed on', async () => {
    const gallery = mount('fandry-media-gallery', FdMediaGallery);
    await settle();
    tiles(gridOf(gallery))[0].click();
    await settle();
    key(viewerOf(gallery), 'End');
    await settle();
    nativeButton(navButton(viewerOf(gallery), 'close')).click();
    await settle();
    expect(root(gridOf(gallery)).activeElement).toBe(tileHosts(gridOf(gallery))[2]);
  });

  it('can be driven from outside: show(), next(), goTo(), close()', async () => {
    const gallery = mount('fandry-media-gallery', FdMediaGallery);
    await settle();
    gallery.goTo(1);
    expect(gallery.index).toBe(1);
    gallery.show();
    await settle();
    expect(viewerOf(gallery).open).toBe(true);
    expect(currentImage(viewerOf(gallery))!.getAttribute('src')).toBe('/b.jpg');
    gallery.next();
    await settle();
    expect(currentImage(viewerOf(gallery))!.getAttribute('src')).toBe('/c.jpg');
    gallery.next();
    expect(gallery.index).toBe(2);
    gallery.close();
    await settle();
    expect(viewerOf(gallery).open).toBe(false);
  });

  it('passes loading and messages through', async () => {
    const gallery = mount('fandry-media-gallery', FdMediaGallery, { loading: true, loadingCount: 2, messages: { label: 'Photos' } });
    await settle();
    expect(root(gridOf(gallery)).querySelectorAll('fandry-skeleton')).toHaveLength(2);
    gallery.loading = false;
    gallery.show(0);
    await settle();
    expect(root(dialogOf(viewerOf(gallery))).querySelector('dialog')!.getAttribute('aria-label')).toBe('Photos');
  });

  // One `messages` object feeds both pieces, so a key in both would set two texts at once.
  it('takes messages for the grid and the viewer that never share a key', () => {
    const viewerKeys = Object.keys(DEFAULT_MEDIA_VIEWER_MESSAGES);
    expect(Object.keys(DEFAULT_MEDIA_GRID_MESSAGES).filter((key) => viewerKeys.includes(key))).toEqual([]);
  });

  it('does not open on show() when there is nothing to show', async () => {
    const gallery = mount('fandry-media-gallery', FdMediaGallery, { items: [] });
    const onToggle = jest.fn();
    gallery.addEventListener('toggle', onToggle);
    await settle();
    gallery.show();
    await settle();
    expect(viewerOf(gallery).open).toBe(false);
    expect(onToggle).not.toHaveBeenCalled();
  });


  it('never changes items', async () => {
    const items = ITEMS.map((item) => ({ ...item }));
    const gallery = mount('fandry-media-gallery', FdMediaGallery, { items });
    await settle();
    gallery.show(1);
    gallery.next();
    gallery.close();
    await settle();
    expect(items).toEqual(ITEMS);
  });
});
