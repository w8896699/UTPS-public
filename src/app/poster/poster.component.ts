import {Component, OnInit, ChangeDetectorRef, OnDestroy, ChangeDetectionStrategy, EventEmitter} from '@angular/core';
import {Poster} from 'src/app/models/poster';
import {ActivatedRoute, Router} from '@angular/router';
import {Subject} from 'rxjs';
import {AddPosterComponent} from './add-poster/add-poster.component';
import {PosterService} from '../services/poster.service';
import {DialogService} from 'ng2-bootstrap-modal';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmComponent} from 'src/app/confirm/confirm.component';
import {ApiService} from '../services/api';
import {LoginComponent} from 'src/app/login/login.component';
import 'rxjs-compat/add/operator/takeUntil';


@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit, OnDestroy {


  result: any;

  public addPosterEvent: EventEmitter<Poster>;
  public allPoster: Poster[] = null;
  private loginEvent: boolean;
  private ngUnsubscribe: Subject<boolean> = new Subject<boolean>();
  private ngbModal: NgbModalRef = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef,
    private api: ApiService,
    private posterService: PosterService,
    private dialogService: DialogService,
    private ngbService: NgbModal
  ) {
  }

  ngOnInit() {
    this.posterService.show()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(item => {
        this.result = item;
        console.log('item is', item);
        this.changeDetectorRef.detectChanges();
      });
  }

  delete(activity) { // replace this part with another seperate table component, this way suck
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
                  this.changeDetectorRef.detectChanges();
                },
                error => {
                  console.log('error =', error);
                });
          }
        }
      );
  }

  addPoster() {
    this.loginEvent = localStorage.getItem('currentUser') !== null;
    // todo check if logged in
    this.ngbModal = this.ngbService.open(AddPosterComponent, {size: 'lg'});
    this.ngbModal.componentInstance.addPosterEvent.subscribe((rec) => {
      if (rec) {
        this.result.unshift(rec);
      }
    });
    // console.log(this.ngbModal);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
