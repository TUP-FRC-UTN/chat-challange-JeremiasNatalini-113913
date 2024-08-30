import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserMessageComponentComponent } from './user-message-component/user-message-component.component';
import { ChatRoomComponentComponent } from './chat-room-component/chat-room-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserMessageComponentComponent,  // Asegúrate de que esté importado
    ChatRoomComponentComponent  // Asegúrate de que esté importado
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Asegúrate de que sea "styleUrls" (en plural)
})
export class AppComponent {
  title = 'chat-challenge';
}
