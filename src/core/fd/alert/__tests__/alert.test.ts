import { createElement } from 'lwc';
import FdAlert from '../alert';

describe('fd-alert', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders with the default "info" variant class', () => {
    const element = createElement('fd-alert', { is: FdAlert });
    document.body.appendChild(element);

    const alert = element.shadowRoot!.querySelector('div')!;
    expect(alert.className).toBe('alert alert--info');
  });

  it('applies the requested variant class', () => {
    const element = createElement('fd-alert', { is: FdAlert });
    element.variant = 'danger';
    document.body.appendChild(element);

    const alert = element.shadowRoot!.querySelector('div')!;
    expect(alert.className).toBe('alert alert--danger');
  });

  it('uses the polite role="status" for info/success (non-urgent) variants', () => {
    // role="alert" is an assertive live region that interrupts whatever a
    // screen reader is currently announcing -- too heavy-handed for a
    // routine info/success message.
    const element = createElement('fd-alert', { is: FdAlert });
    document.body.appendChild(element);
    expect(element.shadowRoot!.querySelector('[role="status"]')).not.toBeNull();

    element.variant = 'success';
    return Promise.resolve().then(() => {
      expect(element.shadowRoot!.querySelector('[role="status"]')).not.toBeNull();
    });
  });

  it('uses the assertive role="alert" for warning/danger (urgent) variants', () => {
    const element = createElement('fd-alert', { is: FdAlert });
    element.variant = 'warning';
    document.body.appendChild(element);
    expect(element.shadowRoot!.querySelector('[role="alert"]')).not.toBeNull();

    element.variant = 'danger';
    return Promise.resolve().then(() => {
      expect(element.shadowRoot!.querySelector('[role="alert"]')).not.toBeNull();
    });
  });

  it('renders a title when provided', () => {
    const element = createElement('fd-alert', { is: FdAlert });
    element.title = 'Something went wrong';
    document.body.appendChild(element);

    const title = element.shadowRoot!.querySelector('.title');
    expect(title).not.toBeNull();
    expect(title!.textContent).toBe('Something went wrong');
  });

  it('omits the title element when none is provided', () => {
    const element = createElement('fd-alert', { is: FdAlert });
    document.body.appendChild(element);

    const title = element.shadowRoot!.querySelector('.title');
    expect(title).toBeNull();
  });

  it('exposes a default slot for body content', () => {
    const element = createElement('fd-alert', { is: FdAlert });
    document.body.appendChild(element);

    const slot = element.shadowRoot!.querySelector('slot');
    expect(slot).not.toBeNull();
  });
});
