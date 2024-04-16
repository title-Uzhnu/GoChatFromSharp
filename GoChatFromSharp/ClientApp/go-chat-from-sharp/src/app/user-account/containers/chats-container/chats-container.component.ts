import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chats-container',
  templateUrl: './chats-container.component.html',
  styleUrls: ['./chats-container.component.css']
})
export class ChatsContainerComponent implements OnInit {

  public friendChatsOpen: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  public goToFriends(){
    this.friendChatsOpen = true;
  }

  public goToGroups(){
    this.friendChatsOpen = false;
  }
}
