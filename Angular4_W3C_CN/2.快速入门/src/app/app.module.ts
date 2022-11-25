import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SlUserComponent } from './sl-user/sl-user.component';
import { SlMembersComponent } from './sl-members/sl-members.component';
import { MemberService } from './member.service';

@NgModule({
  declarations: [
    AppComponent,
    SlUserComponent,
    SlMembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
