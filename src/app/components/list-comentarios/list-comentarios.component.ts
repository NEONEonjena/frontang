import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/interfaces/Comentario';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-list-comentarios',
  templateUrl: './list-comentarios.component.html',
  styleUrls: ['./list-comentarios.component.css']
})
export class ListComentariosComponent implements OnInit {

  listComentarios: Comentario[] = []
  comentarioService: any;

  constructor(private ComentarioService: ComentarioService) { }

  ngOnInit(): void {
    this.getComentarios();
  }

  getComentarios() {
    this.comentarioService.getListComentarios().suscribe(data=>
      {//se obtienen los datos de la API con la función getListComentarios() y se almacenan en la variable data
        this.listComentarios = data;
      //se imprime en consola los datos obtenidos de la API
      }, error => {
        console.log(error);//en caso de error se imprime en consola el error
      });
    }
  
  eliminarComentario(id: any){
    console.log(id);
    this._comentarioService.deleteComentario(id).suscribe(data =>{
      this.getComentarios();
    }, error => {
      console.log(error);
    });
  }
}
