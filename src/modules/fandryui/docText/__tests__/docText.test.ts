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

describe('toSegments with links', () => {
  it('links the first mention of each component, quoted or not, to its canonical page', () => {
    expect(toSegments('Pair with fandry-radio-group, like `fandry-radio-group` and `fandry-select`.', {})).toEqual([
      { key: '0.0', text: 'Pair with ', code: false },
      { key: '0.1', text: 'fandry-radio-group', code: false, href: '/components/radio-group/' },
      { key: '0.2', text: ', like ', code: false },
      { key: '1', text: 'fandry-radio-group', code: true },
      { key: '2', text: ' and ', code: false },
      { key: '3', text: 'fandry-select', code: true, href: '/components/select/' },
      { key: '4', text: '.', code: false }
    ]);
  });

  it("leaves the page's own component, blocks and unknown names alone", () => {
    const text = 'A crumb in fandry-breadcrumb, a fandry-data-table or `fandry-media-viewer`.';
    expect(toSegments(text, { current: 'breadcrumb' }).filter((segment) => segment.href)).toEqual([]);
  });

  it('links nothing without options', () => {
    expect(toSegments('`fandry-select`')).toEqual([{ key: '1', text: 'fandry-select', code: true }]);
  });
});

describe('fandryui-doc-text', () => {
  it('renders links with fandry-link when `links` is set', () => {
    const element = createElement('fandryui-doc-text', { is: DocText });
    Object.assign(element, { text: 'Use `fandry-select` or fandry-input.', links: true });
    document.body.appendChild(element);

    const links = Array.from(element.querySelectorAll('fandry-link')) as (HTMLElement & { href: string })[];
    expect(links.map((link) => link.href)).toEqual(['/components/select/', '/components/input/']);
    expect(links[0].querySelector('code')?.textContent).toBe('fandry-select');
    expect(element.textContent).toBe('Use fandry-select or fandry-input.');
    element.remove();
  });

  it('renders code spans as <code> in light DOM', () => {
    const element = createElement('fandryui-doc-text', { is: DocText });
    element.text = 'Use `::part()` here';
    document.body.appendChild(element);

    expect(element.querySelector('code')?.textContent).toBe('::part()');
    expect(element.textContent).toBe('Use ::part() here');
    element.remove();
  });
});
