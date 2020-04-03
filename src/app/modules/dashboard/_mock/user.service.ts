import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

export type Role = 'admin' | 'user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _userSubject$: BehaviorSubject<Role>;
  user$: Observable<Role>;

  constructor() {
    this._userSubject$ = new BehaviorSubject<Role>('user');
    this.user$ = this._userSubject$.asObservable();
  }

  updateUserSubject(role: Role) {
    this._userSubject$.next(role);
  }
}
