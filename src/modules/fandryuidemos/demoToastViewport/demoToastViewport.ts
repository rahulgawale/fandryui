import { LightningElement } from 'lwc';

export default class DemoToastViewport extends LightningElement {
  toastIdCounter = 0;
  toasts = [];

  handleAdd() {
    this.toastIdCounter += 1;
    this.toasts = [...this.toasts, { id: this.toastIdCounter, message: 'Saved within this panel.' }];
  }

  handleDismiss(event: Event) {
    const id = Number((event.target as HTMLElement).dataset.id);
    this.toasts = this.toasts.filter((toast) => toast.id !== id);
  }
}
