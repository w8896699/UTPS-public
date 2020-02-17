import {Component, OnDestroy, OnInit, ChangeDetectorRef} from '@angular/core';
import {LoginComponent} from '../../login/login.component';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
// import {Subscription} from 'rxjs';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public loginEvent: boolean;
  private ngbModal: NgbModalRef = null;
  // subscription: Subscription;

  constructor(
    private ngbService: NgbModal,
    private loginService: LoginService,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router
    // private userService: UserService
  ) {
  }

  ngOnInit() {
    this.loginEvent = localStorage.getItem('currentUser') !== null; // check if user logged in
    console.log('wtf',this.loginEvent);
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['poster']);
    this.loginEvent = localStorage.getItem('currentUser') !== null; // ture for loged in false for not
    this.changeDetectorRef.detectChanges();
  }
  login() {
    this.ngbModal = this.ngbService.open(LoginComponent, {size: 'lg'});
    this.ngbModal.result.then((item) => {
      console.log('User close this windows', item); // which I haven;t add close button yet
    }, (item) => { // background dissmiss item is 0
      this.loginEvent = localStorage.getItem('currentUser') !== null; // ture for loged in false for not
    });
    this.changeDetectorRef.detectChanges();
  }


  // ngOnDestroy() {
  //   this.ngUnsubscribe.next();
  //   this.ngUnsubscribe.complete();
  // }
}
