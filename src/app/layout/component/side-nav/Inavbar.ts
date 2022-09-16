export interface INavbar {
  routeLink: string;
  icon?: string;
  label: string;
  expanded?: boolean;
  items?: INavbar[];
}
