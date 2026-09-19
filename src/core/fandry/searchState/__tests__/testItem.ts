import { LightningElement, api } from 'lwc';

export default class TestItem extends LightningElement {
  @api label = '';
  @api icon = '';
}
