import { Component, OnInit } from '@angular/core';
import { IUserSettings } from '../../../models/IUserSettings';

@Component({
  selector: 'app-settings-container',
  templateUrl: './settings-container.component.html',
  styleUrls: ['./settings-container.component.css']
})
export class SettingsContainerComponent implements OnInit {
  public userSettings: IUserSettings = {
    nightMode: false,
    language: "en-us",
    synchronization: false
  }

  public languagesList: string[] = [
    "en-us",
    "ua",
    "pl"
  ];




  constructor() { }

  ngOnInit() {
  }

}
