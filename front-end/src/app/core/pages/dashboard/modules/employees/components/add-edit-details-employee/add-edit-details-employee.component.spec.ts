import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDetailsEmployeeComponent } from './add-edit-details-employee.component';

describe('AddEditDetailsEmployeeComponent', () => {
  let component: AddEditDetailsEmployeeComponent;
  let fixture: ComponentFixture<AddEditDetailsEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditDetailsEmployeeComponent]
    });
    fixture = TestBed.createComponent(AddEditDetailsEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
