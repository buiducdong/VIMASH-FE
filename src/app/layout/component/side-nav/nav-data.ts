import { INavbar } from "./Inavbar";

export const navData: Array<INavbar> = [
  {
    routeLink: 'customer',
    label: 'マスタ'
  },
  {
    routeLink: 'warehouse',
    label: '入庫',
    expanded: false,
    items: [
      {
        routeLink: 'warehouse/child1',
        label: 'child1'
      },
      {
        routeLink: 'warehouse/child2',
        label: 'child2'
      }
    ]
  },
  {
    routeLink: 'issue',
    label: '出庫'
  },
  {
    routeLink: 'stock',
    label: '在庫'
  },
  {
    routeLink: 'inventory',
    label: '棚卸'
  },
  {
    routeLink: 'daily',
    label: '日次'
  },
]
