import { LightningElement } from 'lwc';
import { COMPONENTS, CATEGORY_ORDER } from 'fandryui/componentsData';

export default class ComponentsIndex extends LightningElement {
  get sidebarGroups() {
    return CATEGORY_ORDER.map((category) => ({
      category,
      items: COMPONENTS.filter((component) => component.category === category).map((component) => ({
        slug: component.slug,
        name: component.name,
        href: `/components/${component.slug}`,
        active: false
      }))
    }));
  }

  get componentCards() {
    return COMPONENTS.map((component) => ({
      slug: component.slug,
      name: component.name,
      href: `/components/${component.slug}`,
      description: component.description,
      category: component.category
    }));
  }
}
