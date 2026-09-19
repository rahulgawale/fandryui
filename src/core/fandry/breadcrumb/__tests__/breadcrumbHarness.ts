import { LightningElement } from 'lwc';

/**
 * Slot content only gets distributed by LWC's own compiled template
 * bookkeeping -- a plain `document.createElement` + `appendChild` from test
 * code never reaches it (see fandry-popover's own popoverTriggerHarness).
 * This harness renders fandry-breadcrumb with real slotted
 * fandry-breadcrumb-item markup so breadcrumb.ts's own
 * `this.querySelectorAll('fandry-breadcrumb-item')` sees real children,
 * the same way any actual consumer's template would produce.
 */
export default class BreadcrumbHarness extends LightningElement {}
