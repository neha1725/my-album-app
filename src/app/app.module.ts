import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {Route, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import  {NgRedux, NgReduxModule} from 'ng2-redux';

import { CommentServiceComponent } from './comment-service/comment-service.component'
import { CommentService } from './service/comment-service';
import { AlbumServiceComponent } from './album-service/album-service.component';
import { AlbumService } from './service/album-service';
import { PhotoServiceComponent } from './photo-service/photo-service.component';
import { PhotoService } from './service/photo-service';
import { PostServiceComponent } from './post-service/post-service.component';
import {HomeComponent} from "./HomeComponent";
import {NotFoundComponent} from "./NotFoundComponent";
import { PostService} from './service/post-service';
import { UserServiceComponent } from './user-service/user-service.component';
import { UserService } from './service/user-service';
import { AppComponent } from './app.component';

import { Post } from './models/posts';

@NgModule({
  declarations: [
    AppComponent,
    UserServiceComponent,
    PostServiceComponent,
    HomeComponent,
    NotFoundComponent,
    CommentServiceComponent,
    AlbumServiceComponent,
    PhotoServiceComponent
  ],
  imports: [
    BrowserModule, HttpModule, HttpClientModule,FormsModule, NgReduxModule,
      RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'users', component: UserServiceComponent },
      { path: 'posts/:id/:name', component: PostServiceComponent },
      { path: 'albums/:id', component: AlbumServiceComponent },
      { path: 'photos/:id/:title', component: PhotoServiceComponent },
      { path: '**', component: NotFoundComponent }   
    ])  
  ],
  providers: [UserService,PostService,CommentService,AlbumService,PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){  
  }
}
