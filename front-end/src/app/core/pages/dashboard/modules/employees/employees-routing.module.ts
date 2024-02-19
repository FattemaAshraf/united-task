import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpolyeesComponent } from './components/empolyees/empolyees.component';
import { AddEditDetailsEmployeeComponent } from './components/add-edit-details-employee/add-edit-details-employee.component';

const routes: Routes = [
  {path:'',component: EmpolyeesComponent},
  {path:'add-employee',component: AddEditDetailsEmployeeComponent},
  {path:'update-employee/:id', component: AddEditDetailsEmployeeComponent},
  {path:'view-employee/:id', component: AddEditDetailsEmployeeComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
