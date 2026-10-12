import { LightningElement } from 'lwc';

// Several share their first letters ("New ...", "South ..."), to try typing more than one.
const COUNTRIES = [
  'Argentina', 'Australia', 'Austria', 'Belgium', 'Brazil', 'Canada', 'Chile', 'Colombia', 'Denmark', 'Egypt',
  'Finland', 'France', 'Germany', 'Greece', 'India', 'Indonesia', 'Ireland', 'Italy', 'Japan', 'Kenya',
  'Mexico', 'Netherlands', 'New Caledonia', 'New Zealand', 'Nigeria', 'Norway', 'Peru', 'Poland', 'Portugal',
  'Singapore', 'South Africa', 'South Korea', 'Spain', 'Sweden', 'Switzerland', 'Thailand', 'United Kingdom',
  'United States', 'Vietnam'
];

export default class DemoSelectLong extends LightningElement {
  value = 'india';

  countryOptions = COUNTRIES.map((label) => ({ label, value: label.toLowerCase().replace(/ /g, '-') }));

  handleChange(event: CustomEvent<string>) {
    this.value = event.detail;
  }
}
