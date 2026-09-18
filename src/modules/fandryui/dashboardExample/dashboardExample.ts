import { LightningElement } from 'lwc';

interface Row {
  key: string;
  code: string;
  label: string;
  badgeLabel: string;
  badgeVariant: string;
  detail: string;
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
      {
        key: '10482',
        code: '#10482',
        label: 'Industrial Pump',
        badgeLabel: 'Shipped',
        badgeVariant: 'primary',
        detail: 'Placed Sep 2. Left the warehouse via ground freight — tracking updates daily.'
      },
      {
        key: '10471',
        code: '#10471',
        label: 'Valve Assembly',
        badgeLabel: 'Processing',
        badgeVariant: 'warning',
        detail: 'Placed Aug 29. Awaiting stock confirmation from the Ohio facility.'
      },
      {
        key: '10463',
        code: '#10463',
        label: 'Filter Kit',
        badgeLabel: 'Delivered',
        badgeVariant: 'success',
        detail: 'Placed Aug 21, delivered Aug 24. Signed for by receiving dock.'
      },
      {
        key: '10455',
        code: '#10455',
        label: 'Gasket Set',
        badgeLabel: 'Delivered',
        badgeVariant: 'success',
        detail: 'Placed Aug 14, delivered Aug 18. Signed for by receiving dock.'
      }
    ]
  },
  products: {
    title: 'Products',
    subtitle: 'Items available to order.',
    rows: [
      {
        key: 'sku-1042',
        code: 'SKU-1042',
        label: 'Industrial Pump',
        badgeLabel: 'In stock',
        badgeVariant: 'success',
        detail: '42 units on hand across 2 warehouses. Standard lead time: 2 business days.'
      },
      {
        key: 'sku-1041',
        code: 'SKU-1041',
        label: 'Valve Assembly',
        badgeLabel: 'Low stock',
        badgeVariant: 'warning',
        detail: '6 units on hand. Restock expected next week — order soon to avoid delay.'
      },
      {
        key: 'sku-1039',
        code: 'SKU-1039',
        label: 'Filter Kit',
        badgeLabel: 'In stock',
        badgeVariant: 'success',
        detail: '118 units on hand. Standard lead time: 1 business day.'
      }
    ]
  },
  invoices: {
    title: 'Invoices',
    subtitle: 'Billing history for your account.',
    rows: [
      {
        key: 'inv-2044',
        code: 'INV-2044',
        label: 'September statement',
        badgeLabel: 'Paid',
        badgeVariant: 'success',
        detail: '$12,480.00 — paid in full via ACH on Sep 3.'
      },
      {
        key: 'inv-2039',
        code: 'INV-2039',
        label: 'August statement',
        badgeLabel: 'Paid',
        badgeVariant: 'success',
        detail: '$9,150.00 — paid in full via ACH on Aug 3.'
      },
      {
        key: 'inv-2031',
        code: 'INV-2031',
        label: 'July statement',
        badgeLabel: 'Overdue',
        badgeVariant: 'danger',
        detail: '$4,020.00 — 14 days past due. A reminder was sent Aug 28.'
      }
    ]
  },
  service: {
    title: 'Open Cases',
    subtitle: 'Support cases opened by your team.',
    rows: [
      {
        key: '4821',
        code: '#4821',
        label: 'Pump running hot',
        badgeLabel: 'High',
        badgeVariant: 'danger',
        detail: 'Opened Sep 1. Field technician scheduled for Sep 4, 9am-noon.'
      },
      {
        key: '4790',
        code: '#4790',
        label: 'Replacement gasket request',
        badgeLabel: 'Normal',
        badgeVariant: 'warning',
        detail: 'Opened Aug 27. Replacement part shipped Aug 30, arriving Sep 3.'
      },
      {
        key: '4772',
        code: '#4772',
        label: 'Installation question',
        badgeLabel: 'Low',
        badgeVariant: 'primary',
        detail: 'Opened Aug 20. Answered by support Aug 21 — awaiting your confirmation.'
      }
    ]
  },
  knowledge: {
    title: 'Knowledge Base',
    subtitle: 'Guides and docs for your equipment.',
    rows: [
      {
        key: 'kb-1',
        code: 'Guide',
        label: 'Installing a Filter Kit',
        badgeLabel: 'Guide',
        badgeVariant: 'default',
        detail: 'Step-by-step install guide, 8 min read. Last updated Jul 12.'
      },
      {
        key: 'kb-2',
        code: 'Guide',
        label: 'Valve Assembly Maintenance',
        badgeLabel: 'Guide',
        badgeVariant: 'default',
        detail: 'Recommended maintenance schedule, 5 min read. Last updated Jun 30.'
      },
      {
        key: 'kb-3',
        code: 'FAQ',
        label: 'Warranty & Returns',
        badgeLabel: 'FAQ',
        badgeVariant: 'default',
        detail: 'Common questions on warranty coverage and the returns process.'
      }
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
  detailRow: Row | null = null;
  statusFilter: string | null = null;
  searchQuery = '';
  accountMenuOpen = false;

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

  get isOverviewTab(): boolean {
    return this.selectedKey === 'overview';
  }

  get showDetail(): boolean {
    return !!this.detailRow;
  }

  get showOverview(): boolean {
    return !this.showDetail && this.isOverviewTab;
  }

  get showList(): boolean {
    return !this.showDetail && !this.isOverviewTab;
  }

  get selectedView(): ViewDef {
    return VIEWS[this.selectedKey] ?? VIEWS.orders;
  }

  // Shared by both the Overview tab's "Recent Orders" preview and every
  // other tab's full row list -- one status filter/search query applies
  // regardless of which is currently on screen.
  private filterRows(rows: Row[]): Row[] {
    const query = this.searchQuery.trim().toLowerCase();

    return rows.filter((row) => {
      const matchesStatus = !this.statusFilter || row.badgeLabel === this.statusFilter;
      const matchesQuery =
        !query || row.label.toLowerCase().includes(query) || row.code.toLowerCase().includes(query);
      return matchesStatus && matchesQuery;
    });
  }

  get visibleRecentOrders(): Row[] {
    return this.filterRows(this.recentOrders);
  }

  get visibleListRows(): Row[] {
    return this.filterRows(this.selectedView.rows);
  }

  get hasStatusFilter(): boolean {
    return !!this.statusFilter;
  }

  get accountTriggerProps(): Record<string, unknown> {
    // fandry-popover sets no aria-haspopup/expanded on its own slotted trigger
    // (see popover.html) -- wired directly here, same as demoMenu.
    return { tabIndex: 0, ariaHasPopup: 'menu', ariaExpanded: this.accountMenuOpen };
  }

  handleNavClick(event: Event) {
    const key = (event.currentTarget as HTMLElement).dataset.key;
    if (key && key !== this.selectedKey) {
      this.selectedKey = key;
      // A status filter/search term from the previous tab wouldn't match
      // this tab's badge values at all (e.g. "Shipped" only exists under
      // Orders) -- clearing on nav keeps switching tabs from silently
      // landing on what looks like an empty list.
      this.statusFilter = null;
      this.searchQuery = '';
      this.detailRow = null;
    }
  }

  handleNavKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.handleNavClick(event);
    }
  }

  private findRowByKey(key: string | undefined): Row | undefined {
    if (!key) {
      return undefined;
    }
    const source = this.isOverviewTab ? this.visibleRecentOrders : this.visibleListRows;
    return source.find((row) => row.key === key);
  }

  handleRowClick(event: Event) {
    const row = this.findRowByKey((event.currentTarget as HTMLElement).dataset.key);
    if (row) {
      this.detailRow = row;
    }
  }

  handleRowKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.handleRowClick(event);
    }
  }

  handleBackFromDetail(event: Event) {
    event.preventDefault();
    this.detailRow = null;
  }

  private toggleStatusFilter(status: string | undefined) {
    if (!status) {
      return;
    }
    this.statusFilter = this.statusFilter === status ? null : status;
  }

  handleStatusClick(event: MouseEvent) {
    // Stops this from also bubbling to the row's own onclick (handleRowClick)
    // -- the status pill and the row underneath it are two different
    // actions (filter vs. open detail), not one.
    event.stopPropagation();
    this.toggleStatusFilter((event.currentTarget as HTMLElement).dataset.status);
  }

  handleStatusKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      event.stopPropagation();
      this.toggleStatusFilter((event.currentTarget as HTMLElement).dataset.status);
    }
  }

  handleClearStatusFilter(event: Event) {
    event.preventDefault();
    this.statusFilter = null;
  }

  handleSearchInput(event: CustomEvent<string>) {
    this.searchQuery = event.detail;
  }

  handleAccountMenuToggle(event: CustomEvent<boolean>) {
    this.accountMenuOpen = event.detail;
  }

  handleAccountMenuSelect() {
    // Profile/Account settings/Sign out are decorative in this demo -- see
    // handleTopbarLinkClick's note below for why silently no-opping is the
    // right call here rather than pretending to navigate.
    this.accountMenuOpen = false;
  }

  // Help is decorative in this demo -- a real <a href="#"> target otherwise
  // scrolls the whole marketing page to top on click, which reads as broken
  // navigation rather than "this link doesn't do anything yet".
  handleTopbarLinkClick(event: Event) {
    event.preventDefault();
  }
}
