import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PrimerServicioService {
  fireAlert(mensaje: string) {
    Swal.fire({
      title: 'Primer Servicio',
      text: mensaje,
      icon: "success"
    });
  }
}
