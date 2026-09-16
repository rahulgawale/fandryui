import { LightningElement } from 'lwc';

/**
 * A standalone fandry-menu with no ancestor fandry-popover -- exercises roving
 * tabindex and arrow-key navigation on their own, independent of the
 * popover-integration behavior covered by menuHarness.ts.
 */
export default class MenuStandaloneHarness extends LightningElement {}
