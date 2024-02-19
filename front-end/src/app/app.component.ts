import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'front-end';

  constructor(public Translate: TranslateService) {
    Translate.setDefaultLang('en');
    this.onchangeLang('en')
    if(localStorage.getItem('lang')==null){
      localStorage.setItem('lang','en')
    }
  }

  //----------------
  onchangeLang(lang:string){
    this.Translate.setDefaultLang(lang);
    this.Translate.use(lang);
    localStorage.setItem('lang', lang)
  }
}
