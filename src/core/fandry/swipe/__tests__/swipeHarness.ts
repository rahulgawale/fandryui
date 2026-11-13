import { LightningElement, api } from 'lwc';

/* Slotted content is only distributed by a compiled template, so the tests
   render real start / end actions through this harness. */
export default class SwipeHarness extends LightningElement {
  @api open = '';
  changes: string[] = [];

  handleChange(event: CustomEvent) {
    this.changes.push(event.detail.open);
  }

  @api get changed(): string[] {
    return this.changes;
  }
}
