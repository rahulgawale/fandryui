import { createElement } from 'lwc';
import FdMediaGallery from '../mediaGallery';
import FdMediaGrid from 'fandry/mediaGrid';
import FdMediaViewer from 'fandry/mediaViewer';

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
const tiles = (grid: Host) => Array.from(root(grid).querySelectorAll('button.frame')) as HTMLButtonElement[];
const currentImage = (viewer: Host) => root(viewer).querySelector('.slide--current img') as HTMLImageElement | null;
const navButton = (viewer: Host, which: 'previous' | 'next' | 'close') =>
  root(viewer).querySelector(which === 'close' ? '.close' : `.nav--${which}`) as Host;
const nativeButton = (button: Host) => root(button).querySelector('button') as HTMLButtonElement;
const key = (viewer: Host, name: string) =>
  dialogOf(viewer).dispatchEvent(new KeyboardEvent('keydown', { key: name, bubbles: true, composed: true }));

// jsdom has no PointerEvent: a MouseEvent with the pointer fields added.
function pointer(target: Element, type: string, props: { clientX: number; time?: number }) {
  const event = new MouseEvent(type, { bubbles: true, clientX: props.clientX, clientY: 0 });
  Object.defineProperty(event, 'pointerId', { value: 1 });
  Object.defineProperty(event, 'pointerType', { value: 'touch' });
  Object.defineProperty(event, 'timeStamp', { value: Number(props.time ?? 0) });
  target.dispatchEvent(event);
}

afterEach(() => {
  while (document.body.firstChild) document.body.removeChild(document.body.firstChild);
  document.body.style.overflow = '';
});

describe('fandry-media-grid', () => {
  it('shows each item as a picture, with its caption, and no buttons on its own', async () => {
    const grid = mount('fandry-media-grid', FdMediaGrid);
    await settle();
    const images = Array.from(root(grid).querySelectorAll('img')) as HTMLImageElement[];
    expect(images.map((img) => img.getAttribute('alt'))).toEqual(['A lake', 'A road', 'A peak']);
    expect(tiles(grid)).toHaveLength(0);
    expect(root(grid).querySelectorAll('figcaption')).toHaveLength(1);
    expect(root(grid).querySelector('figcaption')!.textContent).toBe('The lake');
  });

  it('uses the thumbnail when there is one, and the full file with its srcset otherwise', async () => {
    const grid = mount('fandry-media-grid', FdMediaGrid);
    await settle();
    const [a, b] = Array.from(root(grid).querySelectorAll('img')) as HTMLImageElement[];
    expect(a.getAttribute('src')).toBe('/a-sm.jpg');
    expect(a.hasAttribute('srcset')).toBe(false);
    expect(b.getAttribute('src')).toBe('/b.jpg');
    expect(b.getAttribute('srcset')).toBe('/b-400.jpg 400w, /b.jpg 1280w');
    expect(b.getAttribute('sizes')).toBe('50vw');
  });

  it('loads lazily unless an item asks to be eager', async () => {
    const grid = mount('fandry-media-grid', FdMediaGrid);
    await settle();
    const loading = Array.from(root(grid).querySelectorAll('img')).map((img) => img.getAttribute('loading'));
    expect(loading).toEqual(['lazy', 'lazy', 'eager']);
  });

  it('pulses a tile until its picture has arrived, or failed', async () => {
    const grid = mount('fandry-media-grid', FdMediaGrid);
    await settle();
    const frames = () => Array.from(root(grid).querySelectorAll('.frame'));
    expect(frames().every((frame) => !frame.classList.contains('frame--loaded'))).toBe(true);
    const [a, b] = Array.from(root(grid).querySelectorAll('img'));
    a.dispatchEvent(new Event('load'));
    b.dispatchEvent(new Event('error'));
    await settle();
    expect(frames().map((frame) => frame.classList.contains('frame--loaded'))).toEqual([true, true, false]);
  });

  it('shows placeholders while loading, and says it is busy', async () => {
    const grid = mount('fandry-media-grid', FdMediaGrid, { loading: true, loadingCount: 5 });
    await settle();
    expect(root(grid).querySelectorAll('fandry-skeleton')).toHaveLength(5);
    expect(root(grid).querySelectorAll('img')).toHaveLength(0);
    expect(root(grid).querySelector('ul')!.getAttribute('aria-busy')).toBe('true');
    grid.loading = false;
    await settle();
    expect(root(grid).querySelectorAll('fandry-skeleton')).toHaveLength(0);
    expect(root(grid).querySelector('ul')!.hasAttribute('aria-busy')).toBe(false);
  });

  it('with `interactive`, makes each tile a button that reports select', async () => {
    const grid = mount('fandry-media-grid', FdMediaGrid, { interactive: true });
    const onSelect = jest.fn();
    grid.addEventListener('select', onSelect);
    await settle();
    expect(tiles(grid)).toHaveLength(3);
    expect(tiles(grid)[0].getAttribute('tabindex')).toBe('0');
    tiles(grid)[1].click();
    expect(onSelect.mock.calls[0][0].detail).toEqual({ index: 1, item: ITEMS[1] });
  });

  it('focusItem() focuses a tile', async () => {
    const grid = mount('fandry-media-grid', FdMediaGrid, { interactive: true });
    await settle();
    grid.focusItem(2);
    expect(root(grid).activeElement).toBe(tiles(grid)[2]);
  });
});

