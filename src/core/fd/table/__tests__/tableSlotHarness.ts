import { LightningElement, api } from 'lwc';

/**
 * Slot content only gets distributed by LWC's own compiled template
 * bookkeeping (`cmpSlots`/`slotAssignment`) -- a plain
 * `document.createElement` + `appendChild('slot', '...')` from test code
 * never reaches it, since that bypasses LWC's compiler entirely. This
 * harness renders fd-table with real slotted markup the way any actual
 * consumer's own template would, so table.test.ts's slot swap tests
 * exercise the real distribution path instead of a browser-only one LWC
 * doesn't use.
 */
export default class TableSlotHarness extends LightningElement {
  @api columns = [];
  @api data = [];
  @api enableGlobalFilter = false;
  @api enableRowSelection = false;
  @api enablePagination = false;
  @api pageSize = 10;

  // Not @api -- just avoids relying on string->number coercion for a
  // statically-bound attribute in the template.
  globalFilterDebounceMs = 0;
}
