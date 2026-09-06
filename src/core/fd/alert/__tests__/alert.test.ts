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

  it('exposes role="alert" for assistive technology', () => {
    const element = createElement('fd-alert', { is: FdAlert });
    document.body.appendChild(element);

    const alert = element.shadowRoot!.querySelector('[role="alert"]');
    expect(alert).not.toBeNull();
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
