import { createElement } from 'lwc';
import DocText, { toSegments } from 'fandryui/docText';

describe('toSegments', () => {
  it('turns backtick spans into code segments', () => {
    expect(toSegments('Set `--fd-primary` on `:root`.')).toEqual([
      { key: '0', text: 'Set ', code: false },
      { key: '1', text: '--fd-primary', code: true },
      { key: '2', text: ' on ', code: false },
      { key: '3', text: ':root', code: true },
      { key: '4', text: '.', code: false }
    ]);
  });

  it('keeps an unclosed backtick as text', () => {
    expect(toSegments('a `b` c `d')).toEqual([
      { key: '0', text: 'a ', code: false },
      { key: '1', text: 'b', code: true },
      { key: '2', text: ' c `d', code: false }
    ]);
  });

  it('handles empty and plain text', () => {
    expect(toSegments('')).toEqual([]);
    expect(toSegments(undefined)).toEqual([]);
    expect(toSegments('plain')).toEqual([{ key: '0', text: 'plain', code: false }]);
  });
});

describe('fandryui-doc-text', () => {
  it('renders code spans as <code> in light DOM', () => {
    const element = createElement('fandryui-doc-text', { is: DocText });
    element.text = 'Use `::part()` here';
    document.body.appendChild(element);

    expect(element.querySelector('code')?.textContent).toBe('::part()');
    expect(element.textContent).toBe('Use ::part() here');
    element.remove();
  });
});
