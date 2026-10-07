import { api } from 'lwc';
import Base from 'fandry/base';
import { isImage } from 'fandry/mediaItem';
import type { FdMediaItem } from 'fandry/mediaItem';
import { FdMediaGestures } from 'fandry/mediaGestures';

/** Everything the viewer says; see `messages`. */
export interface FdMediaViewerMessages {
  /** The dialog's name. */
  label: string;
  close: string;
  previous: string;
  next: string;
  /** Where the viewer is, e.g. "3 of 12". */
  position: (current: number, total: number) => string;
}

export const DEFAULT_MEDIA_VIEWER_MESSAGES: FdMediaViewerMessages = {
  label: 'Gallery',
  close: 'Close',
  previous: 'Previous',
  next: 'Next',
  position: (current, total) => `${current} of ${total}`
};

interface FdMediaSlide {
  key: string;
  className: string;
  ariaHidden: string | undefined;
  isImage: boolean;
  src: string;
  srcset: string | undefined;
  sizes: string | undefined;
  alt: string;
  width: number | undefined;
  height: number | undefined;
  mediaClass: string;
  mediaStyle: string | undefined;
}

/* How much a drag past the first or last item still moves the stage. */
const EDGE_RESISTANCE = 0.3;
const KEY_ZOOM = 1.5;
const WHEEL_ZOOM = 0.01;

/**
 * The media-gallery block's viewer: one item at a time, full screen, in a
 * fandry-dialog. Previous / Next, the arrow keys and a swipe move through
 * `items`; a pinch, a double tap, Ctrl + the wheel or + / - zoom. It knows
 * nothing of a grid, and works on its own:
 *
 *   <fandry-media-viewer items={photos} open={viewing} onchange={...} ontoggle={...}>
 *
 * Like a native control it keeps `index` and `open` up to date itself as the
 * user moves and closes, and reports each through `change` ({ index, item })
 * and `toggle` (false). It never changes `items`. Neighbouring items are
 * rendered beside the current one, so a swipe shows them and they are
 * loaded before they are needed.
 */
export default class FdMediaViewer extends Base {
  @api items: FdMediaItem[] = [];
  @api index = 0;

  private _open = false;

  /* A closed fandry-dialog still renders what is slotted into it, so until
     the first opening there is nothing here: a page with a viewer doesn't
     fetch three full-size pictures nobody asked to see. It stays rendered
     after that, through the dialog's exit and for the next opening. */
  hasOpened = false;

  @api
  get open(): boolean {
    return this._open;
  }

  set open(value: boolean) {
    // Each opening starts unzoomed and without a slide in progress.
    if (value && !this._open) {
      this.settleFrom = '';
      this.gestures.reset();
      this.hasOpened = true;
    }
    this._open = !!value;
  }

  /** Replaces any of DEFAULT_MEDIA_VIEWER_MESSAGES, e.g. to translate them. */
  @api messages: Partial<FdMediaViewerMessages> = {};
  /** The dialog's name for this one viewer. Wins over `messages.label`. */
  @api ariaLabel = '';

  private gestures = new FdMediaGestures();
  // Bumped on each gesture so the template redraws; the gesture state itself
  // lives in `gestures`, which LWC doesn't observe.
  private frame = 0;
  // Where the stage starts the slide that brings in the current item.
  private settleFrom = '';
  private settleRun = 0;

  get text(): FdMediaViewerMessages {
    return { ...DEFAULT_MEDIA_VIEWER_MESSAGES, ...this.messages };
  }

  get dialogLabel(): string {
    return this.ariaLabel || this.text.label;
  }

  get count(): number {
    return this.items?.length ?? 0;
  }

  get currentIndex(): number {
    return Math.min(Math.max(Number(this.index) || 0, 0), Math.max(this.count - 1, 0));
  }

  get current(): FdMediaItem | undefined {
    return this.items?.[this.currentIndex];
  }

