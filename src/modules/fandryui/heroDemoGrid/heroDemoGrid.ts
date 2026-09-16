import { LightningElement } from 'lwc';

export default class HeroDemoGrid extends LightningElement {
  bars = [
    { key: 'dec', label: 'Dec', barStyle: 'height: 35%' },
    { key: 'jan', label: 'Jan', barStyle: 'height: 58%' },
    { key: 'feb', label: 'Feb', barStyle: 'height: 44%' },
    { key: 'mar', label: 'Mar', barStyle: 'height: 82%' },
    { key: 'apr', label: 'Apr', barStyle: 'height: 68%' }
  ];

  toastIdCounter = 0;
  toasts = [];

  handleShowToast() {
    this.toastIdCounter += 1;
    this.toasts = [...this.toasts, { id: this.toastIdCounter, message: 'Toast fired — this one is real.' }];
  }

  handleToastDismiss(event) {
    const id = Number(event.target.dataset.id);
    this.toasts = this.toasts.filter((toast) => toast.id !== id);
  }
}
