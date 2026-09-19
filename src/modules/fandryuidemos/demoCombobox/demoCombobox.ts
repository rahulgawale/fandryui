import { LightningElement } from 'lwc';

export default class DemoCombobox extends LightningElement {
  value = 'lwc';

  frameworkOptions = [
    { label: 'Lightning Web Components', value: 'lwc', group: 'Web components', description: 'Salesforce' },
    { label: 'Lit', value: 'lit', group: 'Web components' },
    { label: 'Stencil', value: 'stencil', group: 'Web components' },
    { label: 'React', value: 'react', group: 'Libraries' },
    { label: 'Vue', value: 'vue', group: 'Libraries' },
    { label: 'Svelte', value: 'svelte', group: 'Libraries', keywords: ['compiler'] },
    { label: 'Angular', value: 'angular', group: 'Libraries', disabled: true }
  ];

  handleChange(event: CustomEvent<string>) {
    this.value = event.detail;
  }
}
