import { Component, OnInit, ModuleWithComponentFactories } from '@angular/core';
import { FunctionCall, NgModuleResolver } from '@angular/compiler';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  constructor() { }
  imageURL: string ;
  estaCheckeado: boolean = false;
  tamanoCheck: boolean = false;
  colorCheck: boolean = false;
  colorCheck2: boolean = false;
  anchoAltura: number = 100;
  texto: string;
  ngOnInit(): void {
    //this.imageURL = (<HTMLInputElement>document.getElementById('selectImage')).value;
  }

  direccion:string = 'Dirección vivienda';
  persona = {
    nombre: 'Alexander',
    apellido: 'Henao'
  }

  duplicarTexto(valor: string): string {
    return valor + ' ' + valor;
  }
  //Binding
  changeImage(event) {
    this.imageURL=event.target.value;
  }
  cantidad:number = 0;
  incrementar() {
    this.cantidad ++;
  }
  textoEscrito:string;
  onTextboxInput(event) {
    this.textoEscrito = event.target.value;
  }

  hacerMayuscula() {
    this.texto = this.texto.toUpperCase();
  }
  hacerMinuscula() {
    this.texto = this.texto.toLowerCase();
  }
}

