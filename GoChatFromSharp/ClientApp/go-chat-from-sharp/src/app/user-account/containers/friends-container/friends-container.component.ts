import { Component, OnInit } from '@angular/core';
import { IFriend } from '../../../models/IFriend';

@Component({
  selector: 'app-friends-container',
  templateUrl: './friends-container.component.html',
  styleUrls: ['./friends-container.component.css']
})
export class FriendsContainerComponent implements OnInit {
  public friendsList: IFriend[] = [];


  constructor() { }

  ngOnInit() {
  }

}
