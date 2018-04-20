import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuardService } from './core/auth-guard.service';

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
    AppRoutingModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    AuthGuardService, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
