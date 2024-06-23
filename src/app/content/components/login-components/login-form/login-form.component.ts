import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../../services/account/account.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    RouterLink
  ],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.accountService.loginUser(email, password).subscribe({
        next: (response) => {
          if(!response.state) throw new Error("Nor valid User"); 
          let data = response.data;
          console.log(data)
          localStorage.setItem('userId', data._id);
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error('Login failed', err);
          // Add your error handling logic here
        }
      });
    }
  }
}
