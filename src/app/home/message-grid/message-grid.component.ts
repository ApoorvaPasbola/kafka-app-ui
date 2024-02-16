import {Component} from '@angular/core';
import {HomeService} from '../home.service';
import {IMessages} from 'src/app/models/messages';
import {FormControl} from "@angular/forms";
import {MessageService} from "primeng/api";


@Component({
  selector: 'app-message-grid',
  templateUrl: './message-grid.component.html',
  styleUrls: ['./message-grid.component.scss']
})
export class MessageGridComponent {

  rowData!: IMessages[]
  currentBatchSize: FormControl<number> = new FormControl();

  constructor(private homeService: HomeService, private messageService:MessageService) {
    this.currentBatchSize.setValue(50)
    this.homeService.updateDataSetSub.subscribe((topic) => {
        this.setCurrentTopicOrRefresh(topic);
    })
  }

  public setCurrentTopicOrRefresh(topic: string) {
    this.homeService.getMessages(topic, this.currentBatchSize.value).subscribe({
      next: (data: IMessages[]) => {
        console.log("Got Value for new topic ", topic, data)
        if (data.length == 0) {
          this.messageService.add({severity:"info",summary:"Empty Topic",data:"Topic Might be Empty"})
        }
        this.rowData = data.map(value => {
          return {...value,message: JSON.stringify(JSON.parse(value.message),null,2), time: new Date(+value.time).toString()}
        })
      },
      error: (error) => {
        this.rowData = [];
        this.messageService.add({severity:"error",summary:"Error Occurred",data:"Error while getting data"})
      }
    });
  }

  public triggerRefresh() {
    this.setCurrentTopicOrRefresh(this.homeService.currentTopic)
  }


}
