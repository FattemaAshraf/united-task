import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>,next: HttpHandler): Observable<HttpEvent<unknown>> {
    const baseUrl:string = 'https://localhost:7152/api/';
    let newHeaders = {};
    let newRequest = request.clone({
      setHeaders: newHeaders, url: request.url.includes('assets') ? request.url : baseUrl + request.url
    })

    return next.handle(newRequest);
  }
}
