import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//importamos ReactiveForm
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReporteIncidenciaPageRoutingModule } from './reporte-incidencia-routing.module';

import { ReporteIncidenciaPage } from './reporte-incidencia.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ReporteIncidenciaPageRoutingModule
  ],
  declarations: [ReporteIncidenciaPage]
})
export class ReporteIncidenciaPageModule {}
