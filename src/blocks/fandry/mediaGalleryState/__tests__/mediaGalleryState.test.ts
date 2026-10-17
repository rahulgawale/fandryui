import { createElement } from 'lwc';
import CustomGalleryHarness from './customGalleryHarness';

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
const dialogOf = (viewer: Host) => root(viewer).querySelector('fandry-dialog') as Host;
const navButton = (viewer: Host, which: 'previous' | 'next' | 'close' | 'keys') =>
  root(viewer).querySelector(which === 'close' ? '.close' : which === 'keys' ? '.keys-button' : `.nav--${which}`) as Host;
const nativeButton = (button: Host) => root(button).querySelector('button') as HTMLButtonElement;
const key = (viewer: Host, name: string) =>
  dialogOf(viewer).dispatchEvent(new KeyboardEvent('keydown', { key: name, bubbles: true, composed: true }));

afterEach(() => {
  while (document.body.firstChild) document.body.removeChild(document.body.firstChild);
  document.body.style.overflow = '';
});

describe('FdMediaGalleryState', () => {
  it('in a layout of its own, opens from a data-index element and hands focus back to it', async () => {
    const custom = mount('custom-gallery-harness', CustomGalleryHarness);
    await settle();
    const main = root(custom).querySelector('fandry-button.main') as Host;
    nativeButton(main).click();
    await settle();
    const viewer = root(custom).querySelector('fandry-media-viewer') as Host;
    expect(viewer.open).toBe(true);
    key(viewer, 'End');
    await settle();
    expect(custom.index).toBe(2);
    expect(main.getAttribute('data-index')).toBe('2');
    nativeButton(navButton(viewer, 'close')).click();
    await settle();
    expect(root(custom).activeElement).toBe(main);
  });
});
