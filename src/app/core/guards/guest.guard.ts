import {ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot} from '@angular/router';
import {AuthService} from "../services/auth.service";
import {inject} from "@angular/core";

export const GuestGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  const auth = inject(AuthService);

  return !auth.checkAuthToken;
}
