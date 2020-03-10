import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-legajos-dos',
  templateUrl: './legajos-dos.component.html',
  styleUrls: ['./legajos-dos.component.css']
})
export class LegajosDosComponent implements OnInit {
  help_tooltip:string;
  options: string[] = ['R6-07 dir prov Same 107', '...', '...'];
  operadores: string[] = ['Daniel', 'Emanuel', 'Andres'];
  //displayedColumns = ['legajo', 'name', 'documento', 'entidadsalud', 'lugartrabajo', 'situacionrevista', 'categoria', 'udopresup', 'fechanacimiento', 'sexo'];
  displayedColumns = ['legajo', 'apellido', 'nombre', 'cuil',
   'situacionrevista', 'udeo', 'categoria', 'lugartrabajo',
   'fechaingreso', 'estado', 'funcion', 'agrupamiento'];
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

export interface Legajos {
  legajo:number;
  apellido:string;
  nombre:string;
  cuil:number;
  situacionrevista:string;
  udeo:string;
  categoria:string;
  lugartrabajo:string;
  fechaingreso:string;
  estado:string;
  funcion:string;
  agrupamiento:string;
}

const ELEMENT_DATA: Legajos[] = [
  { legajo:34360445, apellido:"Chauque", nombre:"Daniel", cuil:23343604459,
  situacionrevista:"CONTRAT.SERVI.", udeo:"R6-07",
  categoria:"3 (C-4)", lugartrabajo:"SAME CENTRAL", fechaingreso:"01/01/2014",
   estado:"ACTIVO", funcion:"Operador", agrupamiento:"Operadores" },
   { legajo:34360445, apellido:"Chauque", nombre:"Daniel", cuil:23343604459,
   situacionrevista:"PLANTA PERMANENTE", udeo:"R6-07",
   categoria:"3 (C-4)", lugartrabajo:"BASE HUMAHUACA", fechaingreso:"01/01/2005",
    estado:"INACTIVO", funcion:"Operador", agrupamiento:"Operadores" },
    { legajo:34360445, apellido:"Chauque", nombre:"Daniel", cuil:23343604459,
    situacionrevista:"PLANTA PERMANENTE", udeo:"R6-07",
    categoria:"3 (C-4)", lugartrabajo:"BASE HUMAHUACA", fechaingreso:"01/01/2005",
     estado:"INACTIVO", funcion:"Operador", agrupamiento:"Operadores" },
     { legajo:34360445, apellido:"Chauque", nombre:"Daniel", cuil:23343604459,
     situacionrevista:"PLANTA PERMANENTE", udeo:"R6-07",
     categoria:"3 (C-4)", lugartrabajo:"BASE HUMAHUACA", fechaingreso:"01/01/2005",
      estado:"INACTIVO", funcion:"Operador", agrupamiento:"Operadores" },
      { legajo:34360445, apellido:"Chauque", nombre:"Daniel", cuil:23343604459,
      situacionrevista:"PLANTA PERMANENTE", udeo:"R6-07",
      categoria:"3 (C-4)", lugartrabajo:"BASE HUMAHUACA", fechaingreso:"01/01/2005",
       estado:"INACTIVO", funcion:"Operador", agrupamiento:"Operadores" },
       { legajo:34360445, apellido:"Chauque", nombre:"Daniel", cuil:23343604459,
       situacionrevista:"PLANTA PERMANENTE", udeo:"R6-07",
       categoria:"3 (C-4)", lugartrabajo:"BASE HUMAHUACA", fechaingreso:"01/01/2005",
        estado:"INACTIVO", funcion:"Operador", agrupamiento:"Operadores" },
        { legajo:34360445, apellido:"Chauque", nombre:"Daniel", cuil:23343604459,
        situacionrevista:"PLANTA PERMANENTE", udeo:"R6-07",
        categoria:"3 (C-4)", lugartrabajo:"BASE HUMAHUACA", fechaingreso:"01/01/2005",
         estado:"INACTIVO", funcion:"Operador", agrupamiento:"Operadores" },
         { legajo:34360445, apellido:"Chauque", nombre:"Daniel", cuil:23343604459,
         situacionrevista:"PLANTA PERMANENTE", udeo:"R6-07",
         categoria:"3 (C-4)", lugartrabajo:"BASE HUMAHUACA", fechaingreso:"01/01/2005",
          estado:"INACTIVO", funcion:"Operador", agrupamiento:"Operadores" },
          { legajo:34360445, apellido:"Chauque", nombre:"Daniel", cuil:23343604459,
          situacionrevista:"PLANTA PERMANENTE", udeo:"R6-07",
          categoria:"3 (C-4)", lugartrabajo:"BASE HUMAHUACA", fechaingreso:"01/01/2005",
           estado:"INACTIVO", funcion:"Operador", agrupamiento:"Operadores" },
           { legajo:34360445, apellido:"Chauque", nombre:"Daniel", cuil:23343604459,
           situacionrevista:"PLANTA PERMANENTE", udeo:"R6-07",
           categoria:"3 (C-4)", lugartrabajo:"BASE HUMAHUACA", fechaingreso:"01/01/2005",
            estado:"INACTIVO", funcion:"Operador", agrupamiento:"Operadores" },
];
