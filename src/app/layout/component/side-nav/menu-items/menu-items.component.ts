import { Component, Input, OnInit } from '@angular/core';
import { INavbar } from '../Inavbar';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent implements OnInit {

  @Input() data: INavbar = {
    routeLink: '',
    label: '',
    items: [],
    expanded: false,
    level: 1,
    category: '',
  }

  @Input() expanded: boolean | undefined;
  @Input() multiple: boolean | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
