import { LightningElement } from 'lwc';
import { COMPONENTS, CATEGORY_ORDER } from 'fandryui/componentsData';
import { componentHref } from 'fandryui/componentLinks';

export default class ComponentsIndex extends LightningElement {
  get sidebarGroups() {
    return CATEGORY_ORDER.map((category) => ({
      category,
      items: COMPONENTS.filter((component) => component.category === category).map((component) => ({
        slug: component.slug,
        name: component.name,
        href: componentHref(component.slug),
        active: false
      }))
    }));
  }

  get componentCards() {
    return COMPONENTS.map((component) => ({
      slug: component.slug,
      name: component.name,
      href: componentHref(component.slug),
      description: component.description,
      category: component.category
    }));
  }
}
