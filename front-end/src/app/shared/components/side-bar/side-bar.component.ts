import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from '../../services/helper.service';
interface IMenu {
  title: string;
  icon: string;
  link: string;
}
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  @Output() isOpenedValue = new EventEmitter<boolean>();
  isOpened: boolean = false;

  constructor(
    private _router: Router,
    public  HelperService:HelperService
  ) {}
  ngOnInit() {
      this._router.navigate(['/dashboard/landing-page']);
  }
  menu: IMenu[] = [
    {
      title: 'Home',
      icon: 'fa-solid fa-house',
      link: '/dashboard/landing-page',
    },
    {
      title: 'Employees',
      icon: 'fa-solid fa-users',
      link: '/dashboard/employees',
    },
  ];
  onClicked() {
    this.isOpened = !this.isOpened;
    this.isOpenedValue.emit(this.isOpened);
    console.log(this.isOpened);
  }
}
