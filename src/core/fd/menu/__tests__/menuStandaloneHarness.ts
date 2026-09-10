import { LightningElement } from 'lwc';

/**
 * A standalone fd-menu with no ancestor fd-popover -- exercises roving
 * tabindex and arrow-key navigation on their own, independent of the
 * popover-integration behavior covered by menuHarness.ts.
 */
export default class MenuStandaloneHarness extends LightningElement {}
