import { TestBed } from '@angular/core/testing';

import { LoadingInterceptor } from './loading-interceptor.interceptor';

describe('LoadingInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoadingInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LoadingInterceptor= TestBed.inject(LoadingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
