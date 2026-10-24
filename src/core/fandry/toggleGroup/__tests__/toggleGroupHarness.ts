import { LightningElement, api } from 'lwc';

/* Slotted content is only distributed by a compiled template, so the tests
   render real fandry-toggle-button children through this harness. */
export default class ToggleGroupHarness extends LightningElement {
  @api value: string[] = [];
  @api multiple = false;
  changes: string[][] = [];

  handleChange(event: CustomEvent) {
    this.changes.push(event.detail.value);
  }

  @api get changed(): string[][] {
    return this.changes;
  }
}
