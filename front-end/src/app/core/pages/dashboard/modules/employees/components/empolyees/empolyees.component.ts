import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { IEmployee } from '../../models/iemployee';

@Component({
  selector: 'app-empolyees',
  templateUrl: './empolyees.component.html',
  styleUrls: ['./empolyees.component.scss'],
})
export class EmpolyeesComponent implements OnInit {
  // response
  employeesRespnse: IEmployee[] = [];
  constructor(private _employeeService: EmployeeService) {}

  //ngOnit
  ngOnInit(): void {
    this.getAllEmployees();
  }

  //subscribtion on service
  getAllEmployees() {
    this._employeeService.onGetAllEmployees().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: () => {},
      complete: () => {},
    });
  }
}
