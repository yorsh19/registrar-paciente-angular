import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPacienteComponent } from './crear-paciente/crear-paciente.component';
import { EditarPacienteComponent } from './editar-paciente/editar-paciente.component';
import { ListarPacienteComponent } from './listar-paciente/listar-paciente.component';

const routes: Routes = [
  {path:'', redirectTo: 'listar-paciente', pathMatch: 'full'},
  {path:'listar-paciente', component:ListarPacienteComponent},
  {path:'registrar-paciente', component:CrearPacienteComponent},
  {path:'actualizar-paciente/:id', component:EditarPacienteComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
