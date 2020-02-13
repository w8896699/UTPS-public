import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Poster } from 'src/app/models/poster';
import {Observable, throwError} from 'rxjs';

interface LocalLoginResponse {
  _id: string;
  title: string;
  created_at: string;
  startTime: string;
  endTime: string;
  state: boolean;
  accessToken: string;
}

@Injectable({
  providedIn: 'root'
})


export class ApiService {
  public apiPath: string;
  public adminUrl: string;
  public env: 'local' | 'prod';
  constructor(
    private http: HttpClient
    ) {
      const { hostname } = window.location;
      switch (hostname) {
        case 'localhost':
          // Local
          this.apiPath = 'http://localhost:3000/api/public';
          this.env = 'local';
          break;
      }
    }
    login(formModel) {
      const queryString = 'login';
      return this.http.post<LocalLoginResponse>(`${this.apiPath}/${queryString}`,
      {formModel}
      );
    }

    getAllPoster(): Observable<any[]> {
      const queryString = 'allposters';
      return this.http.get<Poster[]>(`${this.apiPath}/${queryString}`, {});
    }
    deletePoster(poster: Poster) {
      const queryString = `allposters/${poster._id}`;
      return this.http.delete<Poster>(`${this.apiPath}/${queryString}`, {});
    }

    addPoster(poster: FormData) {
      const queryString = `allposters`;
      const userSession = JSON.parse(window.localStorage.getItem('currentUser')).token;
      const httpOptions = {
        headers: new HttpHeaders({
          // 'Content-Type':  'application/json',//用了formData就不用这一行，formData会自己定义分割线和content-type（javascript是这样其他的好好像不是）
          Authorization: 'Bearer ' + userSession
        }),
      };
      return this.http.post(`${this.apiPath}/${queryString}`, poster, httpOptions);
    }


    registerNewUser(registerFrom) {
      const queryString = `user`;
      return this.http.post(`${this.apiPath}/${queryString}`, registerFrom, {});
    }

  handleError(error: any): Observable<any> {
    const reason = error.message ? error.message : (error.status ? `${error.status} - ${error.statusText}` : 'Server error');
    console.log('API error =', reason);
    return throwError(error);
  }
  }
