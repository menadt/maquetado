import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { BarraComponent } from './components/header/barra/barra.component';
import { BannerComponent } from './components/header/banner/banner.component';
import { ImgProfileComponent } from './components/acerca-de/img-profile/img-profile.component';
import { TituloComponent } from './components/acerca-de/titulo/titulo.component';
import { TrabajoComponent } from './components/experiencia/trabajo/trabajo.component';
import { HabilidadComponent } from './components/habilidades/habilidad/habilidad.component';
import { ProyectoComponent } from './components/proyectos/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarreraComponent } from './components/educacion/carrera/carrera.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    BarraComponent,
    BannerComponent,
    ImgProfileComponent,
    TituloComponent,
    TrabajoComponent,
    HabilidadComponent,
    ProyectoComponent,
    FooterComponent,
    CarreraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
