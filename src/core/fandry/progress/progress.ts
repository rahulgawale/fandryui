import { api } from 'lwc';
import Base from 'fandry/base';
import { partList } from 'fandry/parts';

export default class Progress extends Base {
  @api label = '';
  @api indeterminate = false;

  private _value = 0;
  private _max = 100;

  // Getter/setter pairs (not plain `@api value = 0`/`@api max = 100`
  // fields) because a static template attribute (e.g. `value="40"`) is
  // always a string -- same reasoning as fandry-toast's `duration` and
  // fandry-heading's `level`, so a Number-defaulted prop needs its own
  // coercion or callers get a string silently passed through to the
  // width/aria-valuenow math below.
  @api
  get value(): number {
    return this._value;
  }

  set value(value: number) {
    this._value = Number(value);
  }

  @api
  get max(): number {
    return this._max;
  }

  set max(value: number) {
    this._max = Number(value);
  }

  get clampedValue(): number {
    return Math.min(Math.max(this.value, 0), this.max);
  }

  get percentage(): number {
    return this.max > 0 ? (this.clampedValue / this.max) * 100 : 0;
  }

  get barStyle(): string {
    return this.indeterminate ? '' : `width: ${this.percentage}%`;
  }

  get classes(): string {
    return ['bar', this.indeterminate ? 'bar--indeterminate' : ''].filter(Boolean).join(' ');
  }

  // Omitted (not "unknown", a real number) while indeterminate -- an
  // indeterminate progressbar has no known value to report, and
  // aria-valuenow's own spec calls for leaving it off entirely rather
  // than setting it to 0 or any other placeholder. Stringified because
  // LightningElement's own typed ariaValueNow property (the one this
  // getter overrides) is `string | null`, same as fandry-sidebar-item's
  // ariaCurrent.
  get ariaValueNow(): string | undefined {
    return this.indeterminate ? undefined : String(this.clampedValue);
  }

  get indicatorPart(): string {
    return partList('indicator', { indeterminate: this.indeterminate });
  }
}
