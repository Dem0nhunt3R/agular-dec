import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./services/user.service";
import {UserResolver} from "./services/resolvers/user.resolver";
import {UsersResolver} from "./services/resolvers/users.resolver";
import {UserTodosComponent} from './components/user-todos/user-todos.component';
import {TodoService} from "../todos/services/todo.service";
import {UserTodoComponent} from './components/user-todo/user-todo.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    UserTodosComponent,
    UserTodoComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  providers:[
    UserService,
    UserResolver,
    UsersResolver,
    TodoService
  ]
})
export class UserModule { }
