import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import * as socketIo from 'socket.io-client';
const SERVER_URL = 'http://localhost:3000';
@Injectable()
export class ChatService {

  private socket;

  public initSocket(): void {
      this.socket = socketIo(SERVER_URL);
  }

  public send(message): void {
      this.socket.emit('createMessage', message);
  }

  public onMessage() {
      return new Observable(observer => {
          this.socket.on('newMessage', (data) =>{
            console.log(data); 
            observer.next(data)
            });
      
      });
  }

}

