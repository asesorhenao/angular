import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroductionComponent } from './temas/introduction/introduction.component';
import { DirectivasEstructuralesComponent } from './temas/directivas-estructurales/directivas-estructurales.component';
import { PadreComponent } from './temas/padre/padre.component';
import { PadreServiciosComponent } from './temas/padre-servicios/padre-servicios.component';
import { VariablesReferenciaComponent } from './temas/variables-referencia/variables-referencia.component';
import { PadreProyeccionComponent } from './temas/padre-proyeccion/padre-proyeccion.component';
import { ServiciosComponent } from './temas/servicios/servicios.component';

const routes: Routes = [
  {path: '', component: IntroductionComponent},
  {path: 'directivas-estructurales', component: DirectivasEstructuralesComponent},
  {path: 'padre', component: PadreComponent},
  {path: 'comunicacion-servicios', component: PadreServiciosComponent},
  {path: 'variables-referencia', component: VariablesReferenciaComponent},
  {path: 'proyeccion-componentes', component: PadreProyeccionComponent},
  {path: 'servicios', component: ServiciosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
