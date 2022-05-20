import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from "./components/posts/posts.component";
import {PostResolver} from "./services/resolvers/post.resolver";
import {PostDetailsComponent} from "./components/post-details/post-details.component";
import {PostsResolver} from "./services/resolvers/posts.resolver";

const routes: Routes = [
  {path:'', component:PostsComponent, resolve:{postsData:PostsResolver},children:[
      {path:':id', component:PostDetailsComponent,resolve:{postData:PostResolver}}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
