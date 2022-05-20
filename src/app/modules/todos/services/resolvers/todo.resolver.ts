import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ITodo} from "../../models/todo.interface";
import {TodoService} from "../todo.service";

@Injectable({
  providedIn: 'root'
})
export class TodoResolver implements Resolve<ITodo> {
  constructor(private todoService: TodoService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<ITodo> | Promise<ITodo> | ITodo {
    return this.todoService.getTodo(route.params['id']);
  }


}
