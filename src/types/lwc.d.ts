declare module 'lwc' {
  export class LightningElement extends HTMLElement {
    template: any;
    /** Elements marked lwc:ref in the template, by name; undefined until the first render. */
    refs: { [name: string]: Element } | undefined;
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

  export function createElement<T extends new (...args: any[]) => any>(
    name: string,
    options: { is: T }
  ): InstanceType<T> & HTMLElement;
}
