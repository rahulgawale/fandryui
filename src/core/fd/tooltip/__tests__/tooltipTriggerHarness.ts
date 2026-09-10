import { LightningElement, api } from 'lwc';

/**
 * Slot content only gets distributed by LWC's own compiled template
 * bookkeeping -- see fd-popover's own popoverTriggerHarness.ts for why a
 * plain `document.createElement` + `appendChild` from test code can't
 * stand in for it.
 */
export default class TooltipTriggerHarness extends LightningElement {
  @api placement: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @api openDelay = 300;
}
