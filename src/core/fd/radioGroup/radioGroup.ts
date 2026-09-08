import { api } from 'lwc';
import Base from 'fd/base';

interface FdRadioElement extends HTMLElement {
  name: string;
  value: string;
  checked: boolean;
  disabled: boolean;
  elementProps: Record<string, unknown>;
  focus(): void;
}

const ARROW_KEYS = ['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft'];

export default class RadioGroup extends Base {
  @api name = '';
  @api value = '';
  @api label = '';
  @api ariaLabel = '';

  get hasLabel(): boolean {
    return !!this.label;
  }

  // aria-labelledby wins over aria-label when both are present, so binding
  // both here is safe -- a consumer providing only `ariaLabel` (no visible
  // label) still gets a real accessible name for the group.
  get labelledBy(): string | null {
    return this.hasLabel ? 'radio-group-label' : null;
  }

  connectedCallback() {
    this.addEventListener('change', this.handleRadioChange);
    this.addEventListener('keydown', this.handleKeydown);
  }

  disconnectedCallback() {
    this.removeEventListener('change', this.handleRadioChange);
    this.removeEventListener('keydown', this.handleKeydown);
  }

  // The <fd-radio> children are the *consumer's* light-DOM content, not
  // rendered by this component's own template -- they belong to a
  // different component's render pass, so they aren't guaranteed to be
  // connected/upgraded yet just because *this* component's renderedCallback
  // has fired (confirmed live in a real browser: querying them from
  // renderedCallback alone read stale/incomplete state on first paint, even
  // after a 500ms wait). `slotchange` is the actual, standards-based signal
  // for "slotted content is now assigned" and is the one that's reliable in
  // a real browser -- but it doesn't fire in this project's jsdom test
  // environment (a jsdom/LWC-synthetic-shadow limitation, not a real-app
  // concern). renderedCallback is kept alongside it so first paint still
  // syncs correctly under test; calling updateRovingTabIndex() from both is
  // harmless (idempotent) and covers whichever fires in a given
  // environment.
  renderedCallback() {
    this.updateRovingTabIndex();
  }

  handleSlotChange = () => {
    this.updateRovingTabIndex();
  };

  private getGroupRadios(): FdRadioElement[] {
    return Array.from(this.querySelectorAll('fd-radio')).filter(
      (radio) => (radio as FdRadioElement).name === this.name
    ) as FdRadioElement[];
  }

  // Implements the WAI-ARIA "radiogroup" pattern's roving-tabindex +
  // arrow-key navigation manually, rather than relying on native
  // same-`name` grouping -- confirmed unreliable across browsers once each
  // fd-radio's <input> lives in its own shadow root: Chrome scopes native
  // name-matching per shadow tree (every radio ends up its own,
  // independent Tab stop, with no arrow-key movement between them), while
  // Safari matches `name` across shadow boundaries (collapsing the whole
  // group to a single native Tab stop, per spec) -- but neither browser
  // gives arrow-key movement between radios split across separate shadow
  // roots for free, so a Safari user who tabs into the group and presses
  // Space has no way to reach the other options at all without this.
  private updateRovingTabIndex() {
    const radios = this.getGroupRadios();
    if (!radios.length) {
      return;
    }

    const checkedIndex = radios.findIndex((radio) => radio.value === this.value);
    const activeIndex = checkedIndex >= 0 ? checkedIndex : 0;

    radios.forEach((radio, index) => {
      radio.elementProps = { tabIndex: index === activeIndex ? 0 : -1 };
    });
  }

  handleRadioChange = (event: CustomEvent) => {
    const detail = event.detail;
    if (detail && detail.name === this.name) {
      this.value = detail.value;

      // Update all radio buttons in this group
      this.updateRadioButtons(detail.value);
      this.updateRovingTabIndex();

      // Emit group change event
      this.dispatchEvent(
        new CustomEvent('change', {
          detail: { value: detail.value },
          bubbles: true
        })
      );
    }
  };

  handleKeydown = (event: KeyboardEvent) => {
    if (!ARROW_KEYS.includes(event.key)) {
      return;
    }

    // Prevent Safari's own native same-`name` arrow-key handling (it
    // matches `name` across shadow boundaries -- see updateRovingTabIndex)
    // from also trying to move focus/selection, which would fight with the
    // logic below.
    event.preventDefault();

    const currentRadio = event
      .composedPath()
      .find((node) => (node as Element).tagName === 'FD-RADIO') as FdRadioElement | undefined;
    if (!currentRadio) {
      return;
    }

    const radios = this.getGroupRadios();
    const currentIndex = radios.indexOf(currentRadio);
    if (currentIndex === -1) {
      return;
    }

    const delta = event.key === 'ArrowDown' || event.key === 'ArrowRight' ? 1 : -1;
    let nextIndex = currentIndex;
    for (let step = 0; step < radios.length; step++) {
      nextIndex = (nextIndex + delta + radios.length) % radios.length;
      if (!radios[nextIndex].disabled) {
        break;
      }
    }

    const next = radios[nextIndex];
    if (next === currentRadio) {
      return;
    }

    this.value = next.value;
    this.updateRadioButtons(next.value);
    this.updateRovingTabIndex();
    next.focus();

    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { value: next.value },
        bubbles: true
      })
    );
  };

  updateRadioButtons(selectedValue: string) {
    const radios = this.querySelectorAll('fd-radio');
    radios.forEach((radio: any) => {
      if (radio.name === this.name) {
        radio.checked = radio.value === selectedValue;
      }
    });
  }
}
