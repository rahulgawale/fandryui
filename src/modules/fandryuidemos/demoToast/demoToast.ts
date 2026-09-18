import { LightningElement } from 'lwc';

export default class DemoToast extends LightningElement {
  toastIdCounter = 0;
  toasts = [];

  addToast(variant: string, message: string) {
    this.toastIdCounter += 1;
    this.toasts = [...this.toasts, { id: this.toastIdCounter, variant, message }];
  }

  handleAddInfo() {
    this.addToast('info', 'Heads up: your session refreshes soon.');
  }

  handleAddSuccess() {
    this.addToast('success', 'Changes saved.');
  }

  handleDismiss(event: Event) {
    const id = Number((event.target as HTMLElement).dataset.id);
    this.toasts = this.toasts.filter((toast) => toast.id !== id);
  }
}
