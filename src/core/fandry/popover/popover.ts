import { api, track } from 'lwc';
import Base from 'fandry/base';
import { exitFinished } from 'fandry/motion';

type Side = 'top' | 'bottom' | 'left' | 'right';

const SIDES: Side[] = ['top', 'bottom', 'left', 'right'];
const OPPOSITE: Record<Side, Side> = { top: 'bottom', bottom: 'top', left: 'right', right: 'left' };

export default class Popover extends Base {
  @api placement: Side = 'bottom';

  // Which edge of the trigger the panel's own matching edge lines up with,
  // for 'top'/'bottom' placement -- 'start' (the default) is today's only
  // existing behavior (left-aligned), 'end' right-aligns it instead. Needed
  // for a trigger sitting near the right edge of its container (e.g. an
  // account avatar in a topbar): a left-aligned panel there overflows past
  // that edge, since it has nowhere to grow but further right.
  @api align: 'start' | 'end' = 'start';

  private _open = false;

  // Whether the panel is in the DOM: true while open, and stays true through
  // the exit animation after `open` goes false (see fandry/motion).
  @track isMounted = false;

  /*
   * Where the panel sits (see `updatePosition`), and whether it has flipped
   * to the side opposite `placement`.
   */
  @track panelStyle = '';
  @track flipped = false;
  private positionFrame = 0;

  // A plain `@api open = false` field can't distinguish "just closed" from
  // "still closed" -- needed below to catch every path that can close this
  // popover, not only the ones (like Escape) that already call `setOpen`
  // internally. A consumer closing it externally via a prop binding (e.g.
  // `<fandry-popover open={menuOpen}>` after `this.menuOpen = false` in an
  // `onselect` handler, since fandry-popover has no opinion on what it
  // contains and can't reach into a menu's selection logic itself) goes
  // through this same setter, because LWC applies template prop bindings
  // by calling it.
  @api
  get open(): boolean {
    return this._open;
  }

  set open(value: boolean) {
    const wasOpen = this._open;
    this._open = value;

    if (value) {
      // A panel that isn't on the page yet is placed afresh once it has
      // rendered, not from where it was the last time it was open.
      if (!this.isMounted) {
        this.panelStyle = '';
        this.flipped = false;
      }

      this.isMounted = true;
      this.followTrigger();
    }

    if (wasOpen && !value) {
      cancelAnimationFrame(this.positionFrame);
      this.restoreFocusIfStillOurs();
    }
  }

  /*
   * The panel is `position: fixed` and placed from the trigger's bounding
   * box, not `position: absolute` inside the popover. An absolutely
   * positioned panel is clipped by any scrolling ancestor (a table's
   * horizontal scroll container, a scrollable card), so a menu opening from
   * the last row of a scrolling table was cut off. A fixed panel is not
   * clipped by an ancestor's overflow. The cost is that it no longer moves
   * with the trigger on its own, hence `followTrigger`.
   *
   * A fixed box is not always placed from the viewport: inside an ancestor
   * with a transform, a filter or paint containment it is placed from that
   * ancestor's box. `.origin` is a fixed box with `inset: 0`, so its
   * rectangle is whichever box that is, and the panel's offsets are measured
   * from it. An ancestor that is scaled is not accounted for.
   *
   * The trigger's box is the slotted trigger's own, not its wrapper's: the
   * wrapper is as wide as the host, which a flex or grid container may have
   * stretched well past the control the panel belongs to.
   */
  private updatePosition() {
    const trigger = this.querySelector('[slot="trigger"]') ?? this.template.querySelector('.trigger');
    const panel = this.template.querySelector('.panel') as HTMLElement | null;
    const origin = this.template.querySelector('.origin');
    if (!trigger || !panel || !origin) {
      return;
    }

    const rect = trigger.getBoundingClientRect();
    const box = origin.getBoundingClientRect();
    this.flipped = this.shouldFlip(rect, panel);
    const side = this.side;
    const edges = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };

    switch (side) {
      case 'top':
        edges.bottom = `${box.bottom - rect.top}px`;
        break;
      case 'left':
        edges.right = `${box.right - rect.left}px`;
        edges.top = `${rect.top - box.top}px`;
        break;
      case 'right':
        edges.left = `${rect.right - box.left}px`;
        edges.top = `${rect.top - box.top}px`;
        break;
      default:
        edges.top = `${rect.bottom - box.top}px`;
    }

