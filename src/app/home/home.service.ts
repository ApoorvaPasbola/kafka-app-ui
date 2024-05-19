import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from "../../environments/environment";
import { Observable, Subject} from "rxjs";
import {IMessages} from "../models/messages";
import {TreeNode} from "primeng/api";
import { Topic } from '../models/Topics';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private _base_url = environment.baseURL
  updateDataSetSub: Subject<string> = new Subject<string>();
  public currentTopic!: string;
  showTopicForm:boolean = false
  partition=0;
  offset = 0;
  keyFormat = "DEFAULT"
  format = "DEFAULT"
  isAnyProto = false
  constructor(private http: HttpClient) { }

  getMessages(topic:string,batch:number):Observable<IMessages[]>{
    return this.http.get(this.getMessagesURL(topic,batch,this.partition,this.offset,this.keyFormat,this.format,this.isAnyProto)) as Observable<IMessages[]>;
  }

  getTopics(): Observable<Topic[]> {
    return this.http.get(this._base_url + "topic" ) as Observable<Topic[]>;
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

  getMessagesURL(topic:string, batch:number, partition:number, offset:number,keyFormat:string, format:string, isAnyProto:boolean):string{
    return `${this._base_url}/topic/${topic}/messages?partition=${partition}&offset=${offset}&count=${batch}&keyFormat=${keyFormat}&format=${format}&isAnyProto=${isAnyProto}`
  }

}
