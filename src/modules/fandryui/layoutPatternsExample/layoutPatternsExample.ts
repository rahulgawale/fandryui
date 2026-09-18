import { LightningElement } from 'lwc';

export default class LayoutPatternsExample extends LightningElement {
  // Light DOM -- its host, fandryui-home, is also light DOM (see home.ts),
  // so this needs to be too or its own shadow root would re-introduce the
  // same boundary one level down, blocking global.css's fandry-container/
  // fandry-grid classes from ever reaching the markup below.
  static renderMode = 'light';

  orders = [
    {
      key: 'ord-10482',
      code: '#10482',
      customer: 'Acme Robotics',
      amount: '$1,240.00',
      badgeLabel: 'Shipped',
      badgeVariant: 'success'
    },
    {
      key: 'ord-10483',
      code: '#10483',
      customer: 'Bramble & Co',
      amount: '$86.50',
      badgeLabel: 'Processing',
      badgeVariant: 'warning'
    },
    {
      key: 'ord-10484',
      code: '#10484',
      customer: 'Nimbus Traders',
      amount: '$412.00',
      badgeLabel: 'Backordered',
      badgeVariant: 'danger'
    }
  ];
}
