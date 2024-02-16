import {Component, ViewEncapsulation} from '@angular/core';
import {HeaderService} from "../header.service";

@Component({
  selector: 'app-settings-menu',
  templateUrl: './settings-menu.component.html',
  styleUrls: ['./settings-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SettingsMenuComponent {


  constructor(public headerService:HeaderService) {
  }

  showDialog() {
    this.headerService.openSettings = true;
  }
}
