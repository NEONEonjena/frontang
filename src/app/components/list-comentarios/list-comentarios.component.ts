import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { Comentario } from 'src/app/interfaces/Comentario';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-list-comentarios',
  templateUrl: './list-comentarios.component.html',
  styleUrls: ['./list-comentarios.component.css']
})
export class ListComentariosComponent implements OnInit {

  listComentarios: Comentario[] = [
    {
      titulo: "Angular",
      creador: "Fernado",
      fechaCreacion: new Date(),
      texto: "Framework para crear SPA"
    },
    {
      titulo: "React",
      creador: "Miguel",
      fechaCreacion: new Date(),
      texto: "Libreria para crear SPA"
    },
  ]
  comentarioService: any;

  constructor(private ComentarioService: ComentarioService) { }

  ngOnInit(): void {
    this.getComentarios();
  }

  getComentarios() {
    this.comentarioService.getListComentarios().suscribe((data: any) => {//se obtienen los datos de la API con la función getListComentarios() y se almacenan en la variable data
      console.log(data);//se imprime en consola los datos obtenidos de la API
    }, (error: any) => {
      console.log(error);//en caso de error se imprime en consola el error
    });
  }
}