  get hasPrevious(): boolean {
    return this.currentIndex > 0;
  }

  get hasNext(): boolean {
    return this.currentIndex < this.count - 1;
  }

  // Nothing to move between.
  get isSingle(): boolean {
    return this.count < 2;
  }

  get positionText(): string {
    return this.count ? this.text.position(this.currentIndex + 1, this.count) : '';
  }

  get caption(): string {
    return this.current?.caption ?? '';
  }

  get noCaption(): boolean {
    return !this.caption;
  }

  /* aria-disabled, not disabled: Next pressed on the last-but-one item must
     keep focus when it stops being usable, or a keyboard user is dropped on
     the page. The handlers ignore it. */
  get closeProps(): Record<string, unknown> {
    return { tabIndex: 0, ariaLabel: this.text.close };
  }

  get previousProps(): Record<string, unknown> {
    return { tabIndex: 0, ariaLabel: this.text.previous, ariaDisabled: this.hasPrevious ? null : 'true' };
  }

  get nextProps(): Record<string, unknown> {
    return { tabIndex: 0, ariaLabel: this.text.next, ariaDisabled: this.hasNext ? null : 'true' };
  }

  get trackClass(): string {
    // Two names for one animation: changing the name is what restarts it.
    if (this.gestures.active || !this.settleFrom) return 'track';
    return `track track--settle-${this.settleRun % 2 ? 'a' : 'b'}`;
  }

  get trackStyle(): string | undefined {
    void this.frame;
    if (this.gestures.active) {
      const resisted = this.canMove(this.gestures.dragX) ? 1 : EDGE_RESISTANCE;
      return `translate: ${this.gestures.dragX * resisted}px 0`;
    }
    return this.settleFrom ? `--_fd-slide-x: ${this.settleFrom}` : undefined;
  }

  /* The item before, the current one and the item after, so a swipe has
     something to show and the next picture is loaded before it is needed. */
  get slides(): FdMediaSlide[] {
    void this.frame;
    const slides: FdMediaSlide[] = [];
    for (const offset of [-1, 0, 1]) {
      const item = this.items?.[this.currentIndex + offset];
      if (!item) continue;
      const isCurrent = offset === 0;
      const { scale, x, y } = this.gestures.zoom;
      slides.push({
        key: item.id,
        className: `slide slide--${offset < 0 ? 'previous' : offset > 0 ? 'next' : 'current'}`,
        ariaHidden: isCurrent ? undefined : 'true',
        isImage: isImage(item),
        src: item.src,
        srcset: item.srcset,
        sizes: item.sizes,
        alt: item.alt ?? '',
        width: item.width,
        height: item.height,
        mediaClass: isCurrent && this.gestures.zoomed ? 'media media--zoomed' : 'media',
        mediaStyle: isCurrent && (this.gestures.zoomed || this.gestures.active)
          ? `translate: ${x}px ${y}px; scale: ${scale}${this.gestures.active ? '; transition: none' : ''}`
          : undefined
      });
    }
    return slides;
  }

  // ---- navigation

  /** Shows the item after the current one. */
  @api
  next() {
    this.go(this.currentIndex + 1, 0);
  }

  /** Shows the item before the current one. */
  @api
  previous() {
    this.go(this.currentIndex - 1, 0);
  }

  /** Shows the item at `index`. */
  @api
  goTo(index: number) {
    this.go(Number(index), 0);
  }

  @api
  close() {
    if (!this.open) return;
    this.open = false;
    this.gestures.reset();
    this.redraw();
    this.dispatchEvent(new CustomEvent('toggle', { detail: false, bubbles: true }));
  }

