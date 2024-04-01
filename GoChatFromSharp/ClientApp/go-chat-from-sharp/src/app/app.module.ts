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

@NgModule({
  declarations: [
    AppComponent,

    FriendCardComponent,
    SettingsContainerComponent,
    FriendsContainerComponent,

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
    SettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
