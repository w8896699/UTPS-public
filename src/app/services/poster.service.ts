import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { of } from 'rxjs';

import { ApiService } from './api';
import { Poster } from 'src/app/models/poster';
@Injectable({
  providedIn: 'root'
})
export class PosterService {
  public errorFlag = false;
  constructor(
    private api: ApiService
  ) { }

  show() {
    const allPoster = this.api.getAllPoster()
    .map(res => {
      console.log(res);
      const allResults = [] as any;
      res.forEach(item => {
        const r = new Poster(item);
        allResults.push(r);
      });
      return allResults;
    })
    .catch(() => {
      this.errorFlag = true;
      // if call fails, return null results
      return of(null as Poster);
    });
    return allPoster;
  }

  add(poster: Poster) {
    return this.api.addPoster(poster)
    .map(res => {
      if (res) {
        return new Poster(res);
      }
      return [];
    })
    .catch(() => {
      this.errorFlag = true;
      // if call fails, return null results
      return of(null as Poster);
    });
  }
}
