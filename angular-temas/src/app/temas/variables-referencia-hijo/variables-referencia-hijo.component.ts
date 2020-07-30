import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-variables-referencia-hijo',
  templateUrl: './variables-referencia-hijo.component.html',
  styleUrls: ['./variables-referencia-hijo.component.scss']
})
export class VariablesReferenciaHijoComponent implements OnInit {
  @Input()
  isViewChildren: boolean;
  
  
  colorCheck: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  mensaje: string;
  editarMensaje(mensaje: string) {
    this.mensaje = mensaje;
  }

  voltearColor() {
    this.colorCheck = !this.colorCheck;
  }
}
