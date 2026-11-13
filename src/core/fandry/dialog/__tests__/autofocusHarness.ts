import { LightningElement, api } from 'lwc';

/* A dialog with slotted content, one element marked autofocus. */
export default class AutofocusHarness extends LightningElement {
  @api open = false;
}
