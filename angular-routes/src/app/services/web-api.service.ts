import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Users } from '../models/users';
import { Posts } from '../models/posts';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {
  baseURLUsers = environment.apiURL + 'users/';
  baseURLPosts = environment.apiURL + 'posts/';
  constructor(private http: HttpClient) { }

  getUsers():Observable<Users[]> {
    return this.http.get<Users[]>(this.baseURLUsers);
  }

  getPosts():Observable<Posts[]> {
    return this.http.get<Posts[]>(this.baseURLPosts);
  }

  getPostsForUser(id: string):Observable<Posts[]> {
    const url = `${this.baseURLPosts}?userId=${id}`;
    return this.http.get<Posts[]>(url);
  }

}
