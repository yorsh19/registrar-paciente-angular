import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Paciente } from '../model/paciente';
import { ParentescoI } from '../model/parentesco';
import { SexoI } from '../model/sexo';
import { TipoDocumentoI } from '../model/tipo-documento';
import { UbigeoI } from '../model/ubigeo';

@Injectable({
  providedIn: 'root'
})
export class ApiGeneralService {

  API_URL:string="http://localhost:8080/general";

  dataTipoDoc: BehaviorSubject<TipoDocumentoI[]> = new BehaviorSubject<TipoDocumentoI[]>([]);
  dataSexo: BehaviorSubject<SexoI[]> = new BehaviorSubject<SexoI[]>([]);
  dataParentesco: BehaviorSubject<ParentescoI[]> = new BehaviorSubject<ParentescoI[]>([]);
  dataUbigeo: BehaviorSubject<UbigeoI[]> = new BehaviorSubject<UbigeoI[]>([]);

  constructor(private httpClient:HttpClient) { }

  getAllTipoDoc():Observable<TipoDocumentoI[]>{
    let direccion = this.API_URL+"/listOfTipoDocumento";
    return this.httpClient.get<TipoDocumentoI[]>(direccion);
  }

  getAllSexo():Observable<SexoI[]>{
    let direccion = this.API_URL+"/listOfSexo";
    return this.httpClient.get<SexoI[]>(direccion);
  }

  getParentesco():Observable<ParentescoI[]>{
    let direccion = this.API_URL+"/listOfParentesco";
    return this.httpClient.get<ParentescoI[]>(direccion);
  }

  getUbigeo():Observable<UbigeoI[]>{
    let direccion = this.API_URL+"/listOfUbigeo";
    return this.httpClient.get<UbigeoI[]>(direccion);
  }
  
}
