import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlUserComponent } from './sl-user/sl-user.component';
import { SlMembersComponent } from './sl-members/sl-members.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'user' },
  { path: 'user', component: SlUserComponent },
  { path: 'members', component: SlMembersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
