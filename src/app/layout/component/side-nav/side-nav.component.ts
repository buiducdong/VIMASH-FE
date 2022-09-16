import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INavbar } from './Inavbar';
import { navData } from './nav-data';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(public router: Router) {}

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

  getActiveClass(data: INavbar): String {
    return this.router.url.includes(data.routeLink) ? "active" : ""
  }

}
