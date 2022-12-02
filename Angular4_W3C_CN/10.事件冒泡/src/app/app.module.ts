import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventBubblingComponent } from './event-bubbling/event-bubbling.component';

@NgModule({
  declarations: [
    AppComponent,
    EventBubblingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
