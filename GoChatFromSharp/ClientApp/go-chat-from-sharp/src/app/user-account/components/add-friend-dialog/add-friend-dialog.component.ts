import {Component} from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { ChatsControlService } from '../../resources/chats-control.service';

@Component({
  selector: 'app-add-friend-dialog',
  templateUrl: './add-friend-dialog.component.html',
  styleUrls: ['./add-friend-dialog.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatInputModule],
})
export class AddFriendDialogComponent {

  constructor(private chatsControlService: ChatsControlService) { }

  ngOnInit() {
  }

  public sendFriendRequest(email: string){
    this.chatsControlService.addFriend(email).subscribe(result => {
      result ? "Friend request was sent successfully!" : "Smth went wrong";
    });;
  }

}
