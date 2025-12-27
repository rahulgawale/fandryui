import Base from 'fd/base';
import { api } from 'lwc';

export default class Label extends Base {
  @api htmlFor = '';
  @api required = false;
}
