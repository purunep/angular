import { LoadingSpinnerService } from './common/services/loading-spinner.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { ModalModule } from 'ngx-bootstrap/modal';
import {JQ_TOKEN} from './common/services/jQuery.service';

import { AppComponent } from './app.component';
import { LoadingSpinnerComponent } from './common/components/loading-spinner/loading-spinner.component';
import { FileUploadComponent } from './common/components/file-upload/file-upload.component';
import { StateModule, StateService } from './common/state/state.module';
import { reducers } from './common/state/reducers';
import { environment } from '../environments/environment';

declare const jQuery: Object;
@NgModule({
  declarations: [
    AppComponent,
    LoadingSpinnerComponent,
    FileUploadComponent,
    FileSelectDirective,
    FileDropDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    StateModule
  ],
  providers: [LoadingSpinnerService, StateService],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(state: StateService) {
        state.init(reducers, {}, [], true);
    }

}
