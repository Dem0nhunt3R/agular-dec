import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserResolver} from "./services/resolvers/user.resolver";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {UsersComponent} from "./components/users/users.component";
import {UsersResolver} from "./services/resolvers/users.resolver";
import {UserTodosComponent} from "./components/user-todos/user-todos.component";

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    resolve: {usersData: UsersResolver},
    children: [
      {
        path: ':id',
        component: UserDetailsComponent,
        resolve: {userData: UserResolver}
      },
      {path: ':id/todos', component: UserTodosComponent, pathMatch:'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
