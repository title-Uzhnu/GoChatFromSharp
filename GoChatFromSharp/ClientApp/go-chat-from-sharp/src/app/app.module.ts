import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FriendCardComponent } from './user-account/components/friend-card/friend-card.component';
import { SettingsContainerComponent } from './user-account/containers/settings-container/settings-container.component';
import { FriendsContainerComponent } from './user-account/containers/friends-container/friends-container.component';
import { ActiveChatComponent } from './main-chatting/components/active-chat/active-chat.component';
import { ChatContainerComponent } from './main-chatting/containers/chat-container/chat-container.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatCommonModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './shared/filter.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ChatService } from './main-chatting/services/chat.service';
import { AuthService } from './user-account/resources/auth.service';
import { SettingsService } from './user-account/resources/settings.service';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { GroupChatCardComponent } from './user-account/components/group-chat-card/group-chat-card.component';
import { ChatsContainerComponent } from './user-account/containers/chats-container/chats-container.component';
import { GroupChatsContainerComponent } from './user-account/containers/group-chats-container/group-chats-container.component';
import { ChatsControlService } from './user-account/resources/chats-control.service';

@NgModule({
  declarations: [
    AppComponent,

    FriendCardComponent,
    GroupChatCardComponent,
    SettingsContainerComponent,
    FriendsContainerComponent,
    ChatsContainerComponent,
    GroupChatsContainerComponent,

    ActiveChatComponent,
    ChatContainerComponent,
    FilterPipe,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    MatCommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
  ],
  providers: [
    ChatService,
    AuthService,
    SettingsService,
    ChatsControlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
