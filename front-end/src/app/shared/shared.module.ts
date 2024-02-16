import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundRouteComponent } from './components/not-found-route/not-found-route.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCommonModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [NotFoundRouteComponent, NavBarComponent, SideBarComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatTooltipModule,
    RouterLink,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatCommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule
  ],
  exports: [
    NotFoundRouteComponent,
    NavBarComponent,
    SideBarComponent,
    MatIconModule,
    RouterModule,
    MatTooltipModule,
    RouterLink,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatCommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule
  ],
})
export class SharedModule {}
