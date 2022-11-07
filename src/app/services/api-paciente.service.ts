import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Paciente } from '../model/paciente';

@Injectable({
  providedIn: 'root'
})
export class ApiPacienteService {

  API_URL:string="http://localhost:8080/paciente";

  dataChange: BehaviorSubject<Paciente[]> = new BehaviorSubject<Paciente[]>([]);
  dialogData:any;

  constructor(private httpClient:HttpClient) { }

  getDialogData() {
    return this.dialogData;
  }

  getAllPacientes():Observable<Paciente[]>{
    let direccion = this.API_URL+"/allPacientes";
    return this.httpClient.get<Paciente[]>(`${direccion}`);
  }

   //este metodo nos sirve para registrar un paciente
   registrarPaciente(paciente:Paciente) : Observable<Object>{
    let direccion = this.API_URL+"/insertar";
    return this.httpClient.post(`${direccion}`,paciente);
  }

  //este metodo sirve para actualizar el paciente
  actualizarPaciente(paciente:Paciente) : Observable<Object>{
    let direccion = this.API_URL+"/update";
    return this.httpClient.put(`${direccion}`,paciente);
  }

  //este metodo sirve para obtener o buscar un paciente
  obtenerPacientePorId(id:number):Observable<Paciente>{
    return this.httpClient.get<Paciente>(`${this.API_URL}/${id}`);
  }

  eliminarPaciente(id:number): Observable<Object>{
    let direccion = this.API_URL+"/paciente";
    return this.httpClient.delete(`${direccion}/${id}`);
  }
}
