import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from "../../environments/environment";
import { Observable, Subject} from "rxjs";
import {IMessages} from "../models/messages";
import {TreeNode} from "primeng/api";
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private _base_url = environment.baseURL
  private _message_url = environment.messagesEndpoint
  updateDataSetSub: Subject<string> = new Subject<string>();
  public currentTopic!: string;
  showTopicForm:boolean = false
  constructor(private http: HttpClient) { }

  getMessages(topic:string,batch:number):Observable<IMessages[]>{
   return this.http.get(this._message_url  + topic + "?batch="+batch) as Observable<IMessages[]>;
  }

  getTopics(): Observable<string[]> {
    return this.http.get(this._base_url + "topics" ) as Observable<string[]>;
  }

  createTopic(topicConfig: {topicName:string,partition:number}){
    this.showTopicForm = false;
    return this.http.post(this._base_url + "topic",topicConfig)
  }
  deleteTopic(topic:TreeNode){
    return this.http.delete(this._base_url + `topic/${topic.data}`)
  }
  setCurrentTopic(topic:string){
    this.currentTopic = topic;
    this.updateDataSetSub.next(topic)
  }

}
