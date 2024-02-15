import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmpolyeesComponent } from './components/empolyees/empolyees.component';
import { AddEditDetailsEmployeeComponent } from './components/add-edit-details-employee/add-edit-details-employee.component';


@NgModule({
  declarations: [
    EmpolyeesComponent,
    AddEditDetailsEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
