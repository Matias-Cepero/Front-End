import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { InformacionComponent } from './componentes/informacion/informacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import {HttpClientModule} from '@angular/common/http';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HomeComponent } from './index/home/home.component';
import { LoginPageComponent } from './login/login-page/login-page.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InformacionComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    ProyectosComponent,
    HomeComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
