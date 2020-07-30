import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroductionComponent } from './temas/introduction/introduction.component';
import { DirectivasEstructuralesComponent } from './temas/directivas-estructurales/directivas-estructurales.component';
import { PadreComponent } from './temas/padre/padre.component';
import { PadreServiciosComponent } from './temas/padre-servicios/padre-servicios.component';
import { VariablesReferenciaComponent } from './temas/variables-referencia/variables-referencia.component';

const routes: Routes = [
  {path: '', component: IntroductionComponent},
  {path: 'directivas-estructurales', component: DirectivasEstructuralesComponent},
  {path: 'padre', component: PadreComponent},
  {path: 'comunicacion-servicios', component: PadreServiciosComponent},
  {path: 'variables-referencia', component: VariablesReferenciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
