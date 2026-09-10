import { LightningElement, api } from 'lwc';

/**
 * Slot content (and fd-menu's own `closest('fd-popover')` lookup) only
 * works reliably when it comes from LWC's own compiled template bookkeeping
 * -- see fd-popover's popoverTriggerHarness.ts for why a plain
 * `document.createElement` + `appendChild` from test code isn't enough.
 * This harness renders the real composition a consumer would write: an
 * fd-popover with a trigger button and an fd-menu (with three fd-menu-item
 * children, one disabled) as its panel content.
 */
export default class MenuHarness extends LightningElement {
  @api open = false;
}
