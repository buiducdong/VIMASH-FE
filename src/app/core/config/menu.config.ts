import { ISideMenuNode } from "src/app/layout/models/menu.model";

export const MENU_DATA_SYSTEM: Array<ISideMenuNode> = [
  {
    id: '1',
    icon: '',
    category: 'master',
    name: 'common.menu.master.name',
    route: '/master',
    order: 1,
    level: 1,
    children: [
      {
        id: '101',
        level: 2,
        icon: 'icon-company',
        category: 'master',
        name: 'common.menu.master.company',
        route: '/system/company',
        order: 1,
        children: []
      },
      {
        id: '102',
        level: 2,
        icon: 'icon-team',
        category: 'master',
        name: 'common.menu.master.user',
        route: '/system/user',
        order: 2,
        children: []
      }
    ]
  }
];