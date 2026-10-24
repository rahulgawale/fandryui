import { LightningElement } from 'lwc';

const RESERVED = ['admin', 'root'];

export default class DemoInputValidation extends LightningElement {
  // Only the rules we want to word ourselves; the rest show the browser's.
  emailMessages = { valueMissing: 'Enter your email.' };
  usernameMessages = { patternMismatch: 'Use a-z, 0-9 and _ only.', tooShort: 'At least 3 characters.' };

  // A rule the browser has no attribute for.
  noReserved(value: string) {
    return RESERVED.includes(value) ? `"${value}" is reserved.` : '';
  }

  // What a native form does on submit: every field is checked, the errors
  // appear, and focus goes to the first one that fails.
  handleSubmit() {
    const fields = Array.from(this.template.querySelectorAll('[data-field]')) as Array<HTMLElement & { reportValidity(): boolean }>;
    fields.filter((field) => !field.reportValidity())[0]?.focus();
  }
}
