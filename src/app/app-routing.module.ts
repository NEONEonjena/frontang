import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComentariosComponent } from './components/list-comentarios/list-comentarios.component';//esto es para importar el componente
import { AgregarEditarComentarioComponent } from './components/agregar-editar-comentario/agregar-editar-comentario.component';
import { VerComentarioComponent } from './components/ver-comentario/ver-comentario.component';

const routes: Routes = [
  { path: '', component: ListComentariosComponent },//esta es la ruta por defecto
  { path: 'agregar', component: AgregarEditarComentarioComponent },
  { path: 'editar/:id', component: AgregarEditarComentarioComponent},
  {path: 'ver/:id', component: VerComentarioComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }//esta ruta siempre debe ir al final, pathmathc full es para que redireccione a la ruta por defecto, una alternativa a pathmatch full es pathmatch prefix y se usa para que redireccione a la ruta por defecto si no encuentra la ruta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
