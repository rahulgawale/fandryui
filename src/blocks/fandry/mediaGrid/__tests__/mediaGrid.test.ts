import { createElement } from 'lwc';
import FdMediaGrid from '../mediaGrid';

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
// Each tile is a fandry-button; clicking one means clicking its native <button>.
const tileHosts = (grid: Host) => Array.from(root(grid).querySelectorAll('fandry-button.tile-button')) as Host[];
const tiles = (grid: Host) => tileHosts(grid).map((host) => root(host).querySelector('button') as HTMLButtonElement);

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
    expect(tileHosts(grid)).toHaveLength(0);
    expect(root(grid).querySelectorAll('fandry-button')).toHaveLength(0);
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
    expect(tileHosts(grid)).toHaveLength(3);
    expect(tiles(grid)[0].getAttribute('tabindex')).toBe('0');
    expect(tiles(grid)[0].getAttribute('part')).toContain('base');
    tiles(grid)[1].click();
    expect(onSelect.mock.calls[0][0].detail).toEqual({ index: 1, item: ITEMS[1] });
  });

  it('names a tile whose picture has no alt text by its caption, or by messages.open', async () => {
    const items = [
      { id: 'a', src: '/a.jpg', alt: '', caption: 'The lake' },
      { id: 'b', src: '/b.jpg', alt: '' },
      { id: 'c', src: '/c.jpg', alt: 'A peak' }
    ];
    const grid = mount('fandry-media-grid', FdMediaGrid, { items, interactive: true });
    await settle();
    expect(tiles(grid).map((button) => button.getAttribute('aria-label'))).toEqual([
      'The lake',
      'Open picture 2 of 3',
      null
    ]);
    grid.messages = { open: (current: number, total: number) => `Photo ${current}/${total}` };
    await settle();
    expect(tiles(grid)[1].getAttribute('aria-label')).toBe('Photo 2/3');
  });

  it('focusItem() focuses a tile', async () => {
    const grid = mount('fandry-media-grid', FdMediaGrid, { interactive: true });
    await settle();
    grid.focusItem(2);
    expect(root(grid).activeElement).toBe(tileHosts(grid)[2]);
    expect(root(tileHosts(grid)[2]).activeElement).toBe(tiles(grid)[2]);
  });
});
