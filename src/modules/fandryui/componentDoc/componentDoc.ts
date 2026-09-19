import { LightningElement } from 'lwc';
import { COMPONENTS, CATEGORY_ORDER, getComponentBySlug, getAdjacentComponents } from 'fandryui/componentsData';

import DemoBreadcrumb from 'fandryuidemos/demoBreadcrumb';
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
import DemoInput from 'fandryuidemos/demoInput';
import DemoLink from 'fandryuidemos/demoLink';
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
  input: DemoInput,
  link: DemoLink,
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
  table: DemoTable
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
    return (this.entry?.examples ?? []).map((example) => ({
      ...example,
      demoComponent: DEMO_COMPONENTS[example.demo]
    }));
  }

  get hasProps(): boolean {
    return !!this.entry?.props?.length;
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
