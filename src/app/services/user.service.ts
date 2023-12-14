import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {environment} from "../../environments/environment";
import {UntypedFormGroup} from "@angular/forms";
import {BaseService} from "./base.service";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService
{
  protected url: string = environment.apiUrl;

  constructor(protected override http: HttpClient, protected override route: Router)
  {
    super(http, route);
  }
  getUsersList(page: number): Observable<any> {
    const params = new HttpParams().set('page', page.toString());

    return this.http.get<any>(`${this.url}/list-users`, { params }).pipe(
      catchError((error) => {
        console.error('HTTP error:', error);
        return throwError(error);
      })
    );
  }

  seedUsers(dashboardForm: UntypedFormGroup){
    return new Promise((resolve, reject) => {
      this.http.post<any>(this.url + '/seed-users', {
        count: dashboardForm.get("count")?.value,
      }).pipe(
        catchError((error) => {
          this.handleError(error, dashboardForm);
          reject(error);
          return throwError(error);
        })
      ).subscribe((data: any) => {
        resolve(data);
      });
    });
  }


}
