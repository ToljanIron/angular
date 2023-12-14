import { Injectable } from '@angular/core';
import {UntypedFormGroup, ValidationErrors} from "@angular/forms";
import {throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "@ngrx/store";

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(
    protected http: HttpClient,
    protected route: Router,
  ) { }

  protected handleError(error: any, form: UntypedFormGroup) {
    if (error.status === 422) {
      let errorsToForm: ValidationErrors | null = {};
      for (const key of Object.keys(error.error.errors)) {
        errorsToForm[key] = error.error.errors[key][0];
      }
      form.setErrors(errorsToForm);
    } else {
      form.setErrors({ backend: error.error });
    }

    return throwError(error);
  }
}
