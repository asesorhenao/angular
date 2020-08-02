import { Component, OnInit } from '@angular/core';
import { compare } from 'fast-json-patch'; //permite generar el arreglo de operaciones a partir de las ediciones que hemos hecho en un modelo
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-servicios-patch',
  templateUrl: './servicios-patch.component.html',
  styleUrls: ['./servicios-patch.component.scss']
})
export class ServiciosPatchComponent implements OnInit {
  users: User[]; //Es el listado de usuarios
  model: User; //Es el usuario que está siendo editado
  originalUser: User; // es el usuario seleccionado sin ninguna modificación
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    //Cargamos el listado de ususarios
    this.userService.getUsers().subscribe((usersFromAPI: User[]) => {
      this.users = usersFromAPI;
      this.model = Object.assign({}, this.users[0]);//En el model colocamos el primer ususario, y assign lo utilizamos para clonar el objeto
    });
  }

  selectUsuario(user: User) {
    this.model = Object.assign({}, user);
    this.originalUser = user;
  }

  onSubmit() {
    const patch = compare(this.originalUser, this.model); //Primero utilizamos la funcion compare para generar nuestro listado de operaciones, primero pasamos el ususario original y luego el usuario con las modificaciones que se han realizado
    this.userService.patchUser(this.model.id, patch)
    .subscribe((response) => {
      console.log(response);
      Swal.fire({
        text: 'El usuario se modificó',
        icon: 'success'
      });
      
    });
    
  }

}
