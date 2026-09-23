import { LightningElement } from 'lwc';
import { COMPONENTS, CATEGORY_ORDER, PART_DESCRIPTIONS, getComponentBySlug, getAdjacentComponents } from 'fandryui/componentsData';

import DemoBreadcrumb from 'fandryuidemos/demoBreadcrumb';
import DemoAlertTheme from 'fandryuidemos/demoAlertTheme';
import DemoAvatarTheme from 'fandryuidemos/demoAvatarTheme';
import DemoBadgeTheme from 'fandryuidemos/demoBadgeTheme';
import DemoBreadcrumbTheme from 'fandryuidemos/demoBreadcrumbTheme';
import DemoButtonTheme from 'fandryuidemos/demoButtonTheme';
import DemoCardTheme from 'fandryuidemos/demoCardTheme';
import DemoCheckboxTheme from 'fandryuidemos/demoCheckboxTheme';
import DemoComboboxTheme from 'fandryuidemos/demoComboboxTheme';
import DemoCommandTheme from 'fandryuidemos/demoCommandTheme';
import DemoDialogTheme from 'fandryuidemos/demoDialogTheme';
import DemoDividerTheme from 'fandryuidemos/demoDividerTheme';
import DemoHeadingTheme from 'fandryuidemos/demoHeadingTheme';
import DemoIconTheme from 'fandryuidemos/demoIconTheme';
import DemoInputTheme from 'fandryuidemos/demoInputTheme';
import DemoLabelTheme from 'fandryuidemos/demoLabelTheme';
import DemoLinkTheme from 'fandryuidemos/demoLinkTheme';
import DemoLookupTheme from 'fandryuidemos/demoLookupTheme';
import DemoMenuTheme from 'fandryuidemos/demoMenuTheme';
import DemoPaginationTheme from 'fandryuidemos/demoPaginationTheme';
import DemoPopoverTheme from 'fandryuidemos/demoPopoverTheme';
import DemoProgressTheme from 'fandryuidemos/demoProgressTheme';
import DemoRadioTheme from 'fandryuidemos/demoRadioTheme';
import DemoSelectTheme from 'fandryuidemos/demoSelectTheme';
import DemoSidebarTheme from 'fandryuidemos/demoSidebarTheme';
import DemoSkeletonTheme from 'fandryuidemos/demoSkeletonTheme';
import DemoSpinnerTheme from 'fandryuidemos/demoSpinnerTheme';
import DemoSwitchTheme from 'fandryuidemos/demoSwitchTheme';
import DemoTableTheme from 'fandryuidemos/demoTableTheme';
import DemoTextTheme from 'fandryuidemos/demoTextTheme';
import DemoTextareaTheme from 'fandryuidemos/demoTextareaTheme';
import DemoToastTheme from 'fandryuidemos/demoToastTheme';
import DemoTooltipTheme from 'fandryuidemos/demoTooltipTheme';
import DemoBreadcrumbItem from 'fandryuidemos/demoBreadcrumbItem';
import DemoCard from 'fandryuidemos/demoCard';
import DemoDivider from 'fandryuidemos/demoDivider';
import DemoPagination from 'fandryuidemos/demoPagination';
import DemoPaginationPages from 'fandryuidemos/demoPaginationPages';
import DemoSidebar from 'fandryuidemos/demoSidebar';
import DemoSidebarItem from 'fandryuidemos/demoSidebarItem';
import DemoHeading from 'fandryuidemos/demoHeading';
import DemoIcon from 'fandryuidemos/demoIcon';
import DemoLabel from 'fandryuidemos/demoLabel';
import DemoText from 'fandryuidemos/demoText';
import DemoButton from 'fandryuidemos/demoButton';
import DemoCheckbox from 'fandryuidemos/demoCheckbox';
import DemoCombobox from 'fandryuidemos/demoCombobox';
import DemoComboboxCustom from 'fandryuidemos/demoComboboxCustom';
import DemoSelectCustom from 'fandryuidemos/demoSelectCustom';
import DemoCommandCustom from 'fandryuidemos/demoCommandCustom';
import CustomSearch from 'fandryuidemos/customSearch';
import DemoCommand from 'fandryuidemos/demoCommand';
import DemoInput from 'fandryuidemos/demoInput';
import DemoLink from 'fandryuidemos/demoLink';
import DemoLookup from 'fandryuidemos/demoLookup';
import DemoLookupMultiple from 'fandryuidemos/demoLookupMultiple';
import DemoLookupValue from 'fandryuidemos/demoLookupValue';
import DemoRadio from 'fandryuidemos/demoRadio';
import DemoRadioGroup from 'fandryuidemos/demoRadioGroup';
import DemoSelect from 'fandryuidemos/demoSelect';
import DemoSwitch from 'fandryuidemos/demoSwitch';
import DemoTextarea from 'fandryuidemos/demoTextarea';
import DemoAlert from 'fandryuidemos/demoAlert';
import DemoBadge from 'fandryuidemos/demoBadge';
import DemoProgress from 'fandryuidemos/demoProgress';
import DemoSkeleton from 'fandryuidemos/demoSkeleton';
import DemoSpinner from 'fandryuidemos/demoSpinner';
import DemoToast from 'fandryuidemos/demoToast';
import DemoToastViewport from 'fandryuidemos/demoToastViewport';
import DemoTooltip from 'fandryuidemos/demoTooltip';
import DemoAvatar from 'fandryuidemos/demoAvatar';
import DemoDialog from 'fandryuidemos/demoDialog';
import DemoMenu from 'fandryuidemos/demoMenu';
import DemoMenuItem from 'fandryuidemos/demoMenuItem';
import DemoPopover from 'fandryuidemos/demoPopover';
import DemoTable from 'fandryuidemos/demoTable';

