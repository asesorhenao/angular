import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from 'src/app/comunicacion.service';

@Component({
  selector: 'app-nieto-a',
  templateUrl: './nieto-a.component.html',
  styleUrls: ['./nieto-a.component.scss']
})
export class NietoAComponent implements OnInit {
  mensaje: string;
  constructor(private servicioComunicacion: ComunicacionService) { }

  ngOnInit(): void {
    this.servicioComunicacion.enviarMensajeObservable.subscribe(mensaje => {
      this.mensaje = mensaje;
    });
  }
  cambioTexto(mensaje: string) {
    this.servicioComunicacion.enviarMensaje(mensaje);
  }
}
