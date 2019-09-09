import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PosterComponent} from 'src/app/poster/poster.component';
import {LoginComponent} from 'src/app/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: PosterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'poster',
    component: PosterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
