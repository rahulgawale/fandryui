import { readdirSync, readFileSync, statSync } from 'fs';
import { join, relative, resolve } from 'path';

/*
  Keeps tokens themable. A site sets the public --fd-* name; tokens.css
  declares the private --_fd-* one from it; components read only the private
  one. Declaring a public name inside a component, or reading one, is what
  seals a token off from the page again -- quietly, since nothing looks
  broken until a site tries to theme it.
*/

const ROOT = resolve(__dirname, '../../../../..');
const TOKENS = join(ROOT, 'src/core/fandry/base/tokens.css');
const COMPONENT_DIRS = ['src/core/fandry', 'src/salesforce/fandry', 'src/blocks/fandry'];

function cssFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return name === '__tests__' ? [] : cssFiles(path);
    return name.endsWith('.css') ? [path] : [];
  });
}

const tokensCss = readFileSync(TOKENS, 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
const mainBlock = tokensCss.slice(0, tokensCss.indexOf('@media'));
const declarations = [...mainBlock.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)].map(([, name, value]) => ({
  name,
  value: value.replace(/\s+/g, ' ').trim()
}));
const tokenNames = declarations.map(({ name }) => name.replace(/^--_fd-/, ''));

describe('design tokens', () => {
  it('declares only private names, each from its public name', () => {
    expect(declarations.length).toBeGreaterThan(50);
    for (const { name, value } of declarations) {
      expect(name).toMatch(/^--_fd-/);
      const token = name.slice('--_fd-'.length);
      expect(value.startsWith(`var(--fd-${token},`)).toBe(true);
    }
  });

  it('lets reduced motion override only private durations', () => {
    const media = tokensCss.slice(tokensCss.indexOf('@media'));
    const names = [...media.matchAll(/(--[\w-]+)\s*:/g)].map(([, name]) => name);
    expect(names.length).toBeGreaterThan(0);
    names.forEach((name) => expect(name).toMatch(/^--_fd-duration-/));
  });

  it('is never declared outside tokens.css, and never read by its public name', () => {
    const tokenPattern = tokenNames.join('|');
    const declaresToken = new RegExp(`(^|[\\s;{])--_?fd-(${tokenPattern})\\s*:`, 'm');
    const readsPublic = new RegExp(`var\\(--fd-(${tokenPattern})(?![\\w-])`);
    const problems: string[] = [];
    for (const dir of COMPONENT_DIRS) {
      for (const file of cssFiles(join(ROOT, dir))) {
        if (file === TOKENS) continue;
        const css = readFileSync(file, 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
        const where = relative(ROOT, file);
        if (declaresToken.test(css)) problems.push(`${where} declares a token`);
        if (readsPublic.test(css)) problems.push(`${where} reads a public --fd-* token; read --_fd-* instead`);
      }
    }
    expect(problems).toEqual([]);
  });

  /* A length or color written into a component can't be themed. The only
     literals allowed are 1px (screen-reader-only boxes, a one-pixel optical
     nudge) and zero; everything else is a token, or derived from one. */
  it('has no hard-coded lengths or colors in component CSS', () => {
    const literal = /(?<![\w-])(?!-?1px\b)(-?\d*\.?\d+(px|rem)\b|#[0-9a-fA-F]{3,8}\b|rgba?\()/;
    const problems: string[] = [];
    for (const dir of COMPONENT_DIRS) {
      for (const file of cssFiles(join(ROOT, dir))) {
        if (file === TOKENS || file.endsWith('motion.css')) continue;
        const lines = readFileSync(file, 'utf8').replace(/\/\*[\s\S]*?\*\//g, '').split(/\r?\n/);
        lines.forEach((line, index) => {
          if (literal.test(line)) problems.push(`${relative(ROOT, file)}:${index + 1}: ${line.trim()}`);
        });
      }
    }
    expect(problems).toEqual([]);
  });
});
