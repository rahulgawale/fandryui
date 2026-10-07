/**
 * Touch and pointer gestures for fandry-media-viewer, with no template and no
 * dependency: the viewer hands it pointer events and draws what it reports.
 *
 * - one finger (or the mouse) at normal size drags the stage sideways, and
 *   `up()` reports a swipe once the drag went far enough or fast enough
 * - two fingers pinch to zoom around the point between them, and pan while
 *   they move
 * - one finger on a zoomed picture pans it
 * - a double tap (or double click) zooms in at that point, or back out
 * - `zoomBy()` zooms around the middle, for the wheel and the keyboard
 *
 * Positions are measured from the middle of the stage, which is where the
 * picture's own middle is: zoom is `translate(x, y) scale(scale)` around
 * that point. The picture can't be panned past its own edges.
 */
export interface FdMediaZoom {
  scale: number;
  x: number;
  y: number;
}

export type FdMediaSwipe = 'next' | 'previous' | null;

interface Point {
  x: number;
  y: number;
}

export const NO_ZOOM: FdMediaZoom = { scale: 1, x: 0, y: 0 };
export const MAX_SCALE = 4;
const DOUBLE_TAP_SCALE = 2.5;

/* Distances are CSS pixels and times milliseconds: they describe the hand,
   not the design, so they aren't tokens. */
const TAP_SLOP = 10;
const DOUBLE_TAP_TIME = 300;
const DOUBLE_TAP_DISTANCE = 30;
/* A swipe is a drag across a fifth of the stage, or a flick. */
const SWIPE_DISTANCE = 0.2;
const SWIPE_SPEED = 0.4;
/* Below this the picture is back to normal size. */
const SNAP_SCALE = 1.05;

const clampNumber = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
const distance = (a: Point, b: Point) => Math.hypot(a.x - b.x, a.y - b.y);

export class FdMediaGestures {
  /** How the current picture is zoomed. */
  zoom: FdMediaZoom = NO_ZOOM;
  /** How far the stage is dragged sideways, at normal size. */
  dragX = 0;
  /** True while a finger or the mouse is down: draw without transitions. */
  active = false;

  private width = 0;
  private height = 0;
  private left = 0;
  private top = 0;
  private pointers = new Map<number, Point>();
  private start: { point: Point; zoom: FdMediaZoom; time: number } | null = null;
  private pinch: { distance: number; middle: Point; zoom: FdMediaZoom } | null = null;
  private axis: 'x' | 'y' | null = null;
  private moved = false;
  private lastTap: { point: Point; time: number } | null = null;

  get zoomed(): boolean {
    return this.zoom.scale > 1;
  }

  /** The stage's box, from getBoundingClientRect(), before each gesture. */
  measure(rect: { width: number; height: number; left: number; top: number }) {
    this.width = rect.width;
    this.height = rect.height;
    this.left = rect.left;
    this.top = rect.top;
  }

  down(id: number, clientX: number, clientY: number, time: number) {
    this.pointers.set(id, this.toStage(clientX, clientY));
    this.active = true;
    if (this.pointers.size === 1) {
      this.restart(time);
    } else if (this.pointers.size === 2) {
      const [a, b] = [...this.pointers.values()];
      this.pinch = { distance: distance(a, b) || 1, middle: this.middle(), zoom: this.zoom };
      this.dragX = 0;
      this.moved = true;
    }
  }

  move(id: number, clientX: number, clientY: number) {
    if (!this.pointers.has(id)) return;
    this.pointers.set(id, this.toStage(clientX, clientY));

    if (this.pinch && this.pointers.size >= 2) {
      const [a, b] = [...this.pointers.values()];
      const scale = this.pinch.zoom.scale * (distance(a, b) / this.pinch.distance);
      this.zoom = this.zoomAround(scale, this.middle(), this.pinch.middle, this.pinch.zoom);
      return;
    }

    if (!this.start) return;
    const point = this.pointers.get(id)!;
    const dx = point.x - this.start.point.x;
    const dy = point.y - this.start.point.y;
    if (!this.moved && Math.hypot(dx, dy) > TAP_SLOP) {
      this.moved = true;
      this.axis = Math.abs(dx) >= Math.abs(dy) ? 'x' : 'y';
    }
    if (!this.moved) return;

    if (this.start.zoom.scale > 1) {
      this.zoom = this.clamp({ scale: this.start.zoom.scale, x: this.start.zoom.x + dx, y: this.start.zoom.y + dy });
    } else if (this.axis === 'x') {
      this.dragX = dx;
    }
  }

