import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { IChatMessage } from '../../models/IChatMessage';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private chatUrl: string = "someUrl";

  public messages: string[] = [];

  public hubConnection!: signalR.HubConnection;

  constructor(private http: HttpClient) { }

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7011/chat')
      .build();

    this.hubConnection.start()
      .then(() => console.log('SignalR connection started.'))
      .catch(err => console.error('Error while starting SignalR connection:', err));

    this.hubConnection.onclose(error => {
        console.error('SignalR connection closed:', error);
    });

    this.hubConnection.on('Receive', message => {
      console.log(message);
    });
  }

  public sendMessage = (message: string) => {
    this.hubConnection.invoke('Send', message)
      .catch(err => console.error('Error while sending message:', err));
  }

  public stopConnection () {
    this.hubConnection.stop();
  }

  public editMEssage(message: IChatMessage): void{
    this.http.put(this.chatUrl + "messages/edit/" + message.id, JSON.stringify(message));
  }

  public deleteMessage(id: number): void{
    this.http.get(this.chatUrl + "messages/delete/" + id);
  }
}

