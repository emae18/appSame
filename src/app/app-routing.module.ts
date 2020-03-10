import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './modules/main/main.component';
import { LoginComponent } from './modules/login/login.component';
import { LegajosComponent } from './modules/legajos/legajos.component';
import { LegajosDosComponent } from './modules/legajos-dos/legajos-dos.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'main', component: MainComponent },
  {path: 'login', component: LoginComponent},
  {path: 'legajos', component: LegajosComponent},
  {path: 'legajosDos', component: LegajosDosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
