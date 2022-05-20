import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodosComponent} from "./components/todos/todos.component";
import {TodosResolver} from "./services/resolvers/todos.resolver";
import {TodoDetailsComponent} from "./components/todo-details/todo-details.component";
import {TodoResolver} from "./services/resolvers/todo.resolver";

const routes: Routes = [
  {
    path: '', component: TodosComponent, resolve: {todosData: TodosResolver}, children: [
      {path: ':id', component: TodoDetailsComponent, resolve: {todoData: TodoResolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule {
}