import { Component } from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-register-form',
  standalone: true,
    imports: [
        MatFormField,
        RouterLink
    ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {

}
