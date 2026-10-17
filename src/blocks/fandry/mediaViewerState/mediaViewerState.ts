import { api } from 'lwc';
import Base from 'fandry/base';
import type { FdMediaItem } from 'fandry/mediaItem';
import { FdMediaGestures } from 'fandry/mediaGestures';

/** Everything the viewer says; see `messages`. */
export interface FdMediaViewerMessages {
  /** The dialog's name. */
  label: string;
  close: string;
  /** The button that shows the keyboard shortcuts. */
  keys: string;
  previous: string;
  next: string;
  /** Where the viewer is, shown at the top, e.g. "3 of 12". */
  position: (current: number, total: number) => string;
  /**
   * What a screen reader hears on moving to an item: where it is and what
   * it shows, e.g. "3 of 12: The Taj Mahal at dawn". `label` is the item's
   * caption, or its alt text when it has none.
   */
  announcement: (current: number, total: number, label: string) => string;
}

export const DEFAULT_MEDIA_VIEWER_MESSAGES: FdMediaViewerMessages = {
  label: 'Gallery',
  close: 'Close',
  keys: 'Keyboard shortcuts',
  previous: 'Previous',
  next: 'Next',
  position: (current, total) => `${current} of ${total}`,
  announcement: (current, total, label) => (label ? `${current} of ${total}: ${label}` : `${current} of ${total}`)
};

/** One of the three items the viewer renders: the current one and its neighbours. */
export interface FdMediaSlide {
  key: string;
  item: FdMediaItem;
  position: 'previous' | 'current' | 'next';
  isCurrent: boolean;
  /** The neighbours are drawn for a swipe, not read. */
  ariaHidden: string | undefined;
  /** The zoom and pan on the current item, while there is any. */
  mediaStyle: string | undefined;
}

/* How much a drag past the first or last item still moves the stage. */
const EDGE_RESISTANCE = 0.3;
const KEY_ZOOM = 1.5;
/* How far an arrow key moves a zoomed picture, as a share of the stage. */
const KEY_PAN = 0.1;
const WHEEL_ZOOM = 0.01;

/**
 * FdMediaViewerState is the behavior behind fandry-media-viewer, with no
 * template of its own: which item shows, whether the viewer is open, the
 * keyboard, swipe and zoom, and what a screen reader hears. fandry-media-viewer
 * is this class plus a fandry-dialog; a site that wants other markup (the
 * toolbar elsewhere, thumbnails under the picture) extends this class and
 * writes its own template, wired to the same handlers:
 *
 * - `onkeydown={handleKeydown}` on the element that holds the viewer
 * - the pointer and wheel handlers on the stage, marked `lwc:ref="stage"`
 * - `data-current={slide.isCurrent}` on each <img>, so zoom knows the current one's size
 * - `trackStyle` on the element that holds the slides, and each slide's
 *   `mediaStyle` on its <img>
 *
 * Like a native control it keeps `index` and `open` up to date itself as the
 * user moves and closes, and reports each through `change` ({ index, item })
 * and `toggle` (false). It never changes `items`.
 */
export default class FdMediaViewerState extends Base {
  @api items: FdMediaItem[] = [];

  private _index = 0;

  /** The item shown. Set from outside, it shows that item unzoomed, without a slide. */
  @api
  get index(): number {
    return this._index;
  }

  set index(value: number) {
    const next = Number(value) || 0;
    if (next !== this._index) {
      this.settleFrom = '';
      this.gestures.reset();
    }
    this._index = next;
  }

  private _open = false;

  /* A closed dialog still renders what is slotted into it, so until the
     first opening a template renders nothing under `hasOpened`: a page with
     a viewer doesn't fetch three full-size pictures nobody asked to see. */
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
      this.liveReady = false;
      this.keysOpen = false;
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
  /** Counts the slides, so a template can restart the settle animation on each. */
  settleRun = 0;
  /* A live region that arrives with its words already in it says nothing, so
     each opening renders it empty and fills it a render later. */
  private liveReady = false;
  /** Whether the list of keyboard shortcuts is showing. */
  keysOpen = false;

  // ---- rendering model

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
    return Math.min(Math.max(this._index, 0), Math.max(this.count - 1, 0));
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

  get announcement(): string {
    const item = this.current;
    if (!item || !this.liveReady) return '';
    return this.text.announcement(this.currentIndex + 1, this.count, item.caption || item.alt || '');
  }

  get caption(): string {
    return this.current?.caption ?? '';
  }

  get noCaption(): boolean {
    return !this.caption;
  }

  get keysHidden(): boolean {
    return !this.keysOpen;
  }

  get zoomed(): boolean {
    void this.frame;
    return this.gestures.zoomed;
  }

