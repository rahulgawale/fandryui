import { createElement } from 'lwc';
import FdPagination from '../pagination';

describe('fandry-pagination', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders neither link when no hrefs are provided', () => {
    const element = createElement('fandry-pagination', { is: FdPagination });
    document.body.appendChild(element);

    expect(element.shadowRoot!.querySelectorAll('a').length).toBe(0);
  });

  it('renders a previous link when previousHref is set', () => {
    const element = createElement('fandry-pagination', { is: FdPagination });
    element.previousHref = '/components/badge';
    element.previousLabel = 'Badge';
    document.body.appendChild(element);

    const previous = element.shadowRoot!.querySelector('a.link--previous')!;
    expect(previous.getAttribute('href')).toBe('/components/badge');
    expect(previous.querySelector('.title')!.textContent).toBe('Badge');
    expect(element.shadowRoot!.querySelector('a.link--next')).toBeNull();
  });

  it('renders a next link when nextHref is set', () => {
    const element = createElement('fandry-pagination', { is: FdPagination });
    element.nextHref = '/components/card';
    element.nextLabel = 'Card';
    document.body.appendChild(element);

    const next = element.shadowRoot!.querySelector('a.link--next')!;
    expect(next.getAttribute('href')).toBe('/components/card');
    expect(next.querySelector('.title')!.textContent).toBe('Card');
    expect(element.shadowRoot!.querySelector('a.link--previous')).toBeNull();
  });

  it('renders both links when both hrefs are provided', () => {
    const element = createElement('fandry-pagination', { is: FdPagination });
    element.previousHref = '/components/badge';
    element.previousLabel = 'Badge';
    element.nextHref = '/components/card';
    element.nextLabel = 'Card';
    document.body.appendChild(element);

    expect(element.shadowRoot!.querySelectorAll('a').length).toBe(2);
  });

  describe('page mode', () => {
    const getButtons = (element: HTMLElement) =>
      Array.from(element.shadowRoot!.querySelectorAll('fandry-button')) as (HTMLElement & {
        disabled: boolean;
      })[];

    it('renders Previous/Next buttons and a status instead of links once pageIndex is set', () => {
      const element = createElement('fandry-pagination', { is: FdPagination });
      element.pageIndex = 0;
      element.pageCount = 3;
      document.body.appendChild(element);

      expect(element.shadowRoot!.querySelectorAll('a').length).toBe(0);
      expect(getButtons(element).length).toBe(2);
      expect(element.shadowRoot!.querySelector('.status')!.textContent).toBe('Page 1 of 3');
    });

    it('disables Previous on the first page and Next on the last', async () => {
      const element = createElement('fandry-pagination', { is: FdPagination });
      element.pageIndex = 0;
      element.pageCount = 2;
      document.body.appendChild(element);

      let [previous, next] = getButtons(element);
      expect(previous.disabled).toBe(true);
      expect(next.disabled).toBe(false);

      element.pageIndex = 1;
      await Promise.resolve();

      [previous, next] = getButtons(element);
      expect(previous.disabled).toBe(false);
      expect(next.disabled).toBe(true);
    });

    it('leaves Next enabled and drops "of N" when pageCount is unknown', () => {
      const element = createElement('fandry-pagination', { is: FdPagination });
      element.pageIndex = 4;
      document.body.appendChild(element);

      expect(getButtons(element)[1].disabled).toBe(false);
      expect(element.shadowRoot!.querySelector('.status')!.textContent).toBe('Page 5');
    });

    it('dispatches "change" with the target pageIndex, without moving pageIndex itself', () => {
      const element = createElement('fandry-pagination', { is: FdPagination });
      element.pageIndex = 1;
      element.pageCount = 3;
      document.body.appendChild(element);

      const handler = jest.fn();
      element.addEventListener('change', handler);

      const [previous, next] = getButtons(element);
      next.click();
      previous.click();

      expect(handler).toHaveBeenCalledTimes(2);
      expect(handler.mock.calls[0][0].detail).toEqual({ pageIndex: 2 });
      expect(handler.mock.calls[1][0].detail).toEqual({ pageIndex: 0 });
      expect(element.pageIndex).toBe(1);
    });

    it('does not dispatch "change" past either end', () => {
      const element = createElement('fandry-pagination', { is: FdPagination });
      element.pageIndex = 0;
      element.pageCount = 1;
      document.body.appendChild(element);

      const handler = jest.fn();
      element.addEventListener('change', handler);

      // Dispatched on the wrapper directly -- a disabled fandry-button
      // swallows .click(), but a slotted replacement control might not.
      element.shadowRoot!
        .querySelectorAll('nav > span')
        .forEach((control) => control.dispatchEvent(new Event('click')));

      expect(handler).not.toHaveBeenCalled();
    });
  });
});
