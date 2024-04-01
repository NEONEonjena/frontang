import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  private myAppurl = 'https://localhost:44357/'; //en este método se accede a la url de la API, dependiendo de la cantidad de servicios se debe de crear una variable por cada servicio, o se puede manejar desde enviroments.ts al igual que la url de la API
  private myApiurl = 'api/comentario/';

  constructor(private http: HttpClient) { }

  getListComentarios(): Observable<any> {
  //en este método se utiliza observable para poder obtener los datos de la API
        return this.http.get(this.myAppurl + this.myApiurl);
      }
  deleteComentario(id: number): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + id);
  }
}
