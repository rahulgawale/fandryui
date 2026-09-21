import { LightningElement } from 'lwc';
import DemoOptionRow from 'fandryuidemos/demoOptionRow';

export default class DemoSelectCustom extends LightningElement {
  value = 'pro';

  // Each option's `component` draws its own row, in the list and (for the
  // chosen one) in the closed control. `label` is still the accessible name
  // and what typeahead matches, so every option keeps a real one.
  planOptions = [
    { label: 'Free', value: 'free', component: DemoOptionRow, componentProps: { icon: '🌱', label: 'Free' } },
    { label: 'Pro', value: 'pro', component: DemoOptionRow, componentProps: { icon: '💎', label: 'Pro', hint: 'Popular' } },
    { label: 'Team', value: 'team', component: DemoOptionRow, componentProps: { icon: '👥', label: 'Team', hint: 'New' } },
    { label: 'Enterprise', value: 'enterprise', disabled: true }
  ];

  handleChange(event: CustomEvent<string>) {
    this.value = event.detail;
  }
}
