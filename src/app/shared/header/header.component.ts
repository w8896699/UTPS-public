import {Component, OnDestroy, OnInit} from '@angular/core';
// import {UserService} from '../auth/user.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  login: boolean;
  subscription: Subscription;

  constructor(
    // private userService: UserService
  ) {
  }

  ngOnInit() {
    // this.subscription = this.userService.listenIfLoggedIn().subscribe(ifLogin => {
    //   this.login = ifLogin;
    // });
  }

  logout() {
    // this.userService.logOut();
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
