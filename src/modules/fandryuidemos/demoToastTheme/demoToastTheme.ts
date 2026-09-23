import { LightningElement } from 'lwc';

export default class DemoToastTheme extends LightningElement {
  toastIdCounter = 0;
  toasts: Array<{ id: number; message: string }> = [];

  handleAdd() {
    this.toastIdCounter += 1;
    this.toasts = [...this.toasts, { id: this.toastIdCounter, message: 'Added Stride Runner to your cart.' }];
  }

  handleDismiss(event: Event) {
    const id = Number((event.target as HTMLElement).dataset.id);
    this.toasts = this.toasts.filter((toast) => toast.id !== id);
  }
}
