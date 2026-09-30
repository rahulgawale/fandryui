import { readFileSync } from 'fs';
import { resolve } from 'path';
import { THEMING_TOKENS } from '../gettingStartedData';

const TOKENS_CSS = resolve(__dirname, '../../../../core/fandry/base/tokens.css');

/* The theming page lists every public token by hand, grouped. A token added
   to or removed from tokens.css has to show up there too. */
describe('theming page token list', () => {
  it('names exactly the public tokens tokens.css resolves', () => {
    const css = readFileSync(TOKENS_CSS, 'utf8');
    const declared = new Set([...css.matchAll(/--_fd-[\w-]+:\s*var\((--fd-[\w-]+)/g)].map(([, name]) => name));
    const listed = new Set(THEMING_TOKENS.match(/--fd-[\w-]+/g));

    expect([...listed].sort()).toEqual([...declared].sort());
  });
});
