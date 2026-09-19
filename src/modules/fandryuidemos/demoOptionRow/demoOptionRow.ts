import { LightningElement, api } from 'lwc';

// A row a consumer supplies as an item's `component` -- see the combobox and
// command "custom markup" examples. It draws only the inside of the row;
// fandry-combobox / fandry-command still own the row itself (role, highlight,
// hover, click).
export default class DemoOptionRow extends LightningElement {
  @api icon = '';
  @api label = '';
  @api hint = '';
}
