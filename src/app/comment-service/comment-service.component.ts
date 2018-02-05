import { Component, OnInit } from '@angular/core';
import { CommentService } from '../service/comment-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from '../models/comments';

@Component({
  selector: 'app-comment-service',
  templateUrl: './comment-service.component.html',
  styleUrls: ['./comment-service.component.css']
})
export class CommentServiceComponent implements OnInit {
  comments: Comment[] = [];
  id: number;
  constructor(private service: CommentService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.id = +id;
        this.service.getPostComments(this.id).subscribe(
          (comments: Comment[]) => {            
            this.comments = comments;           
          }
        );
      }
    });
  }

}
