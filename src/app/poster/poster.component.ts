import { Component, OnInit, ChangeDetectorRef, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Poster } from 'src/app/models/poster'
import { ActivatedRoute, Router} from  '@angular/router'
import { Subject} from 'rxjs'
import { posterService } from '../services/poster.service'
import'rxjs/add/operator/takeUntil'


@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit {
  public allPoster: Poster[] = null;
  private ngUnsubscribe: Subject<boolean> = new Subject<boolean>();
  result: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ChangeDetectorRef: ChangeDetectorRef,
    private PosterService: posterService
  ) { }

  ngOnInit() {
    this.PosterService.show()
    .takeUntil(this.ngUnsubscribe)
    .subscribe(item => {
      this.result = item;
      console.log('item is', item);
      this.ChangeDetectorRef.detectChanges();
    })
  }

}
