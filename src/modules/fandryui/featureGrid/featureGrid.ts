import { LightningElement } from 'lwc';

export default class FeatureGrid extends LightningElement {
  features = [
    {
      key: 'native',
      chipClass: 'icon-chip tint-primary',
      title: 'Native shadow DOM, even on Salesforce',
      description: 'Plain Lightning Web Components in real, standards-based shadow DOM, on LWR and in your org, not the synthetic polyfill base components grew up on.',
      iconPath: 'M13 2L3 14h7l-1 8 10-12h-7l1-8z'
    },
    {
      key: 'lightweight',
      chipClass: 'icon-chip tint-accent',
      title: 'Lightweight & composable',
      description: 'Small, dependency-light primitives you compose with slots, not a dozen config props.',
      iconPath:
        'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z M3.27 6.96L12 12.01l8.73-5.05 M12 22.08V12'
    },
    {
      key: 'branded',
      chipClass: 'icon-chip tint-success',
      title: "Doesn't look like Salesforce",
      description: 'Ship a fully-branded Salesforce site your customers would never guess runs on Lightning.',
      iconPath: 'M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z'
    },
    {
      key: 'faster',
      chipClass: 'icon-chip tint-warning',
      title: 'Faster development',
      description: 'Sensible defaults and Claude Code-friendly source make every screen faster to build.',
      iconPath: 'M23 6l-9.5 9.5-5-5L1 18 M17 6h6v6'
    },
    {
      key: 'tokens',
      chipClass: 'icon-chip tint-danger',
      title: 'Design tokens, not magic numbers',
      description: 'Every color, spacing, and radius comes from one token scale you can retheme in a single place.',
      iconPath: 'M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5'
    },
    {
      key: 'accessible',
      chipClass: 'icon-chip tint-primary',
      title: 'Accessible by default',
      description: 'WCAG AA-tuned color tokens, keyboard-first controls, and correct ARIA out of the box.',
      iconPath: 'M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4L12 14.01l-3-3'
    },
    {
      key: 'customizable',
      chipClass: 'icon-chip tint-accent',
      title: 'Highly customizable',
      description: 'Override styling, swap markup, or extend a class directly — nothing here is a black box.',
      iconPath: 'M4 21v-7 M4 10V3 M12 21v-9 M12 8V3 M20 21v-5 M20 12V3 M1 14h6 M9 8h6 M17 16h6'
    },
    {
      key: 'brandable',
      chipClass: 'icon-chip tint-success',
      title: 'Brandable',
      description: 'Reskin an entire site by changing tokens, not by rewriting components.',
      iconPath: 'M12 20h9 M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z'
    },
    {
      key: 'boring',
      chipClass: 'icon-chip tint-warning',
      title: 'Boring, on purpose',
      description: 'No hidden state, no magic — every primitive does exactly one predictable thing.',
      iconPath: 'M9 11l3 3L22 4 M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11'
    },
    {
      key: 'real-world',
      chipClass: 'icon-chip tint-danger',
      title: 'Built for the real world',
      description: 'Real focus management, correct tab order, and Safari quirks handled, so you don’t have to.',
      iconPath:
        'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z'
    }
  ];
}
