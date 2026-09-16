import { LightningElement } from 'lwc';
import { COMPONENTS, CATEGORY_ORDER, getComponentBySlug, getAdjacentComponents } from 'fandryui/componentsData';

import DemoCard from 'fandryui/demoCard';
import DemoDivider from 'fandryui/demoDivider';
import DemoPagination from 'fandryui/demoPagination';
import DemoSidebar from 'fandryui/demoSidebar';
import DemoSidebarItem from 'fandryui/demoSidebarItem';
import DemoHeading from 'fandryui/demoHeading';
import DemoIcon from 'fandryui/demoIcon';
import DemoLabel from 'fandryui/demoLabel';
import DemoText from 'fandryui/demoText';
import DemoButton from 'fandryui/demoButton';
import DemoCheckbox from 'fandryui/demoCheckbox';
import DemoInput from 'fandryui/demoInput';
import DemoLink from 'fandryui/demoLink';
import DemoRadio from 'fandryui/demoRadio';
import DemoRadioGroup from 'fandryui/demoRadioGroup';
import DemoSelect from 'fandryui/demoSelect';
import DemoSwitch from 'fandryui/demoSwitch';
import DemoTextarea from 'fandryui/demoTextarea';
import DemoAlert from 'fandryui/demoAlert';
import DemoBadge from 'fandryui/demoBadge';
import DemoSkeleton from 'fandryui/demoSkeleton';
import DemoSpinner from 'fandryui/demoSpinner';
import DemoToast from 'fandryui/demoToast';
import DemoToastViewport from 'fandryui/demoToastViewport';
import DemoTooltip from 'fandryui/demoTooltip';
import DemoAvatar from 'fandryui/demoAvatar';
import DemoMenu from 'fandryui/demoMenu';
import DemoMenuItem from 'fandryui/demoMenuItem';
import DemoPopover from 'fandryui/demoPopover';
import DemoTable from 'fandryui/demoTable';

// Keyed by slug (see componentsData.ts) -- lwc:is needs the actual
// constructor reference, so every doc page's live demo is resolved through
// this single map rather than one route/page file per component.
const DEMO_COMPONENTS: Record<string, typeof LightningElement> = {
  card: DemoCard,
  divider: DemoDivider,
  pagination: DemoPagination,
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
  skeleton: DemoSkeleton,
  spinner: DemoSpinner,
  toast: DemoToast,
  'toast-viewport': DemoToastViewport,
  tooltip: DemoTooltip,
  avatar: DemoAvatar,
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
