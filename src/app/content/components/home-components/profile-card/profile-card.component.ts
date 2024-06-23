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
    HttpClientModule, // Importa HttpClientModule aquí
    MatCardModule,
    RouterLink,
    NgForOf
  ],
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  users: Users[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((data: Users[]) => {
      this.users = data;
    }, error => {
      console.error('Error fetching users', error);
    });
  }
}
