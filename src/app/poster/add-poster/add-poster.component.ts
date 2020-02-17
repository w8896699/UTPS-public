import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Poster} from 'src/app/models/poster';
import {PosterService} from 'src/app/services/poster.service';
import {Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-add-poster',
  templateUrl: './add-poster.component.html',
  styleUrls: ['./add-poster.component.scss']
})
export class AddPosterComponent implements OnInit {
  public picture: any;
  public contentInput: any;
  public locationInput: any;
  public pictureInput: any;
  public uploadPictures: any;
  @Output() addPosterEvent: EventEmitter<any[] | Poster> = new EventEmitter();

  constructor(
    private ActiveModal: NgbActiveModal,  // has to to here for html use.
    private posterService: PosterService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.uploadPictures = [];
  }

  submitPoster() {
    // const newPoster = new Poster({
    //   location: this.locationInput,
    //   content: this.contentInput,
    //   picture: this.uploadPictures[0]
    // });
    let formData = new FormData();
    formData.append('location', this.locationInput); // 以后可能需要弄成两个不同的apicall， 一个call传图片，一个传其他文字信息
    formData.append('content', this.contentInput);
    // this.uploadPictures.forEach(element => {
     (this.uploadPictures[0]) && formData.append('picture', this.uploadPictures[0]);
    // });
    // console.log('hiahiababa', formData.getAll('location'));
    // console.log('poster', formData);
    this.posterService.add(formData)
      .subscribe(item => {

        // this.router.navigate(['poster']); // i found it is uncessary, i keep it here just for reference of how to use navigate
        // this.addPosterEvent.emit(item);
        console.log('success');
        this.ActiveModal.dismiss('dismissed page');
        window.location.reload();
      });
  }
}
