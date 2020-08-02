import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { IntroductionComponent } from './temas/introduction/introduction.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { DirectivasEstructuralesComponent } from './temas/directivas-estructurales/directivas-estructurales.component';
import { PadreComponent } from './temas/padre/padre.component';
import { HijoComponent } from './temas/padre/hijo/hijo.component';
import { PadreServiciosComponent } from './temas/padre-servicios/padre-servicios.component';
import { HijoAComponent } from './temas/padre-servicios/hijo-a/hijo-a.component';
import { HijoBComponent } from './temas/padre-servicios/hijo-b/hijo-b.component';
import { NietoBComponent } from './temas/padre-servicios/hijo-b/nieto-b/nieto-b.component';
import { NietoAComponent } from './temas/padre-servicios/hijo-a/nieto-a/nieto-a.component';
import { VariablesReferenciaComponent } from './temas/variables-referencia/variables-referencia.component';
import { VariablesReferenciaHijoComponent } from './temas/variables-referencia-hijo/variables-referencia-hijo.component';
import { PadreProyeccionComponent } from './temas/padre-proyeccion/padre-proyeccion.component';
import { HijoProyeccionComponent } from './temas/hijo-proyeccion/hijo-proyeccion.component';
import { Hijo2ProyeccionComponent } from './temas/hijo2-proyeccion/hijo2-proyeccion.component';
import { Hijo3ProyeccionComponent } from './temas/hijo3-proyeccion/hijo3-proyeccion.component';
import { ServiciosComponent } from './temas/servicios/servicios.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from 'src/app/services/auth-interceptor.service';
import { ServicioPostComponent } from './temas/servicio-post/servicio-post.component';
import { ServiciosPatchComponent } from './temas/servicios-patch/servicios-patch.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    MenuComponent,
    DirectivasEstructuralesComponent,
    PadreComponent,
    HijoComponent,
    PadreServiciosComponent,
    HijoAComponent,
    HijoBComponent,
    NietoBComponent,
    NietoAComponent,
    VariablesReferenciaComponent,
    VariablesReferenciaHijoComponent,
    PadreProyeccionComponent,
    HijoProyeccionComponent,
    Hijo2ProyeccionComponent,
    Hijo3ProyeccionComponent,
    ServiciosComponent,
    ServicioPostComponent,
    ServiciosPatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ //Acá se configura el servicio de auth-interceptor
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true //Para indicar que podemos utilizar varios interceptores y no uno solo
  }], 
  bootstrap: [AppComponent]
})
export class AppModule { }
