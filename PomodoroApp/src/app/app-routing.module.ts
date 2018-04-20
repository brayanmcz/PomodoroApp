import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { AuthGuardService } from './core/auth-guard.service';

import { UsersLoginComponent } from './users/users-login/users-login.component';
import { UsersProfileComponent } from './users/users-profile/users-profile.component';

const routes: Routes = [
  { path: '', component: UsersLoginComponent },
  { path: 'login', component: UsersLoginComponent },
  { path: 'main', component: UsersProfileComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
