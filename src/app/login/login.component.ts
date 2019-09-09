import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
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


  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    console.log('I am here');
  }
  login() {
    this.loading = true;
    console.log('formModel', this.formModel);

    this.loginService.login(this.formModel)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(result => {
        console.log('result',result);
          if (result === true) {
            // login successful
            this.router.navigate(['/']);
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
