import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundRouteComponent } from './components/not-found-route/not-found-route.component';



@NgModule({
  declarations: [
    NotFoundRouteComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    NotFoundRouteComponent
  ]
})
export class SharedModule { }
