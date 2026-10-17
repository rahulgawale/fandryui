import { createElement } from 'lwc';
import FdMediaViewer from '../mediaViewer';

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
const currentImage = (viewer: Host) => root(viewer).querySelector('.slide--current img') as HTMLImageElement | null;
const navButton = (viewer: Host, which: 'previous' | 'next' | 'close' | 'keys') =>
  root(viewer).querySelector(which === 'close' ? '.close' : which === 'keys' ? '.keys-button' : `.nav--${which}`) as Host;
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

describe('fandry-media-viewer', () => {
  it('renders nothing until open, then the current item and its neighbours', async () => {
    const viewer = mount('fandry-media-viewer', FdMediaViewer, { index: 1 });
    await settle();
    expect(root(dialogOf(viewer)).querySelector('dialog')).toBeNull();
    viewer.open = true;
    await settle();
    expect(root(dialogOf(viewer)).querySelector('dialog')!.getAttribute('aria-label')).toBe('Gallery');
    expect(currentImage(viewer)!.getAttribute('src')).toBe('/b.jpg');
    expect(currentImage(viewer)!.getAttribute('srcset')).toBe('/b-400.jpg 400w, /b.jpg 1280w');
    expect(root(viewer).querySelector('.slide--previous img')!.getAttribute('src')).toBe('/a.jpg');
    expect(root(viewer).querySelector('.slide--next img')!.getAttribute('src')).toBe('/c.jpg');
    expect(root(viewer).querySelector('.slide--next')!.getAttribute('aria-hidden')).toBe('true');
    expect(root(viewer).querySelector('.status')!.textContent).toBe('2 of 3');
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
    key(viewer, 'PageDown');
    await settle();
    expect(viewer.index).toBe(1);
    expect(currentImage(viewer)!.hasAttribute('style')).toBe(false);
  });

  it('while zoomed, the arrow keys look around the picture and Page Up / Page Down still move', async () => {
    const viewer = mount('fandry-media-viewer', FdMediaViewer, { open: true, index: 1 });
    await settle();
    key(viewer, '+');
    key(viewer, 'ArrowRight');
    key(viewer, 'ArrowLeft');
    key(viewer, 'ArrowUp');
    expect(viewer.index).toBe(1);
    key(viewer, 'PageUp');
    expect(viewer.index).toBe(0);
  });

  it('treats a fractional index as the item it falls in, and ignores goTo() between items', async () => {
    const viewer = mount('fandry-media-viewer', FdMediaViewer, { open: true, index: 1.5 });
    const onChange = jest.fn();
    viewer.addEventListener('change', onChange);
    await settle();
    expect(viewer.index).toBe(1);
    expect(currentImage(viewer)!.getAttribute('src')).toBe('/b.jpg');
    expect(root(viewer).querySelector('.status')!.textContent).toBe('2 of 3');
    viewer.goTo(0.5);
    await settle();
    expect(viewer.index).toBe(1);
    expect(onChange).not.toHaveBeenCalled();
  });

  it('shows an item set from outside unzoomed, even while zoomed', async () => {
    const viewer = mount('fandry-media-viewer', FdMediaViewer, { open: true });
    await settle();
    key(viewer, '+');
    await settle();
    expect(currentImage(viewer)!.getAttribute('style')).toContain('scale');
    viewer.index = 2;
    await settle();
    expect(currentImage(viewer)!.getAttribute('src')).toBe('/c.jpg');
    expect(currentImage(viewer)!.hasAttribute('style')).toBe(false);
    // Not a slide: nothing to animate from.
    expect(root(viewer).querySelector('.track')!.className).toBe('track');
  });

  it('tells a screen reader where it is and what it shows', async () => {
    const viewer = mount('fandry-media-viewer', FdMediaViewer, { open: true });
    await settle();
    const live = root(viewer).querySelector('[aria-live]') as HTMLElement;
    // The caption when there is one, the alt text otherwise.
    expect(live.textContent).toBe('1 of 3: The lake');
    key(viewer, 'ArrowRight');
    await settle();
    expect(live.textContent).toBe('2 of 3: A road');
    expect(root(viewer).querySelector('.status')!.hasAttribute('aria-live')).toBe(false);
  });

  it('renders its live region empty on each opening, then fills it, so the opening is announced', async () => {
    const viewer = mount('fandry-media-viewer', FdMediaViewer);
    await settle();
    viewer.open = true;
    await Promise.resolve();
    const live = root(viewer).querySelector('[aria-live]') as HTMLElement;
    expect(live.textContent).toBe('');
    await settle();
    expect(live.textContent).toBe('1 of 3: The lake');
    viewer.close();
    await settle();
    viewer.open = true;
    await Promise.resolve();
    expect(live.textContent).toBe('');
    await settle();
    expect(live.textContent).toBe('1 of 3: The lake');
  });

  it('hides Previous and Next when there is one item', async () => {
    const viewer = mount('fandry-media-viewer', FdMediaViewer, { open: true, items: [ITEMS[0]] });
    await settle();
    expect(navButton(viewer, 'previous').hidden).toBe(true);
    expect(navButton(viewer, 'next').hidden).toBe(true);
  });

  it('shows its keyboard shortcuts from its button or ?, and hides them on Escape before closing', async () => {
    const viewer = mount('fandry-media-viewer', FdMediaViewer, { open: true });
    const toggles: boolean[] = [];
    viewer.addEventListener('toggle', (event) => toggles.push((event as unknown as CustomEvent).detail));
    await settle();
    const panel = root(viewer).querySelector('.keys') as HTMLElement;
    const button = nativeButton(navButton(viewer, 'keys'));
    expect(panel.hidden).toBe(true);
    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(button.getAttribute('aria-label')).toBe('Keyboard shortcuts');
    // The English list is the slot's fallback.
    expect(panel.querySelector('slot[name="keys"] fandry-media-keys')).not.toBeNull();

    button.click();
    await settle();
    expect(panel.hidden).toBe(false);
    expect(button.getAttribute('aria-expanded')).toBe('true');

    const escape = new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, composed: true, cancelable: true });
    dialogOf(viewer).dispatchEvent(escape);
    await settle();
    expect(panel.hidden).toBe(true);
    expect(viewer.open).toBe(true);
    // Cancelled too, or a native modal dialog closes on the browser's own Escape.
    expect(escape.defaultPrevented).toBe(true);

    key(viewer, '?');
    await settle();
    expect(panel.hidden).toBe(false);
    key(viewer, '?');
    await settle();
    expect(panel.hidden).toBe(true);
    expect(toggles).toEqual([]);
  });

  it('opens with its shortcuts hidden', async () => {
    const viewer = mount('fandry-media-viewer', FdMediaViewer, { open: true });
    await settle();
    key(viewer, '?');
    viewer.close();
    await settle();
    viewer.open = true;
    await settle();
    expect((root(viewer).querySelector('.keys') as HTMLElement).hidden).toBe(true);
  });

  it('slides with alternating animation names, so each move restarts it', async () => {
    const viewer = mount('fandry-media-viewer', FdMediaViewer, { open: true });
    await settle();
    const track = () => root(viewer).querySelector('.track')!.className;
    key(viewer, 'ArrowRight');
    await settle();
    const first = track();
    key(viewer, 'ArrowRight');
    await settle();
    expect(first).toMatch(/track--settle-[ab]/);
    expect(track()).toMatch(/track--settle-[ab]/);
    expect(track()).not.toBe(first);
  });

  it('slides back with resistance when a drag goes past the last item', async () => {
    const viewer = mount('fandry-media-viewer', FdMediaViewer, { open: true, index: 2 });
    await settle();
    const stage = root(viewer).querySelector('.stage')!;
    pointer(stage, 'pointerdown', { clientX: 300, time: 0 });
    pointer(stage, 'pointermove', { clientX: 200 });
    await settle();
    // Nothing after the last item: the stage moves less than the finger.
    expect(root(viewer).querySelector('.track')!.getAttribute('style')).toContain('translate: -30px 0');
    pointer(stage, 'pointerup', { clientX: 200, time: 200 });
    await settle();
    expect(viewer.index).toBe(2);
    expect(root(viewer).querySelector('.track')!.getAttribute('style')).toContain('--_fd-slide-x: -30px');
  });

  it('lets go of a drag the browser cancels', async () => {
    const viewer = mount('fandry-media-viewer', FdMediaViewer, { open: true });
    await settle();
    const stage = root(viewer).querySelector('.stage')!;
    pointer(stage, 'pointerdown', { clientX: 300, time: 0 });
    pointer(stage, 'pointermove', { clientX: 200 });
    pointer(stage, 'pointercancel', { clientX: 200 });
    await settle();
    expect(viewer.index).toBe(0);
    expect(root(viewer).querySelector('.track')!.hasAttribute('style')).toBe(false);
  });

  it('zooms with Ctrl + the wheel and leaves a plain wheel alone', async () => {
    const viewer = mount('fandry-media-viewer', FdMediaViewer, { open: true });
    await settle();
    const stage = root(viewer).querySelector('.stage')!;
    const plain = new WheelEvent('wheel', { deltaY: -100, bubbles: true, cancelable: true });
    stage.dispatchEvent(plain);
    await settle();
    expect(plain.defaultPrevented).toBe(false);
    expect(currentImage(viewer)!.hasAttribute('style')).toBe(false);
    const pinch = new WheelEvent('wheel', { deltaY: -100, ctrlKey: true, bubbles: true, cancelable: true });
    stage.dispatchEvent(pinch);
    await settle();
    expect(pinch.defaultPrevented).toBe(true);
    expect(currentImage(viewer)!.getAttribute('style')).toContain('scale');
  });

  it('keeps working when items are replaced or emptied while open', async () => {
    const viewer = mount('fandry-media-viewer', FdMediaViewer, { open: true, index: 2 });
    await settle();
    viewer.items = ITEMS.slice(0, 2);
    await settle();
    expect(currentImage(viewer)!.getAttribute('src')).toBe('/b.jpg');
    expect(root(viewer).querySelector('.status')!.textContent).toBe('2 of 2');
    viewer.items = [];
    await settle();
    expect(currentImage(viewer)).toBeNull();
    expect(root(viewer).querySelector('.status')!.textContent).toBe('');
  });

  it('says what messages tell it to', async () => {
    const viewer = mount('fandry-media-viewer', FdMediaViewer, {
      open: true,
      messages: { close: 'Fermer', position: (current: number, total: number) => `${current}/${total}` }
    });
    await settle();
    expect(nativeButton(navButton(viewer, 'close')).getAttribute('aria-label')).toBe('Fermer');
    expect(nativeButton(navButton(viewer, 'next')).getAttribute('aria-label')).toBe('Next');
    expect(root(viewer).querySelector('.status')!.textContent).toBe('1/3');
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
