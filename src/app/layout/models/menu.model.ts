export interface ISideMenuNode {
  id: string;
  category: string;
  icon?: string;
  name: string;
  route?: string;
  order: number;
  parentId?: string | null;
  level: number;
  children: ISideMenuNode[];
  role?:string;
}
