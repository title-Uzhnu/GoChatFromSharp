import { Component, OnInit } from '@angular/core';
import { IGroup } from '../../../models/IGroup';
import { ChatService } from '../../../main-chatting/services/chat.service';
import { ChatsControlService } from '../../resources/chats-control.service';

@Component({
  selector: 'app-group-chats-container',
  templateUrl: './group-chats-container.component.html',
  styleUrls: ['./group-chats-container.component.css']
})
export class GroupChatsContainerComponent implements OnInit {
  public groupChatsList: IGroup[] = [];

  constructor(
    private chatsControlService: ChatsControlService
  ){

  }

  public ngOnInit(): void {
    this.chatsControlService.getGroups().subscribe(groupChatsList => this.groupChatsList = groupChatsList);
  }

}
