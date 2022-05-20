import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', loadChildren: () => import('./modules/home/home.module').then(value => value.HomeModule)},
      {path: 'users', loadChildren: () => import('./modules/user/user.module').then(value => value.UserModule)},
      {path: 'posts', loadChildren: () => import('./modules/post/post.module').then(value => value.PostModule)},
      {
        path: 'comments',
        loadChildren: () => import('./modules/comment/comment.module').then(value => value.CommentModule)
      },
      {path: 'todos', loadChildren: () => import('./modules/todos/todos.module').then(value => value.TodosModule)}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}