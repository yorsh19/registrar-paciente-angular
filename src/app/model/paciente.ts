import { SexoI } from "./sexo";
import { TipoDocumentoI } from "./tipo-documento";
import { UbigeoI } from "./ubigeo";

export class Paciente{
    id_paciente:number;
    id_tipo_docide:TipoDocumentoI;    
    no_docide:string;
    no_apepat:string;
    no_apemat:string;
    no_nombres:string;
    id_sexo:SexoI;
    fe_nacimiento:Date;
    no_lugar_nacimiento:string;
    no_direccion:string;
    co_ubigeo:UbigeoI;
}