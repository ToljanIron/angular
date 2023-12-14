import { createAction, props } from '@ngrx/store';
import {User} from "../../models/user.model";
import {Pagination} from "../../models/pagination.model";

export const loadUsers = createAction('[User] Load Users', props<{ page: number }>());
export const loadUsersSuccess = createAction('[User] Load Users Success', props<{ users: User[]; pagination: Pagination }>());
export const loadUsersFailure = createAction('[User] Load Users Failure', props<{ error: any }>());
