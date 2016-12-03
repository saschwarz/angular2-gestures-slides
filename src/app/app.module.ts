import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'hammerjs';
import 'hammer-timejs';

import { DemoOne } from './app.component-one';
import { DemoTwo } from './app.component-two';
import { DragMoveDirective } from './drag-move.directive';

@NgModule({
  declarations: [
    DemoOne,
    DemoTwo,
    DragMoveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [DemoOne, DemoTwo]
})
export class AppModule { }
