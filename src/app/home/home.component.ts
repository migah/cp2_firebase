import { Component, OnInit } from '@angular/core';
import {User} from "../users/user";
import {Observable} from "rxjs";
import {UserService} from "../users/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'cp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  toolbarTitle = 'CP2';
  users: Observable<User[]>;

  constructor(private userService : UserService, private router : Router) {
  }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  deleteUser($key: string) {
    this.userService.deleteUser($key);
  }

  editUser($key: string){
    this.router.navigate(['/edit-user/' + $key]);

  }

}
