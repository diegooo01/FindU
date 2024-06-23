import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { NgIf } from "@angular/common";
import { HeaderContentComponent } from "./public/components/header-content/header-content.component";
import { FooterContentComponent } from "./public/components/footer-content/footer-content.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderContentComponent, FooterContentComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FindU';

  showNavFooter: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showNavFooter = !(event.url === '/login' || event.url === '/register');

        /*
        if (event.url === '/login') {
          localStorage.removeItem('id-temporal');
        }
        */
      }
    });
  }
}
