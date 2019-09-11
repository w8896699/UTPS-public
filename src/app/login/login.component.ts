import { Component,EventEmitter, OnInit,Output } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private ngUnsubscribe: Subject<boolean> = new Subject<boolean>();
  public formModel = {
    username: '',
    password: ''
  };
  loading = false;
  public error = '';

  @Output() loginEvent: EventEmitter<any[] | boolean> = new EventEmitter();
  constructor(
    private ActiveModal: NgbActiveModal,
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }
  login() {
    this.loading = true;
    console.log('formModel', this.formModel);

    this.loginService.login(this.formModel)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(result => {
          if (result === true) {
            // login successful
            this.loginEvent.emit(result);
            this.ActiveModal.dismiss('dismissed page');
          }
        },
        error => {
          console.log('error =', error);
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      );
  }

}
