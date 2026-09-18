import { LightningElement } from 'lwc';

export default class SiteFooter extends LightningElement {
  get year(): number {
    return new Date().getFullYear();
  }
}
