import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/environments/environment';
import { NewUser } from '../models/new-user.models';
import { Observable } from 'rxjs';
import { LoginUser } from '../models/login-user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUrl = `${enviroment.DOMAIN}/auth`;
  constructor(private httpClient: HttpClient) { }

  public create(newUser: NewUser): Observable<any> {
    return this.httpClient.post<any>(this.authUrl, newUser);
  }
  public login(loginUser: LoginUser): Observable<any> {
    return this.httpClient.post<any>(`${this.authUrl}/login`, loginUser);
  }
}
