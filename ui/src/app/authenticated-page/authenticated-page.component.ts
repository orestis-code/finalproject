import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-authenticated-page',
  templateUrl: './authenticated-page.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  styleUrls: ['./authenticated-page.component.css']
})
export class AuthenticatedPageComponent implements OnInit {
  username: string | null = '';
  searchQuery: string = '';
  users: any[] = [];
  token: string | null = '';

  constructor(private readonly http: HttpClient, private readonly router: Router) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    this.username = localStorage.getItem('username');
    this.token = token;

    if (!token || !this.username) {
      this.router.navigate(['/']);
    }
  }

  searchUsers() {
    if (!this.token) {
      console.error('No token found, cannot perform search.');
      return;
    }

    if (this.searchQuery.trim() === '') {
      this.users = [];
      return;
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    this.http
      .get<any[]>(`http://localhost:8080/user/users?username=${this.searchQuery}`, { headers })
      .subscribe({
        next: (data) => {
          this.users = data;
        },
        error: (err) => {
          console.error('Error fetching users:', err);
        }
      });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.router.navigate(['/']);
  }
}
