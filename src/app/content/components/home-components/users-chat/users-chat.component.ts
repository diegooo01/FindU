import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'app-users-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-chat.component.html',
  styleUrls: ['./users-chat.component.css']
})
export class UsersChatComponent implements OnInit {
  userId: string | null = null;
  user: any;

  constructor(private route: ActivatedRoute, private usersService: UsersService) {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId) {
      this.usersService.getUserById(this.userId).subscribe(user => {
        this.user = user;
      });
    }
  }
}
