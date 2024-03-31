import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as signalR from "@microsoft/signalr";

@Injectable({
  providedIn: 'root'
})
export class RealtimeClientService {
  private hubConnection!: signalR.HubConnection;

  public messageHub: string = "";

  connect(){
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:7011/chat', {
      })
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connected to SignalR hub'))
      .catch(err => console.error('Error connecting to SignalR hub:', err));

    this.hubConnection.on('Receive', (message) => {
      this.messageHub += message;
    });
  }

  constructor() { }
}