  /** True while a finger or the mouse is down: draw without transitions. */
  get dragging(): boolean {
    void this.frame;
    return this.gestures.active;
  }

  /** True while the track slides in the current item, from where a move or a let-go drag left it. */
  get settling(): boolean {
    void this.frame;
    return !this.gestures.active && !!this.settleFrom;
  }

  /* The drag while a finger is down; afterwards the settle animation's
     start, as --_fd-slide-x. */
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
    const { scale, x, y } = this.gestures.zoom;
    const transform = this.gestures.zoomed || this.gestures.active
      ? `translate: ${x}px ${y}px; scale: ${scale}${this.gestures.active ? '; transition: none' : ''}`
      : undefined;
    const slides: FdMediaSlide[] = [];
    for (const offset of [-1, 0, 1]) {
      const item = this.items?.[this.currentIndex + offset];
      if (!item) continue;
      const isCurrent = offset === 0;
      slides.push({
        key: item.id,
        item,
        position: offset < 0 ? 'previous' : offset > 0 ? 'next' : 'current',
        isCurrent,
        ariaHidden: isCurrent ? undefined : 'true',
        mediaStyle: isCurrent ? transform : undefined
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
    this._index = target;
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

  // ---- handlers for the pieces a template composes

  handleClose() {
    this.close();
  }

  handleKeysToggle() {
    this.keysOpen = !this.keysOpen;
  }

  // Previous / Next stay focusable at the ends (aria-disabled); they do nothing there.
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
    /* Escape hides the shortcuts first. fandry-dialog hears Escape on the
       document and, as a native modal, from the browser: stop both. */
    if (event.key === 'Escape' && this.keysOpen) {
      event.stopPropagation();
      event.preventDefault();
      this.keysOpen = false;
      return;
    }
    const step = KEY_PAN * (this.stage?.clientWidth ?? 0);
    /* While zoomed the arrow keys look around the picture, as a swipe pans
       it; Page Up / Page Down and the buttons still move between items. */
    const zoomed = this.gestures.zoomed;
    const actions: Record<string, () => void> = {
      ArrowLeft: () => (zoomed ? this.panBy(step, 0) : this.handlePrevious()),
      ArrowRight: () => (zoomed ? this.panBy(-step, 0) : this.handleNext()),
      ArrowUp: () => zoomed && this.panBy(0, step),
      ArrowDown: () => zoomed && this.panBy(0, -step),
      PageUp: () => this.handlePrevious(),
      PageDown: () => this.handleNext(),
      Home: () => this.goTo(0),
      End: () => this.goTo(this.count - 1),
      '+': () => this.zoomBy(KEY_ZOOM),
      '=': () => this.zoomBy(KEY_ZOOM),
      '-': () => this.zoomBy(1 / KEY_ZOOM),
      '0': () => this.resetZoom(),
      '?': () => this.handleKeysToggle()
    };
    const action = actions[event.key];
    if (!action || event.altKey || event.metaKey || event.ctrlKey) return;
    event.preventDefault();
    action();
  }

  renderedCallback() {
    if (this._open && this.hasOpened && !this.liveReady) this.liveReady = true;
  }

  // ---- gestures

  /** The element the slides are drawn in, marked `lwc:ref="stage"`. */
  protected get stage(): HTMLElement | null {
    return (this.refs?.stage as HTMLElement | undefined) ?? null;
  }

  handlePointerDown(event: PointerEvent) {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    const stage = this.stage;
    if (!stage) return;
    if (!this.gestures.active) this.measure();
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
    if (!this.measure()) return;
    this.gestures.zoomBy(factor, clientX, clientY);
    this.redraw();
  }

  private panBy(dx: number, dy: number) {
    if (!this.measure()) return;
    this.gestures.panBy(dx, dy);
    this.redraw();
  }

  /* The stage's box, and the picture's as drawn: `object-fit: contain`
     letterboxes it inside its own box, and how far it can pan depends on
     the picture, not the box. */
  private measure(): boolean {
    const stage = this.stage;
    if (!stage) return false;
    const rect = stage.getBoundingClientRect();
    const img = stage.querySelector('img[data-current="true"]') as HTMLImageElement | null;
    const boxWidth = img?.clientWidth || rect.width;
    const boxHeight = img?.clientHeight || rect.height;
    const naturalWidth = img?.naturalWidth || this.current?.width || 0;
    const naturalHeight = img?.naturalHeight || this.current?.height || 0;
    const fit = naturalWidth && naturalHeight ? Math.min(boxWidth / naturalWidth, boxHeight / naturalHeight) : 0;
    this.gestures.measure(rect, fit ? { width: naturalWidth * fit, height: naturalHeight * fit } : { width: boxWidth, height: boxHeight });
    return true;
  }

  private resetZoom() {
    this.gestures.reset();
    this.redraw();
  }
}
