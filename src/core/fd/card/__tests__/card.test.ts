import { createElement } from 'lwc';
import FdCard from '../card';

describe('fd-card', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders a bordered container', () => {
    const element = createElement('fd-card', { is: FdCard });
    document.body.appendChild(element);

    const card = element.shadowRoot!.querySelector('.card');
    expect(card).not.toBeNull();
  });

  it('exposes a default slot for content', () => {
    const element = createElement('fd-card', { is: FdCard });
    document.body.appendChild(element);

    const slot = element.shadowRoot!.querySelector('slot');
    expect(slot).not.toBeNull();
  });
});
