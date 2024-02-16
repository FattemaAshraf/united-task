import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-details-employee',
  templateUrl: './add-edit-details-employee.component.html',
  styleUrls: ['./add-edit-details-employee.component.scss'],
})
export class AddEditDetailsEmployeeComponent {
  departments: string[] = [
    'General Management',
    'Marketing Department',
    'Finance Department',
    'Sales Department',
    'Human Resource Department',
    'Purchase Department',
  ];
  constructor() {}
  employeeForm = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[A-Za-z]{3,}(?: [A-Za-z]{3,})*$'),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    nationalId: new FormControl(null, [
      Validators.required,
      Validators.pattern('^([0-9]){14}$'),
    ]),
    department: new FormControl(null, [Validators.required]),
    hireDate: new FormControl(null, [Validators.required]),
    manager: new FormControl(null, [Validators.required]),
    code: new FormControl(null, [
      Validators.required,
      Validators.pattern('^([0-9]){8,}$'),
    ]),
  });

  onSubmit(formData: FormGroup) {
    console.log(formData.value);
  }
}
