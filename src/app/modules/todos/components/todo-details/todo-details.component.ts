import {Component, OnInit} from '@angular/core';
import {ITodo} from "../../models/todo.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  todoDetails: ITodo;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(({todoData}) => {
      console.log(todoData);
      this.todoDetails = todoData
    });
  }

}
