import { Component, OnInit } from '@angular/core';
import { IGroup } from '../../../models/IGroup';

@Component({
  selector: 'app-group-chats-container',
  templateUrl: './group-chats-container.component.html',
  styleUrls: ['./group-chats-container.component.css']
})
export class GroupChatsContainerComponent implements OnInit {
  public groupChatsList: IGroup[] = [];

  constructor() { }

  ngOnInit() {
  }

}
