import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('en');
  }

  loadLocales(...locales: Locale[]): void {
    locales.forEach((locale) => {
      this.translateService.setTranslation(locale.language, locale.data, false);
    });
  }
}

export interface Locale {
  language: string;
  data: any;
}
