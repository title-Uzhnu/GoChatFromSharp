import { Component, Input, OnInit } from '@angular/core';
import { IGroup } from '../../../models/IGroup';

@Component({
  selector: 'app-group-chat-card',
  templateUrl: './group-chat-card.component.html',
  styleUrls: ['./group-chat-card.component.css']
})
export class GroupChatCardComponent implements OnInit {
  @Input("group") groupCard!: IGroup;

  constructor() { }

  ngOnInit() {
  }

}
