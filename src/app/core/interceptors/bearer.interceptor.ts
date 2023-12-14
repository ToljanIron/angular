import { HttpInterceptorFn } from '@angular/common/http';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";

export const bearerInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);

  if (auth.checkAuthToken) {
    let modifiedReq = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${auth.getToken()}`,
      }
    });

    return next(modifiedReq);
  }

  return next(req);
};
