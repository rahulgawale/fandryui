import { FdMediaGestures, MAX_SCALE, NO_ZOOM } from '../mediaGestures';

// A 400 x 300 stage at the top left of the page: its middle is (200, 150).
function stage() {
  const gestures = new FdMediaGestures();
  gestures.measure({ width: 400, height: 300, left: 0, top: 0 });
  return gestures;
}

function drag(gestures: FdMediaGestures, from: number, to: number, duration = 300) {
  gestures.down(1, from, 150, 0);
  gestures.move(1, (from + to) / 2, 150);
  gestures.move(1, to, 150);
  return gestures.up(1, duration);
}

function tap(gestures: FdMediaGestures, x: number, y: number, time: number) {
  gestures.down(1, x, y, time);
  return gestures.up(1, time + 50);
}

describe('FdMediaGestures', () => {
  describe('swipe', () => {
    it('follows the pointer sideways while it is down', () => {
      const gestures = stage();
      gestures.down(1, 300, 150, 0);
      gestures.move(1, 240, 155);
      expect(gestures.active).toBe(true);
      expect(gestures.dragX).toBe(-60);
    });

    it('reports next for a long drag to the left, previous for one to the right', () => {
      expect(drag(stage(), 300, 150)).toBe('next');
      expect(drag(stage(), 100, 250)).toBe('previous');
    });

    it('reports nothing for a short, slow drag', () => {
      expect(drag(stage(), 300, 270, 1000)).toBeNull();
    });

    it('reports a short drag that was fast enough (a flick)', () => {
      expect(drag(stage(), 300, 260, 50)).toBe('next');
    });

    it('ignores a mostly vertical drag', () => {
      const gestures = stage();
      gestures.down(1, 200, 50, 0);
      gestures.move(1, 190, 250);
      expect(gestures.dragX).toBe(0);
      expect(gestures.up(1, 100)).toBeNull();
    });

    it('lets go when the browser cancels the pointer', () => {
      const gestures = stage();
      gestures.down(1, 300, 150, 0);
      gestures.move(1, 200, 150);
      gestures.cancel(1);
      expect(gestures.active).toBe(false);
      expect(gestures.dragX).toBe(0);
    });
  });

  describe('zoom', () => {
    it('zooms in on a double tap, at the spot tapped, and back out on the next', () => {
      const gestures = stage();
      tap(gestures, 300, 150, 0);
      tap(gestures, 300, 150, 200);
      expect(gestures.zoom.scale).toBe(2.5);
      // The spot 100px right of the middle stays under the finger.
      expect((100 - gestures.zoom.x) / gestures.zoom.scale).toBeCloseTo(100);
      tap(gestures, 300, 150, 1000);
      tap(gestures, 300, 150, 1200);
      expect(gestures.zoom).toEqual(NO_ZOOM);
    });

    it('does not take two slow taps for a double tap', () => {
      const gestures = stage();
      tap(gestures, 200, 150, 0);
      tap(gestures, 200, 150, 800);
      expect(gestures.zoom).toEqual(NO_ZOOM);
    });

    it('pinches: two fingers moving apart zoom by the change in distance', () => {
      const gestures = stage();
      gestures.down(1, 150, 150, 0);
      gestures.down(2, 250, 150, 0);
      gestures.move(1, 100, 150);
      gestures.move(2, 300, 150);
      expect(gestures.zoom.scale).toBeCloseTo(2);
      // Pinched around the middle, so the middle stays put.
      expect(gestures.zoom.x).toBeCloseTo(0);
      expect(gestures.zoom.y).toBeCloseTo(0);
    });

    it('never zooms past MAX_SCALE or below normal size', () => {
      const gestures = stage();
      gestures.zoomBy(100);
      expect(gestures.zoom.scale).toBe(MAX_SCALE);
      gestures.zoomBy(0.001);
      expect(gestures.zoom).toEqual(NO_ZOOM);
    });

    it('pans a zoomed picture with one finger, but not past its edges', () => {
      const gestures = stage();
      gestures.zoomBy(2);
      gestures.down(1, 200, 150, 0);
      gestures.move(1, 260, 170);
      expect(gestures.zoom).toEqual({ scale: 2, x: 60, y: 20 });
      // At 2x the picture is 800 wide: it can move 200 each way.
      gestures.move(1, 900, 150);
      expect(gestures.zoom.x).toBe(200);
      expect(gestures.up(1, 100)).toBeNull();
      expect(gestures.dragX).toBe(0);
    });

    it('keeps panning with the finger left after a pinch', () => {
      const gestures = stage();
      gestures.down(1, 150, 150, 0);
      gestures.down(2, 250, 150, 0);
      gestures.move(2, 350, 150);
      const scale = gestures.zoom.scale;
      expect(gestures.up(2, 100)).toBeNull();
      expect(gestures.active).toBe(true);
      const x = gestures.zoom.x;
      gestures.move(1, 170, 150);
      expect(gestures.zoom.scale).toBe(scale);
      expect(gestures.zoom.x).toBeCloseTo(x + 20);
    });

    it('keeps a letterboxed picture from being panned past its own edges', () => {
      // A wide picture drawn 400 x 200 in the 400 x 300 stage.
      const gestures = new FdMediaGestures();
      gestures.measure({ width: 400, height: 300, left: 0, top: 0 }, { width: 400, height: 200 });
      gestures.zoomBy(2);
      gestures.panBy(1000, 1000);
      // 800 x 400 at 2x: 200 to spare across, 50 down.
      expect(gestures.zoom).toEqual({ scale: 2, x: 200, y: 50 });
      gestures.zoomBy(0.7);
      // At 1.4x it is 280 tall, inside the stage: centred, not movable up or down.
      expect(gestures.zoom.y).toBe(0);
    });

    it('panBy() moves only a zoomed picture', () => {
      const gestures = stage();
      gestures.panBy(50, 0);
      expect(gestures.zoom).toEqual(NO_ZOOM);
      gestures.zoomBy(2);
      gestures.panBy(-50, 20);
      expect(gestures.zoom).toEqual({ scale: 2, x: -50, y: 20 });
    });

    it('does not take a tap after a pinch for half of a double tap', () => {
      const gestures = stage();
      gestures.down(1, 150, 150, 0);
      gestures.down(2, 250, 150, 0);
      gestures.move(2, 350, 150);
      gestures.up(2, 100);
      gestures.up(1, 120);
      const zoom = gestures.zoom;
      expect(zoom.scale).toBeGreaterThan(1);
      tap(gestures, 150, 150, 200);
      expect(gestures.zoom).toEqual(zoom);
    });

    it('reset() puts everything back', () => {
      const gestures = stage();
      gestures.zoomBy(3);
      gestures.reset();
      expect(gestures.zoom).toEqual(NO_ZOOM);
      expect(gestures.active).toBe(false);
    });
  });
});
