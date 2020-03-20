import { Component, OnInit } from '@angular/core';
import { Legajo } from '../../models/legajo.model';
@Component({
  selector: 'app-legajos-dos',
  templateUrl: './legajos-dos.component.html',
  styleUrls: ['./legajos-dos.component.css']
})
export class LegajosDosComponent implements OnInit {
  fields: string [] = ['reparticion',
  'ejercicio', 'legajo', 'apellido', 'nombre',
    'categoria', 'situacionDeRevista', 'lugarDeTrabajo',
    'operadorDeCarga', 'desde', 'hasta'
];
  options: string[] = ['R6-07 dir prov Same 107', '...', '...'];
  operadores: string[] = ['Daniel', 'Emanuel', 'Andres'];
  displayedColumns = ['legajo', 'apellido', 'nombre', 'cuil',
   'situacionrevista', 'udeo', 'categoria', 'lugartrabajo',
   'fechaingreso', 'estado', 'funcion', 'agrupamiento'];
  dataSource = ELEMENT_DATA;

  constructor() {
  }

  ngOnInit() {
  }
}
const  ELEMENT_DATA: Legajo[] = [{ legajo: 34360445,
  apellido: ' Chauque ', nombre: ' Daniel ', cuil: 23343604459,
   situacionrevista: 'CONTRAT.SERVI.', udeo: ' R6-07 ' ,
   categoria: '3 (C-4)', lugartrabajo: 'SAME CENTRAL', fechaingreso: '01/01/2014',
    estado: 'ACTIVO', funcion: 'Operador', agrupamiento: 'Operadores' }];
// const ELEMENT_DATA: Legajo[] = [
//   { legajo:34360445, apellido:"Chauque", nombre:"Daniel", cuil:23343604459,
//   situacionrevista:"CONTRAT.SERVI.", udeo:"R6-07",
//   categoria:"3 (C-4)", lugartrabajo:"SAME CENTRAL", fechaingreso:"01/01/2014",
//    estado:"ACTIVO", funcion:"Operador", agrupamiento:"Operadores" },
//    { legajo:34360445, apellido:"Chauque", nombre:"Daniel", cuil:23343604459,
//    situacionrevista:"PLANTA PERMANENTE", udeo:"R6-07",
//    categoria:"3 (C-4)", lugartrabajo:"BASE HUMAHUACA", fechaingreso:"01/01/2005",
//     estado:"INACTIVO", funcion:"Operador", agrupamiento:"Operadores" },
//     { legajo:34360445, apellido:"Chauque", nombre:"Daniel", cuil:23343604459,
//     situacionrevista:"PLANTA PERMANENTE", udeo:"R6-07",
//     categoria:"3 (C-4)", lugartrabajo:"BASE HUMAHUACA", fechaingreso:"01/01/2005",
//      estado:"INACTIVO", funcion:"Operador", agrupamiento:"Operadores" },
//      { legajo:34360445, apellido:"Chauque", nombre:"Daniel", cuil:23343604459,
//      situacionrevista:"PLANTA PERMANENTE", udeo:"R6-07",
//      categoria:"3 (C-4)", lugartrabajo:"BASE HUMAHUACA", fechaingreso:"01/01/2005",
//       estado:"INACTIVO", funcion:"Operador", agrupamiento:"Operadores" },
//       { legajo:34360445, apellido:"Chauque", nombre:"Daniel", cuil:23343604459,
//       situacionrevista:"PLANTA PERMANENTE", udeo:"R6-07",
//       categoria:"3 (C-4)", lugartrabajo:"BASE HUMAHUACA", fechaingreso:"01/01/2005",
//        estado:"INACTIVO", funcion:"Operador", agrupamiento:"Operadores" },
//        { legajo:34360445, apellido:"Chauque", nombre:"Daniel", cuil:23343604459,
//        situacionrevista:"PLANTA PERMANENTE", udeo:"R6-07",
//        categoria:"3 (C-4)", lugartrabajo:"BASE HUMAHUACA", fechaingreso:"01/01/2005",
//         estado:"INACTIVO", funcion:"Operador", agrupamiento:"Operadores" },
//         { legajo:34360445, apellido:"Chauque", nombre:"Daniel", cuil:23343604459,
//         situacionrevista:"PLANTA PERMANENTE", udeo:"R6-07",
//         categoria:"3 (C-4)", lugartrabajo:"BASE HUMAHUACA", fechaingreso:"01/01/2005",
//          estado:"INACTIVO", funcion:"Operador", agrupamiento:"Operadores" },
//          { legajo:34360445, apellido:"Chauque", nombre:"Daniel", cuil:23343604459,
//          situacionrevista:"PLANTA PERMANENTE", udeo:"R6-07",
//          categoria:"3 (C-4)", lugartrabajo:"BASE HUMAHUACA", fechaingreso:"01/01/2005",
//           estado:"INACTIVO", funcion:"Operador", agrupamiento:"Operadores" },
//           { legajo:34360445, apellido:"Chauque", nombre:"Daniel", cuil:23343604459,
//           situacionrevista:"PLANTA PERMANENTE", udeo:"R6-07",
//           categoria:"3 (C-4)", lugartrabajo:"BASE HUMAHUACA", fechaingreso:"01/01/2005",
//            estado:"INACTIVO", funcion:"Operador", agrupamiento:"Operadores" },
//            { legajo:34360445, apellido:"Chauque", nombre:"Daniel", cuil:23343604459,
//            situacionrevista:"PLANTA PERMANENTE", udeo:"R6-07",
//            categoria:"3 (C-4)", lugartrabajo:"BASE HUMAHUACA", fechaingreso:"01/01/2005",
//             estado:"INACTIVO", funcion:"Operador", agrupamiento:"Operadores" },
// ];
