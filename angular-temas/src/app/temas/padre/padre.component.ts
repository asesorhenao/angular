import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss']
})
export class PadreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  textoPadre: string;
  textoPadregs: string;
  textoPadreHp: string;
  recibirMensaje(mensaje: string) {
    this.textoPadreHp = mensaje;
  }
}
