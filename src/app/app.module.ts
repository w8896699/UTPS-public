import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PosterComponent } from './poster/poster.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ConfirmComponent } from './confirm/confirm.component'
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { posterService } from 'src/app/services/poster.service'

@NgModule({
  declarations: [
    AppComponent,
    PosterComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    BootstrapModalModule.forRoot({container: document.body}),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    posterService
  ],
entryComponents:[
  PosterComponent,
  ConfirmComponent
],
  bootstrap: [AppComponent]
})
export class AppModule { }
