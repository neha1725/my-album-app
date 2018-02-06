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
import { AlbumServiceComponent } from './album-service/album-service.component';
import { AlbumService } from './service/album-service';
import { PhotoServiceComponent } from './photo-service/photo-service.component';
import { PhotoService } from './service/photo-service';



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
    BrowserModule, HttpModule, HttpClientModule, RouterModule.forRoot([
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
export class AppModule { }
