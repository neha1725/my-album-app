import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/users';


@Injectable()
export class UserService {

    private apiUrl = 'http://jsonplaceholder.typicode.com/users';
    private users: User[] = [];

    constructor(private http: Http) { }

    getUsers(): Observable<User[]> {
        return this.http
            .get(this.apiUrl)
            .map((response: Response) => response.json())

    }

}