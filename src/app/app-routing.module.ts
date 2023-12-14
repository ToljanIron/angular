import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {UsersListComponent} from "./users-list/users-list.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthGuard} from "./guards/auth.guard";
import {GuestGuard} from "./guards/guest.guard";
import {EmailVerificationComponent} from "./email-verification/email-verification.component";
import {Error404Component} from "./error404/error404.component";

const routes: Routes = [
  { path : '', component: IndexComponent},
  { path : 'register', component: RegisterComponent, canActivate: [GuestGuard]},
  { path : 'login', component: LoginComponent, canActivate: [GuestGuard]},
  { path : 'list-users', component: UsersListComponent, canActivate : [AuthGuard]},
  { path : 'dashboard', component: DashboardComponent, canActivate : [AuthGuard]},
  { path : 'verify-email/:id/:hash', component: EmailVerificationComponent},
  { path : '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
