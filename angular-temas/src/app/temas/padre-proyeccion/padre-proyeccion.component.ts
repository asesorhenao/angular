import { Component, OnInit } from '@angular/core';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-padre-proyeccion',
  templateUrl: './padre-proyeccion.component.html',
  styleUrls: ['./padre-proyeccion.component.scss']
})
export class PadreProyeccionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mostrarMensaje() {
    Swal.fire({
      title: 'Mostrar mensaje',
      text: 'Este es un ejemplo del botón',
      icon: 'success',
    });
  }
}
