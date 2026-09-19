import { LightningElement } from 'lwc';
import DemoOptionRow from 'fandryuidemos/demoOptionRow';

export default class DemoComboboxCustom extends LightningElement {
  value = 'pro';

  planOptions = [
    { label: 'Free', value: 'free', component: DemoOptionRow, componentProps: { icon: '🌱', label: 'Free' } },
    { label: 'Pro', value: 'pro', component: DemoOptionRow, componentProps: { icon: '💎', label: 'Pro', hint: 'Popular' } },
    { label: 'Team', value: 'team', component: DemoOptionRow, componentProps: { icon: '👥', label: 'Team', hint: 'New' } }
  ];

  handleChange(event: CustomEvent<string>) {
    this.value = event.detail;
  }
}
