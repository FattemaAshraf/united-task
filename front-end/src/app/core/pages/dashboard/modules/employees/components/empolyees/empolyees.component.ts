import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { IEmployee, IEmployeesResponse } from '../../models/iemployee';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-empolyees',
  templateUrl: './empolyees.component.html',
  styleUrls: ['./empolyees.component.scss'],
})
export class EmpolyeesComponent implements OnInit {

  // response
  employeesRespnse: IEmployeesResponse|any;
  employeesData: IEmployee[]=[];
  //paginations
  pageIndex: number=1;
  pageSize:number=5;
  totalEmployees:number=100;
  //data for dept and jobTitle
  departments: string[] = [
    'General Management',
    'Marketing Department',
    'Finance Department',
    'Sales Department',
    'Human Resource Department',
    'Purchase Department',
  ];
  jobsTitles: string[] = [
    "Entry-level",
    "Intermediate or experienced (senior staff)",
    "First-level management",
    "Middle management",
    "Executive or senior management"
  ];
  constructor(private _employeeService: EmployeeService) {}

  //ngOnit
  ngOnInit(): void {
    this.getAllEmployees();
  }

  //subscribtion on service
  getAllEmployees() {
    let params={
      pageIndex:this.pageIndex,
      pageSize:this.pageSize
    }
    this._employeeService.onGetAllEmployees(params).subscribe({
      next: (res:IEmployeesResponse) => {
        console.log(res);
        this.employeesRespnse=res;
        this.employeesData = this.employeesRespnse.employees;
        this.totalEmployees= this.employeesRespnse.totalEmployees;

      },
      error: () => {},
      complete: () => {},
    });
  }
//method pagenation
  handlePageEvent(e: PageEvent) {
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.getAllEmployees();
  }
}