  /* `dragged` is how far a swipe had already moved the stage, so the new
     item carries on from there instead of jumping. */
  private go(target: number, dragged: number) {
    if (!this.count || target < 0 || target >= this.count || target === this.currentIndex) return;
    const direction = target > this.currentIndex ? 1 : -1;
    this.settleFrom = `calc(${direction * 100}% + ${dragged}px)`;
    this.settleRun += 1;
    this.index = target;
    this.gestures.reset();
    this.redraw();
    this.dispatchEvent(
      new CustomEvent('change', { detail: { index: target, item: this.items[target] }, bubbles: true })
    );
  }

  private canMove(dx: number): boolean {
    return dx < 0 ? this.hasNext : this.hasPrevious;
  }

  private redraw() {
    this.frame += 1;
  }

  handleClose() {
    this.close();
  }

  handlePrevious() {
    if (this.hasPrevious) this.previous();
  }

  handleNext() {
    if (this.hasNext) this.next();
  }

  // Escape and a click on the backdrop close fandry-dialog itself.
  handleDialogToggle(event: CustomEvent<boolean>) {
    event.stopPropagation();
    if (!event.detail) this.close();
  }

  handleKeydown(event: KeyboardEvent) {
    const actions: Record<string, () => void> = {
      ArrowLeft: () => this.handlePrevious(),
      ArrowRight: () => this.handleNext(),
      Home: () => this.goTo(0),
      End: () => this.goTo(this.count - 1),
      '+': () => this.zoomBy(KEY_ZOOM),
      '=': () => this.zoomBy(KEY_ZOOM),
      '-': () => this.zoomBy(1 / KEY_ZOOM),
      '0': () => this.resetZoom()
    };
    const action = actions[event.key];
    if (!action || event.altKey || event.metaKey || event.ctrlKey) return;
    event.preventDefault();
    action();
  }

  // ---- gestures

  private get stage(): HTMLElement | null {
    return this.template.querySelector('.stage');
  }

  handlePointerDown(event: PointerEvent) {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    const stage = this.stage;
    if (!stage) return;
    if (!this.gestures.active) this.gestures.measure(stage.getBoundingClientRect());
    stage.setPointerCapture?.(event.pointerId);
    this.gestures.down(event.pointerId, event.clientX, event.clientY, event.timeStamp);
    this.settleFrom = '';
    this.redraw();
  }

  handlePointerMove(event: PointerEvent) {
    if (!this.gestures.active) return;
    this.gestures.move(event.pointerId, event.clientX, event.clientY);
    this.redraw();
  }

  handlePointerUp(event: PointerEvent) {
    const dragged = this.gestures.dragX;
    const swipe = this.gestures.up(event.pointerId, event.timeStamp);
    if (this.gestures.active) {
      this.redraw();
      return;
    }
    this.gestures.dragX = 0;
    const target = swipe === 'next' ? this.currentIndex + 1 : swipe === 'previous' ? this.currentIndex - 1 : -1;
    if (target >= 0 && target < this.count) {
      this.go(target, dragged);
      return;
    }
    // Not far enough, or nothing that way: slide back.
    if (dragged) {
      this.settleFrom = `${this.canMove(dragged) ? dragged : dragged * EDGE_RESISTANCE}px`;
      this.settleRun += 1;
    }
    this.redraw();
  }

  handlePointerCancel(event: PointerEvent) {
    this.gestures.cancel(event.pointerId);
    this.redraw();
  }

  /* Ctrl + the wheel is also how a trackpad pinch arrives. A plain wheel is
     left alone. */
  handleWheel(event: WheelEvent) {
    if (!event.ctrlKey) return;
    event.preventDefault();
    this.zoomBy(Math.exp(-event.deltaY * WHEEL_ZOOM), event.clientX, event.clientY);
  }

  private zoomBy(factor: number, clientX?: number, clientY?: number) {
    const stage = this.stage;
    if (!stage) return;
    this.gestures.measure(stage.getBoundingClientRect());
    this.gestures.zoomBy(factor, clientX, clientY);
    this.redraw();
  }

  private resetZoom() {
    this.gestures.reset();
    this.redraw();
  }
}
