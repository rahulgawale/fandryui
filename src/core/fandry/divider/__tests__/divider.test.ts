import { createElement } from 'lwc';
import FdDivider from '../divider';

describe('fandry-divider', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders with the default "horizontal" orientation class', () => {
    const element = createElement('fandry-divider', { is: FdDivider });
    document.body.appendChild(element);

    const divider = element.shadowRoot!.querySelector('div')!;
    expect(divider.className).toBe('divider divider--horizontal');
  });

  it('applies the vertical orientation class', () => {
    const element = createElement('fandry-divider', { is: FdDivider });
    element.orientation = 'vertical';
    document.body.appendChild(element);

    const divider = element.shadowRoot!.querySelector('div')!;
    expect(divider.className).toBe('divider divider--vertical');
  });

  it('exposes role="separator" with a matching aria-orientation', () => {
    const element = createElement('fandry-divider', { is: FdDivider });
    element.orientation = 'vertical';
    document.body.appendChild(element);

    const divider = element.shadowRoot!.querySelector('[role="separator"]')!;
    expect(divider.getAttribute('aria-orientation')).toBe('vertical');
  });
});
