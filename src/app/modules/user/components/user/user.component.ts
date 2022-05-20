import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../models";
import {ActivatedRoute, Router} from "@angular/router";
import {ITodo} from "../../../todos/models/todo.interface";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: IUser;

  todos: ITodo[];

  constructor(private route: ActivatedRoute, private router: Router) {

  }


  ngOnInit(): void {

  }

  getDetails(id: number) {
    this.router.navigate([id], {relativeTo: this.route, state: this.user});
  }


  getTodos(id: number) {
      this.router.navigate([id+'/todos'], {relativeTo: this.route});
  }
}
