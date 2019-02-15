import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';

import { ChatComponent } from "./chat/chat.component";
import { ChatService } from "./chat.service";
@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule
  ],
  declarations: [ChatComponent],
  providers:[ChatService]
})
export class ChatModule { }
