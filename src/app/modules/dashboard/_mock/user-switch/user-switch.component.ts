import {Component} from '@angular/core';
import {Role, UserService} from '../user.service';

@Component({
  selector: 'app-user-switch',
  templateUrl: './user-switch.component.html',
  styleUrls: ['./user-switch.component.scss']
})
export class UserSwitchComponent {

  constructor(
    private _u: UserService
  ) {
  }

  switchUser(role: Role) {
    this._u.updateUserSubject(role);
  }

}
