import { Component } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  constructor(public HelperService: HelperService) {}
  onChangeLang(lang: string) {
    this.HelperService.onchangeLang(lang);
  }
}
