import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { Localization } from '../../models/localization.model';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {
  public defaultLanguage: string = "en";
  public supportedLanguages: Array<string> = [];

  public constructor(private translateService: TranslateService) { }

  public init() {
    const localization: Localization = environment.localization;
    const languages: Array<string> = localization.languages.map((lang) => lang.code);

    this.supportedLanguages = languages;
    this.defaultLanguage = localization.defaultLanguage;

    this.translateService.addLangs(languages);
    this.translateService.setDefaultLang(localization.defaultLanguage);
    this.translateService.use(localization.defaultLanguage);
  }

  //GET THE CURRENT LANGUAGE
  public get language(): string {
    return this.translateService.currentLang; // return current language code
  }

  /**
   * Set the current language.
   * Note: The current language is saved to the local storage.
   */
  public set language(language: string) {
    const isSupportedLanguage: boolean = this.supportedLanguages.find((lang) => lang === language) !== null;

    if (!isSupportedLanguage) {
      language = this.defaultLanguage;
    }

    this.translateService.use(language);
  }
}
