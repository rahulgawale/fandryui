import { LightningElement, api } from 'lwc';

/**
 * Slot content only gets distributed by LWC's own compiled template
 * bookkeeping -- a plain `document.createElement` + `appendChild` from test
 * code never reaches it. This harness renders fd-popover with real slotted
 * markup the way any actual consumer's own template would, so the Escape
 * test can find the trigger via `[slot="trigger"]` the same way the
 * component itself does.
 */
export default class PopoverTriggerHarness extends LightningElement {
  @api open = false;
  @api placement: 'top' | 'bottom' | 'left' | 'right' = 'bottom';
}
