import { LightningElement } from 'lwc';

export default class HelloWorldApp extends LightningElement {
  planOptions = [
    { label: 'Free', value: 'free' },
    { label: 'Pro', value: 'pro' },
    { label: 'Enterprise', value: 'enterprise', disabled: true }
  ];
}
