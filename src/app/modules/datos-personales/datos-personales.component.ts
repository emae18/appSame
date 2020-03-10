import { Component, OnInit } from '@angular/core';

//  {{hijo.nombre}},{{hijo.escolaridad.primaria}},{{hijo.escolaridad.secundaria}},{{hijo.cuil}}
@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})

export class DatosPersonalesComponent implements OnInit {

  hijos: Hijo[] = [
      {
        tipo:"",
        nombre:"",
        apellido:"",
        cuil:0,
        fechadenacimiento:"",
        nacionalidad:"",
        edad:0
      },
  ];
  familiares: Hijo[] =[
    {
      tipo:"Padre",
      nombre:"",
      apellido:"",
      cuil:0,
      fechadenacimiento:"",
      nacionalidad:"",
      edad:0
    },
    {
      tipo:"Madre",
      nombre:"",
      apellido:"",
      cuil:0,
      fechadenacimiento:"",
      nacionalidad:"",
      edad:0
    },
    {
      tipo:"Conyuge",
      nombre:"",
      apellido:"",
      cuil:0,
      fechadenacimiento:"",
      nacionalidad:"",
      edad:0
    }
  ];

  help_tooltip:string;
  options: string[] = ['R6-07 dir prov Same 107', '...', '...'];
  operadores: string[] = ['Daniel', 'Emanuel', 'Andres'];
  displayedColumns = ['legajo', 'apellido', 'nombre', 'cuil',
   'situacionrevista', 'categoria'];
  dataSource = ELEMENT_DATA;

  constructor() {
    this.help_tooltip = "Para hacer la búsqueda use la siguiente estructura, separadas por comas:"+
      " Apellido , Nombre , DNI , CUIL, N° Legajo"+
      "Si no quiere usar alguno de los campos use el asterisco:\n* , Nombre, DNI, *, *";
  }

  ngOnInit() {
    //this.dataSource.paginator = this.paginator;
  }

  hijo_nuevo: Hijo;

  agregarHijo()
  {
    this.hijo_nuevo = {
      tipo:"",
      nombre:"",
      apellido:"",
      cuil:0,
      fechadenacimiento:"",
      nacionalidad:"",
      edad:0
    };
    this.hijos.push(this.hijo_nuevo);
  }
  removeHijo(e){
    console.log(e);
   this.hijos.forEach( (item, index) => {
     if(item === e) this.hijos.splice(index,1);
   });
  }
}

export interface escolaridad{
  primaria:Boolean;
  secundaria:Boolean;
  terciario_unv:Boolean;
}

export interface Hijo{
  tipo:string;
  nombre:string;
  apellido:string;
  cuil:number;
  fechadenacimiento:string;
  nacionalidad:string;
  edad:number;
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
];
