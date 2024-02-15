import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundRouteComponent } from './shared/components/not-found-route/not-found-route.component';

const routes: Routes = [
  {path:'', redirectTo: 'dashboard', pathMatch:'full'},
  {path:'dashboard', loadChildren: () => import('./core/pages/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path:'**', component:NotFoundRouteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
