import { createElement } from 'lwc';
import FdButton from '../button';

describe('fd-button', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders with default variant and size classes', () => {
    const element = createElement('fd-button', { is: FdButton });
    document.body.appendChild(element);

    const button = element.shadowRoot!.querySelector('button')!;
    expect(button.className).toBe('button button--default button--md');
  });

  it('reflects the disabled attribute onto the native button', () => {
    const element = createElement('fd-button', { is: FdButton });
    element.disabled = true;
    document.body.appendChild(element);

    const button = element.shadowRoot!.querySelector('button')!;
    expect(button.disabled).toBe(true);
  });

  it('applies the requested variant and size classes', () => {
    const element = createElement('fd-button', { is: FdButton });
    element.variant = 'secondary';
    element.size = 'sm';
    document.body.appendChild(element);

    const button = element.shadowRoot!.querySelector('button')!;
    expect(button.className).toBe('button button--secondary button--sm');
  });

  it('defaults to a native button type of "button"', () => {
    const element = createElement('fd-button', { is: FdButton });
    document.body.appendChild(element);

    const button = element.shadowRoot!.querySelector('button')!;
    expect(button.type).toBe('button');
  });
});
