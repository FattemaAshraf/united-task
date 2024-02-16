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
  addEmployeeForm = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.pattern('([a-zA-Z]){3,12}'),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    nationalId: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        '(2|3)[0-9][1-9][0-1][1-9][0-3][1-9](01|02|03|04|11|12|13|14|15|16|17|18|19|21|22|23|24|25|26|27|28|29|31|32|33|34|35|88)ddddd'
      ),
    ]),
    department: new FormControl(null, [Validators.required]),
    hireDate: new FormControl(null, [Validators.required]),
    manager: new FormControl(null, [Validators.required]),
    code: new FormControl(null, [Validators.required]),

  });
}
