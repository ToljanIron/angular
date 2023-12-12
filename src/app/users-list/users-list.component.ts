import {Component, OnInit} from '@angular/core';
import {User} from "../models/user.model";
import {Store} from "@ngrx/store";
import {loadUsers} from "../actions/user.actions";
import {UserState} from "../reducers/user.reducer";
import {Observable} from "rxjs";
import { selectUsers } from "../selectors/user.selectors";


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit {
  users$: Observable<User[]> = new Observable<User[]>();

  constructor(private store: Store<UserState>) {}

  ngOnInit() {
    this.store.dispatch(loadUsers());
    this.users$ = this.store.select(selectUsers);
  }

}
