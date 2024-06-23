import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {RouterLink} from "@angular/router";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatMenu, MatMenuTrigger} from "@angular/material/menu";

@Component({
  selector: 'app-header-content',
  standalone: true,
  imports: [
    MatToolbar,
    RouterLink,
    MatIconButton,
    MatIcon,
    MatMenu,
    MatMenuTrigger
  ],
  templateUrl: './header-content.component.html',
  styleUrl: './header-content.component.css'
})
export class HeaderContentComponent {

}
