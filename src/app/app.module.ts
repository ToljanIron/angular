import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CommonModule} from "@angular/common";
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import {userReducer} from "./reducers/user.reducer";
import {UsersListComponent} from "./users-list/users-list.component";
import {UserEffects} from "./effects/user.effects";
import {EffectsModule} from "@ngrx/effects";

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    RegisterComponent,
    LoginComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterOutlet,
    RouterLink,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({users: userReducer}),
    EffectsModule.forRoot([UserEffects])
  ],
  providers: [UserEffects],
  bootstrap: [AppComponent]
})
export class AppModule { }
