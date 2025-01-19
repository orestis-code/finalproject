import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true, // Mark as standalone
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  imports: [CommonModule, FormsModule] // Import required modules
})
export class AuthComponent {
  isLoginMode = true;
  loginError: string | null = null;

  constructor(private readonly http: HttpClient, private readonly router: Router) {}

  toggleMode(event: Event) {
    event.preventDefault();
    this.isLoginMode = !this.isLoginMode;
  }

  login(form: NgForm) {
    if (form.invalid) return;
    const { username, password } = form.value;

    this.http.post('http://localhost:8080/auth/authentication', { username, password })
      .subscribe({
        next: (response: any) => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('username', username);
          this.router.navigate(['/welcome']);
        },
        error: (err) => {
          console.error('Login failed:', err);
          this.loginError = 'Invalid username or password. Please try again.';
        }
      });
  }

  register(form: NgForm) {
    if (form.invalid) return;
    const { username, email, password } = form.value;

    this.http.post('http://localhost:8080/auth/register', { username, email, password })
      .subscribe({
        next: () => {
          alert('Registration successful!');
          this.isLoginMode = true;
        },
        error: (err) => console.error('Registration failed:', err)
      });
  }

  clearError() {
    this.loginError = null; // Reset error message
  }
}
