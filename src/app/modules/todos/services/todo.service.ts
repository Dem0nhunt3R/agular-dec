import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ITodo} from "../models/todo.interface";
import {urls} from "../../../constants/urls";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {
  }

  getTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(urls.todos);
  };

  getTodo(id: number): Observable<ITodo> {
    return this.http.get<ITodo>(urls.todos + '/' + id);
  }
}