// Keyed by slug (see componentsData.ts) -- lwc:is needs the actual
// constructor reference, so every doc page's live demo is resolved through
// this single map rather than one route/page file per component.
const DEMO_COMPONENTS: Record<string, typeof LightningElement> = {
  breadcrumb: DemoBreadcrumb,
  'breadcrumb-item': DemoBreadcrumbItem,
  card: DemoCard,
  divider: DemoDivider,
  pagination: DemoPagination,
  'pagination-pages': DemoPaginationPages,
  sidebar: DemoSidebar,
  'sidebar-item': DemoSidebarItem,
  heading: DemoHeading,
  icon: DemoIcon,
  label: DemoLabel,
  text: DemoText,
  button: DemoButton,
  checkbox: DemoCheckbox,
  combobox: DemoCombobox,
  'combobox-custom': DemoComboboxCustom,
  'select-custom': DemoSelectCustom,
  'command-custom': DemoCommandCustom,
  'search-custom': CustomSearch,
  command: DemoCommand,
  input: DemoInput,
  link: DemoLink,
  lookup: DemoLookup,
  'lookup-multiple': DemoLookupMultiple,
  'lookup-value': DemoLookupValue,
  radio: DemoRadio,
  'radio-group': DemoRadioGroup,
  select: DemoSelect,
  switch: DemoSwitch,
  textarea: DemoTextarea,
  alert: DemoAlert,
  badge: DemoBadge,
  progress: DemoProgress,
  skeleton: DemoSkeleton,
  spinner: DemoSpinner,
  toast: DemoToast,
  'toast-viewport': DemoToastViewport,
  tooltip: DemoTooltip,
  avatar: DemoAvatar,
  dialog: DemoDialog,
  menu: DemoMenu,
  'menu-item': DemoMenuItem,
  popover: DemoPopover,
  table: DemoTable,
  'alert-theme': DemoAlertTheme,
  'avatar-theme': DemoAvatarTheme,
  'badge-theme': DemoBadgeTheme,
  'breadcrumb-theme': DemoBreadcrumbTheme,
  'button-theme': DemoButtonTheme,
  'card-theme': DemoCardTheme,
  'checkbox-theme': DemoCheckboxTheme,
  'combobox-theme': DemoComboboxTheme,
  'command-theme': DemoCommandTheme,
  'dialog-theme': DemoDialogTheme,
  'divider-theme': DemoDividerTheme,
  'heading-theme': DemoHeadingTheme,
  'icon-theme': DemoIconTheme,
  'input-theme': DemoInputTheme,
  'label-theme': DemoLabelTheme,
  'link-theme': DemoLinkTheme,
  'lookup-theme': DemoLookupTheme,
  'menu-theme': DemoMenuTheme,
  'pagination-theme': DemoPaginationTheme,
  'popover-theme': DemoPopoverTheme,
  'progress-theme': DemoProgressTheme,
  'radio-theme': DemoRadioTheme,
  'select-theme': DemoSelectTheme,
  'sidebar-theme': DemoSidebarTheme,
  'skeleton-theme': DemoSkeletonTheme,
  'spinner-theme': DemoSpinnerTheme,
  'switch-theme': DemoSwitchTheme,
  'table-theme': DemoTableTheme,
  'text-theme': DemoTextTheme,
  'textarea-theme': DemoTextareaTheme,
  'toast-theme': DemoToastTheme,
  'tooltip-theme': DemoTooltipTheme
};

