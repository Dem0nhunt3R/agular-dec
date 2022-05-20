import {Component, Input, OnInit} from '@angular/core';
import {ITodo} from "../../../todos/models/todo.interface";

@Component({
  selector: 'app-user-todo',
  templateUrl: './user-todo.component.html',
  styleUrls: ['./user-todo.component.css']
})
export class UserTodoComponent implements OnInit {

  @Input()
  todo: ITodo;

  constructor() {
  }

  ngOnInit(): void {
  }

}
