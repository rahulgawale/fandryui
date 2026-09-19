import { LightningElement } from 'lwc';

export default class DemoCommand extends LightningElement {
  isOpen = false;
  lastRun = '';

  items = [
    { label: 'New file', value: 'new-file', group: 'File', description: 'Create an empty file' },
    { label: 'Open file', value: 'open-file', group: 'File', keywords: ['browse'] },
    { label: 'Save all', value: 'save-all', group: 'File' },
    { label: 'Toggle theme', value: 'toggle-theme', group: 'View', description: 'Light or dark' },
    { label: 'Zoom in', value: 'zoom-in', group: 'View' },
    { label: 'Delete workspace', value: 'delete-workspace', group: 'View', disabled: true },
    { label: 'Help', value: 'help' }
  ];

  handleOpen() {
    this.isOpen = true;
  }

  handleToggle(event: CustomEvent<boolean>) {
    this.isOpen = event.detail;
  }

  handleSelect(event: CustomEvent<{ value: string }>) {
    this.lastRun = event.detail.value;
  }
}
