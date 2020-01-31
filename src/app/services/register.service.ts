import { Injectable } from '@angular/core';
import { ApiService } from './api';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  public errorFlag = false;
  constructor(
    private api: ApiService
  ) { }
  register(registerFrom) {
    return this.api.registerNewUser(registerFrom)
          .map(res => {
            if (res) {
              return true;
            }
            return [];
          })
          .catch(() => {
            this.errorFlag = true;
            // if call fails, return null results
            return of(null);
          });
        }
  }
