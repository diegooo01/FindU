import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { UsersService } from '../../../services/users/users.service';
import { Users } from '../../../model/users/users.model';
import { NgForOf, CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [
    HttpClientModule,
    MatCardModule,
    RouterLink,
    NgForOf,
    CommonModule
  ],
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  users: Users[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    const loggedInUserId = localStorage.getItem('userId');

    this.usersService.getUsers().subscribe({
      next: (data: Users[]) => {
        this.users = data.filter(user => user._id !== loggedInUserId);
      },
      error: (err) => {
        console.error('Error fetching users', err);
      }
    });
  }
}
