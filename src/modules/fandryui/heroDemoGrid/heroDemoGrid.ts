import { LightningElement } from 'lwc';

const DEFAULT_PRIMARY_COLOR = '#DB1B6F';
const DEFAULT_ACCENT_COLOR = '#0A7AAE';

// heroDemoGrid.css's .bar gradient is deliberately darker than the raw
// brand tokens -- same hue/saturation, lightness reduced by this many
// percentage points. Matches the gap already baked into that rule's own
// fallback values (primary 48% -> 40%, accent 36% -> 28%).
const CHART_DARKEN_PERCENT = 8;

interface Hsl {
  h: number;
  s: number;
  l: number;
}

function hexToHsl(hex: string): Hsl | null {
  const match = /^#?([0-9a-f]{6})$/i.exec(hex.trim());
  if (!match) {
    return null;
  }

  const int = parseInt(match[1], 16);
  const r = ((int >> 16) & 255) / 255;
  const g = ((int >> 8) & 255) / 255;
  const b = (int & 255) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;

  let h = 0;
  let s = 0;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      default:
        h = (r - g) / d + 4;
    }
    h /= 6;
  }

  return { h: h * 360, s: s * 100, l: l * 100 };
}

// tokens.css (and this component's own light-DOM CSS) reads brand color as
// an unquoted "H S% L%" triplet fed straight into hsl(var(--brand-...)),
// not a hex string -- this is the same conversion math as the WCAG
// contrast script used elsewhere in this repo to pick token lightness
// values, just run forward instead of by hand.
function hslToken({ h, s, l }: Hsl): string {
  return `${Math.round(h)} ${Math.round(s)}% ${Math.round(l)}%`;
}

function darken(hsl: Hsl, percent: number): Hsl {
  return { ...hsl, l: Math.max(0, hsl.l - percent) };
}

export default class HeroDemoGrid extends LightningElement {
  primaryColor = DEFAULT_PRIMARY_COLOR;
  accentColor = DEFAULT_ACCENT_COLOR;

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

  handlePrimaryColorInput(event: CustomEvent<string>) {
    this.primaryColor = event.detail;
  }

  handleAccentColorInput(event: CustomEvent<string>) {
    this.accentColor = event.detail;
  }

  handleApplyTheme() {
    const primary = hexToHsl(this.primaryColor);
    const accent = hexToHsl(this.accentColor);
    if (!primary || !accent) {
      return;
    }

    // Set on <html>, not this component's own host -- --fd-primary/--fd-accent
    // are read inside every fandry-* primitive's own shadow root
    // (tokens.css), and the literal brand-color spots elsewhere on this
    // page (heroSection's background wash, dashboardExample's active nav
    // item, this component's own chart bars) read these same custom
    // properties directly -- the override has to live above all of them to
    // inherit down into each one, not just this card's.
    const root = document.documentElement.style;
    root.setProperty('--brand-primary', hslToken(primary));
    root.setProperty('--brand-accent', hslToken(accent));
    root.setProperty('--brand-primary-dark', hslToken(darken(primary, CHART_DARKEN_PERCENT)));
    root.setProperty('--brand-accent-dark', hslToken(darken(accent, CHART_DARKEN_PERCENT)));
  }

  handleResetTheme() {
    this.primaryColor = DEFAULT_PRIMARY_COLOR;
    this.accentColor = DEFAULT_ACCENT_COLOR;

    const root = document.documentElement.style;
    root.removeProperty('--brand-primary');
    root.removeProperty('--brand-accent');
    root.removeProperty('--brand-primary-dark');
    root.removeProperty('--brand-accent-dark');
  }
}
