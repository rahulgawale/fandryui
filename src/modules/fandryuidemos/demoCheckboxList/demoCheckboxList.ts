import { LightningElement } from 'lwc';

export default class DemoCheckboxList extends LightningElement {
  toppings = [
    { label: 'Mushrooms', value: 'mushrooms', checked: false, disabled: false },
    { label: 'Olives', value: 'olives', checked: true, disabled: false },
    { label: 'Peppers', value: 'peppers', checked: false, disabled: false },
    { label: 'Anchovies', value: 'anchovies', checked: false, disabled: true }
  ];

  get chosen(): string {
    return this.toppings.filter((t) => t.checked).map((t) => t.label).join(', ') || 'none';
  }

  handleChange(event: Event) {
    const { value } = event.target as HTMLInputElement;
    const checked = (event.target as HTMLInputElement).checked;
    this.toppings = this.toppings.map((t) => (t.value === value ? { ...t, checked } : t));
  }
}
