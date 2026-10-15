/* The site identities the docs demo with: only public --fd-* tokens, plus the
   page surface the wrapper itself paints. Shared so every demo shows the same ones. */
export interface ThemePreset {
  key: string;
  name: string;
  note: string;
  tokens: Record<string, string>;
  surface: Record<string, string>;
}

export const THEME_PRESETS: ThemePreset[] = [
  { key: 'default', name: 'Default', note: 'No tokens set.', tokens: {}, surface: {} },
  {
    key: 'editorial',
    name: 'Editorial',
    note: 'Serif headings, square corners, warm palette.',
    tokens: {
      '--fd-primary': '24 70% 38%',
      '--fd-primary-foreground': '40 33% 98%',
      '--fd-bg': '40 33% 97%',
      '--fd-bg-muted': '36 30% 92%',
      '--fd-text': '24 20% 15%',
      '--fd-text-muted': '24 10% 36%',
      '--fd-border': '30 20% 78%',
      '--fd-radius-sm': '0',
      '--fd-radius-md': '0',
      '--fd-radius-lg': '0',
      '--fd-font-heading': 'Georgia, serif'
    },
    surface: { background: 'hsl(36 30% 92%)', color: 'hsl(24 20% 15%)' }
  },
  {
    key: 'midnight',
    name: 'Midnight',
    note: 'Dark surfaces, rounder corners, bright accent.',
    tokens: {
      '--fd-primary': '160 84% 45%',
      '--fd-primary-foreground': '222 47% 11%',
      '--fd-bg': '222 47% 14%',
      '--fd-bg-muted': '222 40% 20%',
      '--fd-text': '210 40% 96%',
      '--fd-text-muted': '215 20% 72%',
      '--fd-border': '217 30% 30%',
      '--fd-border-focus': '160 84% 45%',
      '--fd-ring-color': '160 84% 45%',
      '--fd-radius-sm': '0.75rem',
      '--fd-radius-md': '1rem',
      '--fd-radius-lg': '1.5rem',
      '--fd-font-heading': '"Sora", sans-serif'
    },
    surface: { background: 'hsl(222 47% 9%)', color: 'hsl(210 40% 96%)', 'border-color': 'hsl(217 30% 30%)' }
  }
];

function declarations(entries: Record<string, string>): string[] {
  return Object.entries(entries).map(([name, value]) => `${name}: ${value};`);
}

// Inline style for a wrapper: the tokens, then its own surface.
export function themeStyle(preset: ThemePreset): string {
  return [...declarations(preset.tokens), ...declarations(preset.surface)].join(' ');
}

