import { Component, inject } from '@angular/core';
import { Authservice } from '../../services/authservice';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  public authservice = inject(Authservice);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  logInForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  onSubmit() {
    if (this.logInForm.invalid) return;

    const data = {
      email: this.logInForm.get('email')?.value || '',
      password: this.logInForm.get('password')?.value || '',
    };

    this.authservice.signIn(data).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log('error:', err);
      },
    });
  }
}
