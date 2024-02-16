import { Component } from '@angular/core';

@Component({
  selector: 'app-home-dash',
  templateUrl: './home-dash.component.html',
  styleUrls: ['./home-dash.component.scss']
})
export class HomeDashComponent {
  receivedBoolean: boolean = false;

  constructor() { }

  handleBooleanChange(value: boolean) {
    this.receivedBoolean = value;
  }
}
