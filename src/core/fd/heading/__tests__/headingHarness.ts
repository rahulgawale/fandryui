import { LightningElement, api } from 'lwc';

/**
 * Slot content only gets distributed by LWC's own compiled template
 * bookkeeping -- see fd-tooltip's own tooltipTriggerHarness.ts for why a
 * plain `document.createElement` + `appendChild` from test code can't
 * stand in for it.
 */
export default class HeadingHarness extends LightningElement {
  @api level: 1 | 2 | 3 | 4 | 5 | 6 = 2;
}
