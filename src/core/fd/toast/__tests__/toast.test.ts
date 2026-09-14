import { createElement } from 'lwc';
import FdToast from '../toast';

const flush = () => Promise.resolve();

// jsdom doesn't actually run CSS animations, so the exit animation's real
// `animationend` never fires on its own -- this stands in for the browser
// finishing it, matching fd-tooltip's own test harness.
const endAnimation = (toast: Element) => {
  toast.dispatchEvent(new Event('animationend'));
};

describe('fd-toast', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders with the default "info" variant class', () => {
    const element = createElement('fd-toast', { is: FdToast });
    document.body.appendChild(element);

    const toast = element.shadowRoot!.querySelector('div')!;
    expect(toast.className).toBe('toast toast--info');
  });

  it('applies the requested variant class', () => {
    const element = createElement('fd-toast', { is: FdToast });
    element.variant = 'success';
    document.body.appendChild(element);

    const toast = element.shadowRoot!.querySelector('div')!;
    expect(toast.className).toBe('toast toast--success');
  });

  it('uses the polite role="status" for info/success (non-urgent) variants', () => {
    const element = createElement('fd-toast', { is: FdToast });
    document.body.appendChild(element);
    expect(element.shadowRoot!.querySelector('[role="status"]')).not.toBeNull();
  });

  it('uses the assertive role="alert" for warning/danger (urgent) variants', () => {
    const element = createElement('fd-toast', { is: FdToast });
    element.variant = 'danger';
    document.body.appendChild(element);
    expect(element.shadowRoot!.querySelector('[role="alert"]')).not.toBeNull();
  });

  it('exposes a default slot for content', () => {
    const element = createElement('fd-toast', { is: FdToast });
    document.body.appendChild(element);

    const slot = element.shadowRoot!.querySelector('slot');
    expect(slot).not.toBeNull();
  });

  it('auto-dismisses after the given duration once the exit animation ends', async () => {
    const element = createElement('fd-toast', { is: FdToast });
    element.duration = 3000;
    const handler = jest.fn();
    element.addEventListener('dismiss', handler);
    document.body.appendChild(element);
    await flush();

    jest.advanceTimersByTime(2999);
    await flush();
    expect(handler).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1);
    await flush();
    const toast = element.shadowRoot!.querySelector('.toast')!;
    expect(toast.className).toContain('toast--closing');
    expect(handler).not.toHaveBeenCalled();

    endAnimation(toast);
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('never auto-dismisses when duration is 0', async () => {
    const element = createElement('fd-toast', { is: FdToast });
    element.duration = 0;
    const handler = jest.fn();
    element.addEventListener('dismiss', handler);
    document.body.appendChild(element);
    await flush();

    jest.advanceTimersByTime(100000);
    await flush();
    expect(handler).not.toHaveBeenCalled();
  });

  it('dismiss() triggers the same closing/exit-animation path as the timer', async () => {
    const element = createElement('fd-toast', { is: FdToast });
    element.duration = 0;
    const handler = jest.fn();
    element.addEventListener('dismiss', handler);
    document.body.appendChild(element);
    await flush();

    element.dismiss();
    await flush();

    const toast = element.shadowRoot!.querySelector('.toast')!;
    expect(toast.className).toContain('toast--closing');

    endAnimation(toast);
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('dismiss() is idempotent -- a second call does not restart the close or fire twice', async () => {
    const element = createElement('fd-toast', { is: FdToast });
    element.duration = 0;
    const handler = jest.fn();
    element.addEventListener('dismiss', handler);
    document.body.appendChild(element);
    await flush();

    element.dismiss();
    element.dismiss();
    await flush();

    const toast = element.shadowRoot!.querySelector('.toast')!;
    endAnimation(toast);
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('clears the auto-dismiss timer on disconnect so it cannot fire after removal', async () => {
    const element = createElement('fd-toast', { is: FdToast });
    element.duration = 1000;
    const handler = jest.fn();
    element.addEventListener('dismiss', handler);
    document.body.appendChild(element);
    await flush();

    document.body.removeChild(element);
    jest.advanceTimersByTime(5000);
    await flush();

    expect(handler).not.toHaveBeenCalled();
  });
});
