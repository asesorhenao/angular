import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from 'src/app/comunicacion.service';

@Component({
  selector: 'app-nieto-b',
  templateUrl: './nieto-b.component.html',
  styleUrls: ['./nieto-b.component.scss']
})
export class NietoBComponent implements OnInit {
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
