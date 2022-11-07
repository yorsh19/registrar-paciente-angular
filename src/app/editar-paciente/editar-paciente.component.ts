import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from '../model/paciente';
import { SexoI } from '../model/sexo';
import { TipoDocumentoI } from '../model/tipo-documento';
import { UbigeoI } from '../model/ubigeo';
import { ApiGeneralService } from '../services/api-general.service';
import { ApiPacienteService } from '../services/api-paciente.service';

@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.css']
})
export class EditarPacienteComponent implements OnInit {
  
  title:string="Pacientes";
  tipoDocs: TipoDocumentoI[] = [];
  id_tipo_documento_identidad: TipoDocumentoI;
  sexos: SexoI[] = [];
  ubigeo: UbigeoI[];
  id:number;

  edad: Date;
  mostrarEdad: number;

  paciente: Paciente = new Paciente();

  constructor(public httpClient: HttpClient, private api: ApiGeneralService, private apiPaciente: ApiPacienteService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.loadTipoDoc();
    this.loadSexo();
    this.loadUbigeo();
    this.id = this.route.snapshot.params['id'];
    this.apiPaciente.obtenerPacientePorId(this.id).subscribe(dato =>{
      this.paciente = dato;
    },error => console.log(error));
  }

  guardarPaciente() {
    this.paciente.id_tipo_docide = this.id_tipo_documento_identidad;
    this.apiPaciente.registrarPaciente(this.paciente).subscribe(dato => {
      console.log(dato);
      this.irALaListaDePacientes();
    }, error => console.log(error));
  }

  irALaListaDePacientes() {
    this.router.navigate(['/listar-paciente']);
    //swal.fire('Empleado registrado',`El empleado ${this.paciente.no_nombres} ha sido registrado con exito`,`success`);
  }

  onSubmit() {
    this.apiPaciente.actualizarPaciente(this.paciente).subscribe(dato => {
      this.irALaListaDePacientes();
      console.log(this.paciente);
    },error => console.log(error));
    console.log(this.paciente);
  }

  public loadTipoDoc() {
    this.api.getAllTipoDoc().subscribe((data: any) => {
      this.tipoDocs = data;
    })
  }
  public loadSexo() {
    this.api.getAllSexo().subscribe((data: any) => {
      this.sexos = data;
    })
  }
  public loadUbigeo() {
    this.api.getUbigeo().subscribe((data: any) => {
      this.ubigeo = data;
    })
  }

  edadCalculator() {
    const convertedad = new Date(this.edad);
    const timeDiff = Math.abs(Date.now() - convertedad.getTime());
    this.mostrarEdad = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
    console.log(this.mostrarEdad);
  }

  onChangeEvent(event: any) {
    console.log(event.target.value);
    this.edadCalculator();
  }

  btnCancelar(){
    this.router.navigate(['/listar-paciente']);
  }

}
