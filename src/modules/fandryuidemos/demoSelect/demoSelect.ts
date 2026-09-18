import { LightningElement } from 'lwc';

export default class DemoSelect extends LightningElement {
  planOptions = [
    { label: 'Free', value: 'free' },
    { label: 'Pro', value: 'pro' },
    { label: 'Enterprise', value: 'enterprise' }
  ];
}
