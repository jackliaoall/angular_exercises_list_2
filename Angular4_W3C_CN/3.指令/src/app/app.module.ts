import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreetDirective } from './greet.directive';
import { ExeUnlessDirective } from './exe-unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    GreetDirective,
    ExeUnlessDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
