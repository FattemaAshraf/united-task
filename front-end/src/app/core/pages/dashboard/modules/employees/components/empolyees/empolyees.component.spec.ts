import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpolyeesComponent } from './empolyees.component';

describe('EmpolyeesComponent', () => {
  let component: EmpolyeesComponent;
  let fixture: ComponentFixture<EmpolyeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpolyeesComponent]
    });
    fixture = TestBed.createComponent(EmpolyeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
