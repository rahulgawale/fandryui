import { createElement } from 'lwc';
import CustomSearch from './customSearch';

const flush = () => Promise.resolve();

describe('extending fandry/searchState', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('gives a subclass with its own template the search, ranking and keyboard behavior', async () => {
    const element = createElement('x-custom-search', { is: CustomSearch });
    element.people = [
      { label: 'Ada Lovelace', value: 'ada' },
      { label: 'Grace Hopper', value: 'grace' },
      { label: 'Alan Turing', value: 'alan' }
    ];
    document.body.appendChild(element);
    const picked = jest.fn();
    element.addEventListener('pick', picked);

    const query = element.shadowRoot!.querySelector('.q') as HTMLInputElement;
    query.value = 'a';
    query.dispatchEvent(new Event('input'));
    await flush();

    // Prefix matches (Ada, Alan) outrank Grace's mid-word "a".
    const names = () => Array.from(element.shadowRoot!.querySelectorAll('li')).map((li) => li.textContent!.trim());
    expect(names()).toEqual(['Ada Lovelace', 'Alan Turing', 'Grace Hopper']);

    query.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', cancelable: true }));
    await flush();
    query.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', cancelable: true }));

    expect(picked.mock.calls[0][0].detail).toBe('alan');
  });
});
