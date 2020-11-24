import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from 'src/app/paginas/home/home.component';
import {MujeresComponent} from 'src/app/paginas/mujeres/mujeres.component';
import {NinosComponent} from 'src/app/paginas/ninos/ninos.component';
import {MujeresPijamasComponent} from 'src/app/paginas/mujeres-pijamas/mujeres-pijamas.component';


const routes: Routes = [
  {path: 'Home', component:HomeComponent},
  {path: 'Mujeres', component:MujeresComponent},
  {path: 'Niñ@s', component:NinosComponent},
  {path: 'pijamasMujeres', component:MujeresPijamasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
