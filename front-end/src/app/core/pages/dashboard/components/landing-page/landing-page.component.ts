import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../modules/employees/services/employee.service';
import { IEmployee } from '../../modules/employees/models/iemployee';
interface IMenu {
  title: string;
  icon: string;
  length: number;
}
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  deptCountEmps: number = 0;
  currentYearEmps: number = 0;
  empsTotalCount: number = 0;
  departments: string[] = [
    'General Management',
    'Marketing Department',
    'Finance Department',
    'Sales Department',
    'Human Resource Department',
    'Purchase Department',
  ];

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.countEmployees();
    this.newHiringCount();
    this.countOfDept(this.departments.indexOf('Sales Department'));
  }

  //get emp deptement by id
  countOfDept(departmentId: number) {
    this._employeeService.onGetEmployeesByDeptId(departmentId).subscribe({
      next: (res: IEmployee[]) => {
        console.log(res);
        this.deptCountEmps = res.length;
        console.log(this.deptCountEmps);
      },
    });
  }

  //--------------
  newHiringCount() {
    this._employeeService.onCountEmployeesByCurrentYear().subscribe({
      next: (res) => {
        console.log(res);
        this.currentYearEmps = res;
      },
    });
  }
  //--------------

  countEmployees() {
    this._employeeService.onCountEmployees().subscribe({
      next: (res) => {
        console.log(res);
        this.empsTotalCount = res;
      },
    });
  }
}
