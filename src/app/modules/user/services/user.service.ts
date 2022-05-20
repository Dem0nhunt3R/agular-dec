import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../models";
import {urls} from "../../../constants/urls";
import {IUserTodos} from "../models/user-todos.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(urls.users);
  }

  getUser(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${urls.users}/${id}`);
  }

  getUserTodos(id: number): Observable<IUserTodos[]> {
    return this.http.get<IUserTodos[]>(urls.users +'/'+ id + '/todos');
  }
}
