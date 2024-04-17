import { Component, Input, OnInit } from '@angular/core';
import { IFriend } from '../../../models/IFriend';
import { ChatsControlService } from '../../resources/chats-control.service';

@Component({
  selector: 'app-friend-card',
  templateUrl: './friend-card.component.html',
  styleUrls: ['./friend-card.component.css']
})
export class FriendCardComponent implements OnInit {
  @Input("friend") friendCard!: IFriend;

  constructor(private chatsControlService: ChatsControlService) { }

  ngOnInit() {
  }

  public deleteUserFromFriends(friendId: number){
    this.chatsControlService.deleteUserFromFriends(friendId).subscribe(result => {
      result ? "Friend deleted successfully!" : "Smth went wrong";
    });
  }

}
