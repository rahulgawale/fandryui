import { LightningElement } from 'lwc';
import DemoOptionRow from 'fandryuidemos/demoOptionRow';

export default class DemoCommandCustom extends LightningElement {
  isOpen = false;
  lastRun = '';

  items = [
    { label: 'New file', value: 'new-file', group: 'File', component: DemoOptionRow, componentProps: { icon: '📄', label: 'New file', hint: '⌘N' } },
    { label: 'Save all', value: 'save-all', group: 'File', component: DemoOptionRow, componentProps: { icon: '💾', label: 'Save all', hint: '⌘S' } },
    { label: 'Toggle theme', value: 'toggle-theme', group: 'View', component: DemoOptionRow, componentProps: { icon: '🌗', label: 'Toggle theme' } }
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
