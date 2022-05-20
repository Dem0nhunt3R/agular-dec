import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TodosRoutingModule} from './todos-routing.module';
import {TodosComponent} from './components/todos/todos.component';
import {TodoComponent} from './components/todo/todo.component';
import {TodoDetailsComponent} from './components/todo-details/todo-details.component';
import {HttpClientModule} from "@angular/common/http";
import {TodoService} from "./services/todo.service";
import {TodoResolver} from "./services/resolvers/todo.resolver";
import {TodosResolver} from "./services/resolvers/todos.resolver";


@NgModule({
    declarations: [
        TodosComponent,
        TodoComponent,
        TodoDetailsComponent
    ],
    imports: [
        CommonModule,
        TodosRoutingModule,
        HttpClientModule
    ],
    exports: [
        TodoComponent
    ],
    providers: [
        TodoService,
        TodoResolver,
        TodosResolver
    ]
})
export class TodosModule {
}
