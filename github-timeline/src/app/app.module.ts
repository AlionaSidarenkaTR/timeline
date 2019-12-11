import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepoService } from './repo.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TimelineComponent } from './timeline/timeline.component';
import { MessageService } from './message.service';
import { ErrorInterceptorService } from './error-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true},
    RepoService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
