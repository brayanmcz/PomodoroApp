import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { UsersLoginComponent } from './users/users-login/users-login.component';
import { UsersProfileComponent } from './users/users-profile/users-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersLoginComponent,
    UsersProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
