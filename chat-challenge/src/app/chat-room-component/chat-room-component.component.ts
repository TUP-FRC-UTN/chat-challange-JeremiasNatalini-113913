import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMessageComponentComponent } from '../user-message-component/user-message-component.component';

@Component({
  selector: 'app-chat-room',
  standalone: true,
  imports: [CommonModule, UserMessageComponentComponent],
  templateUrl: './chat-room-component.component.html',
  styleUrls: ['./chat-room-component.component.css']
})
export class ChatRoomComponentComponent {
  user1 = 'Pepe';
  user2 = 'María';
  messages: { user: string; text: string }[] = [];

  receiveMessage(message: { user: string; text: string }) {
    this.messages.push(message);
  }
}
