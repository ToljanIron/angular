import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {of, from, mergeMap, withLatestFrom} from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import * as userActions from '../actions/user.actions';
import {select} from "@ngrx/store";
import {selectUsersPagination} from "../selectors/user.selectors";
import { Store } from '@ngrx/store';
import {loadUsersFailure, loadUsersSuccess} from "../actions/user.actions";

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.loadUsers),
      withLatestFrom(this.store.pipe(select(selectUsersPagination))),
      switchMap(([action, pagination]) => {
        return this.userService.getUsersList(action.page).pipe(
          map((response) => {
            return loadUsersSuccess({ users: response.users, pagination: response.pagination });
          }),
          catchError((error) => {
            console.error('API error:', error);
            return of(loadUsersFailure({ error }));
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private userService: UserService, private store: Store) {}
}
