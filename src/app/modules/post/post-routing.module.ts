import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from "./components/posts/posts.component";
import {PostDetailsComponent} from "./components/post-details/post-details.component";
import {PostService} from "./services/post.service";

const routes: Routes = [
  {
    path: '', component: PostsComponent, children: [
      {path: ':id', component: PostDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[PostService]
})
export class PostRoutingModule {
}
