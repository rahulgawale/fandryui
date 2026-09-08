import { createElement } from 'lwc';
import ResolveElementPropsHarness from './resolveElementPropsHarness';

describe('Base.resolveElementProps', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('passes through keys that are not reserved', () => {
    const element = createElement('resolve-element-props-harness', { is: ResolveElementPropsHarness });
    element.elementProps = { tabIndex: -1, title: 'hi' };
    document.body.appendChild(element);

    expect((element as any).resolve()).toEqual({ tabIndex: -1, title: 'hi' });
  });

  it('drops reserved keys and warns once per distinct elementProps reference', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const element = createElement('resolve-element-props-harness', { is: ResolveElementPropsHarness });
    element.elementProps = { checked: true, disabled: true, tabIndex: -1 };
    document.body.appendChild(element);

    const first = (element as any).resolve();
    const second = (element as any).resolve();

    expect(first).toEqual({ tabIndex: -1 });
    expect(second).toEqual({ tabIndex: -1 });
    expect(warnSpy).toHaveBeenCalledTimes(1);
    expect(warnSpy.mock.calls[0][0]).toContain('fd-harness');
    expect(warnSpy.mock.calls[0][0]).toContain('"checked"');
    expect(warnSpy.mock.calls[0][0]).toContain('"disabled"');
    warnSpy.mockRestore();
  });

  it('warns again when a new elementProps object is assigned, even with the same keys', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const element = createElement('resolve-element-props-harness', { is: ResolveElementPropsHarness });
    element.elementProps = { checked: true };
    document.body.appendChild(element);
    (element as any).resolve();

    element.elementProps = { checked: true };
    (element as any).resolve();

    expect(warnSpy).toHaveBeenCalledTimes(2);
    warnSpy.mockRestore();
  });

  it('does not warn when nothing is reserved', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const element = createElement('resolve-element-props-harness', { is: ResolveElementPropsHarness });
    element.elementProps = { tabIndex: 0 };
    document.body.appendChild(element);

    (element as any).resolve();

    expect(warnSpy).not.toHaveBeenCalled();
    warnSpy.mockRestore();
  });
});
