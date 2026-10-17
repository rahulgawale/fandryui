import { LightningElement, api } from 'lwc';

/* Slot content is only distributed by a compiled template; see headingHarness.ts. */
export default class TextHarness extends LightningElement {
  @api as: 'p' | 'span' | 'div' = 'p';
}
