import {catchError, Observable, throwError} from "rxjs";
import {UntypedFormGroup, ValidationErrors} from "@angular/forms";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {BaseService} from "./base.service";

@Injectable({
  providedIn: 'root',
})

export class AuthService extends BaseService{
  protected url: string = environment.apiUrl;
  constructor(protected override http: HttpClient, protected override route: Router) {
    super(http, route);
  }

  protected storage: Storage = window.localStorage;

  get checkAuthToken() {
    return this.storage.getItem('auth-token') !== null;
  }

  public getToken() {
    return this.storage.getItem('auth-token');
  }

  private setToken(token: string) {
    this.storage.setItem('auth-token', token);
  }

  public redirectTo(returnUrl?: string | null): any[] {
    return [returnUrl];
  }

  login(loginForm: UntypedFormGroup ): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post<any>(this.url + '/login', {
        email: loginForm.get("email")?.value,
        password: loginForm.get("password")?.value
      }).pipe(
        catchError((error) => {
          this.handleError(error, loginForm);
          reject(error);
          return throwError(error);
        })
      ).subscribe((data: any) => {
        this.setToken(data.success.token);
        resolve(data.success);
        this.route.navigate(this.redirectTo('dashboard'));
      });
    });
  }

  public register(registerForm: UntypedFormGroup) {
    return new Promise((resolve, reject) => {
      this.http.post<any>(this.url + '/register', {
        name: registerForm.get("name")?.value,
        email: registerForm.get("email")?.value,
        password: registerForm.get("password")?.value,
        password_confirmation: registerForm.get("password_confirmation")?.value,
      }).pipe(
        catchError((error) => {
          this.handleError(error, registerForm);
          reject(error);
          return throwError(error);
        })
      ).subscribe((data: any) => {
        resolve(data);
        setTimeout(() => {
          this.route.navigate(this.redirectTo('login'));
        }, 5000);
      });
    });
  }

  public emailVerification(id: string, hash: string): Promise<any> {
    const url = `${this.url}/verify-email/${id}/${hash}`;
    return new Promise((resolve, reject) => {
      this.http.get<any>(url)
        .pipe(
          catchError((error) => {
            reject(error);
            return throwError(error);
          })
        )
        .subscribe( (data: any) => {
          resolve(data);
          setTimeout(() => {
            this.route.navigate(this.redirectTo('login'));
          }, 5000);
        });
    });
  };

  public logout() {
    return new Promise((resolve, reject) => {
      this.http.get<any>(this.url + '/logout', {})
        .pipe(catchError((error) => {
          reject(error);
          return throwError(error)
        })).subscribe((data: any) => {
        this.storage.removeItem('auth-token');
        this.route.navigate(['/']);
        resolve(data);
      });
    });
  }
}
