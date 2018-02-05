import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

import { Comment } from '../models/comments';


@Injectable()
export class CommentService {

    private apiUrl = 'https://jsonplaceholder.typicode.com/comments';
    private comments: Comment[] = [];

    constructor(private http: Http) { }

    getPostComments(id: number): Observable<Comment[]> {
        return this.http
            .get(`${this.apiUrl}/?postId=${id}`)
            .map((response: Response) => response.json())
    }
}
