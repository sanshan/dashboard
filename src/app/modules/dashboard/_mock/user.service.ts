import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

export type Role = 'admin' | 'user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _userSubject$: BehaviorSubject<Role>;
  user$: Observable<string>;

  constructor() {
    this._userSubject$ = new BehaviorSubject<Role>('user');
    this.user$ = this._userSubject$.asObservable();
  }

  updateUserSubject(role: Role) {
    console.log(role);

    this._userSubject$.next(role);
  }
}
