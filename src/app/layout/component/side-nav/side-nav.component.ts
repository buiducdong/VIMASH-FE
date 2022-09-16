import { Component, OnInit } from '@angular/core';
import { navData } from './nav-data';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navbarData = navData;
  multiple: boolean = false;

  expandedNavItem(data: any): void {
    this.navbarData.find(nav => {
      if (nav.label === data.label) {
        data.expanded = !data.expanded
      }
    }
    )
  }

}
