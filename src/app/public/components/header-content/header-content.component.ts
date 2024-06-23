import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {UsersService} from "../../../content/services/users/users.service";
import { Users } from '../../../content/model/users/users.model';

@Component({
  selector: 'app-header-content',
  standalone: true,
  imports: [
    MatToolbarModule,
    RouterLink,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './header-content.component.html',
  styleUrls: ['./header-content.component.css']
})
export class HeaderContentComponent implements OnInit {
  userName: string = '';
  userLastname: string = '';

  constructor(private router: Router, private userService: UsersService) {}

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.userService.getUserById(userId).subscribe({
        next: (user: Users) => {
          this.userName = user.name;
          this.userLastname = user.lastname;
        },
      });
    }
  }

  logout() {
    localStorage.removeItem('userId');
    this.router.navigate(['/login']);
  }
}
