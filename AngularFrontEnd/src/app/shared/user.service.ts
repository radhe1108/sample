import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from './user.model'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/api/user';
  }

  createUser(user: User) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<User>(this.url, user, httpOptions);
  }
}
