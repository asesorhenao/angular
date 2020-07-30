import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

  constructor() { }

  mensaje: string; //contendrá el texto de los text areas
  private enviarMensajeSubject = new Subject<string>(); //permite enviar mensajes a multiples observadores, la idea es que varios componentes se pueden suscribir a este subject, recibiran dicho mensaje
  enviarMensajeObservable = this.enviarMensajeSubject.asObservable();//Es una variable auxiliar que simplifica la sintaxis para que los componentes se puedan susbribir al subject

  enviarMensaje(mensaje: string) { // envia un mensaje a todos los componentes que se suscribieron al subject
    this.mensaje = mensaje;
    this.enviarMensajeSubject.next(mensaje);
  }
}
