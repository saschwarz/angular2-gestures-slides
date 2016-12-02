import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'hammerjs';
import 'hammer-timejs';

import { DemoOne } from './app.component-one';

@NgModule({
  declarations: [
    DemoOne
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [DemoOne]
})
export class AppModule { }
