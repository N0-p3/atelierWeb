import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of } from 'rxjs';
import { Login } from '../models/auth/login'
import { Register } from '../models/auth/register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private cookie: CookieService) { }

  register(credentials: Register): Observable<any> {
    return this.httpClient.post('/api/auth/register', credentials);
  }

  login(credentials: Login): Observable<any> {
    return this.httpClient.post('/api/auth/login', credentials);
  }

  logout(): Observable<any> {
    return this.httpClient.post('/api/auth/logout', {});
  }

  isConnected(): boolean {
    return (this.cookie.get('session-info') == "true"); 
  }

  isDisconnected(): boolean {
    return !this.isConnected();
  }
}
