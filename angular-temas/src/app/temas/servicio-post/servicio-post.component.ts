import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-servicio-post',
  templateUrl: './servicio-post.component.html',
  styleUrls: ['./servicio-post.component.scss']
})
export class ServicioPostComponent implements OnInit {
  model: User = {id: 0, name: '', username: ''};
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.model);
    this.userService.createUser(this.model).subscribe((response: User) => {
      console.log(response);
      Swal.fire({
        title: 'Crear Usuario',
        text: 'El usuario se creó correctamente',
        icon: 'success'
      });
    });
  }

}
