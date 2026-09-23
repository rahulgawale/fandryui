import { createElement } from 'lwc';
import FdTextarea from '../textarea';

const flush = () => Promise.resolve();

describe('fandry-textarea', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('syncs value onto the native textarea on first paint', () => {
    // <textarea value={value}> is not a valid HTML binding (a <textarea>
    // has no `value` attribute) -- this was a real, pre-existing bug found
    // during this audit: `value` silently never populated the native
    // textarea's content at all before the renderedCallback sync was added.
    const element = createElement('fandry-textarea', { is: FdTextarea });
    element.value = 'hello';
    document.body.appendChild(element);

    const textarea = element.shadowRoot!.querySelector('textarea')! as HTMLTextAreaElement;
    expect(textarea.value).toBe('hello');
  });

  it('re-syncs value onto the native textarea after a later update', async () => {
    // Regression check: without a template-bound read of `value`, LWC has
    // no reactive edge for it, and the renderedCallback sync above would
    // only ever fire on first paint, never on a later update (same
    // failure mode fandry-checkbox's `indeterminate` comment documents).
    const element = createElement('fandry-textarea', { is: FdTextarea });
    document.body.appendChild(element);

    let textarea = element.shadowRoot!.querySelector('textarea')! as HTMLTextAreaElement;
    expect(textarea.value).toBe('');

    element.value = 'hello';
    await flush();

    textarea = element.shadowRoot!.querySelector('textarea')! as HTMLTextAreaElement;
    expect(textarea.value).toBe('hello');
  });

  it('associates fandry-label with the textarea via html-for="textarea"', () => {
    // Pre-existing bug found during this audit: this pointed at
    // html-for="input" (copy-paste from fandry-input), which doesn't match
    // this component's own id="textarea" -- the label was never actually
    // associated with the textarea at all.
    const element = createElement('fandry-textarea', { is: FdTextarea });
    element.label = 'Notes';
    document.body.appendChild(element);

    const label = element.shadowRoot!.querySelector('fandry-label')! as HTMLElement & { htmlFor: string };
    expect(label.htmlFor).toBe('textarea');
  });

  it('spreads arbitrary IDL properties (e.g. spellcheck) via elementProps', () => {
    const element = createElement('fandry-textarea', { is: FdTextarea });
    element.elementProps = { spellcheck: false };
    document.body.appendChild(element);

    const textarea = element.shadowRoot!.querySelector('textarea')! as HTMLTextAreaElement;
    expect(textarea.spellcheck).toBe(false);
  });

  it('does not let elementProps clobber a library-controlled prop, and warns once about it', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const element = createElement('fandry-textarea', { is: FdTextarea });
    element.value = 'hello';
    element.rows = 5;
    element.elementProps = { value: 'hijacked', rows: 1, disabled: true };
    document.body.appendChild(element);

    const textarea = element.shadowRoot!.querySelector('textarea')! as HTMLTextAreaElement;
    expect(textarea.value).toBe('hello');
    expect(textarea.rows).toBe(5);
    expect(textarea.disabled).toBe(false);
    expect(warnSpy).toHaveBeenCalledTimes(1);
    warnSpy.mockRestore();
  });

  it('focuses its native control when the host is focused', () => {
    // The host isn't itself focusable; without focus() this is a no-op.
    const element = createElement('fandry-textarea', { is: FdTextarea });
    document.body.appendChild(element);

    (element as any).focus();

    const control = element.shadowRoot!.querySelector('textarea')!;
    expect(element.shadowRoot!.activeElement).toBe(control);
  });
});
