import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HomeService} from "../../home.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-topic-form',
  templateUrl: './topic-form.component.html',
  styleUrl: './topic-form.component.scss'
})
export class TopicFormComponent {
  topicConfig: FormGroup = new FormGroup({
    partition: new FormControl<number>(1),
    topicName: new FormControl<string>(''),
  })
  constructor(private home_service:HomeService, private messageService:MessageService) {
  }

  createTopic() {
    this.home_service.createTopic(this.topicConfig.value).subscribe({
      next: (values)=>{
        this.messageService.add({severity:'success',summary:'Success', detail:`${JSON.stringify(values)}`})
        console.log("NextValue logged ", values)

      },
      error: (value)=>{
        console.log("Error logged ", value)
        this.messageService.add({severity:'error',summary:'Error', detail:`${JSON.stringify(value)}`})
      }
    })
  }
}
