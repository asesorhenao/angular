import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Operation } from 'fast-json-patch';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL = environment.apiURL + 'users/';
  constructor(private http: HttpClient) { }

  getUser(userId: string): Observable<User> { //Se suscribe a un observable para que cuando este emita un valor podamos realizar una acción, en este caso cuándo el HTTP concluya queremos que el observable nos informe de este hecho para hacer algo con la respuesta. Retornameros un observable de user para que automáticamente se mapee el resultado de la petición HTTP en el tipo de dato User 
    const url = this.baseURL + userId;//Construimos la URL sobre la cual se hace la petición, la url con el id del usuario
    return this.http.get<User>(url); //http.get y le pasamos la url
  }

  //Acá creamos un arreglo de usuarios
  // getUsers(): Observable<User[]> {
  //   return this.http.get<User[]>(this.baseURL);
  // }

  //Cabeceras HTTP
  getUsers(): Observable<User[]> {

    //utilizamos la clase HttpHeaders
    // const headers = new HttpHeaders({ //le pasamos un objeto que será un conjunto de campos y valores
    //   'Authorization': 'bearer token',
    //   'X-Pagination': '2'
    // });
    // return this.http.get<User[]>(this.baseURL, {headers});// por ECS6 se puede abreviar si la variable se llama headers en este caso. sino = {headers: headers}); // pasamos el objeto al método get

    //Podemos utilizar una notación diferente para declarar las cabeceras
    //Esta forma permite generar condicionales de modo que se pueden agregar cabeceras bajo algunas circunstancias
    // let headers = new HttpHeaders();
    // // Ejemplo:
    // // if(usuarioLogueado) {
    // //   headers = headers.append('Authorization', 'bearer token2');
    // // }
    // headers = headers.append('Authorization', 'bearer token2');
    // headers = headers.append('X-Pagination', '3');

    // return this.http.get<User[]>(this.baseURL, {headers});

    //Ademas de utilizar cabeceras podemos utilizar QueryStrings la diferencia es que en vez de utilizar HttpHeaders se utiliza HttpParams
    let params = new HttpParams();
    params = params.append('X-Pagination', '4');

    return this.http.get<User[]>(this.baseURL, {params});

  }

  //Leyendo la cabecera y código de estatus de la respuesta HTTP
  getUsersWithHeaders(): Observable<any> {
    return this.http.get(this.baseURL, {observe: 'response'});
  }

  //Se crea el servicio Post
  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseURL, user); //Le pasamos la url del endpoint que recibe los usuario y le pasamos el objeto usuario
  }

  //HTTP PUT, lo malo es que se debe actualizar todo el registro
  actualizarUsuario(usuario: User): Observable<User> {
    const url = this.baseURL + usuario.id;
    return this.http.put<User>(url, usuario);
  }

  //HTTP DELETE
  borrarUsuario(id: number): Observable<any> {
    const url = this.baseURL + id;
    return this.http.delete(url);
  }

  //HTTP PATCH nos permite realizar actualizaciones parciales de un recurso
  patchUser(id: number, operations: Operation[]) {
    const url = this.baseURL + id;
    return this.http.patch(url, operations);
  }
}
