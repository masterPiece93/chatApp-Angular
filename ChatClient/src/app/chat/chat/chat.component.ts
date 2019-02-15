import { Component, OnInit } from "@angular/core";
import { ChatService } from "../chat.service";
import * as moment from 'moment';
@Component({
templateUrl:'./chat.component.html',
styleUrls:['./chat.component.css']
})
export class ChatComponent {

    messages:any[] = [];
    user:string;
    showEditPanel:boolean = false;
    constructor(private _service:ChatService) { }
  
    formattedTime:any;
    ngOnInit() {
  
      this.user = 'User'+ Math.floor(1000 + Math.random() * 9000);
  
      this._service.initSocket()
      this._service.onMessage().subscribe(message => {
          this.formattedTime = moment(message["createdAt"]).format('h:mm a');
        this.messages.push(message);
      })
    }
  
    sendMessage($event,chat){
      console.log($event);
      this._service.send({"from":this.user,"text":chat});
    }
    edit(value){
      this.user = value;
      this.showEditPanel = false;
    }

}
