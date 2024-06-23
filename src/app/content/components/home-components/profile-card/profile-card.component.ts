import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  MatCardModule,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardTitleGroup
} from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { UsersService } from '../../../services/users/users.service';
import { Users } from '../../../model/users/users.model';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [
    HttpClientModule,
    MatCardModule,
    RouterLink,
    NgForOf
  ],
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  users: Users[] = [];
  filteredUsers: Users[] = [];
  loggedInUserId: string | null = localStorage.getItem('userId');

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((data: Users[]) => {
      this.users = data;
      this.filterUsers();
    }, error => {
      console.error('Error fetching users', error);
    });
  }

  filterUsers(): void {
    if (this.loggedInUserId) {
      this.filteredUsers = this.users.filter(user => user._id !== this.loggedInUserId);
    } else {
      this.filteredUsers = this.users;
    }
  }
}
