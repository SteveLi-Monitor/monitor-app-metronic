import { Component } from '@angular/core';
import { I18nService } from './i18n/i18n.service';
import { EnLocale } from './i18n/locales/en';
import { ZhLocale } from './i18n/locales/zh';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private i18nService: I18nService) {
    this.i18nService.loadLocales(EnLocale, ZhLocale);
  }

  title = 'monitor-app';
}
