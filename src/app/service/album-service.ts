import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

import { Album } from '../models/albums';

@Injectable()
export class AlbumService {

    private apiUrl = 'https://jsonplaceholder.typicode.com/albums';
    private albums: Album[] = [];

    constructor(private http: Http) { }

    getUsersAlbums(id: number): Observable<Album[]> {
        return this.http
            .get(`${this.apiUrl}/?userId=${id}`)
            .map((response: Response) => response.json())
    }
}
