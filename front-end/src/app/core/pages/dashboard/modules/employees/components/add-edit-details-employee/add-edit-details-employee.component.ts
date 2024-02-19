import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { IEmployee } from '../../models/iemployee';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-details-employee',
  templateUrl: './add-edit-details-employee.component.html',
  styleUrls: ['./add-edit-details-employee.component.scss'],
})
export class AddEditDetailsEmployeeComponent {
  //page mode of component
  isViewMode: boolean = true;
  isAddMode: boolean = true;
  isUpdateMode: boolean = true;

  //-------//
  employee: IEmployee | any;
  detailsEmployee: IEmployee | any;
  employeeId: number;
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

  //-------//

  constructor(
    private _employeeService: EmployeeService,
    private _router: Router,
    private _toastr: ToastrService,
    private _activatedRoute: ActivatedRoute
  ) {
    this.employeeId = _activatedRoute.snapshot.params['id'];
    if (this.employeeId) {
      this.isUpdateMode = true;
      this.onGetEmployeeById(this.employeeId);
    } else {
      this.isAddMode = true;
      this.isUpdateMode = false;
      this.isViewMode = false;
    }
  }

  //form
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
    this.employee = formData.value;
    console.log(this.employee);
    if (this.employeeId) {
      this.onUpdatemployee(this.employeeId,this.employee)
    } else {
      this.onAddEmployee(this.employee)
    }
  }
  //added integration
  onAddEmployee(addNewEmp: IEmployee) {
    this._employeeService.onAddEmployee(addNewEmp).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
        this._toastr.error('Something was wrong', 'try again');
      },
      complete: () => {
        this._toastr.success('Employee Added Successfully');
        this._router.navigate(['/dashboard/employees']);
      },
    });
  }
  //updated integration
  onUpdatemployee(id: number, updatedEmp: IEmployee) {
    this._employeeService.onUpdateEmployee(id, updatedEmp).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
        this._toastr.error('Something was wrong', 'try again');
      },
      complete: () => {
        this._toastr.success('Employee Updated Successfully');
        this._router.navigate(['/dashboard/employees']);
      },
    });
  }
  //get Employyee + path value to form
  onGetEmployeeById(id: number) {
    this._employeeService.onGetEmployee(id).subscribe({
      next: (res) => {
        console.log(res);
        this.detailsEmployee = res;
      },
      error: () => {},
      complete: () => {
        this.employeeForm.patchValue(this.detailsEmployee);
      },
    });
  }
}
