import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { IChatMessage } from '../../../models/IChatMessage';
import { IFriend } from '../../../models/IFriend';
import {
  MatDialog,
} from '@angular/material/dialog';
import { ContextMenuDialogComponent } from '../context-menu-dialog/context-menu-dialog.component';

@Component({
  selector: 'app-active-chat',
  templateUrl: './active-chat.component.html',
  styleUrls: ['./active-chat.component.css']
})
export class ActiveChatComponent implements OnInit, OnDestroy {
  public currentFriendChat!: IFriend;

  public messageList: IChatMessage[] = [];
  messageInput: string = '';

  public searchMessage: string = "";

  constructor(private chatService: ChatService,
    public dialog: MatDialog) {

  }
  onEditDialog(message: IChatMessage): void {
    const dialogRef = this.dialog.open(ContextMenuDialogComponent, {
      data: {message},
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  onDeleteMessage(id: number){
    this.chatService.deleteMessage(id);
  }

  ngOnInit() {
    this.chatService.startConnection();
  }

  ngOnDestroy() {
    this.chatService.stopConnection();
  }

  onMessageReceived = (message: IChatMessage) => {
    this.messageList.push(message);
  }

  public sendMessage = () => {
    if (this.messageInput) {
      this.chatService.sendMessage(this.messageInput);
      this.messageInput = '';
    }
  }

  public openContextMenu(id: number){

  }

}
