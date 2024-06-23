import { Component } from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    MatFormField,
    RouterLink
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

}
