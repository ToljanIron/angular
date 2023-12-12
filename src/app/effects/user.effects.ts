import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {of, from, mergeMap} from 'rxjs'; // Import 'from'
import { catchError, map, switchMap } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import * as userActions from '../actions/user.actions';

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.loadUsers),
      mergeMap(() =>
        this.userService.getUsersList().pipe(
          map((response) => {
            return userActions.loadUsersSuccess({ users: response.success });
          }),
          catchError((error) => {
            console.error('API error:', error);
            return of(userActions.loadUsersFailure({ error }));
          })
        )
      )
    )
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
