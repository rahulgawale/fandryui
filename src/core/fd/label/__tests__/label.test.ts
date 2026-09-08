import { createElement } from 'lwc';
import FdLabel from '../label';

describe('fd-label', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('spreads arbitrary IDL properties (e.g. title) via elementProps', () => {
    const element = createElement('fd-label', { is: FdLabel });
    element.elementProps = { title: 'Required field' };
    document.body.appendChild(element);

    const label = element.shadowRoot!.querySelector('label')! as HTMLLabelElement;
    expect(label.title).toBe('Required field');
  });

  it('does not let elementProps clobber htmlFor, and warns once about it', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const element = createElement('fd-label', { is: FdLabel });
    element.htmlFor = 'email-input';
    element.elementProps = { htmlFor: 'hijacked' };
    document.body.appendChild(element);

    const label = element.shadowRoot!.querySelector('label')! as HTMLLabelElement;
    // LWC auto-scopes `for`/`id` IDREF values per instance (e.g.
    // "email-input-3"), so this asserts it still targets "email-input"
    // (not "hijacked"), the same pattern used for fd-select's trigger id.
    expect(label.htmlFor.startsWith('email-input')).toBe(true);
    expect(warnSpy).toHaveBeenCalledTimes(1);
    warnSpy.mockRestore();
  });
});
