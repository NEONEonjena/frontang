import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Builder } from 'protractor';
import { Comentario } from 'src/app/interfaces/Comentario';

@Component({
  selector: 'app-agregar-editar-comentario',
  templateUrl: './agregar-editar-comentario.component.html',
  styleUrls: ['./agregar-editar-comentario.component.css']
})
export class AgregarEditarComentarioComponent implements OnInit {
  agregarComentario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.agregarComentario = this.fb.group({
      titulo: ['', Validators.required,],
      creador: ['', Validators.required,],
      texto: ['', Validators.required,]

    });
  }

  ngOnInit(): void {
  }
  agregar(){
    console.log(this.agregarComentario);//se imprime el formulario en consola

    const comentario: Comentario ={
      titulo: this.agregarComentario.get('titulo')?.value,//se agregar el ? para que no de error cuando se compila porque el compilador no sabe si el valor es nulo
      creador: this.agregarComentario.get('creador')?.value,
      texto: this.agregarComentario.get('texto')?.value,
      fechaCreacion: new Date
    }

    console.log(comentario); //se imprime el comentario en consola
  }

}
