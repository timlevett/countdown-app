import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MomentModule} from 'angular2-moment';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CommaNumberPipe } from './comma-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CommaNumberPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MomentModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
