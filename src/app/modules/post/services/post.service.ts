import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../models/post.interface";
import {urls} from "../../../constants/urls";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(urls.posts);
  };

  getPost(id: number): Observable<IPost> {
    return this.http.get<IPost>(`${urls.posts}/${id}`);
  }
}
