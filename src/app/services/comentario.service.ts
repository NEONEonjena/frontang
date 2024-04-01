import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  private myAppUrl = 'https://localhost:44313/'; //en este método se accede a la url de la API, dependiendo de la cantidad de servicios se debe de crear una variable por cada servicio, o se puede manejar desde enviroments.ts al igual que la url de la API
  private myApiUrl = 'api/comentario/';

  constructor(private http: HttpClient) { }//este constructor se utiliza para poder utilizar los métodos de la clase HttpClient

  getListComentarios(): Observable<any> {
    //en este método se utiliza observable para poder obtener los datos de la API
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }
  deleteComentario(id: number): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + id);
  }
}
