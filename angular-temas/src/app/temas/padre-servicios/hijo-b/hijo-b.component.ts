import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from 'src/app/comunicacion.service';

@Component({
  selector: 'app-hijo-b',
  templateUrl: './hijo-b.component.html',
  styleUrls: ['./hijo-b.component.scss']
})
export class HijoBComponent implements OnInit {
  mensaje: string;
  constructor(public serviceComunication: ComunicacionService) { }

  ngOnInit(): void {
  }
  recibirCambios() {
    this.mensaje = this.serviceComunication.mensaje;
  }
}
