import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { HttpClient, HttpResponse, HttpHeaders  } from '@angular/common/http'
import { Poster } from 'src/app/models/poster'
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

    getAllPoster(): Observable<any[]> {
      const queryString = 'allposters';
      return this.http.get<Poster[]>(`${this.apiPath}/${queryString}`, {});
    }
    deletePoster(poster: Poster){
      const queryString = `allposters/${poster._id}`;
      const full = this.http.delete<Poster>(`${this.apiPath}/${queryString}`, {});
      console.log('full request is', full);
      return full;
    }
  }
