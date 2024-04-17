import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IUserSettings } from '../../models/IUserSettings';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public baseUrl: string = "https://localhost:4200/api/settings/";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public getSettings(): Observable<IUserSettings>{
    return this.http.get<IUserSettings>(this.baseUrl, this.httpOptions);
  }

  public editSettings(newUserSettings: IUserSettings): Observable<boolean>{
    return this.http.put<boolean>(this.baseUrl, JSON.stringify(newUserSettings), this.httpOptions);
  }

}
