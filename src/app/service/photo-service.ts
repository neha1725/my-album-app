import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { Photo } from '../models/photos';


@Injectable()
export class PhotoService {

    private apiUrl = 'https://jsonplaceholder.typicode.com/photos';
    private photos: Photo[] = [];

    constructor(private http: Http) { }

    getAlbumPhotos(id: number): Observable<Photo[]> {
        return this.http
            .get(`${this.apiUrl}/?albumId=${id}`)
            .map((response: Response) => response.json())
    }
}
