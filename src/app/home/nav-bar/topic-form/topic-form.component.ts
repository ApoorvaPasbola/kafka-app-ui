import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HomeService} from "../../home.service";
import {MessageService} from "primeng/api";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-topic-form',
  templateUrl: './topic-form.component.html',
  styleUrl: './topic-form.component.scss'
})
export class TopicFormComponent {
  topicConfig: FormGroup = new FormGroup({
    name: new FormControl<string>(''),
    partitionsNumber: new FormControl<string>('1'),
    replicationFactor: new FormControl<string>('1'),
  })
  constructor(private home_service:HomeService, private messageService:MessageService) {
  }

  createTopic() {
    this.home_service.createTopic(this.topicConfig.value).subscribe({
      next: (values)=>{
        this.messageService.add({severity:'success',summary:'Success', detail:`${JSON.stringify(values)}`})
      },
      error: (value: HttpErrorResponse)=>{
        this.messageService.add({severity:'error',summary:'Error', detail:'Error while creating the topic '})
      }
    })
  }
}
