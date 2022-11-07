import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SexoI } from 'src/app/model/sexo';
import { TipoDocumentoI } from 'src/app/model/tipo-documento';
import { ApiGeneralService } from 'src/app/services/api-general.service';

@Component({
  selector: 'app-acompanante',
  templateUrl: './acompanante.component.html',
  styleUrls: ['./acompanante.component.css']
})
export class AcompananteComponent implements OnInit {

  
  tipoDocs: TipoDocumentoI[] = [];
  sexos: SexoI[] = [];

  constructor(public httpClient: HttpClient, private api: ApiGeneralService) { }

  ngOnInit(): void {
    this.loadTipoDoc();
    this.loadSexo();
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

}
