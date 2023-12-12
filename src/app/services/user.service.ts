import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {environment} from "../../environments/environment";
import {User} from "../models/user.model";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class UserService
{
  protected url: string = environment.apiUrl;

  constructor(protected http: HttpClient)
  {}
  getUsersList(): Observable<any> {
    return this.http.get<any>(this.url + "/list-users").pipe(
      catchError((error) => {
        console.error('HTTP error:', error);
        return throwError(error);
      })
    );
  }



}
