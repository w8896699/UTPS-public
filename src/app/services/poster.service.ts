import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { of } from 'rxjs';
import { Observable } from 'rxjs/Observable';

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

  add(formData: FormData) {
    return this.api.addPoster(formData)
      .map((res: any) => {
        if (res) {
          const d = res;
          return d ? new Poster(d) : null;
        }
      })
      .catch(this.api.handleError);
        }
}
