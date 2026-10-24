/* Every component that has a page, by slug. Kept apart from componentsData
   so a page can link to components without loading all of their docs;
   componentLinks.test.ts keeps it equal to COMPONENTS. */
export const COMPONENT_SLUGS: readonly string[] = [
  'breadcrumb', 'breadcrumb-item', 'card', 'divider', 'pagination', 'sidebar', 'sidebar-item',
  'heading', 'icon', 'label', 'text',
  'button', 'checkbox', 'combobox', 'input', 'link', 'multi-select', 'radio', 'radio-group', 'select', 'switch', 'textarea',
  'alert', 'badge', 'progress', 'skeleton', 'spinner', 'loading-overlay', 'toast', 'toast-viewport', 'tooltip',
  'avatar', 'command', 'dialog', 'menu', 'menu-item', 'popover', 'table',
  'lookup'
];

/* A component's page, in the form its canonical link and the sitemap use
   (with the trailing slash): the same page under a second URL is a
   duplicate to a search engine. */
export function componentHref(slug: string): string {
  return `/components/${slug}/`;
}

/* The page of the component a `fandry-<slug>` tag names, or '' when it has
   none (a block, or a name that isn't a component). */
export function componentHrefForTag(tag: string): string {
  const slug = tag.replace(/^fandry-/, '');
  return tag.startsWith('fandry-') && COMPONENT_SLUGS.includes(slug) ? componentHref(slug) : '';
}
