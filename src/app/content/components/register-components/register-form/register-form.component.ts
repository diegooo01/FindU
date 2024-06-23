import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../../services/account/account.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    RouterLink
  ],
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private router: Router
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      college: ['', [Validators.required]],
      career: ['', [Validators.required]],
      level: ['', [Validators.required, Validators.min(1)]],
      age: ['', [Validators.required, Validators.min(1)]],
      image: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const { name, lastname, email, password, college, career, level, age, image } = this.registerForm.value;
      let username:string = 'hola';
      this.accountService.registerUser(name, lastname, email, password, age, college, career, level, image, username).subscribe({
        next: (response) => {
          console.log('Registration successful', response);
          Swal.fire({
            title: '¡Registro exitoso!',
            text: 'Tu cuenta ha sido creada exitosamente. Serás redirigido al inicio de sesión.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['/login']);
            }
          });
        },
        error: (err) => {
          console.error('Registration failed', err);
          // Add your error handling logic here
          Swal.fire({
            title: 'Error en el registro',
            text: 'Hubo un problema al crear tu cuenta. Por favor, intenta nuevamente.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
          });
        }
      });
    }
  }
}
