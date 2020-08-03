import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'users/:id/posts', component: PostsComponent},
  // pathMatch: permite configurar la estrategia que determina si una 
  // URL pertenece o no a una ruta, este atributo puede tomar dos valores
  // full y prefix. full: indica que la coincidencia del path debe ser completa
  // para que la ruta sea seleccionada, ejemplo path: 'abc, vas a la barra de direciones y escribes abc (http://localhost:4200/abc) y debe redirigir a usuarios
  // pero si coloca abc/a en consola muestra un mensaje de erro porque no encuenta la ruta.
  // prefix: puede estar de primero o solo en la url y la coincidencia debe ser exitosa
  {path: 'abc', redirectTo:'users', pathMatch: 'full'},

  // Rutas no encontradas, las podemos controlar con un wildcard (**) que es colocar en path: **
  // Podriamos utilizar un componente 404 y hacerlo así
  // {path: '**', component: Pagina404}
  // para el código de abajo puedes colocar el path (http://localhost:4200/abc/a) y se redirige a usuarios, sin mostrar error
  {path: '**', redirectTo:'users', pathMatch: 'full'}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
