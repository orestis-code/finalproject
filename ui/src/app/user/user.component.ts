import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface User {
  id: number;
  username: string;
  password: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  imports: [CommonModule, FormsModule]
})
export class UserComponent {
  userId: number = 0;
  user: User | null = null;
  newUser: User = { id: 0, username: '', password: '' };
  message: string = '';

  constructor(private userService: UserService) {}

  fetchUser() {
    this.userService.getUserById(this.userId).subscribe({
      next: (data) => {
        this.user = data;
        this.message = 'User found successfully!';
      },
      error: (err) => {
        this.user = null;
        this.message = 'User not found.';
      }
    });
  }

  saveUser() {
    this.userService.saveUser(this.newUser).subscribe({
      next: () => {
        this.message = 'User saved successfully!';
        this.newUser = { id: 0, username: '', password: '' };
      },
      error: (err) => {
        this.message = 'Failed to save user.';
      }
    });
  }
}