export default class ComponentDoc extends LightningElement {
  slug = '';

  connectedCallback() {
    // No client-side router in this project (see lwr.config.json's static
    // multi-route config) -- each component's page is its own real route,
    // so the browser's own URL is the one source of truth for which one
    // this instance should render.
    const match = window.location.pathname.match(/\/components\/([a-z-]+)\/?$/);
    this.slug = match ? match[1] : '';
  }

  get entry() {
    return getComponentBySlug(this.slug);
  }

  get demoComponent(): typeof LightningElement | undefined {
    return DEMO_COMPONENTS[this.slug];
  }

  // Extra example + code blocks (see ComponentExample) with each `demo` key
  // already resolved to its constructor, since lwc:is needs the reference.
  get extraExamples() {
    const examples = [...(this.entry?.examples ?? []), ...(this.entry?.customize ? [this.entry.customize] : [])];
    return examples.map((example) => ({
      ...example,
      demoComponent: DEMO_COMPONENTS[example.demo]
    }));
  }

  get hasProps(): boolean {
    return !!this.entry?.props?.length;
  }

  get parts(): Array<{ name: string; description: string }> {
    return (this.entry?.parts ?? []).map((name) => ({ name, description: PART_DESCRIPTIONS[name] ?? '' }));
  }

  get hasParts(): boolean {
    return this.parts.length > 0;
  }

  // A starting point using this component's own tag and its most specific
  // part (the first one that isn't `base`, if there is one).
  get partsCode(): string {
    const tag = this.entry?.tag ?? '';
    const names = this.entry?.parts ?? [];
    const part = names.find((name) => name !== 'base') ?? names[0];
    return `/* your stylesheet */
${tag}::part(${part}) {
  /* any CSS */
}

/* Tokens theme every component at once, or one section of a page */
:root { --fd-radius-md: 0; --fd-primary: 222 47% 11%; }`;
  }

  get sidebarGroups() {
    return CATEGORY_ORDER.map((category) => ({
      category,
      items: COMPONENTS.filter((component) => component.category === category).map((component) => ({
        slug: component.slug,
        name: component.name,
        href: `/components/${component.slug}`,
        active: component.slug === this.slug
      }))
    }));
  }

  get adjacent() {
    return getAdjacentComponents(this.slug);
  }

  get previousHref(): string {
    const previous = this.adjacent.previous;
    return previous ? `/components/${previous.slug}` : '';
  }

  get previousLabel(): string {
    return this.adjacent.previous?.name ?? '';
  }

  get nextHref(): string {
    const next = this.adjacent.next;
    return next ? `/components/${next.slug}` : '';
  }

  get nextLabel(): string {
    return this.adjacent.next?.name ?? '';
  }
}