    if (side === 'top' || side === 'bottom') {
      if (this.align === 'end') {
        edges.right = `${box.right - rect.right}px`;
      } else {
        edges.left = `${rect.left - box.left}px`;
      }
    }

    this.panelStyle = `top: ${edges.top}; right: ${edges.right}; bottom: ${edges.bottom}; left: ${edges.left}; --_fd-popover-trigger-width: ${rect.width}px;`;
  }

  // The side asked for, and the side of the trigger the panel is on.
  private get preferredSide(): Side {
    return SIDES.includes(this.placement) ? this.placement : 'bottom';
  }

  private get side(): Side {
    return this.flipped ? OPPOSITE[this.preferredSide] : this.preferredSide;
  }

  /*
   * The panel flips to the opposite side when it doesn't fit on its own and
   * the opposite side has more room in the viewport. Only the viewport is
   * measured, since no scrolling ancestor clips a fixed panel.
   */
  private shouldFlip(rect: DOMRect, panel: HTMLElement): boolean {
    const preferred = this.preferredSide;
    const room = {
      top: rect.top,
      bottom: document.documentElement.clientHeight - rect.bottom,
      left: rect.left,
      right: document.documentElement.clientWidth - rect.right
    };
    if (room[OPPOSITE[preferred]] <= room[preferred]) {
      return false;
    }

    // The panel's size with its gap to the trigger, which is a margin.
    const style = getComputedStyle(panel);
    const margin = (edge: string) => parseFloat(style.getPropertyValue(`margin-${edge}`)) || 0;
    const needed =
      preferred === 'top' || preferred === 'bottom'
        ? panel.offsetHeight + margin('top') + margin('bottom')
        : panel.offsetWidth + margin('left') + margin('right');

    return needed > room[preferred];
  }

  /*
   * While open, measure the trigger every frame and move the panel when it
   * has moved. Listening for `scroll` is not enough: scroll events neither
   * bubble nor leave a shadow root, so a listener on the window never hears
   * a scroll container inside another component's shadow root, and nothing
   * at all is fired when the trigger moves because the layout around it
   * changed.
   */
  private followTrigger = () => {
    cancelAnimationFrame(this.positionFrame);
    if (!this._open || !this.isConnected) {
      return;
    }

    this.updatePosition();
    this.positionFrame = requestAnimationFrame(this.followTrigger);
  };

  get panelClasses(): string {
    return [
      'panel',
      `panel--${this.side}`,
      `panel--align-${this.align}`,
      this.open ? '' : 'panel--closing'
    ]
      .filter(Boolean)
      .join(' ');
  }

  // A closing panel is on its way out: keep it from taking focus or clicks
  // for the few ms it takes to fade. `''` (attribute present) / `undefined`
  // (attribute removed) because `inert` is a boolean attribute.
  get panelInert(): string | undefined {
    return this.open ? undefined : '';
  }

  renderedCallback() {
    // The panel has just rendered: until now there was nothing to measure.
    // From here on `followTrigger` keeps it in place.
    if (this.open && !this.panelStyle) {
      this.updatePosition();
    }

    if (this.open || !this.isMounted) {
      return;
    }

    const panel = this.template.querySelector('.panel');
    exitFinished(panel).then(() => {
      // Reopened while it was exiting -- the panel is live again.
      if (!this.open) {
        this.isMounted = false;
      }
    });
  }

  connectedCallback() {
    // Listening on `this` (the host) catches clicks bubbling up from the
    // slotted trigger even when that trigger is its own custom element with
    // its own shadow tree (e.g. fandry-button) -- an onclick bound inside our
    // own template on the wrapping <span> doesn't reliably see events that
    // originate inside a *nested* shadow tree.
    this.addEventListener('click', this.handleHostClick);
    document.addEventListener('click', this.handleDocumentClick);
    document.addEventListener('keydown', this.handleDocumentKeydown);
    this.followTrigger();
  }

  disconnectedCallback() {
    cancelAnimationFrame(this.positionFrame);
    this.removeEventListener('click', this.handleHostClick);
    document.removeEventListener('click', this.handleDocumentClick);
    document.removeEventListener('keydown', this.handleDocumentKeydown);
  }

  // The click the host has already seen, by timestamp. See handleDocumentClick.
  private insideClickStamp = -1;

  handleHostClick = (event: MouseEvent) => {
    // Every click that passes through this host is inside the popover: the
    // trigger, and anything in the panel (slotted content is the host's own
    // child). Remembered so the document listener below can tell.
    this.insideClickStamp = event.timeStamp;

    const target = event.target as Element;
    if (target.closest('[slot="trigger"]')) {
      this.setOpen(!this.open);
    }
  };

  handleDocumentClick = (event: MouseEvent) => {
    // Whether a click landed inside can't be worked out from the event here.
    // `event.target` is retargeted per-listener (a document-level listener
    // sees the outermost light-DOM ancestor, so `host.contains(target)` is
    // always false), and `composedPath()` is not the untargeted path on
    // Salesforce either: there, inside a component, a document listener gets
    // a path filtered down to the outer host, which never includes this
    // popover -- so the opening click itself looked "outside" and closed the
    // panel in the same click. Instead, a click the host listener has already
    // seen (same timestamp -- it bubbles host first, document last) is inside;
    // any other is outside.
    if (this.open && event.timeStamp !== this.insideClickStamp) {
      this.setOpen(false);
    }
  };

  handleDocumentKeydown = (event: KeyboardEvent) => {
    if (this.open && event.key === 'Escape') {
      this.setOpen(false);

      const trigger = this.querySelector('[slot="trigger"]') as HTMLElement | null;
      trigger?.focus();
    }
  };

  // Returns focus to the trigger when closing, but only if focus is still
  // somewhere inside this popover's own light-DOM content (trigger or
  // panel) -- the common case of e.g. a chosen menu item, focused via
  // keyboard or click, whose element is about to be unslotted along with
  // the rest of the panel. If focus has already moved elsewhere (e.g. an
  // outside click landed on some other focusable element and dismissed
  // this popover as a side effect), leave it alone -- stealing focus back
  // would fight the user's own action. Escape's own handler below already
  // restores focus unconditionally, per the WAI-ARIA menu-button pattern's
  // explicit Escape behavior, so this covers every *other* close path.
  private restoreFocusIfStillOurs() {
    if (!this.isFocusInsideOwnContent()) {
      return;
    }

    const trigger = this.querySelector('[slot="trigger"]') as HTMLElement | null;
    trigger?.focus();
  }

  private isFocusInsideOwnContent(): boolean {
    // `document.activeElement` only resolves to the *outermost* shadow
    // host on the path to the real focused node -- confirmed live in a
    // real browser with this project's actual nesting depth (menu item ->
    // menu -> popover -> app, each its own shadow root): it returned the
    // top-level app element, not fandry-menu-item, so a plain upward walk from
    // it never reaches the popover host. Each shadow root along the way
    // exposes its *own* `activeElement`, so walking down through those
    // first finds the real focused node before walking back up.
    let node: Element | null = document.activeElement;
    while (node && node.shadowRoot && node.shadowRoot.activeElement) {
      node = node.shadowRoot.activeElement;
    }

    // Deliberately not `this.contains(...)` / `this.closest(...)` --
    // confirmed those aren't callable on a component instance under this
    // project's synthetic-shadow test environment (throws "not a
    // function"), the same gap `menu.ts` hit and documented. Walking
    // upward by hand from the plain DOM node found above (never calling a
    // traversal method on `this` itself) sidesteps it, hopping through
    // shadow boundaries via `ShadowRoot.host` the way `getRootNode()`
    // would.
    const host = this.template.host;
    let current: Node | null = node;

    while (current) {
      if (current === host) {
        return true;
      }

      current = current instanceof ShadowRoot ? current.host : current.parentNode;
    }

    return false;
  }

  setOpen(open: boolean) {
    if (this.open === open) {
      return;
    }

    this.open = open;

    // bubbles-only, not composed: the parent that consumes fandry-popover
    // listens via ontoggle on the host itself (already in the parent's own
    // light DOM), so it doesn't need to cross the parent's shadow boundary
    // to receive this -- composed: true would let it escape past the parent
    // to every ancestor component, which Salesforce's LWC security
    // guidelines advise against unless that's actually needed.
    this.dispatchEvent(
      new CustomEvent('toggle', {
        detail: this.open,
        bubbles: true
      })
    );
  }
}
