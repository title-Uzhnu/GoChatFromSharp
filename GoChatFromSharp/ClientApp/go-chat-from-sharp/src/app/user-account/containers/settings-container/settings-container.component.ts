import { Component, OnInit } from '@angular/core';
import { IUserSettings } from '../../../models/IUserSettings';
import { SettingsService } from '../../resources/settings.service';

@Component({
  selector: 'app-settings-container',
  templateUrl: './settings-container.component.html',
  styleUrls: ['./settings-container.component.css']
})
export class SettingsContainerComponent implements OnInit {
  public userSettings: IUserSettings = {
    id: 0,
    nightMode: false,
    language: "en-us",
    synchronization: false
  }

  public languagesList: string[] = [
    "en-us",
    "ua",
    "pl"
  ];




  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
  }

  public saveNewSettings(){
    this.settingsService.editSettings(this.userSettings).subscribe(result => {
      result ? "Settings edited successfully!" : "Smth went wrong";
    });
  }

}
