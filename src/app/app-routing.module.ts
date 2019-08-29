import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PosterComponent } from 'src/app/poster/poster.component'

const routes: Routes = [
{
  path: 'poster',
  component: PosterComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
