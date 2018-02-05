import { Component, OnInit } from '@angular/core';
import { Post } from '../models/posts';
import { PostService } from '../service/post-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from '../models/comments';
import { CommentService } from '../service/comment-service';

@Component({
  selector: 'app-post-service',
  templateUrl: './post-service.component.html',
  styleUrls: ['./post-service.component.css']
})
export class PostServiceComponent implements OnInit {
  comments: Comment[];
  posts: Post[] = [];
  id: number;
  showComment : boolean = false;

  constructor(private service: PostService, private route: ActivatedRoute,
    private router: Router,private commentService: CommentService) {  
  
  }

  ngOnInit() {  
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.id = +id;
        this.service.getUsersPosts(this.id).subscribe(
          (posts: Post[]) => {            
            this.posts = posts;           
          }
        );
      }
    });
  }

  viewComments(postId : number){    
      if (postId) {        
        this.commentService.getPostComments(postId).subscribe(
          (comments: Comment[]) => {            
            this.comments = comments;      
            this.showComment = true;    
            console.log(postId); 
          }
        );
      }
  }

}

