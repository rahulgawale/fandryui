declare module 'lwc' {
  export class LightningElement extends HTMLElement {
    template: any;
    dispatchEvent(event: Event): boolean;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | EventListenerOptions
    ): void;
  }

  export function api(target: any, propertyKey?: string): any;
  export function track(target: any, propertyKey?: string): any;
  export function wire(adapter: any, config?: any): any;
}
