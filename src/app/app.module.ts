import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CommonModule} from "@angular/common";
import { IndexComponent } from './pages/index/index.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule, provideHttpClient, withInterceptors} from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import {userReducer} from "./core/ngrx/reducers/user.reducer";
import {UsersListComponent} from "./pages/users-list/users-list.component";
import {UserEffects} from "./core/ngrx/effects/user.effects";
import {EffectsModule} from "@ngrx/effects";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./core/material/material.module";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {bearerInterceptor} from "./core/interceptors/bearer.interceptor";
import {EmailVerificationComponent} from "./pages/auth/email-verification/email-verification.component";
import {Error404Component} from "./pages/error404/error404.component";

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    RegisterComponent,
    LoginComponent,
    UsersListComponent,
    DashboardComponent,
    EmailVerificationComponent,
    Error404Component
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
    EffectsModule.forRoot([UserEffects]),
    BrowserAnimationsModule,
    MaterialModule,
    InfiniteScrollModule
  ],
  providers: [
    UserEffects,
    provideHttpClient(
      withInterceptors([bearerInterceptor])
    )],
  bootstrap: [AppComponent],

})
export class AppModule { }
