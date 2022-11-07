import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { Router } from '@angular/router';
import { Paciente } from '../model/paciente';
import { SexoI } from '../model/sexo';
import { TipoDocumentoI } from '../model/tipo-documento';
import { UbigeoI } from '../model/ubigeo';
import { ApiGeneralService } from '../services/api-general.service';
import { ApiPacienteService } from '../services/api-paciente.service';
//import swal from 'sweetalert2';

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrls: ['./crear-paciente.component.css']
})
export class CrearPacienteComponent implements OnInit {

  tipoDocs: TipoDocumentoI[] = [];
  id_tipo_documento_identidad: TipoDocumentoI;
  sexos: SexoI[] = [];
  ubigeo: UbigeoI[];

  edad: Date;
  mostrarEdad: number;

  paciente: Paciente = new Paciente();

  constructor(public httpClient: HttpClient, private api: ApiGeneralService, private apiPaciente: ApiPacienteService, private router: Router) { }

  ngOnInit(): void {
    this.loadTipoDoc();
    this.loadSexo();
    this.loadUbigeo();
  }

  guardarPaciente() {
    this.prueba();
    this.apiPaciente.registrarPaciente(this.paciente).subscribe(dato => {
      console.log(dato);
      this.irALaListaDePacientes();
    }, error => console.log(error));
  }
/*
  @ViewChild('id_tipo_docide') matSelect: MatSelect;
  //Reference Variable //variable Name //Type

  ngAfterViewInit() {
    this.matSelect.valueChange.subscribe(value => {
      console.log(value);
    });
  }*/

  prueba() {
    this.paciente.id_tipo_docide = this.id_tipo_documento_identidad;
    console.log(this.paciente.id_tipo_docide);
    console.log(this.paciente);
  }


  irALaListaDePacientes() {
    this.router.navigate(['/listar-paciente']);
    //swal.fire('Empleado registrado',`El empleado ${this.paciente.no_nombres} ha sido registrado con exito`,`success`);
  }

  onSubmit() {
    this.guardarPaciente();
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
