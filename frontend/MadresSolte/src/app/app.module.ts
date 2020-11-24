import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componente/footer/footer.component';
import { HeadComponent } from 'src/app/componente/head/head.component';
import { HomeComponent  } from 'src/app/paginas/home/home.component';
import { MujeresComponent } from 'src/app/paginas/mujeres/mujeres.component';
import { NinosComponent } from 'src/app/paginas/ninos/ninos.component';
import { MujeresPijamasComponent } from 'src/app/paginas/mujeres-pijamas/mujeres-pijamas.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeadComponent,
    HomeComponent,
    MujeresComponent,
    NinosComponent,
    MujeresPijamasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
