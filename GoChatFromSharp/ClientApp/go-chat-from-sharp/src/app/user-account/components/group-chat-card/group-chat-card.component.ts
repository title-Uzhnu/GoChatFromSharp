import { Component, Input, OnInit } from '@angular/core';
import { IGroup } from '../../../models/IGroup';
import { ChatsControlService } from '../../resources/chats-control.service';

@Component({
  selector: 'app-group-chat-card',
  templateUrl: './group-chat-card.component.html',
  styleUrls: ['./group-chat-card.component.css']
})
export class GroupChatCardComponent implements OnInit {
  @Input("group") groupCard!: IGroup;

  constructor(private chatsControlService: ChatsControlService) { }

  ngOnInit() {
  }

  public exitGroup(groupId: number){
    this.chatsControlService.exitFromGroup(groupId).subscribe(result => {
      result ? "You leaved the group successfully!" : "Smth went wrong";
    });;
  }

  public deleteGroup(groupId: number){
    this.chatsControlService.deleteGroup(groupId).subscribe(result => {
      result ? "Group deleted successfully!" : "Smth went wrong";
    });;
  }

}
