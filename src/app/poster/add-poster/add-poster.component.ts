import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Poster} from 'src/app/models/poster';
import {posterService} from 'src/app/services/poster.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-poster',
  templateUrl: './add-poster.component.html',
  styleUrls: ['./add-poster.component.scss']
})
export class AddPosterComponent implements OnInit {
  public contentInput: any;
  public locationInput: any;
  public pictureInput: any;

  @Output() addPosterEvent: EventEmitter<any[] | Poster> = new EventEmitter();

  constructor(
    private ActiveModal: NgbActiveModal,  // has to to here for html use.
    private posterService: posterService,
    private router: Router
  ) {
  }

  ngOnInit() {

  }

  register() {

  }

  submitPoster() {
    // console.log('I have',this.contentInput );
    // console.log('I have',this.locationInput );
    // console.log('I have',this.pictureInput );
    const newPoster = new Poster({
      location: this.locationInput,
      content: this.contentInput,
      pictures: this.pictureInput
    });
    console.log(newPoster);
    this.posterService.add(newPoster)
      .subscribe(item => {
        this.router.navigate(['poster']); //i found it is uncessary, i keep it here just for reference of how to use navigate
        this.addPosterEvent.emit(item);
        // console.log('success');
        this.ActiveModal.dismiss('dismissed page');
      });
  }

}