describe('fandry-media-viewer', () => {
  it('renders nothing until open, then the current item and its neighbours', async () => {
    const viewer = mount('fandry-media-viewer', FdMediaViewer, { index: 1 });
    await settle();
    expect(root(dialogOf(viewer)).querySelector('[role="dialog"]')).toBeNull();
    viewer.open = true;
    await settle();
    expect(root(dialogOf(viewer)).querySelector('[role="dialog"]')!.getAttribute('aria-label')).toBe('Gallery');
    expect(currentImage(viewer)!.getAttribute('src')).toBe('/b.jpg');
    expect(currentImage(viewer)!.getAttribute('srcset')).toBe('/b-400.jpg 400w, /b.jpg 1280w');
    expect(root(viewer).querySelector('.slide--previous img')!.getAttribute('src')).toBe('/a.jpg');
    expect(root(viewer).querySelector('.slide--next img')!.getAttribute('src')).toBe('/c.jpg');
    expect(root(viewer).querySelector('.slide--next')!.getAttribute('aria-hidden')).toBe('true');
    expect(root(viewer).querySelector('.indicator')!.textContent).toBe('2 of 3');
  });

  it('fetches no picture until it is first opened, and keeps them after it closes', async () => {
    const viewer = mount('fandry-media-viewer', FdMediaViewer);
    await settle();
    expect(root(viewer).querySelectorAll('img')).toHaveLength(0);
    viewer.open = true;
    await settle();
    expect(root(viewer).querySelectorAll('img')).toHaveLength(2);
    viewer.open = false;
    await settle();
    expect(root(viewer).querySelectorAll('img')).toHaveLength(2);
  });

  it('moves with Next / Previous and reports change, keeping its own index', async () => {
    const viewer = mount('fandry-media-viewer', FdMediaViewer, { open: true });
    const onChange = jest.fn();
    viewer.addEventListener('change', onChange);
    await settle();
    nativeButton(navButton(viewer, 'next')).click();
    await settle();
    expect(viewer.index).toBe(1);
    expect(onChange.mock.calls[0][0].detail).toEqual({ index: 1, item: ITEMS[1] });
    expect(currentImage(viewer)!.getAttribute('src')).toBe('/b.jpg');
    nativeButton(navButton(viewer, 'previous')).click();
    await settle();
    expect(viewer.index).toBe(0);
  });

  it('keeps Previous focusable but unusable on the first item, and Next on the last', async () => {
    const viewer = mount('fandry-media-viewer', FdMediaViewer, { open: true });
    const onChange = jest.fn();
    viewer.addEventListener('change', onChange);
    await settle();
    const previous = nativeButton(navButton(viewer, 'previous'));
    expect(previous.getAttribute('aria-disabled')).toBe('true');
    expect(previous.disabled).toBe(false);
    previous.click();
    viewer.index = 2;
    await settle();
    expect(nativeButton(navButton(viewer, 'next')).getAttribute('aria-disabled')).toBe('true');
    nativeButton(navButton(viewer, 'next')).click();
    expect(onChange).not.toHaveBeenCalled();
  });

  it('moves with the arrow keys, Home and End', async () => {
    const viewer = mount('fandry-media-viewer', FdMediaViewer, { open: true });
    await settle();
    key(viewer, 'ArrowRight');
    expect(viewer.index).toBe(1);
    key(viewer, 'End');
    expect(viewer.index).toBe(2);
    key(viewer, 'ArrowRight');
    expect(viewer.index).toBe(2);
    key(viewer, 'Home');
    expect(viewer.index).toBe(0);
    key(viewer, 'ArrowLeft');
    expect(viewer.index).toBe(0);
  });

  it('closes from its button and from Escape, reporting toggle', async () => {
    const viewer = mount('fandry-media-viewer', FdMediaViewer, { open: true });
    const onToggle = jest.fn();
    viewer.addEventListener('toggle', onToggle);
    await settle();
    nativeButton(navButton(viewer, 'close')).click();
    expect(viewer.open).toBe(false);
    expect(onToggle.mock.calls[0][0].detail).toBe(false);

    viewer.open = true;
    await settle();
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await settle();
    expect(viewer.open).toBe(false);
    expect(onToggle).toHaveBeenCalledTimes(2);
  });

  it('moves on a swipe', async () => {
    const viewer = mount('fandry-media-viewer', FdMediaViewer, { open: true });
    await settle();
    const stage = root(viewer).querySelector('.stage')!;
    pointer(stage, 'pointerdown', { clientX: 300, time: 0 });
    pointer(stage, 'pointermove', { clientX: 200 });
    await settle();
    expect(root(viewer).querySelector('.track')!.getAttribute('style')).toContain('translate: -100px 0');
    pointer(stage, 'pointerup', { clientX: 100, time: 200 });
    await settle();
    expect(viewer.index).toBe(1);
    // The new item slides in from where the drag left it.
    expect(root(viewer).querySelector('.track')!.getAttribute('style')).toContain('calc(100% + -100px)');
  });

  it('zooms with + and resets with 0, and a new item starts unzoomed', async () => {
    const viewer = mount('fandry-media-viewer', FdMediaViewer, { open: true });
    await settle();
    key(viewer, '+');
    await settle();
    expect(currentImage(viewer)!.getAttribute('style')).toContain('scale: 1.5');
    key(viewer, '0');
    await settle();
    expect(currentImage(viewer)!.hasAttribute('style')).toBe(false);
    key(viewer, '+');
    key(viewer, 'ArrowRight');
    await settle();
    expect(currentImage(viewer)!.hasAttribute('style')).toBe(false);
  });

  it('says what messages tell it to', async () => {
    const viewer = mount('fandry-media-viewer', FdMediaViewer, {
      open: true,
      messages: { close: 'Fermer', position: (current: number, total: number) => `${current}/${total}` }
    });
    await settle();
    expect(nativeButton(navButton(viewer, 'close')).getAttribute('aria-label')).toBe('Fermer');
    expect(nativeButton(navButton(viewer, 'next')).getAttribute('aria-label')).toBe('Next');
    expect(root(viewer).querySelector('.indicator')!.textContent).toBe('1/3');
  });

  it('shows the caption only for an item that has one', async () => {
    const viewer = mount('fandry-media-viewer', FdMediaViewer, { open: true });
    await settle();
    const caption = root(viewer).querySelector('.caption') as HTMLElement;
    expect(caption.textContent).toBe('The lake');
    expect(caption.hidden).toBe(false);
    key(viewer, 'ArrowRight');
    await settle();
    expect(caption.hidden).toBe(true);
  });
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
    expect(root(gridOf(gallery)).activeElement).toBe(tiles(gridOf(gallery))[2]);
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
    expect(root(dialogOf(viewerOf(gallery))).querySelector('[role="dialog"]')!.getAttribute('aria-label')).toBe('Photos');
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
