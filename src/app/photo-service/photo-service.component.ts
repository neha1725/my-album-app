import { Component, OnInit } from '@angular/core';
import { Post } from '../models/posts';
import { PostService } from '../service/post-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo } from '../models/photos';
import { PhotoService } from '../service/photo-service';

@Component({
  selector: 'app-photo-service',
  templateUrl: './photo-service.component.html',
  styleUrls: ['./photo-service.component.css']
})
export class PhotoServiceComponent implements OnInit {
  photos: Photo[];
  id: number;
  title: string;

  constructor(private service: PhotoService, private route: ActivatedRoute,
    private router: Router) {  
  
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.title = params.get('title');
      if (id) {
        this.id = +id;
        this.service.getAlbumPhotos(this.id).subscribe(
          (photos: Photo[]) => {            
            this.photos = photos;           
          }
        );
      }
    });
  }

}
