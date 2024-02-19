import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  textDir: string = 'ltr';

  constructor(
    private _httpClient: HttpClient,
    public Translate: TranslateService
  ) {
    Translate.onLangChange.subscribe((event: LangChangeEvent) => {
      if (event.lang === 'en') {
        this.textDir = 'ltr';
      } else {
        this.textDir = 'rtl';
      }
    });
  }
  onchangeLang(lang: string) {
    this.Translate.setDefaultLang(lang);
    this.Translate.use(lang);
    localStorage.setItem('lang', lang);
  }
}
