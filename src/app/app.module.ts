import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { UserServiceComponent } from './user-service/user-service.component';
import { UserService } from './service/user-service';
import {Route, RouterModule} from '@angular/router';
import { PostServiceComponent } from './post-service/post-service.component';
import {HomeComponent} from "./HomeComponent";
import {NotFoundComponent} from "./NotFoundComponent";
import { PostService } from './service/post-service';
import {HttpClientModule} from '@angular/common/http';
import { CommentServiceComponent } from './comment-service/comment-service.component'
import { CommentService } from './service/comment-service';


@NgModule({
  declarations: [
    AppComponent,
    UserServiceComponent,
    PostServiceComponent,
    HomeComponent,
    NotFoundComponent,
    CommentServiceComponent
  ],
  imports: [
    BrowserModule, HttpModule, HttpClientModule, RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'users', component: UserServiceComponent },
      { path: 'posts/:id', component: PostServiceComponent },
      { path: '**', component: NotFoundComponent }   
    ])  
  ],
  providers: [UserService,PostService,CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
