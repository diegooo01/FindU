import { Component } from '@angular/core';
import {ProfileCardComponent} from "../../components/home-components/profile-card/profile-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProfileCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
