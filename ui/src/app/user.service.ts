import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface User {
  id: number;
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly baseUrl = 'http://localhost:8080/user';

  constructor(private readonly http: HttpClient) {}

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/get-user-by-id/${id}`);
  }

  saveUser(user: User): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/save-user`, user);
  }
}
