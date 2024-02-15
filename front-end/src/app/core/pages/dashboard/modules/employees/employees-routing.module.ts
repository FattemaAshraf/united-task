import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpolyeesComponent } from './components/empolyees/empolyees.component';

const routes: Routes = [
  {path:'',component: EmpolyeesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
