import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ITodo} from "../../models/todo.interface";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: ITodo[];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(({todosData}) => this.todos = todosData)
  }

}
