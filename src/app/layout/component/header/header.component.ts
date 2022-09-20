import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LocalizationService } from 'src/app/core/services/localization/localization.service';
import { environment } from 'src/environments/environment';
import { navData } from '../side-nav/nav-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  flag: string = 'assets/images/japan.png'
  currentLanguage = "ja";
  navbarData = navData;
  header: any;
  isCustomer = false
  constructor(private router: Router, private localizationService: LocalizationService, private translateService: TranslateService) {
    let routee: any = this.router.url
    this.header = this.navbarData.find((nav) => routee.includes(nav.routeLink))
    router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        let route: any = event.urlAfterRedirects
        this.header = this.navbarData.find((nav) => route.includes(nav.routeLink))
        if (!route.includes("delivery") && this.header?.children) {
          this.header.children.expand = false
        } 
      }
    })
  }

  expandTitleBar (): void {
    this.header.children.expand = true
  }
  reduceTitleBar ():void {
    this.header.children.expand = false
  }

  ngOnInit(): void {
    this.translateService.use(this.currentLanguage);
  }
  
  language() {
    console.log(this.localizationService.defaultLanguage)
    if (this.currentLanguage == 'en') {
      this.currentLanguage = 'ja'
      this.translateService.use(this.currentLanguage)
      this.flag = 'assets/images/japan.png'
    } else {
      this.currentLanguage = 'en'
      this.translateService.use(this.currentLanguage)
      this.flag = "assets/images/us.png"
    }
  }
}
