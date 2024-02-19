import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { GlobalInterceptor } from './core/interceptors/global.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './core/interceptors/loading-interceptor.interceptor';
import { ToastrModule } from 'ngx-toastr';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
  }),
    NgxSpinnerModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    ToastrModule.forRoot({
      progressBar: true
    }),
  ],
  providers: [   {
    provide: HTTP_INTERCEPTORS,
    useClass: GlobalInterceptor,
    multi: true
  },
  {
    provide:HTTP_INTERCEPTORS,
    useClass:LoadingInterceptor,
    multi: true
  }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  bootstrap: [AppComponent]
})
export class AppModule { }
