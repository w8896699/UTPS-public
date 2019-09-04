import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PosterComponent } from './poster/poster.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmComponent } from './confirm/confirm.component'
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { posterService } from 'src/app/services/poster.service';
import { AddPosterComponent } from './poster/add-poster/add-poster.component';
import { FooterComponent } from './footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    PosterComponent,
    ConfirmComponent,
    AddPosterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BootstrapModalModule.forRoot({container: document.body}),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    posterService
  ],
entryComponents:[
  PosterComponent,
  ConfirmComponent,
  AddPosterComponent
],
  bootstrap: [AppComponent]
})
export class AppModule { }
