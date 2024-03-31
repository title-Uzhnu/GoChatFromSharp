import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ActiveChatComponent } from './main-chatting/components/active-chat/active-chat.component';
import { RealtimeClientService } from './realtime-client.service';
import { ChatService } from './main-chatting/services/chat.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FriendCardComponent } from './user-account/components/friend-card/friend-card.component';
import { SettingsContainerComponent } from './user-account/containers/settings-container/settings-container.component';
import { AuthService } from './user-account/resources/auth.service';
import { SettingsService } from './user-account/resources/settings.service';
import { FriendsContainerComponent } from './user-account/containers/friends-container/friends-container.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { ChatContainerComponent } from './main-chatting/containers/chat-container/chat-container.component';
import { FilterPipe } from './shared/filter.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,

    ActiveChatComponent,
    ChatContainerComponent,

    FriendsContainerComponent,
    FriendCardComponent,
    SettingsContainerComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatCheckboxModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,

    HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers: [
    RealtimeClientService,
    ChatService,

    AuthService,
    SettingsService,
    provideAnimationsAsync()
  ]
})
export class AppModule { }