  /** Reports a swipe when the last pointer lifts after one. The caller resets `dragX`. */
  up(id: number, time: number): FdMediaSwipe {
    if (!this.pointers.delete(id)) return null;

    if (this.pointers.size > 0) {
      // A pinch lost a finger: the one left pans from where it is now.
      this.pinch = null;
      this.restart(time);
      return null;
    }

    this.active = false;
    this.pinch = null;
    const start = this.start;
    this.start = null;
    if (this.zoom.scale < SNAP_SCALE) this.zoom = NO_ZOOM;
    if (!start) return null;

    if (!this.moved) {
      this.tap(start.point, time);
      return null;
    }

    const dx = this.dragX;
    if (start.zoom.scale > 1 || this.axis !== 'x' || !dx) return null;
    const speed = Math.abs(dx) / Math.max(time - start.time, 1);
    if (Math.abs(dx) < this.width * SWIPE_DISTANCE && speed < SWIPE_SPEED) return null;
    return dx < 0 ? 'next' : 'previous';
  }

  /** A pointer the browser took back (a scroll, a system gesture). */
  cancel(id: number) {
    this.pointers.delete(id);
    if (this.pointers.size) return;
    this.active = false;
    this.pinch = null;
    this.start = null;
    this.dragX = 0;
  }

  /** Zoom by a factor around a point (client coordinates), or around the middle. */
  zoomBy(factor: number, clientX?: number, clientY?: number) {
    const point = clientX === undefined || clientY === undefined ? { x: 0, y: 0 } : this.toStage(clientX, clientY);
    const zoom = this.zoomAround(this.zoom.scale * factor, point, point, this.zoom);
    this.zoom = zoom.scale < SNAP_SCALE ? NO_ZOOM : zoom;
  }

  reset() {
    this.zoom = NO_ZOOM;
    this.dragX = 0;
    this.active = false;
    this.pointers.clear();
    this.pinch = null;
    this.start = null;
    this.lastTap = null;
  }

  // ---- internals

  private restart(time: number) {
    const [point] = [...this.pointers.values()];
    this.start = { point, zoom: this.zoom, time };
    this.axis = null;
    this.moved = false;
  }

  private tap(point: Point, time: number) {
    const last = this.lastTap;
    if (last && time - last.time < DOUBLE_TAP_TIME && distance(point, last.point) < DOUBLE_TAP_DISTANCE) {
      this.lastTap = null;
      this.zoom = this.zoomed ? NO_ZOOM : this.zoomAround(DOUBLE_TAP_SCALE, point, point, NO_ZOOM);
      return;
    }
    this.lastTap = { point, time };
  }

  /* Keeps the spot of the picture that was under `from` under `to`. */
  private zoomAround(scale: number, to: Point, from: Point, zoom: FdMediaZoom): FdMediaZoom {
    const next = clampNumber(scale, 1, MAX_SCALE);
    const spotX = (from.x - zoom.x) / zoom.scale;
    const spotY = (from.y - zoom.y) / zoom.scale;
    return this.clamp({ scale: next, x: to.x - spotX * next, y: to.y - spotY * next });
  }

  private clamp(zoom: FdMediaZoom): FdMediaZoom {
    const scale = clampNumber(zoom.scale, 1, MAX_SCALE);
    const maxX = (this.width * (scale - 1)) / 2;
    const maxY = (this.height * (scale - 1)) / 2;
    return { scale, x: clampNumber(zoom.x, -maxX, maxX), y: clampNumber(zoom.y, -maxY, maxY) };
  }

  private middle(): Point {
    const [a, b] = [...this.pointers.values()];
    return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
  }

  private toStage(clientX: number, clientY: number): Point {
    return { x: clientX - this.left - this.width / 2, y: clientY - this.top - this.height / 2 };
  }
}
