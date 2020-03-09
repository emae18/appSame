import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-legajos',
  templateUrl: './legajos.component.html',
  styleUrls: ['./legajos.component.css']
})
export class LegajosComponent implements OnInit {
  help_tooltip:string;
  options: string[] = ['R6-07 dir prov Same 107', '...', '...'];
  operadores: string[] = ['Daniel', 'Emanuel', 'Andres'];
  //displayedColumns = ['legajo', 'name', 'documento', 'entidadsalud', 'lugartrabajo', 'situacionrevista', 'categoria', 'udopresup', 'fechanacimiento', 'sexo'];
  displayedColumns = ['legajo', 'name', 'documento', 'entidadsalud',
   'lugartrabajo', 'situacionrevista', 'categoria', 'udopresup',
   'fechanacimiento','sexo'];
  dataSource = ELEMENT_DATA;

  constructor() {
    this.help_tooltip = "Para hacer la búsqueda use la siguiente estructura, separadas por comas:"+
      " Apellido , Nombre , DNI , CUIL, N° Legajo"+
      "Si no quiere usar alguno de los campos use el asterisco:\n* , Nombre, DNI, *, *";
  }

  ngOnInit() {
    //this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  legajo: number;
  name: string;
  documento: number;
  entidadsalud: string;
  lugartrabajo: string;
  situacionrevista: string;
  categoria: number;
  udopresup: string;
  fechanacimiento: string;
  sexo: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {legajo:12334, name:"Emanuel Jara", documento:39989456, entidadsalud:"Ninguna",
  lugartrabajo:"R6-07 dir prov Same 107", situacionrevista:"Planta permanente M.Salud",
  categoria:1, udopresup:"6-07", fechanacimiento:"05/12/1996", sexo:'M'},
  {legajo:12334, name:"Emanuel Jara", documento:39989456, entidadsalud:"Ninguna",
  lugartrabajo:"R6-07 dir prov Same 107", situacionrevista:"Planta permanente M.Salud",
  categoria:1, udopresup:"6-07", fechanacimiento:"05/12/1996", sexo:'M'},
  {legajo:12334, name:"Emanuel Jara", documento:39989456, entidadsalud:"Ninguna",
  lugartrabajo:"R6-07 dir prov Same 107", situacionrevista:"Planta permanente M.Salud",
  categoria:1, udopresup:"6-07", fechanacimiento:"05/12/1996", sexo:'M'},
  {legajo:12334, name:"Emanuel Jara", documento:39989456, entidadsalud:"Ninguna",
  lugartrabajo:"R6-07 dir prov Same 107", situacionrevista:"Planta permanente M.Salud",
  categoria:1, udopresup:"6-07", fechanacimiento:"05/12/1996", sexo:'M'},
  {legajo:12334, name:"Emanuel Jara", documento:39989456, entidadsalud:"Ninguna",
  lugartrabajo:"R6-07 dir prov Same 107", situacionrevista:"Planta permanente M.Salud",
  categoria:1, udopresup:"6-07", fechanacimiento:"05/12/1996", sexo:'M'},
  {legajo:12334, name:"Emanuel Jara", documento:39989456, entidadsalud:"Ninguna",
  lugartrabajo:"R6-07 dir prov Same 107", situacionrevista:"Planta permanente M.Salud",
  categoria:1, udopresup:"6-07", fechanacimiento:"05/12/1996", sexo:'M'},
  {legajo:12334, name:"Emanuel Jara", documento:39989456, entidadsalud:"Ninguna",
  lugartrabajo:"R6-07 dir prov Same 107", situacionrevista:"Planta permanente M.Salud",
  categoria:1, udopresup:"6-07", fechanacimiento:"05/12/1996", sexo:'M'},
  {legajo:12334, name:"Emanuel Jara", documento:39989456, entidadsalud:"Ninguna",
  lugartrabajo:"R6-07 dir prov Same 107", situacionrevista:"Planta permanente M.Salud",
  categoria:1, udopresup:"6-07", fechanacimiento:"05/12/1996", sexo:'M'},
  {legajo:12334, name:"Emanuel Jara", documento:39989456, entidadsalud:"Ninguna",
  lugartrabajo:"R6-07 dir prov Same 107", situacionrevista:"Planta permanente M.Salud",
  categoria:1, udopresup:"6-07", fechanacimiento:"05/12/1996", sexo:'M'},

];
