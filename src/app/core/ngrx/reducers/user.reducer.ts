import { createReducer, on } from '@ngrx/store';
import {User} from "../../models/user.model";
import {loadUsers, loadUsersFailure, loadUsersSuccess} from "../actions/user.actions";
import {Pagination} from "../../models/pagination.model";

export interface UserState {
  users: User[];
  pagination: Pagination;
  error: any;
  loading: boolean;
}

export const initialState: UserState = {
  users: [],
  pagination: {
    current_page: 0,
    last_page: 0,
    per_page: 0,
    next_page_url: null,
    prev_page_url: null,
    total: 0,
    from: 0,
    to: 0
  },
  error: null,
  loading: false
};

export const userReducer = createReducer(
  initialState,
  on(loadUsers, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(loadUsersSuccess, (state, { users, pagination }) => ({
    ...state,
    users: [...state.users, ...users],
    pagination,
    loading: false
  })),
  on(loadUsersFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),
);
