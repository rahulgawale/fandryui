import { LightningElement, api } from 'lwc';

/* Slotted content is only distributed by a compiled template, so the tests
   render real fandry-tab / fandry-tab-panel children through this harness. */
export default class TabsHarness extends LightningElement {
  @api value = '';
  @api billingEnabled = false;
  changes: string[] = [];

  get billingDisabled(): boolean {
    return !this.billingEnabled;
  }

  handleChange(event: CustomEvent) {
    this.changes.push(event.detail.value);
  }

  @api get changed(): string[] {
    return this.changes;
  }
}
