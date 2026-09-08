import { createElement } from 'lwc';
import FdRadio from '../radio';
import SlotHarness from './slotHarness';

describe('fd-radio', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders the label prop as plain text when nothing is slotted', () => {
    const element = createElement('fd-radio', { is: FdRadio });
    element.label = 'Pro Plan';
    document.body.appendChild(element);

    const label = element.shadowRoot!.querySelector('.label')!;
    expect(label.textContent?.trim()).toBe('Pro Plan');
  });

  it('lets slotted content replace the plain-text label', () => {
    // Slotted content only gets distributed by LWC's own compiled template
    // bookkeeping, so this needs a real compiled harness rather than a
    // synthetic document.createElement + appendChild (same reasoning as
    // fd-popover's own trigger-harness tests). Asserting via the slot's
    // own assignedElements() rather than .label's textContent -- the
    // latter's flat-tree composition across a slot is unreliable in this
    // project's jsdom/synthetic-shadow test environment (verified live:
    // assignedElements() correctly reports the projected node while
    // .textContent read back empty for the same DOM).
    const harness = createElement('slot-harness', { is: SlotHarness });
    document.body.appendChild(harness);

    const radio = harness.shadowRoot!.querySelector('fd-radio')!;
    expect(radio.innerHTML).toBe('<span class="custom-label">💎 Pro</span>');

    const slot = radio.shadowRoot!.querySelector('slot') as HTMLSlotElement;
    const assigned = slot.assignedElements();
    expect(assigned).toHaveLength(1);
    expect(assigned[0].className).toBe('custom-label');
    expect(assigned[0].textContent).toBe('💎 Pro');
  });

  it('defaults tabIndex to 0 on the native input (Safari tab-order fix)', () => {
    const element = createElement('fd-radio', { is: FdRadio });
    document.body.appendChild(element);

    const input = element.shadowRoot!.querySelector('input')! as HTMLInputElement;
    expect(input.tabIndex).toBe(0);
  });

  it('lets a consumer override elementProps (e.g. tabIndex) via lwc:spread', () => {
    const element = createElement('fd-radio', { is: FdRadio });
    element.elementProps = { tabIndex: -1 };
    document.body.appendChild(element);

    const input = element.shadowRoot!.querySelector('input')! as HTMLInputElement;
    expect(input.tabIndex).toBe(-1);
  });

  it('does not let elementProps clobber a library-controlled prop, and warns once about it', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const element = createElement('fd-radio', { is: FdRadio });
    element.checked = true;
    element.elementProps = { checked: false, disabled: true, tabIndex: -1 };
    document.body.appendChild(element);

    const input = element.shadowRoot!.querySelector('input')! as HTMLInputElement;
    expect(input.checked).toBe(true);
    expect(input.disabled).toBe(false);
    expect(input.tabIndex).toBe(-1);
    expect(warnSpy).toHaveBeenCalledTimes(1);
    warnSpy.mockRestore();
  });
});
