import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiPacienteService } from '../services/api-paciente.service';
import { Paciente } from '../model/paciente';
import { HttpClient } from '@angular/common/http';
import { MatSort } from '@angular/material/sort';
import Swal from 'sweetalert2';
import { EditarPacienteComponent } from '../editar-paciente/editar-paciente.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-listar-paciente',
  templateUrl: './listar-paciente.component.html',
  styleUrls: ['./listar-paciente.component.css']
})
export class ListarPacienteComponent implements OnInit {

  title: string = "Paciente";
  pacientes: Paciente[] = [];
  exampleDatabase: ApiPacienteService | null;
  index: number;
  id: number;

  constructor(public httpClient: HttpClient, private api: ApiPacienteService, private router: Router, public dialog: MatDialog,) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('filter', { static: true }) filter: ElementRef;

  ngOnInit() {
    this.obtenerPacientes();
  }

  refresh() {
    this.obtenerPacientes();
  }

  displayedColumns: string[] = ['id_paciente', 'no_nombres', 'no_apepat', 'no_apemat', 'id_tipo_docide', 'no_docide', 'fe_nacimiento', 'estado', 'actions'];
  dataSource = new MatTableDataSource<Paciente>(null);

  public obtenerPacientes() {
    this.api.getAllPacientes().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource<Paciente>(data); //pass the array you want in the table
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      //console.log(data);
      return data
    })
  }

  actualizarPaciente(id: number) {
    this.router.navigate(['actualizar-paciente', id]);
  }

  eliminarPaciente(id: number) {
    /*Swal.fire({
      nombres: '¿Estas seguro?',
      text: "Confirma si deseas eliminar al paciente",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
    }).then((result) => {
      if (result.value) {
        this.api.eliminarPaciente(id).subscribe(dato => {
          console.log(dato);
          this.obtenerPacientes();
          Swal.fire(
            'Paciente eliminado',
            'El paciente ha sido eliminado con exito',
            'success'
          )
        })
      }
    })*/
  }


  verDetallesDelEmpleado(id: number) {
    this.router.navigate(['listar-paciente', id]);
    console.log("id_paciente: ",id);
  }

  /*
  startEdit(i: number, id: number, nombres: string, no_apepat: string, no_apemat: string, id_tipo_docide: string, no_docide: string) {
    this.id = id;
    console.log("id_paciente: ",id);
    // index row is used just for debugging proposes and can be removed
    this.index = i;
    console.log("index: ",this.index);
    const dialogRef = this.dialog.open(EditarPacienteComponent, {
      data: {id_paciente: id, no_nombres: nombres, no_apepat: no_apepat, no_apemat: no_apemat, id_tipo_docide: id_tipo_docide, no_docide: no_docide}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // When using an edit things are little different, firstly we find record inside DataService by id
        const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id_paciente === this.id);
        // Then you update that record using data from dialogData (values you enetered)
        this.exampleDatabase.dataChange.value[foundIndex] = this.api.getDialogData();
        // And lastly refresh table
        this.refreshTable();
      }
    });
  }*/

  private refreshTable() {
    // Refreshing table using paginator
    // Thanks yeager-j for tips
    // https://github.com/marinantonio/angular-mat-table-crud/issues/12
    this.paginator._changePageSize(this.paginator.pageSize);
  }

}
