import { LightningElement } from 'lwc';

interface Row {
  key: string;
  code: string;
  label: string;
  badgeLabel: string;
  badgeVariant: string;
}

interface ViewDef {
  title: string;
  subtitle: string;
  rows: Row[];
}

const VIEWS: Record<string, ViewDef> = {
  orders: {
    title: 'Orders',
    subtitle: 'All orders placed by your account.',
    rows: [
      { key: '10482', code: '#10482', label: 'Industrial Pump', badgeLabel: 'Shipped', badgeVariant: 'primary' },
      { key: '10471', code: '#10471', label: 'Valve Assembly', badgeLabel: 'Processing', badgeVariant: 'warning' },
      { key: '10463', code: '#10463', label: 'Filter Kit', badgeLabel: 'Delivered', badgeVariant: 'success' },
      { key: '10455', code: '#10455', label: 'Gasket Set', badgeLabel: 'Delivered', badgeVariant: 'success' }
    ]
  },
  products: {
    title: 'Products',
    subtitle: 'Items available to order.',
    rows: [
      { key: 'sku-1042', code: 'SKU-1042', label: 'Industrial Pump', badgeLabel: 'In stock', badgeVariant: 'success' },
      { key: 'sku-1041', code: 'SKU-1041', label: 'Valve Assembly', badgeLabel: 'Low stock', badgeVariant: 'warning' },
      { key: 'sku-1039', code: 'SKU-1039', label: 'Filter Kit', badgeLabel: 'In stock', badgeVariant: 'success' }
    ]
  },
  invoices: {
    title: 'Invoices',
    subtitle: 'Billing history for your account.',
    rows: [
      { key: 'inv-2044', code: 'INV-2044', label: 'September statement', badgeLabel: 'Paid', badgeVariant: 'success' },
      { key: 'inv-2039', code: 'INV-2039', label: 'August statement', badgeLabel: 'Paid', badgeVariant: 'success' },
      { key: 'inv-2031', code: 'INV-2031', label: 'July statement', badgeLabel: 'Overdue', badgeVariant: 'danger' }
    ]
  },
  service: {
    title: 'Open Cases',
    subtitle: 'Support cases opened by your team.',
    rows: [
      { key: '4821', code: '#4821', label: 'Pump running hot', badgeLabel: 'High', badgeVariant: 'danger' },
      { key: '4790', code: '#4790', label: 'Replacement gasket request', badgeLabel: 'Normal', badgeVariant: 'warning' },
      { key: '4772', code: '#4772', label: 'Installation question', badgeLabel: 'Low', badgeVariant: 'primary' }
    ]
  },
  knowledge: {
    title: 'Knowledge Base',
    subtitle: 'Guides and docs for your equipment.',
    rows: [
      { key: 'kb-1', code: 'Guide', label: 'Installing a Filter Kit', badgeLabel: 'Guide', badgeVariant: 'default' },
      { key: 'kb-2', code: 'Guide', label: 'Valve Assembly Maintenance', badgeLabel: 'Guide', badgeVariant: 'default' },
      { key: 'kb-3', code: 'FAQ', label: 'Warranty & Returns', badgeLabel: 'FAQ', badgeVariant: 'default' }
    ]
  }
};

export default class DashboardExample extends LightningElement {
  navItems = [
    { key: 'overview', label: 'Overview' },
    { key: 'orders', label: 'Orders' },
    { key: 'products', label: 'Products' },
    { key: 'invoices', label: 'Invoices' },
    { key: 'service', label: 'Service' },
    { key: 'knowledge', label: 'Knowledge' }
  ];

  selectedKey = 'overview';

  stats = [
    { key: 'orders', label: 'Orders', value: '12' },
    { key: 'balance', label: 'Balance', value: '$42,050' },
    { key: 'cases', label: 'Open Cases', value: '3' }
  ];

  recentOrders = VIEWS.orders.rows.slice(0, 3);

  get navItemClasses() {
    return this.navItems.map((item) => ({
      ...item,
      className: item.key === this.selectedKey ? 'nav-item nav-item--active' : 'nav-item'
    }));
  }

  get isOverview(): boolean {
    return this.selectedKey === 'overview';
  }

  get selectedView(): ViewDef {
    return VIEWS[this.selectedKey] ?? VIEWS.orders;
  }

  handleNavClick(event: Event) {
    const key = (event.currentTarget as HTMLElement).dataset.key;
    if (key) {
      this.selectedKey = key;
    }
  }

  handleNavKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.handleNavClick(event);
    }
  }

  // Search/Help are decorative in this demo -- real <a href="#"> targets
  // otherwise scroll the whole marketing page to top on click, which reads
  // as broken navigation rather than "this link doesn't do anything yet".
  handleTopbarLinkClick(event: Event) {
    event.preventDefault();
  }
}
