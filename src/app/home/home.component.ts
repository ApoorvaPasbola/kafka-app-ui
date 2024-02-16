import { Component } from '@angular/core';
import {HomeService} from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private _homeService:HomeService) {
  }
  triggerDataTableUpdate(topic:string){
    this._homeService.setCurrentTopic(topic);
  }
}
