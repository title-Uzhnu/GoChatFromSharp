import { Component, Input, OnInit } from '@angular/core';
import { IFriend } from '../../../models/IFriend';

@Component({
  selector: 'app-friend-card',
  templateUrl: './friend-card.component.html',
  styleUrls: ['./friend-card.component.css']
})
export class FriendCardComponent implements OnInit {
  @Input("friend") cardFriend!: IFriend;


  constructor() { }

  ngOnInit() {
  }

}
