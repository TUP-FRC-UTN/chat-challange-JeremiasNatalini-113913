import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-message',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-message-component.component.html',
  styleUrls: ['./user-message-component.component.css']
})
export class UserMessageComponentComponent {
  @Input() user: string = ''; // Nombre del usuario
  @Output() messageSend = new EventEmitter<{ user: string; text: string }>();

  messageText: string = ''; // Esta es la propiedad que almacena el texto del mensaje

  sendMessage() {
    if (this.messageText.trim()) {
      this.messageSend.emit({ user: this.user, text: this.messageText });
      this.messageText = ''; // Limpia el campo después de enviar el mensaje
    }
  }
}
