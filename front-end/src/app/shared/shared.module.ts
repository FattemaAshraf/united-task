import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundRouteComponent } from './components/not-found-route/not-found-route.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink, RouterModule } from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';



@NgModule({
  declarations: [
    NotFoundRouteComponent,
    NavBarComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatTooltipModule,
    RouterLink
  ],exports:[
    NotFoundRouteComponent,
    NavBarComponent,
    SideBarComponent,
    MatIconModule,
    RouterModule,
    MatTooltipModule,
    RouterLink

  ]
})
export class SharedModule { }
