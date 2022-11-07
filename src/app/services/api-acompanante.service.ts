import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AcompananteI } from '../model/acompanante';

@Injectable({
  providedIn: 'root'
})
export class ApiAcompananteService {

  API_URL:string="http://localhost:8080/acompanante";

  dataChange: BehaviorSubject<AcompananteI[]> = new BehaviorSubject<AcompananteI[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  toasterService: any;

  constructor(private httpClient:HttpClient) { }

  get data(): AcompananteI[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  getAllAcompananteIs():Observable<AcompananteI[]>{
    let direccion = this.API_URL+"/allAcompanantes";
    return this.httpClient.get<AcompananteI[]>(direccion);
  }

  // ADD, POST METHOD
  addItem(AcompananteI: AcompananteI): void {
    this.httpClient.post(this.API_URL, AcompananteI).subscribe(data => {
      this.dialogData = AcompananteI;
      this.toasterService.showToaster('Successfully added', 3000);
      },
      (err: HttpErrorResponse) => {
      this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
    });
   }
}
