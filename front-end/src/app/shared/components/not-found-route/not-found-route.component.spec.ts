import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundRouteComponent } from './not-found-route.component';

describe('NotFoundRouteComponent', () => {
  let component: NotFoundRouteComponent;
  let fixture: ComponentFixture<NotFoundRouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundRouteComponent]
    });
    fixture = TestBed.createComponent(NotFoundRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
