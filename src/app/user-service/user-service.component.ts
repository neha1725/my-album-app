import { Component, OnInit } from '@angular/core';

import { User } from '../models/users';
import { UserService } from '../service/user-service';
import {HttpClient} from '@angular/common/http';
import { Post } from '../models/posts';

@Component({
  selector: 'app-user-service',
  templateUrl: './user-service.component.html',
  styleUrls: ['./user-service.component.css']
})
export class UserServiceComponent implements OnInit {
  users: User[] = [];
  posts: Post[] = [];
  constructor(private service: UserService, private httpClient : HttpClient) {     
  }
  ngOnInit() {
    this.service.getUsers().subscribe(
      (users: User[]) => {
        console.log('Success! Get Users Successful!');
        this.users = users;
      }
    );
  }
}
