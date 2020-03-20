import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './modules/main/main.component';
import { LoginComponent } from './modules/login/login.component';
import { LegajosComponent } from './modules/legajos/legajos.component';
import { LegajosDosComponent } from './modules/legajos-dos/legajos-dos.component';
import { DatosPersonalesComponent } from './modules/datos-personales/datos-personales.component';


const routes: Routes = [
  // Esto se crea por defecto al crear el proyecto... aunque puedes decir que no
  // path es el nombre que le ponemos a nuestra ruta, y component el component
  // al cual redireccionaremos, pathMatch ni idea para que sirve xd
  // redirectTo creo es obvio xd
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'main', component: MainComponent },
  {path: 'login', component: LoginComponent},
  {path: 'legajos', component: LegajosComponent},
  {path: 'legajosDos', component: LegajosDosComponent},
  {path: 'novedades', component: DatosPersonalesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
