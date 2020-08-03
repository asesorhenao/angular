import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/models/posts';
import { Router, ActivatedRoute } from '@angular/router';
import { WebApiService } from 'src/app/services/web-api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Posts[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private webApiService: WebApiService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if(params.has('id')) {
        this.webApiService
          .getPostsForUser(params.get('id'))
          .subscribe(
            posts => this.posts = posts
          );
      } else {
        this.webApiService
          .getPosts()
          .subscribe(
            (posts: Posts[]) => {
              this.posts = posts
            }
          );
      }
    });
  }

  goBackUsers() {
    this.router.navigate(['/users']);
  }

}
