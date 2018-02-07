import { Component, OnInit, ViewChild } from '@angular/core';
import { Post } from '../models/posts';
import { PostService } from '../service/post-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from '../models/comments';
import { CommentService } from '../service/comment-service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-post-service',
  templateUrl: './post-service.component.html',
  styleUrls: ['./post-service.component.css']
})
export class PostServiceComponent implements OnInit {
  comments: Comment[];
  posts: Post[] = [];
  id: number;
  showComment: boolean = false;
  name: string;
  @ViewChild('f') newPost: NgForm;

  constructor(private service: PostService, private route: ActivatedRoute,
    private router: Router, private commentService: CommentService) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.name = params.get('name');
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

  viewComments(postId: number) {
    if (postId) {
      this.commentService.getPostComments(postId).subscribe(
        (comments: Comment[]) => {
          this.comments = comments;
          this.showComment = true;         
        }
      );
    }
  }

  onSavePost() {    
    debugger;
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id ) {
        this.id = +id;
        this.service.addPost(this.id, this.newPost.value.postTitle, this.newPost.value.postMessage).subscribe(
          (posts: Post) => {
            this.posts.push(posts);           
          }
        );
      }
    });
  }
}

