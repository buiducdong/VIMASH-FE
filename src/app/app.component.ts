import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { Localization } from './core';
import { IconService } from './core/services/icon/icon.service';
import { LocalizationService } from './core/services/localization/localization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'VIMASH_FE';
  public constructor(private icon: IconService, private localizationService: LocalizationService, private translateService: TranslateService) { }
  localization = environment.localization;
  public ngOnInit(): void {
    this.icon.init();
    //this.localizationService.init()
    //this.translateService.use(this.localization.defaultLanguage);
  }
}
