import { LightningElement, api } from 'lwc';

/**
 * Slot content (and fandry-menu's own `closest('fandry-popover')` lookup) only
 * works reliably when it comes from LWC's own compiled template bookkeeping
 * -- see fandry-popover's popoverTriggerHarness.ts for why a plain
 * `document.createElement` + `appendChild` from test code isn't enough.
 * This harness renders the real composition a consumer would write: an
 * fandry-popover with a trigger button and an fandry-menu (with three fandry-menu-item
 * children, one disabled) as its panel content.
 */
export default class MenuHarness extends LightningElement {
  @api open = false;
}
