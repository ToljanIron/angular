import {Component, OnInit} from '@angular/core';
import {User} from "../../core/models/user.model";
import {Store} from "@ngrx/store";
import {loadUsers} from "../../core/ngrx/actions/user.actions";
import {UserState} from "../../core/ngrx/reducers/user.reducer";
import {Observable} from "rxjs";
import {selectUsers, selectUsersPagination} from "../../core/ngrx/selectors/user.selectors";
import {Pagination} from "../../core/models/pagination.model";


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit {
  user$: Observable<User[]> = new Observable<User[]>();
  pagination$: Observable<Pagination> = new Observable<Pagination>();
  currentPage = 0;
  lastPage = 0;
  constructor(private store: Store<UserState>) {

  }

  ngOnInit() {
    this.loadUsers(this.currentPage);
    this.user$ = this.store.select(selectUsers);
    this.pagination$ = this.store.select(selectUsersPagination);
    this.loadUsersSuccessSubscription();
  }

  loadUsers(page: number) {
    this.store.dispatch(loadUsers({ page }));
  }
  onScroll() {
    this.currentPage++;
    if (this.currentPage <= this.lastPage) {
      this.loadUsers(this.currentPage);
    }
  }

  loadUsersSuccessSubscription() {
    this.user$.subscribe((user) => {
      console.log(user);
    });
    this.pagination$.subscribe((pagination) => {
      this.currentPage = pagination.current_page;
      this.lastPage = pagination.last_page;
    });
  }
}
