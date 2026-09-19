import { createElement } from 'lwc';
import FdProgress from '../progress';

describe('fandry-progress', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('defaults to a 0-width bar with min/max reflected', () => {
    const element = createElement('fandry-progress', { is: FdProgress });
    document.body.appendChild(element);

    const track = element.shadowRoot!.querySelector('.track')!;
    const bar = element.shadowRoot!.querySelector('.bar') as HTMLElement;
    expect(track.getAttribute('aria-valuemin')).toBe('0');
    expect(track.getAttribute('aria-valuemax')).toBe('100');
    expect(track.getAttribute('aria-valuenow')).toBe('0');
    expect(bar.style.width).toBe('0%');
  });

  it('reflects value/max as a percentage width and aria-valuenow', () => {
    const element = createElement('fandry-progress', { is: FdProgress });
    element.value = 30;
    element.max = 50;
    document.body.appendChild(element);

    const track = element.shadowRoot!.querySelector('.track')!;
    const bar = element.shadowRoot!.querySelector('.bar') as HTMLElement;
    expect(track.getAttribute('aria-valuenow')).toBe('30');
    expect(bar.style.width).toBe('60%');
  });

  it('coerces a string value/max attribute to a number', () => {
    const element = createElement('fandry-progress', { is: FdProgress });
    (element as unknown as { value: string }).value = '25';
    (element as unknown as { max: string }).max = '50';
    document.body.appendChild(element);

    const bar = element.shadowRoot!.querySelector('.bar') as HTMLElement;
    expect(bar.style.width).toBe('50%');
  });

  it('clamps value to the 0-max range', () => {
    const element = createElement('fandry-progress', { is: FdProgress });
    element.value = 999;
    element.max = 100;
    document.body.appendChild(element);

    const bar = element.shadowRoot!.querySelector('.bar') as HTMLElement;
    expect(bar.style.width).toBe('100%');
  });

  it('omits aria-valuenow and the fixed width when indeterminate', () => {
    const element = createElement('fandry-progress', { is: FdProgress });
    element.indeterminate = true;
    element.value = 40;
    document.body.appendChild(element);

    const track = element.shadowRoot!.querySelector('.track')!;
    const bar = element.shadowRoot!.querySelector('.bar') as HTMLElement;
    expect(track.hasAttribute('aria-valuenow')).toBe(false);
    expect(bar.classList.contains('bar--indeterminate')).toBe(true);
    expect(bar.style.width).toBe('');
  });
});
