import { LightningElement } from 'lwc';

export default class DemoTableTheme extends LightningElement {
  columns = [
    { id: 'order', accessorKey: 'order', header: 'Order' },
    { id: 'item', accessorKey: 'item', header: 'Item' },
    { id: 'total', accessorKey: 'total', header: 'Total' }
  ];

  data = [
    { order: '#1042', item: 'Stride Runner', total: '$120.00' },
    { order: '#1041', item: 'Trail Pack 22L', total: '$89.00' },
    { order: '#1040', item: 'Everyday Mug', total: '$36.00' }
  ];
}
