import { Component, OnInit } from '@angular/core';
import { PrimerServicioService } from '../../services/primer-servicio.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {
  notFound: boolean = false;
  user: User;
  //Para la lista de usuarios
  users: User[];
  constructor(private primerServicio: PrimerServicioService,
              private userService: UserService) { }

  ngOnInit(): void {
    //Cargamos el listado de usuarios
    this.userService.getUsers().subscribe((usersFromAPI: User[]) => {
      this.users = usersFromAPI;
    }, error => console.error(error));

    //Acá se coloca el códugo para leer cabecera y código de estatus
    this.userService.getUsersWithHeaders().subscribe((response: any) => {
      console.log(response);
      this.users = response.body;
    }, error => console.error(error));
  }
  
  handleClick() {
    this.primerServicio.fireAlert('Hizo bien el clic');
  }

  getUser(userId: string) {
    this.notFound = false;
    this.user = null;

    this.userService.getUser(userId).subscribe((userFromTheAPI: User) => { //Es con el subscribe que nos subscribimos al observable del servicio, es fundamental porque sino el observable no se ejecuta
      this.user = userFromTheAPI;
    }, (err: any) => {
      console.error(err);
      this.notFound = true;
    }); 
  }
}
