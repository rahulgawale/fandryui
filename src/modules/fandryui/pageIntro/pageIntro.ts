import { LightningElement, api } from 'lwc';

export default class PageIntro extends LightningElement {
  @api pageTitle = '';
  @api subtitle = '';
}
