import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { IEmployee, IEmployeesResponse } from '../../models/iemployee';
import { PageEvent } from '@angular/material/paginator';
import { DeleteDialogComponent } from 'src/app/shared/components/delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-empolyees',
  templateUrl: './empolyees.component.html',
  styleUrls: ['./empolyees.component.scss'],
})
export class EmpolyeesComponent implements OnInit {
  // response
  employeesRespnse: IEmployeesResponse | any;
  employeesData: IEmployee[] = [];
  //paginations
  pageIndex: number = 1;
  pageSize: number = 5666;
  totalEmployees: number | any;
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
    'Entry-level',
    'Intermediate or experienced (senior staff)',
    'First-level management',
    'Middle management',
    'Executive or senior management',
  ];

  constructor(
    private _employeeService: EmployeeService,
    public dialog: MatDialog,
    private _tostar: ToastrService
  ) {}

  //ngOnit
  ngOnInit(): void {
    this.getAllEmployees();
  }

  //subscribtion on service
  getAllEmployees() {
    let params = {
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
    };
    this._employeeService.onGetAllEmployees(params).subscribe({
      next: (res: IEmployeesResponse) => {
        console.log(res);
        this.employeesRespnse = res;
        this.employeesData = this.employeesRespnse.employees;
        this.totalEmployees = this.employeesRespnse.totalEmployees;
      },
      error: () => {},
      complete: () => {},
    });
  }
  //method pagenation
  handlePageEvent(e: PageEvent) {
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex + 1;
    console.log(e);
    this.getAllEmployees();
  }
  openDialogDelete(empData: IEmployee): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data:  empData ,
      width: '40%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(empData);
      if (result) {
        console.log(result.id);
        this.ondelete(result.id);
      }
    });
  }
  ondelete(empId: number) {
    this._employeeService.onDeleteEmployee(empId).subscribe({
      next: (res:any) => {
        console.log(res);
        this._tostar.success(res.employee.name,res.message);
      },
      error: (err) => {
      },
      complete: () => {
        this.getAllEmployees();
      },
    });
  }
}
