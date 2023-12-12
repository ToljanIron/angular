import { createReducer, on } from '@ngrx/store';
import {User} from "../models/user.model";
import {loadUsers, loadUsersFailure, loadUsersSuccess} from "../actions/user.actions";

export interface UserState {
  users: User[];
  loading: boolean;
  error: any;
}

export const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};


export const userReducer = createReducer(
  initialState,
  on(loadUsers, state => ({ ...state, loading: true, error: null })),
  on(loadUsersSuccess, (state, { users }) => ({ ...state, users, loading: false })),
  on(loadUsersFailure, (state, { error }) => ({ ...state, error, loading: false })),
);
