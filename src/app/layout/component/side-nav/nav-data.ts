import { INavbar } from "./Inavbar";

export const navData: Array<INavbar> = [
  {
    routeLink: 'customer',
    label: 'common.menu.master.name',
    level: 1,
    icon: '',
    category: 'master',
    items: [],
    expand: false,
    children: {
      routeLink: 'stock',
      label: 'common.menu.master.customer',
      level: 2,
      icon: '',
      category: 'master',
      expand: false,
      children: {
        routeLink: 'customer/delivery',
        label: 'common.menu.master.customer-delivery-dest',
        level: 3,
        icon: '',
        category: 'master',
        expand: false
      }
    }
  },
  {
    routeLink: 'warehouse',
    label: 'common.menu.goods-receipt.name',
    expanded: false,
    level: 1,
    icon: '',
    category: 'master',
    items: [
      {
        routeLink: 'warehouse/child1',
        label: 'child1',
        level: 2,
        icon: '',
        expanded: false,
        category: 'customer',
        items: [],
      },
      {
        routeLink: 'warehouse/child2',
        label: 'child2',
        level: 2,
        icon: '',
        expanded: false,
        category: 'customer',
        items: [],
      }
    ]
  },
  {
    routeLink: 'issue',
    label: 'common.menu.goods-issue.name',
    level: 1,
    icon: '',
    category: 'master',
    items: [],
  },
  {
    routeLink: 'stock',
    label: 'common.menu.stock.name',
    level: 1,
    icon: '',
    category: 'master',
    items: [],
  },
  {
    routeLink: 'inventory',
    label: 'common.menu.inventory.name',
    level: 1,
    icon: '',
    category: 'master',
    items: [],
  },
  {
    routeLink: 'daily',
    label: 'common.menu.daily.name',
    level: 1,
    icon: '',
    category: 'master',
    items: [],
  },
  {
    routeLink: 'edi',
    label: 'common.menu.edi.name',
    level: 1,
    icon: '',
    category: 'master',
    items: [],
  },
]
