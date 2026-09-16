import { api } from 'lwc';
import Base from 'fandry/base';

export default class FdToastViewport extends Base {
  @api placement: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' = 'bottom-right';

  // false (the default) is a global overlay: `position: fixed` against
  // the browser viewport, the usual "toast pinned to a corner of the
  // screen" behavior. true scopes it to whatever `position: relative` (or
  // other positioned) ancestor a consumer wraps it in instead -- `position:
  // absolute` against that ancestor -- for toasts that belong to one
  // panel/widget rather than the whole page. A genuinely binary choice
  // between two real layout behaviors, not a "just in case" flag.
  @api contained = false;

  // Empty (the default) means decorative in the ARIA sense: no landmark
  // role of its own. Each fandry-toast inside already announces itself via
  // its own role="status"/"alert" live region (see toast.ts), so an
  // unlabelled role="region" here would just be discoverable noise, not a
  // useful landmark -- same "opt in, don't default to it" reasoning as
  // fandry-icon's own `label`. Set this when a consumer wants the region to
  // also be a navigable landmark, e.g. so a screen reader user can jump
  // back and review a toast that already finished announcing.
  @api label = '';

  get classes(): string {
    return [
      'viewport',
      `viewport--${this.placement}`,
      this.contained ? 'viewport--contained' : ''
    ]
      .filter(Boolean)
      .join(' ');
  }

  get role(): 'region' | undefined {
    return this.label ? 'region' : undefined;
  }

  get ariaLabel(): string | undefined {
    return this.label ? this.label : undefined;
  }
}
