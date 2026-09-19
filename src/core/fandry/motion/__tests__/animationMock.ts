// jsdom has no Web Animations API, so `exitFinished` (fandry/motion) resolves
// immediately and a closing panel would be removed before a test could
// observe it in its EXITING phase. This stands in for the browser's
// animation timeline: while installed, every element reports one running
// animation that stays pending until the test calls `finish()` -- so tests
// assert on lifecycle (still mounted while exiting, removed once finished),
// never on a duration.
export interface AnimationMock {
  finish(): Promise<void>;
  restore(): void;
}

// A few microtask turns -- enough for `exitFinished(...).then(...)` to run
// and the resulting re-render to land. Counting turns is deterministic under
// fake timers, unlike waiting on a timer.
export const settle = async () => {
  for (let i = 0; i < 5; i++) {
    await Promise.resolve();
  }
};

export function mockAnimations(): AnimationMock {
  const original = Element.prototype.getAnimations;
  let pending: Array<() => void> = [];

  Element.prototype.getAnimations = function () {
    return [
      { finished: new Promise<void>((resolve) => pending.push(resolve)) }
    ] as unknown as Animation[];
  };

  return {
    async finish() {
      pending.forEach((resolve) => resolve());
      pending = [];
      await settle();
    },
    restore() {
      Element.prototype.getAnimations = original;
    }
  };
}
