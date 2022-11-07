import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListarPacienteComponent } from './listar-paciente/listar-paciente.component';
import { CrearPacienteComponent } from './crear-paciente/crear-paciente.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { MaterialModule } from './shared/material/material.module';
import { AcompananteComponent } from './component/acompanante/acompanante.component';
import { EditarPacienteComponent } from './editar-paciente/editar-paciente.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarPacienteComponent,
    CrearPacienteComponent,
    HeaderComponent,
    AcompananteComponent,
    EditarPacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MaterialModule,
    HttpClientModule
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
