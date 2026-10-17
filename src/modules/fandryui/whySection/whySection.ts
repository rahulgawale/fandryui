import { LightningElement } from 'lwc';
import { THEME_PRESETS, themeStyle, type ThemePreset } from 'fandryui/themePresets';

// The snippet shows the same tokens for every identity, so the card keeps its height.
const SHOWN_TOKENS = ['--fd-primary', '--fd-bg', '--fd-radius-md', '--fd-font-heading'];

const COMPOSE_CODE = `<fandry-button>
  <fandry-spinner></fandry-spinner>
  Saving
</fandry-button>

fandry-button::part(base) {
  border-radius: 999px;
}`;

export default class WhySection extends LightningElement {
  get presets() {
    return THEME_PRESETS.map((preset) => ({ ...preset, checked: preset.key === this.presetValue }));
  }
  presetValue = 'default';
  composeCode = COMPOSE_CODE;

  traits = ['Native shadow DOM', 'LWR & Experience Cloud', 'Salesforce orgs via fandry add', 'No second framework'];

  get preset(): ThemePreset {
    return THEME_PRESETS.find((preset) => preset.key === this.presetValue) || THEME_PRESETS[0];
  }

  get previewStyle(): string {
    return themeStyle(this.preset);
  }

  get tokenCode(): string {
    const { tokens } = this.preset;
    const lines = SHOWN_TOKENS.map((name) =>
      tokens[name] ? `  ${name}: ${tokens[name]};` : `  /* ${name}: inherited */`
    );
    const more = Object.keys(tokens).length - SHOWN_TOKENS.filter((name) => tokens[name]).length;
    lines.push(more > 0 ? `  /* + ${more} more tokens */` : '  /* nothing set: the site theme */');
    return `.checkout {\n${lines.join('\n')}\n}`;
  }

  handlePresetChange(event: CustomEvent<{ value?: string }>) {
    const value = event.detail?.value;
    if (value && THEME_PRESETS.some((preset) => preset.key === value)) {
      this.presetValue = value;
    }
  }
}
