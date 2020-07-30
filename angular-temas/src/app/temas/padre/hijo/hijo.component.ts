import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() 
  textoHijo: string;

  //Con Getters y Setters
  private _textoHijogs: string;
  @Input()
  set textoHijogs(value: string) {
    value = value || '';
    this._textoHijogs = value.toLocaleUpperCase();
  }

  get textoHijogs() {return this._textoHijogs}

  //Comunicación de hijo a padre
  @Input() 
  hp: boolean;

  @Output()
  enviar: EventEmitter<string> = new EventEmitter<string>();
  textoHp: string;

  btnEnviar() {
    this.enviar.emit(this.textoHp);
  }
}
