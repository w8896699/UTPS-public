import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PosterComponent} from './poster/poster.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ConfirmComponent} from './confirm/confirm.component';
import {BootstrapModalModule} from 'ng2-bootstrap-modal';
import {PosterService} from 'src/app/services/poster.service';
import {AddPosterComponent} from './poster/add-poster/add-poster.component';
import {FooterComponent} from './shared/footer/footer.component';
import {LoginComponent} from './login/login.component';
import {HeaderComponent} from './shared/header/header.component';
import { PictureUploadComponent } from './picture-upload/picture-upload.component';
import { DragDropDirective } from './shared/utils/drag-drop.directive';

@NgModule({
  declarations: [
    AppComponent,
    PosterComponent,
    ConfirmComponent,
    AddPosterComponent,
    FooterComponent,
    LoginComponent,
    HeaderComponent,
    PictureUploadComponent,
    DragDropDirective
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
    PosterService
  ],
  entryComponents: [
    PosterComponent,
    ConfirmComponent,
    AddPosterComponent,
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
