import { Component } from '@angular/core';
interface IMenu {
  title: string;
  icon: string;
  length: string |null;
}
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
constructor(){

}
menu: IMenu[] = [
  {
    title: 'Empolyees Count',
    icon: 'fa-users',
    length:  `0`,
  },
  {
    title: 'New Hiring(2024)',
    icon: 'fa-user-plus',
    length:  `0`,
  },
  {
    title: 'Sales Department Count',
    icon: 'fa-user-gear',
    length:  `0`,
  },
]
}
