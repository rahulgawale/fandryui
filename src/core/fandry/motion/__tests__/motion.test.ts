import { exitFinished } from '../motion';

describe('fandry/motion exitFinished', () => {
  const original = Element.prototype.getAnimations;

  afterEach(() => {
    Element.prototype.getAnimations = original;
  });

  it('resolves immediately when there is no element', async () => {
    await expect(exitFinished(null)).resolves.toBeUndefined();
  });

  it('resolves immediately when the Web Animations API is unavailable', async () => {
    // jsdom's default: no getAnimations at all.
    const element = document.createElement('div');
    await expect(exitFinished(element)).resolves.toBeUndefined();
  });

  it('resolves immediately when nothing is animating (e.g. animation overridden to none)', async () => {
    Element.prototype.getAnimations = () => [];
    await expect(exitFinished(document.createElement('div'))).resolves.toEqual([]);
  });

  it('waits for every running animation to finish', async () => {
    let finishA!: () => void;
    let finishB!: () => void;
    Element.prototype.getAnimations = () =>
      [
        { finished: new Promise<void>((resolve) => (finishA = resolve)) },
        { finished: new Promise<void>((resolve) => (finishB = resolve)) }
      ] as unknown as Animation[];

    const done = jest.fn();
    exitFinished(document.createElement('div')).then(done);

    finishA();
    await Promise.resolve();
    await Promise.resolve();
    expect(done).not.toHaveBeenCalled();

    finishB();
    await Promise.resolve();
    await Promise.resolve();
    expect(done).toHaveBeenCalledTimes(1);
  });

  it('still resolves when an animation is cancelled (a reopen swaps it out)', async () => {
    Element.prototype.getAnimations = () =>
      [{ finished: Promise.reject(new DOMException('cancelled', 'AbortError')) }] as unknown as Animation[];

    await expect(exitFinished(document.createElement('div'))).resolves.toBeDefined();
  });
});
