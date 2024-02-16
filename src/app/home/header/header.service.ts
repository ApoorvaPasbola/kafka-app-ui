import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {KafkaConfig} from "../../models/kafkaconfig";
import {Observable} from "rxjs";
import {MessageService} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _url = environment.configEndpoint;
  public openSettings: boolean = false;
  constructor(private http:HttpClient,private messageService: MessageService) {
  }

  getDefaultConfig(): Observable<KafkaConfig>{
    return this.http.get<KafkaConfig>(this._url);
  }

  saveConfig(config:KafkaConfig){
    this.http.post<KafkaConfig>(this._url,config).subscribe({
      complete: () =>{
        console.log("Config complete is ",config)
      },
      next: value => {
        console.log("Config next ", config, this._url)
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Broker Configured' });
      },
      error: err => {
        console.log("Config error ", config, this._url)
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error while Saving Config' });
      }
    })
  }
}
