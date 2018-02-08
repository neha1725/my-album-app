import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

import { Post } from '../models/posts';
import { Comment } from '@angular/compiler';
import { post } from 'selenium-webdriver/http';


@Injectable()
export class PostService {

    private apiUrl = 'http://jsonplaceholder.typicode.com/posts';
    private posts: Post[] = [];
    id: number = 0;
    constructor(private http: Http) { }

    getUsersPosts(id: number): Observable<Post[]> {
        return this.http
            .get(`${this.apiUrl}/?userId=${id}`)
            .map((response: Response) => response.json())
    }

    addPost(id: number, postTitle: string, postMessage: string): Observable<Post> {
        return this.http
            .post('https://jsonplaceholder.typicode.com/posts', {
                userId: id,
                title: postTitle,
                body: postMessage
            }).map((response: Response) => response.json())
    }
}

