import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {path: 'users', loadChildren: () => import('./modules/user/user.module').then(value => value.UserModule)},
      {path: 'posts', loadChildren: () => import('./modules/index').then(value => value.PostModule)},
      {path: 'comments', loadChildren: () => import('./modules/index').then(value => value.CommentModule)},
      {path: 'about', loadChildren: () => import('./modules/index').then(value => value.AboutModule)}
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
