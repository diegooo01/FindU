import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../../services/users/users.service';
import { ChatsService } from '../../../services/chats/chats.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users-chat.component.html',
  styleUrls: ['./users-chat.component.css']
})
export class UsersChatComponent implements OnInit {
  userId: string | null = null;
  user: any;
  messages: any[] = [];
  messageContent: string = '';
  senderId: string | null = localStorage.getItem('userId');

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private chatsService: ChatsService
  ) {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId) {
      this.usersService.getUserById(this.userId).subscribe(user => {
        this.user = user;
        this.loadMessages();
      });
    }
  }

  loadMessages() {
    if (this.senderId && this.userId) {
      this.chatsService.getChats(this.senderId, this.userId).subscribe(messages => {
        this.messages = messages;
      });
    }
  }

  sendMessage(event: Event) {
    event.preventDefault();
    if (this.messageContent.trim() !== '' && this.senderId && this.userId) {
      this.chatsService.sendMessage(this.senderId, this.userId, this.messageContent, 'text').subscribe(
        response => {
          this.messageContent = '';
          this.loadMessages();
        },
        error => {
          console.error('Error sending message:', error);
        }
      );
    }
  }

}
