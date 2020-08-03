import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { Router } from '@angular/router';
import { WebApiService } from 'src/app/services/web-api.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: Users[];
  constructor(
    private router: Router,
    private webApiService: WebApiService  
    ) { }

  ngOnInit(): void {
    this.webApiService
      .getUsers()
      .subscribe(
        (usuariosDelApi: Users[]) => 
          this.users = usuariosDelApi,
          error => console.error(error)
      );
  }
  viewPosts(idUser: number) {
    this.router.navigate(["/users", idUser, 'posts']);
  }
}
