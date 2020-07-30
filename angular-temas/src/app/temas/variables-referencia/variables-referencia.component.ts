import { Component, OnInit, ViewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { VariablesReferenciaHijoComponent } from '../variables-referencia-hijo/variables-referencia-hijo.component';

@Component({
  selector: 'app-variables-referencia',
  templateUrl: './variables-referencia.component.html',
  styleUrls: ['./variables-referencia.component.scss']
})
export class VariablesReferenciaComponent implements AfterViewInit {
  @ViewChild(VariablesReferenciaHijoComponent)
  componenteHijo: VariablesReferenciaHijoComponent;
  texto: string;
  mensajeDeError: string;

  constructor() { }
  arr = [1, 2, 3];

  @ViewChildren(VariablesReferenciaHijoComponent)
  hijos: QueryList<VariablesReferenciaHijoComponent>;
  
  
  ngAfterViewInit(): void {
    this.hijos.changes.subscribe((componentes: QueryList<VariablesReferenciaHijoComponent>) => {
      componentes.forEach(componente => {

      })
    });
  }

  agregar() {
    this.arr.push(this.arr.length + 1);
  }

  remover() {
    this.arr.pop();
  }

  voltearColor(index: number) {
    if (!index) { return; }
    const componente = this.hijos.toArray()[index];
    componente.voltearColor();
  }

  voltearColores() {
    this.hijos.forEach((componente: VariablesReferenciaHijoComponent) => {
      componente.voltearColor();
    });
  }
  
  enviarMensaje() {
    if(!this.texto) {
      this.mensajeDeError = 'Debe escribir un mensaje primero';
    } else {
      this.mensajeDeError = '';
      this.componenteHijo.editarMensaje(this.texto);
    }
  }

}
