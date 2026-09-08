import { api } from 'lwc';
import Base from 'fd/base';

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
  }

  disconnectedCallback() {
    this.removeEventListener('change', this.handleRadioChange);
  }

  handleRadioChange = (event: CustomEvent) => {
    const detail = event.detail;
    if (detail && detail.name === this.name) {
      this.value = detail.value;

      // Update all radio buttons in this group
      this.updateRadioButtons(detail.value);

      // Emit group change event
      this.dispatchEvent(
        new CustomEvent('change', {
          detail: { value: detail.value },
          bubbles: true
        })
      );
    }
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
