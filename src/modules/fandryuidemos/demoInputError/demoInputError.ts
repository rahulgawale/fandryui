import { LightningElement } from 'lwc';

const EMAIL = /^\S+@\S+\.\S+$/;

export default class DemoInputError extends LightningElement {
  email = 'grace@';
  emailError = 'Enter an email address, like you@company.com.';

  // Checked when the field is left: an error while still typing is noise.
  handleChange(event: CustomEvent<string>) {
    this.email = event.detail;
    this.emailError = this.check(this.email);
  }

  // Once there is an error, it goes as soon as the value is right.
  handleInput(event: CustomEvent<string>) {
    this.email = event.detail;
    if (this.emailError) {
      this.emailError = this.check(this.email);
    }
  }

  private check(value: string): string {
    if (!value) return 'Email is required.';
    return EMAIL.test(value) ? '' : 'Enter an email address, like you@company.com.';
  }
}
