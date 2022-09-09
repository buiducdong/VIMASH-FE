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

  navData = navData;

}
