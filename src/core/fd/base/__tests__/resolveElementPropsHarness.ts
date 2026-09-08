import { api } from 'lwc';
import Base from 'fd/base';

const RESERVED = ['checked', 'disabled'];

export default class ResolveElementPropsHarness extends Base {
  @api elementProps: Record<string, unknown> = {};

  @api
  resolve(): Record<string, unknown> {
    return this.resolveElementProps(this.elementProps, RESERVED, 'fd-harness');
  }
}
