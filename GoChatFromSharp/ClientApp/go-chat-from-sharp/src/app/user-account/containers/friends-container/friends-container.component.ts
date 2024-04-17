import { Component, OnInit } from '@angular/core';
import { IFriend } from '../../../models/IFriend';
import { ChatsControlService } from '../../resources/chats-control.service';
import { AddFriendDialogComponent } from '../../components/add-friend-dialog/add-friend-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-friends-container',
  templateUrl: './friends-container.component.html',
  styleUrls: ['./friends-container.component.css']
})
export class FriendsContainerComponent implements OnInit{
  public friendsList: IFriend[] = [];

  constructor(
    private dialog: MatDialog,
    private chatsControlService: ChatsControlService
  ){

  }

  public ngOnInit(): void {
    this.chatsControlService.getFriends().subscribe(friendsList => this.friendsList = friendsList);
  }

  public addFriendDialog(){
    const dialogRef = this.dialog.open(AddFriendDialogComponent, {restoreFocus: false});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
