import { readdirSync, readFileSync, statSync } from 'fs';
import { join, relative, resolve } from 'path';
import { AriaPropNameToAttrNameMap } from '@lwc/shared';
import { resolveElementProps } from '../elementProps';

describe('resolveElementProps', () => {
  let warn: jest.SpyInstance;

  beforeEach(() => {
    warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => warn.mockRestore());

  it('drops reserved keys and keeps the rest', () => {
    const result = resolveElementProps({}, { tabIndex: 0, checked: true }, ['checked'], 'fandry-x');

    expect(result).toEqual({ tabIndex: 0 });
  });

  it('warns once per object, per component', () => {
    const first = {};
    const second = {};
    const props = { checked: true };

    resolveElementProps(first, props, ['checked'], 'fandry-x');
    resolveElementProps(first, props, ['checked'], 'fandry-x');
    resolveElementProps(second, props, ['checked'], 'fandry-x');
    resolveElementProps(first, { checked: false }, ['checked'], 'fandry-x');

    expect(warn).toHaveBeenCalledTimes(3);
    expect(warn.mock.calls[0][0]).toContain('"checked"');
  });
});

/* Base holds shared styles only. Its old helpers remain as deprecated
   delegates for consumer classes; the library itself imports the modules. */
describe('the library does not call Base helpers', () => {
  const ROOT = resolve(__dirname, '../../../../..');
  const files = (dir: string): string[] =>
    readdirSync(dir).flatMap((name) => {
      const path = join(dir, name);
      if (statSync(path).isDirectory()) return name === '__tests__' ? [] : files(path);
      return name.endsWith('.ts') && !path.endsWith('base/base.ts') ? [path] : [];
    });

  it('imports fandry/elementProps and fandry/anchorTabStop instead', () => {
    const calls = /(this|super)\.(resolveElementProps|activateAnchorOnEnter|resolveTabStopIndex|withoutTabIndex)\(/;
    const offenders = ['src/core/fandry', 'src/salesforce/fandry', 'src/blocks/fandry']
      .flatMap((dir) => files(join(ROOT, dir)))
      .filter((file) => calls.test(readFileSync(file, 'utf8')))
      .map((file) => relative(ROOT, file));

    expect(offenders).toEqual([]);
  });
});

/* A reserved key only guards anything if it is spelled the way lwc:spread
   sets it: 'ariaDescribedby' never matched a consumer's ariaDescribedBy, so
   it went through. Every aria* key in a reserved list must be an ARIA
   property LWC knows, or its element-reference form (ariaDescribedByElements,
   ariaActiveDescendantElement). */
describe('reserved elementProps keys', () => {
  const ROOT = resolve(__dirname, '../../../../..');
  const files = (dir: string): string[] =>
    readdirSync(dir).flatMap((name) => {
      const path = join(dir, name);
      if (statSync(path).isDirectory()) return name === '__tests__' ? [] : files(path);
      return name.endsWith('.ts') ? [path] : [];
    });
  const isAriaProperty = (key: string) => key.replace(/Elements?$/, '') in AriaPropNameToAttrNameMap;

  it('spell every aria* key as the property LWC sets', () => {
    const misspelled = ['src/core/fandry', 'src/salesforce/fandry', 'src/blocks/fandry']
      .flatMap((dir) => files(join(ROOT, dir)))
      .flatMap((file) =>
        [...readFileSync(file, 'utf8').matchAll(/RESERVED_\w+ = \[([^\]]*)\]/g)]
          .flatMap(([, list]) => list.match(/aria\w+/g) ?? [])
          .filter((key) => !isAriaProperty(key))
          .map((key) => `${relative(ROOT, file)}: ${key}`)
      );

    expect(misspelled).toEqual([]);
  });
});
