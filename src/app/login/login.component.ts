import { Component,EventEmitter, OnInit,Output } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../services/login.service';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private ngUnsubscribe: Subject<boolean> = new Subject<boolean>();
  public currentPage = 1;
  public formModel = {
    username: '',
    password: ''
  };
  public registerFrom = {
    UsernameInput: '',
    PasswordInput: '',
    EmailInput: '',
    nameInput: ''
  };

  loading = false;
  public error = '';

  @Output() loginEvent: EventEmitter<any[] | boolean> = new EventEmitter();
  constructor(
    private ActiveModal: NgbActiveModal,
    private loginService: LoginService,
    private registerService: RegisterService,
  ) { }

  ngOnInit() {
  }
  login() {
    this.loading = true;//以后加loading=false的时候就转圈圈
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

  register() {
    this.loading = true;
    console.log('I am herererer', this.registerFrom);

    this.registerService.register(this.registerFrom)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(result => {
        if (result === true) {
          // register successful
          this.ActiveModal.dismiss('dismissed page');
        }
      },
      error => {
        console.log('error =', error);
        this.error = 'Register faliled';
        this.loading = false;
      }
    );
}

  private page_next() {
    this.currentPage++;
  }

  private p2_back() {
    this.currentPage--;
  }

}
