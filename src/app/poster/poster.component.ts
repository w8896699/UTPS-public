import { Component, OnInit, ChangeDetectorRef, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Poster } from 'src/app/models/poster'
import { ActivatedRoute, Router} from  '@angular/router'
import { Subject} from 'rxjs'
import { posterService } from '../services/poster.service'
import { DialogService } from 'ng2-bootstrap-modal';
import { ConfirmComponent } from 'src/app/confirm/confirm.component';
import { ApiService } from '../services/api'
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
    private api: ApiService,
    private PosterService: posterService,
    private dialogService: DialogService,

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
  delete(activity) {//replace this part with another seperate table component, this way suck
    this.dialogService.addDialog(ConfirmComponent,
      {
        title: 'Delete Activity',
        message: 'Click <strong>OK</strong> to delete this Poster or <strong>Cancel</strong> to return to the list.'
      }, {
        backdropColor: 'rgba(0, 0, 0, 0.5)'
      })
      .takeUntil(this.ngUnsubscribe)
      .subscribe(
        isConfirmed => {
          if (isConfirmed) {
            // Delete the Activity
            this.api.deletePoster(activity)
              .subscribe(
                () => {
                  this.result.splice(this.result.indexOf(activity), 1);
                  this.ChangeDetectorRef.detectChanges();
                },
                error => {
                  console.log('error =', error);
                });
          }
        }
      );
  }
}
