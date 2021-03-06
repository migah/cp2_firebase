import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs";
import {User} from "./user";


@Injectable()
export class UserService {

  users: User[];

  constructor(private af : AngularFire) { }

  getUsers() : Observable<User[]>{
    return this.af.database.list('users');
  }

  getUser($key : string) : Observable<User>{
    return this.af.database.object('users/' +$key);
  }

  deleteUser($key : string) {
    return this.af.database.object('users/' + $key).remove();
  }

  editUser($key: string) {
    var editedUser = this.af.database.object('users/' + $key);

  }
}
