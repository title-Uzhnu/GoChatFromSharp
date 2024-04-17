import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGroup } from '../../models/IGroup';
import { IFriend } from '../../models/IFriend';

@Injectable({
  providedIn: 'root'
})
export class ChatsControlService {
  public baseUrl: string = "https://localhost:4200/api/";
  public token: string = "";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public getFriends(): Observable<IFriend[]>{
    return this.http.get<IFriend[]>(this.baseUrl + "friends", this.httpOptions);
  }

  public getGroups(): Observable<IGroup[]>{
    return this.http.get<IGroup[]>(this.baseUrl + "groups", this.httpOptions);
  }

  public addFriend(friendEmail: string): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl + 'friends/add', JSON.stringify(friendEmail), this.httpOptions);
  }

  public enterToGroup(groupId: number): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl + 'groups/enter/' + groupId, {}, this.httpOptions);
  }

  public createGroup(): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl + 'create', {}, this.httpOptions);
  }

  public deleteUserFromFriends(friendId: number): Observable<boolean> {
    return this.http.delete<boolean>(this.baseUrl + `friends/${friendId}`);
  }

  public exitFromGroup(groupId: number): Observable<boolean> {
    return this.http.delete<boolean>(this.baseUrl + `groups/exit/${groupId}`, this.httpOptions);
  }

  public deleteGroup(groupId: number): Observable<boolean> {
    return this.http.delete<boolean>(this.baseUrl + `groups/${groupId}`, this.httpOptions);
  }

}
