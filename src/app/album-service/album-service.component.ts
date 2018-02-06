import { Component, OnInit } from '@angular/core';
import { Post } from '../models/posts';
import { PostService } from '../service/post-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from '../models/albums';
import { AlbumService } from '../service/album-service';

@Component({
  selector: 'app-album-service',
  templateUrl: './album-service.component.html',
  styleUrls: ['./album-service.component.css']
})
export class AlbumServiceComponent implements OnInit {Album: Album[];
  albums: Album[] = [];
  id: number;
  
  constructor(private service: AlbumService, private route: ActivatedRoute,
    private router: Router) {  
  
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.id = +id;
        this.service.getUsersAlbums(this.id).subscribe(
          (albums: Album[]) => {            
            this.albums = albums;           
          }
        );
      }
    });
  }

}
