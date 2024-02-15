import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundRouteComponent } from './components/not-found-route/not-found-route.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';



@NgModule({
  declarations: [
    NotFoundRouteComponent,
    NavBarComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    NotFoundRouteComponent,
    NavBarComponent,
    SideBarComponent
  ]
})
export class SharedModule { }
