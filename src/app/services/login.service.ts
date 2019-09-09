import { Injectable } from '@angular/core';
import { ApiService } from './api';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public token: string;

  constructor(
    private api: ApiService
  ) { }
  login(formModel) {
    return this.api.login(formModel)
    .map(res => {
         // login successful if there's a jwt token in the response
         console.log('res is', res)
         if (res && res.accessToken) {

          this.token = res.accessToken;
          window.localStorage.clear();
          // store username and jwt token in local storage to keep user logged in between page refreshes
          window.localStorage.setItem('currentUser', JSON.stringify({ username: formModel.username, token: this.token }));

          return true; // successful login
        }
        return false; // failed login
      })
  }
}