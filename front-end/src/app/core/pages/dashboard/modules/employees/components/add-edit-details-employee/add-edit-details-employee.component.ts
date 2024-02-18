import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { IEmployee } from '../../models/iemployee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-details-employee',
  templateUrl: './add-edit-details-employee.component.html',
  styleUrls: ['./add-edit-details-employee.component.scss'],
})
export class AddEditDetailsEmployeeComponent {
  addEmployee: IEmployee | any;
  departments: string[] = [
    'General Management',
    'Marketing Department',
    'Finance Department',
    'Sales Department',
    'Human Resource Department',
    'Purchase Department',
  ];
  jobsTitles: string[] = [
    'Entry-level',
    'Intermediate or experienced (senior staff)',
    'First-level management',
    'Middle management',
    'Executive or senior management',
  ];

  constructor(
    private _employeeService: EmployeeService,
    private _router: Router
  ) {}
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
    departmentId: new FormControl(null, [Validators.required]),
    jobTitleId: new FormControl(null, [Validators.required]),
    hireDate: new FormControl(null, [Validators.required]),
    mobileNumber: new FormControl(null, [
      Validators.required,
      Validators.pattern('^([0-9]){11}$'),
    ]),
    code: new FormControl(null, [
      Validators.required,
      Validators.pattern('^([0-9]){8,}$'),
    ]),
  });

  onSubmit(formData: FormGroup) {
    console.log(formData.value);
    this.addEmployee= formData.value;
    console.log(this.addEmployee);
    this._employeeService.onAddEmployee(this.addEmployee).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this._router.navigate(['/dashboard/employees']);
      },
    });
  }
}
